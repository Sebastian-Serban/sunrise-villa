"""Build the client preview site (dist/) from the port design canvas snapshot (canvas/).
See README.md."""
import re, shutil, os
HERE=os.path.dirname(os.path.abspath(__file__))
P=os.path.join(HERE,'canvas')+'/'; OUT=os.path.join(HERE,'dist')+'/'
U=I=os.path.join(HERE,'img')+'/'
blobs={'a8b914fd9b691d29c587b5929b021f58':(U+'logo.svg',),
'3b3c71979f22d4c0f6a9d54ce1fd8c9a':(U+'hero.jpg',),'3b4b838366f966502c301d327d79688e':(U+'villa-pool.jpg',),
'2dbf486155fc13aead8f3ce16e89c8b4':(U+'room-double.jpg',),'f3e3e3981cc3a8e71f2f15896e205e85':(U+'room-twin.jpg',),
'0afe0efc6f72911e4efb1e7cc4ae625a':(U+'room-triple.jpg',),'94c4d2bfdfbe0e21bdcc1a4a578c382a':(U+'dining.jpg',),
'27b576c50b8eb10dee2b599e999aa163':(U+'courtyard.jpg',),'565716455e7562b91c6def86a1c09298':(U+'gazebo.jpg',),
'3fe0d0e5af172772757a1ad2b63dbb3f':(U+'buffet.jpg',),'76e437cabe834475437cf267ce996d4a':(U+'home-away.jpg',),
'5869a84555ead8552f31ee918f330620':(U+'president.jpg',),'ea3a446c4dca574d4b52b0beb388ebd7':(U+'apollo.jpg',),
'9022c0b1ab999aa2e394287ab988f795':(U+'nymphaea.jpg',),'c96fc1ead4a23386bdb02e4dd2f94ed7':(U+'oradea.jpg',),
'35c5c8306bb53228c0873399aa0d7ae5':(U+'lake.jpg',),'584ffb18102979b47cb9bdbaf31a3ba6':(U+'cetatea.jpg',),
'62fe3cc8133e0a81f8022c272bbd9e50':(U+'felix.jpg',),'afa2ecec019a49d65429437dae128e9f':(I+'double-attic.jpg',),
'2bddbc47c155018a28b7f7876c7cb808':(I+'double-hall.jpg',),'d6593b8d2880a3a01d48a59895dc15b4':(I+'twin-desk.jpg',),
'd3630f2731331178e96041db2bdbbb3c':(I+'twin-bath.jpg',),'f1e17911b4b9906c4ccbabda2cbf1763':(I+'triple-attic.jpg',),
'd14b2031e4103d8892d46e0283abe3c0':(I+'triple-desk.jpg',),'8834a955be9153ac3464e307c54bbc90':(I+'drone.jpg',),
'00a9f9cb6e768b993c9c2ddeb91bc556':(I+'facade.jpg',),'e61e23341699db55c66a73694af0edca':(I+'pool-gazebo.jpg',),
'f5bcfacc12a41937c4cc9e4709abd416':(I+'lounge.jpg',),'f32f36b1f7f801146a0422f3aae67ae2':(I+'terrace.jpg',),
'aa7537ceb075bc72f993f5f284e48456':(I+'summer-kitchen.jpg',),'7deaa328e48c7fea75acbbb9d74966f7':(I+'staircase.jpg',),
'd3b99a0e6091bdb5fb9114fc1204f5ce':(I+'lawn.jpg',),'8b633b248a1f158bc3b3105e939452a1':(I+'grill.jpg',),
'09ac9e608bf2554f108b8cbe0e356da5':(I+'villa.jpg',)}
used=set()
def body(f):
    s=open(P+f).read()
    a=s.index('<x-dc>')+6; b=s.index('</x-dc>')
    inner=s[a:b]
    inner=re.sub(r'<helmet>.*?</helmet>','',inner,flags=re.S)
    def rb(m):
        src=blobs[m.group(1)]; used.add(m.group(1)); return 'img/'+os.path.basename(src[0])
    inner=re.sub(r'/_blob/([0-9a-f]{32})',rb,inner)
    return inner
