import type { LeistungSeite } from "./types";

export const seite: LeistungSeite = {
  umfangLead: "Vom Ölservice bis zum Motor: An Transportern bis 4,5 t zulässiges Gesamtgewicht übernehmen wir unter anderem:",
  bildEtikett: { titel: "Bis 4,5 t Gesamtgewicht", text: "Transporter, Sprinter und Wohnmobile." },
  umfangBild: { src: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=1200&q=70", alt: "Mechaniker arbeitet im Motorraum eines Fahrzeugs" },
  ablauf: [
    { titel: "Fahrzeug nennen", text: "Modell, Gesamtgewicht und Kilometerstand reichen, dazu kurz, was ansteht." },
    { titel: "Standzeit abstimmen", text: "Schreiben Sie dazu, wann der Transporter verfügbar ist. Danach richten wir den Termin aus." },
    { titel: "Befund per Video", text: "Fällt etwas auf, sehen Sie es im Video auf dem Handy, auch von der Baustelle aus." },
    { titel: "Freigabe und Abholung", text: "Gemacht wird nur, was Sie freigeben. Wir melden uns, sobald der Transporter fertig ist." },
  ],
  vergleich: {
    titel: "Was sich über 3,5 t ändert",
    lead: "Ob die HU jedes Jahr oder alle zwei Jahre fällig ist, hängt bei Transportern und Wohnmobilen am zulässigen Gesamtgewicht. Wir arbeiten an beiden Varianten bis 4,5 t.",
    links: {
      titel: "Bis 3,5 t",
      punkte: [
        "Transporter zur Güterbeförderung: HU alle 24 Monate",
        "Schon die erste HU nach 24 Monaten, nicht nach 36 wie beim Pkw",
        "Wohnmobil: erste HU nach 36 Monaten, danach alle 24",
      ],
    },
    rechts: {
      titel: "Über 3,5 t bis 4,5 t",
      punkte: [
        "Transporter zur Güterbeförderung: HU alle 12 Monate",
        "Schon die erste HU nach 12 Monaten",
        "Wohnmobil: in den ersten sechs Jahren alle 24 Monate, danach jährlich",
      ],
    },
    mitte: "3,5 t",
    quelle: { titel: "Anlage VIII StVZO, Nr. 2.1.4 und 2.1.6 (Untersuchungsfristen)", url: "https://www.gesetze-im-internet.de/stvzo_2012/anlage_viii.html" },
  },
  wissen: {
    titel: "Kurz vor der Anfrage",
    karten: [
      { titel: "Wo steht das Gewicht?", text: "In der Zulassungsbescheinigung Teil I unter F.2. Feld 5 zeigt, ob das Fahrzeug als Lkw, Pkw oder Wohnmobil zugelassen ist." },
      { titel: "Wohnmobile", text: "Wohnmobile auf Transporterbasis behandeln wir wie Transporter: Wartung, Bremsen, Fahrwerk, Reifen und Motor." },
      { titel: "Arbeiten bündeln", text: "Stehen Inspektion und HU an, nennen Sie beides in der Anfrage. Dann stimmen wir die Arbeiten möglichst in einem Termin ab." },
    ],
  },
  faq: [
    {
      q: "Machen Sie auch Motorarbeiten am Transporter?",
      a: "Ja. Die Motorinstandsetzung ist unser Schwerpunkt, und Transporter bis 4,5 t gehören dazu, ebenso der Turbolader. Beschreiben Sie in der Anfrage die Symptome oder nennen Sie den Fehlercode. Nach der Diagnose sehen Sie den Befund im Video und entscheiden, wie es weitergeht.",
    },
    {
      q: "Übernehmen Sie auch die HU für Transporter?",
      a: "Wir bereiten die HU/AU vor: Vorabcheck nach den Prüfpunkten der Hauptuntersuchung, dann beheben wir gefundene Mängel nach Ihrer Freigabe. Die Hauptuntersuchung selbst nimmt eine amtlich anerkannte Prüforganisation ab. Über 3,5 t ist sie bei Transportern zur Güterbeförderung jedes Jahr fällig.",
    },
  ],
};
