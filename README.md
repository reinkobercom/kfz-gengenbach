# kfz-gengenbach.de

Website der Kfz-Werkstatt KFZ Gengenbach (KFZ Technik Michael Jakob), Next.js 16, statisch generiert, gehostet auf Vercel.

## Inhalte pflegen

| Was | Wo |
| --- | --- |
| Stammdaten, Öffnungszeiten, Impressumsangaben | `lib/site.ts` |
| Leistungsseiten (Texte, Bilder, FAQ) | `lib/leistungen.ts` |
| Zusatzbausteine je Leistung (Vergleich, Anzeichen, Ampel, Wissen, Bild neben dem Umfang) | `lib/leistung-seiten/` |
| Ortsseiten | `lib/orte.ts` |
| Ratgeber-Artikel (eine Datei je Artikel, Format in `types.ts`) | `lib/ratgeber/` |
| Megamenü-Gruppen der Leistungen | `lib/navigation.ts` |
| Logo | `public/brand/` |

## Seiten

- `/` Startseite mit Anfrage-Konfigurator im Hero
- `/leistungen` und `/leistungen/[slug]` (9 Leistungen)
- `/einzugsgebiet` und `/kfz-werkstatt/[slug]` (4 Ortsseiten)
- `/ratgeber` und `/ratgeber/[slug]` (4 Artikel, klebendes Inhaltsverzeichnis, BlogPosting-Schema)
- `/kontakt`, `/impressum`, `/datenschutz`
- `/sitemap.xml`, `/robots.txt`, `/llms.txt`

## Anfrageformular

`app/api/anfrage/route.ts` prüft die Eingaben und gibt den Lead an `lib/leads.ts` weiter. Dort laufen interne Mail (`lib/mail.ts`, Resend) und Leadportal (`lib/leadportal.ts`) parallel. Keine Datenbank, keine Bestätigungsmail an den Kunden (Entscheidung 28.10.2026).

- Mail nach reinkober-Standard: Betreff `Neue Anfrage | KFZ Gengenbach - reinkober.com`, Absender nur `leads@reinkober-leadportal.com`, Blöcke Kontaktdaten → Inhalt → Herkunft, Fußzeile.
- Herkunft (UTM, gclid/fbclid, Referrer, Einstiegsseite) First-Touch in sessionStorage (`lib/attribution-client.ts`).
- Spam: Honeypot, Mindest-Ausfüllzeit, Cloudflare Turnstile (aktiv, sobald die Schlüssel gesetzt sind).

Umgebungsvariablen in Vercel: siehe `.env.example`.

## Indexierung

`lib/site.ts → indexierbar`: Solange die Produktion nur unter `*.vercel.app` läuft, ist die Seite auf noindex. Nach dem Aufschalten von `kfz-gengenbach.de` in Vercel einmal neu deployen, dann wird indexiert.

## Go-Live-Checkliste (Stand 29.10.2026)

Technik geprüft: alle 23 Seiten 200, je eine h1, Titel ≤ 65 und Beschreibungen ≤ 160 Zeichen, keine Dopplungen, Canonicals, Open Graph mit Bild, JSON-LD gültig, alle internen und 28 externen Links erreichbar, Sicherheits-Header gesetzt.

Offen vor der DNS-Umstellung:

- [x] Resend in Vercel (Production): `RESEND_API_KEY` (nur Senden), `MAIL_FROM`, `MAIL_TO` = leads@reinkober.agency, info@kfz-gengenbach.de (29.10.2026)
- [ ] Turnstile-Schlüssel in Vercel setzen
- [ ] Leadportal-Kunde „KFZ Gengenbach“ mit Quelle „Website-Anfrage“ anlegen, Slug und Secret als Env setzen
- [ ] Testanfrage auf der Vercel-URL: Mail kommt an, Lead im Portal
- [ ] Impressum: Handwerkskammer, Handwerksrolle, Berufsbezeichnung, USt-ID in `lib/site.ts`
- [ ] `kfz-gengenbach.de` und `www.kfz-gengenbach.de` in Vercel hinzufügen (www als Hauptdomain, Apex leitet weiter)
- [ ] Beim DNS-Anbieter (cloudpit) nur A-Record und www-CNAME ändern, MX-Einträge (secure-mailgate) nicht anfassen
- [ ] Nach der Umstellung neu deployen, robots.txt und Meta-Robots auf „index“ prüfen
- [ ] Search Console: Property anlegen, Bestätigungscode einbauen, Sitemap einreichen

## Entwicklung

```
npm install
npm run dev
```