LINK={'Acasă':'index.html','Camere':'camere.html','Galerie':'galerie.html','Contact':'contact.html',
'Politica de confidențialitate':'confidentialitate.html','politica de confidențialitate':'confidentialitate.html',
'Vezi camerele':'camere.html','Detalii cameră':'camere.html','Vezi galeria':'galerie.html','Descoperă mai mult':'camere.html',
'Înapoi acasă':'index.html','Rezervă acum':'https://www.booking.com/Share-49dqhZ','Rezervare acum':'https://www.booking.com/Share-49dqhZ','Rezervă pe Booking.com':'https://www.booking.com/Share-49dqhZ',
'+40 771 734 907':'tel:+40771734907','contact@sunrisevilla-felix.com':'mailto:contact@sunrisevilla-felix.com','ANPC':'https://anpc.ro',
'Scrie-ne un mesaj':'https://wa.me/40771734907','Toate drepturile':'#'}
ARIA={'Sunrise Villa, acasă':'index.html','Sună-ne':'tel:+40771734907','WhatsApp':'https://wa.me/40771734907',
'Trimite email':'mailto:contact@sunrisevilla-felix.com','Facebook':'https://www.facebook.com/p/SunriseVilla-100057196700621',
'Instagram':'https://www.instagram.com/sunrisevilla','TikTok':'https://www.tiktok.com/@sunrise.villa6'}
def links(s):
    def fa(m):
        tag,text=m.group(0),m.group(2)
        al=re.search(r'aria-label="([^"]+)"',m.group(1))
        href=None
        if al and al.group(1) in ARIA: href=ARIA[al.group(1)]
        t=re.sub(r'<[^>]+>','',text).strip()
        if href is None:
            if t in LINK: href=LINK[t]
            elif t.startswith('Întreabă de camera'): href='contact.html'
        if href is None: return tag
        return tag.replace('href="#"',f'href="{href}"',1)
    return re.sub(r'<a href="#"([^>]*)>(.*?)</a>',fa,s,flags=re.S)
def phone(f):
    s=body(f)
    for h in ['tel:+40771734907','https://wa.me/40771734907','mailto:contact@sunrisevilla-felix.com']:
        s=s.replace('<a href="#" style="display:flex;gap:14px;align-items:center;border:1px solid #5A534D',f'<a href="{h}" style="display:flex;gap:14px;align-items:center;border:1px solid #5A534D',1)
    s=s.replace('width:390px;position:relative','width:100%;position:relative',1)
    s=s.replace('position:absolute;right:10px;top:738px','position:fixed;right:10px;bottom:16px')
    return links(s)
def desk(f):
    s=body(f).replace('class="ring"','class="ring-d"')
    s=s.replace('position:absolute;right:20px;top:640px','position:fixed;right:20px;bottom:24px')
    return links(s)

def scrollerize(s):
    g='<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(480px,1fr));gap:40px">'
    sc='<div class="scroller" style="display:grid;grid-auto-flow:column;grid-auto-columns:calc(50% - 20px);gap:40px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding:12px 0">'
    s=s.replace(g,sc)
    return s
def pair(img,alt,title,text,btn):
    b='\n          <a href="camere.html" class="btn">Detalii cameră</a>' if btn else ''
    m='0 0 18px' if btn else '0'
    return f'''
      <article class="pair">
        <img src="img/{img}" alt="{alt}" style="width:60%;height:340px;object-fit:cover;border-radius:16px;display:block;flex:none">
        <div style="width:48%;margin-left:-8%;position:relative;background:#E8E1D7;border-radius:16px;padding:28px 26px;box-sizing:border-box;box-shadow:0 8px 24px rgba(45,41,38,.12)">
          <h3 style="margin:0 0 8px;font-size:26px;line-height:1.2;font-weight:700">{title}</h3>
          <p style="margin:{m};font-size:16px">{text}</p>{b}
        </div>
      </article>'''
def rev(text,name):
    return f'''
        <blockquote style="margin:0;background:#E8E1D7;color:#2F2F2D;border-radius:16px;padding:32px 28px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:14px"><div style="color:#8B5E3C;letter-spacing:3px">★★★★★</div><p style="margin:0;font-size:16px">„{text}”</p><span style="width:40px;height:40px;border-radius:50%;background:#C2926D;color:#2D2926;font-weight:700;display:flex;align-items:center;justify-content:center;margin-top:auto">{name[0].upper()}</span><cite style="font-style:normal;font-weight:700;font-size:15px">{name}</cite></blockquote>'''
