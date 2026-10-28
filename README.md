# kfz-gengenbach.de

Website der Kfz-Werkstatt KFZ Gengenbach (KFZ Technik Michael Jakob), Next.js 16, statisch generiert, gehostet auf Vercel.

## Inhalte pflegen

| Was | Wo |
| --- | --- |
| Stammdaten, Öffnungszeiten, Impressumsangaben, Formular-Empfänger | `lib/site.ts` |
| Leistungsseiten (Texte, Bilder, FAQ) | `lib/leistungen.ts` |
| Ortsseiten | `lib/orte.ts` |
| Logo | `public/brand/` |

## Seiten

- `/` Startseite mit Anfrage-Konfigurator im Hero
- `/leistungen` und `/leistungen/[slug]` (9 Leistungen)
- `/einzugsgebiet` und `/kfz-werkstatt/[slug]` (4 Ortsseiten)
- `/kontakt`, `/impressum`, `/datenschutz`
- `/sitemap.xml`, `/robots.txt`, `/llms.txt`

## Anfrageformular

`app/api/anfrage/route.ts` versendet über Resend. Umgebungsvariablen in Vercel:

```
RESEND_API_KEY=re_...
ANFRAGE_FROM="KFZ Gengenbach <anfrage@kfz-gengenbach.de>"   # Domain muss in Resend verifiziert sein
ANFRAGE_TO="info@kfz-gengenbach.de,leads@reinkober.agency"  # optional
```

Vercel Web Analytics erfasst die Events `anfrage_start` und `anfrage_gesendet`.

## Entwicklung

```
npm install
npm run dev
```
