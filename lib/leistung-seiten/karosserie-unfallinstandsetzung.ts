import type { LeistungSeite } from "./types";

export const seite: LeistungSeite = {
  umfangLead: "Technik und Koordination übernehmen wir, die Karosseriearbeiten führt unser Partnerbetrieb aus. Dazu gehören:",
  bildEtikett: { titel: "Ein Ansprechpartner", text: "Von der Schadensaufnahme bis zur Rückgabe: wir." },
  umfangBild: { src: "https://images.unsplash.com/photo-1727893119356-1702fe921cf9?auto=format&fit=crop&w=1200&q=70", alt: "Werkstatthalle mit Hebebühnen" },
  symptome: {
    titel: "Was jetzt zu tun ist",
    lead: "Erst die Unfallstelle sichern, dann den Schaden festhalten. Die Schritte folgen den Empfehlungen des ADAC.",
    punkte: [
      "Warnblinker an, Warnweste anziehen",
      "Warndreieck mit ausreichend Abstand aufstellen",
      "Polizei rufen bei Verletzten, größerem Schaden, Streit oder Unfallflucht",
      "Unfallstelle und Schäden an beiden Fahrzeugen fotografieren",
      "Daten austauschen, am besten mit dem Europäischen Unfallbericht",
      "Zeugen ansprechen und ihre Kontaktdaten notieren",
      "Danach Fotos per WhatsApp an uns schicken",
    ],
    warnung: {
      titel: "Bei Verletzten zuerst helfen",
      text: "Erste Hilfe leisten und den Rettungsdienst unter 112 rufen. Alles andere kommt danach.",
    },
  },
  ablauf: [
    { titel: "Schaden aufnehmen", text: "Sie schicken Fotos oder kommen vorbei. Wir dokumentieren den Schaden mit Fotos." },
    { titel: "Partner einbinden", text: "Die Karosseriearbeiten stimmen wir mit unserem Partnerbetrieb ab, Ihr Ansprechpartner bleiben wir." },
    { titel: "Technik reparieren", text: "Folgeschäden an Fahrwerk, Achse oder Kühlung reparieren wir selbst und vermessen das Fahrzeug danach." },
    { titel: "Abstimmung und Rückgabe", text: "Während der Reparatur halten wir Sie auf dem Laufenden. Zurück bekommen Sie das Fahrzeug von uns." },
  ],
  vergleich: {
    titel: "Haftpflicht- oder Kaskoschaden?",
    lead: "Wer den Schaden zahlt, hängt davon ab, wer den Unfall verursacht hat. Bei Teilschuld werden beide Haftpflichtversicherungen einbezogen. Ein Überblick nach ADAC, keine Rechtsberatung.",
    links: {
      titel: "Haftpflichtschaden",
      punkte: [
        "Ansprüche gehen an die Versicherung des Unfallgegners",
        "Bis ca. 1.000 Euro reichen oft Kostenvoranschlag und Fotos",
        "Bei größeren Schäden ein Gutachten, Sachverständigen frei wählbar",
        "Das Gutachten zahlt die Gegenseite, wenn sie voll haftet",
      ],
    },
    rechts: {
      titel: "Kaskoschaden",
      punkte: [
        "Selbst verursacht: Ihre Kfz-Haftpflicht zahlt den Schaden des anderen",
        "Den eigenen Schaden übernimmt eine Vollkasko, wenn vorhanden",
        "Auch möglich, wenn die Gegenseite nur teilweise oder gar nicht zahlt",
        "Ohne Rabattschutz kann die Schadenfreiheitsklasse steigen",
      ],
    },
    mitte: "oder",
    quelle: {
      titel: "ADAC: Die 10 wichtigsten Dinge nach einem Unfall",
      url: "https://www.adac.de/rund-ums-fahrzeug/unfall-schaden-panne/unfall/was-tun-nach-unfall/",
    },
  },
  faq: [
    {
      q: "Kann ich nach dem Unfall noch mit dem Auto fahren?",
      a: "Das hängt vom Schaden ab. Leuchten Warnlampen, läuft Flüssigkeit aus, zieht das Fahrzeug zur Seite oder hängen Teile lose, fahren Sie besser nicht weiter. Schicken Sie uns Fotos per WhatsApp, dann schätzen wir vorab ein, ob Sie zu uns fahren können.",
    },
    {
      q: "Warum prüfen Sie nach einem Unfall auch die Technik?",
      a: "Ein Anstoß an Rad oder Front kann Achse, Lenkung oder Kühler treffen, auch wenn außen nur eine Delle zu sehen ist. Solche Folgeschäden reparieren wir in unserer Werkstatt und vermessen das Fahrzeug anschließend.",
    },
  ],
};