def home_desk(s):
    s=scrollerize(s)
    k='Perfectă pentru prieteni sau colegi care călătoresc împreună.</p>'
    i=s.index('</article>',s.index(k))+len('</article>')
    s=s[:i]+pair('room-triple.jpg','Cameră triplă','Cameră triplă','Un pat matrimonial și unul de o persoană, aceleași dotări complete. Potrivită pentru familii mici sau trei prieteni.',True)+s[i:]
    s=re.sub(r'\s*<p style="margin:10px 0 0;text-align:center;font-size:14px;color:#5E5852">Următoarea în carusel: Cameră triplă</p>','',s)
    k='<article class="pair">\n        <img src="img/courtyard.jpg"'
    i=s.index(k)
    s=s[:i]+pair('dining.jpg','Sala de mese','Sala de mese','Savurează micul dejun sau o cafea proaspătă într-un ambient spațios și ordonat.',False).strip()+'\n      '+s[i:]
    k='este inima distracției în serile de vară.</p>'
    i=s.index('</article>',s.index(k))+len('</article>')
    s=s[:i]+pair('buffet.jpg','Colțul cu bufet','Bufet','Am pregătit un colț special echipat cu espressor, cuptor cu microunde și prăjitor de pâine.',False)+s[i:]
    g='<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px">\n        <blockquote'
    s=s.replace(g,'<div class="scroller" style="display:grid;grid-auto-flow:column;grid-auto-columns:calc((100% - 48px) / 3);gap:24px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none">\n        <blockquote')
    k='O pensiune construită și mobilată cu gust.”</p>'
    i=s.index('</blockquote>',s.index(k))+len('</blockquote>')
    s=s[:i]+rev('Gazde prietenoase, vila este în stare impecabilă și nivelul de curățenie este foarte, foarte ridicat.','Paul Iancu')+rev('Locul acesta seamănă cu o vilă la țară, dar se află la doar 7 minute de băile termale.','tuzik2010')+rev('O cazare de nota 20! Camerele mari, frumoase, spațioase, confortabile și foarte curate.','Alexandra Madalina Popa')+s[i:]
    # spaces dots: 4 items, 2 visible -> 3 positions (already 3)
    return s
def dots(s):
    return s.replace('aria-hidden="true"><span style="width:2','class="dots" aria-hidden="true"><span style="width:2').replace('aria-hidden="true"><span style="width:8','class="dots" aria-hidden="true"><span style="width:8')

