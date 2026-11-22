<?php
/**
 * Contact form handler for the static site (runs on ClausWeb's PHP).
 * Sends the message to the guesthouse inbox with Reply-To set to the guest,
 * then redirects back to the page with ?sent=1 or ?error=1.
 */

declare(strict_types=1);

const RECIPIENT = 'contact@sunrisevilla-felix.com';
const SENDER = 'contact@sunrisevilla-felix.com';
const LANGS = ['ro' => '/', 'en' => '/en/', 'de' => '/de/'];

function back(string $lang, string $state): never
{
    $path = LANGS[$lang] ?? '/';
    header('Location: ' . $path . '?' . $state . '=1#contact', true, 303);
    exit;
}

function field(string $name, int $max): string
{
    $value = trim((string) ($_POST[$name] ?? ''));
    // Strip control characters (incl. CR/LF, which would allow header injection)
    $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $value) ?? '';
    return mb_substr($value, 0, $max);
}

$lang = array_key_exists($_POST['lang'] ?? '', LANGS) ? $_POST['lang'] : 'ro';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    back($lang, 'error');
}

// Honeypot: bots fill every field. Pretend success so they don't retry.
if (field('website', 200) !== '') {
    back($lang, 'sent');
}

$name = str_replace(["\r", "\n"], ' ', field('name', 120));
$email = field('email', 200);
$phone = str_replace(["\r", "\n"], ' ', field('phone', 60));
$dates = str_replace(["\r", "\n"], ' ', field('dates', 120));
$message = field('message', 5000);

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    back($lang, 'error');
}

$subject = 'Mesaj nou de pe site: ' . $name;
$body = "Nume: {$name}\nEmail: {$email}\nTelefon: {$phone}\nPerioada: {$dates}\nLimba: {$lang}\n\n{$message}\n";

$headers = [
    'From' => 'Sunrise Villa <' . SENDER . '>',
    'Reply-To' => $email,
    'Content-Type' => 'text/plain; charset=UTF-8',
];

$ok = mail(
    RECIPIENT,
    '=?UTF-8?B?' . base64_encode($subject) . '?=',
    $body,
    $headers,
    '-f' . SENDER
);

back($lang, $ok ? 'sent' : 'error');