CSS='''<style>
/* Port of the current Sunrise Villa look: espresso, tan, sand; system font. Phone markup below 900px, desktop above. */
body{margin:0;background:#F5F5F5}
a{color:#8B5E3C}a:hover{color:#6E4A2F}
*{min-width:0}
button{cursor:pointer}
.v-d{display:none}
@media (min-width:900px){.v-m{display:none}.v-d{display:block}}
.swipe{display:flex;gap:14px;overflow-x:auto;scroll-snap-type:x mandatory;padding:4px 24px 8px;scrollbar-width:none}
.swipe::-webkit-scrollbar,.scroller::-webkit-scrollbar{display:none}
.swipe>*{flex:0 0 80%;scroll-snap-align:center}
.scroller>*{scroll-snap-align:start}
.ring{box-shadow:0 0 0 6px rgba(194,146,109,.28),0 0 0 12px rgba(194,146,109,.12)}
.ring-d{box-shadow:0 0 0 8px rgba(194,146,109,.28),0 0 0 16px rgba(194,146,109,.12)}
.btn{background:#C2926D;color:#2D2926;text-decoration:none;font-weight:600;font-size:15px;border-radius:4px;height:44px;padding:0 22px;display:inline-flex;align-items:center;justify-content:center}
.btn:hover{background:#B07F5B;color:#2D2926}
.pair{display:flex;align-items:center;min-width:0}
a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:3px solid #8B5E3C;outline-offset:2px}
#menu{position:fixed;inset:0;z-index:50;display:none}
#menu.open{display:block}
#menu .bg{position:absolute;inset:0;background:rgba(20,17,15,.5)}
#menu nav{position:absolute;top:0;right:0;bottom:0;width:min(300px,82vw);background:#2D2926;padding:20px 24px;display:flex;flex-direction:column;gap:6px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif}
#menu nav a{color:#E8E1D7;text-decoration:none;font-size:20px;font-weight:600;padding:12px 0;border-bottom:1px solid #4A443F}
#menu nav a.cta{margin-top:18px;border:0;background:#C2926D;color:#2D2926;text-align:center;border-radius:4px;font-size:16px}
#menu .x{align-self:flex-end;width:44px;height:44px;border:0;background:transparent;color:#E8E1D7;font-size:28px;line-height:1}
#viewer{position:fixed;inset:0;z-index:60;background:#14110F;color:#E8E1D7;display:none;flex-direction:column;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif}
#viewer.open{display:flex}
#viewer .top{display:flex;justify-content:space-between;align-items:center;padding:10px 12px 10px 20px;font-size:15px;color:#CFC7BC}
#viewer .stage{flex:1;min-height:0;display:flex;align-items:center;justify-content:center;position:relative;padding:0 8px}
#viewer .stage img{max-width:100%;max-height:100%;object-fit:contain;border-radius:4px}
#viewer .nav{position:absolute;top:50%;margin-top:-24px;width:48px;height:48px;border:0;border-radius:50%;background:#C2926D;color:#2D2926;font-size:22px;font-weight:700}
#viewer .prev{left:12px}#viewer .next{right:12px}
#viewer .close{width:44px;height:44px;border:0;border-radius:50%;background:rgba(232,225,215,.14);color:#E8E1D7;font-size:24px}
#viewer .cap{padding:12px 20px 24px;text-align:center}
.note{position:fixed;left:50%;bottom:20px;transform:translateX(-50%);background:#2D2926;color:#E8E1D7;padding:12px 18px;border-radius:8px;z-index:70;font:15px/1.4 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:90vw;display:none}
</style>'''
def page(name,title,pf,df,hd=False):
    m=phone(pf); d=desk(df)
    if hd: d=home_desk(d)
    m=dots(m); d=dots(d)
    html=f'''<!DOCTYPE html>
<html lang="ro">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
{CSS}
</head>
<body>
<div class="v-m">{m}</div>
<div class="v-d">{d}</div>
<div id="menu" aria-hidden="true"><div class="bg"></div><nav aria-label="Meniu"><button class="x" aria-label="Închide meniul">×</button><a href="index.html">Acasă</a><a href="camere.html">Camere</a><a href="galerie.html">Galerie</a><a href="contact.html">Contact</a><a class="cta" href="https://www.booking.com/Share-49dqhZ">Rezervă acum</a></nav></div>
<div id="viewer" role="dialog" aria-modal="true" aria-label="Vizualizare fotografie"><div class="top"><span class="count"></span><button class="close" aria-label="Închide">×</button></div><div class="stage"><img alt=""><button class="nav prev" aria-label="Fotografia anterioară">‹</button><button class="nav next" aria-label="Fotografia următoare">›</button></div><div class="cap"></div></div>
<div class="note" role="status"></div>
<script>{JS}</script>
</body>
</html>'''
    open(OUT+name,'w').write(html)

os.makedirs(OUT+'img',exist_ok=True)
JS=open(os.path.join(HERE,'site.js')).read()
page('index.html','Sunrise Villa ★★★ · Băile Felix','Main.dc.html','Home-desktop.dc.html',True)
page('camere.html','Camere · Sunrise Villa','Rooms-phone.dc.html','Rooms-desktop.dc.html')
page('galerie.html','Galerie foto · Sunrise Villa','Gallery-phone.dc.html','Gallery-desktop.dc.html')
page('contact.html','Contact · Sunrise Villa','Contact-phone.dc.html','Contact-desktop.dc.html')
page('confidentialitate.html','Confidențialitate · Sunrise Villa','Privacy-phone.dc.html','Privacy-desktop.dc.html')
page('404.html','Pagina nu a fost găsită · Sunrise Villa','NotFound-phone.dc.html','NotFound-desktop.dc.html')
for k in used:
    src=blobs[k][0]; shutil.copy(src,OUT+'img/'+os.path.basename(src))
print(len(used),'images')
