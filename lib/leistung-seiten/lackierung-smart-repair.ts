import type { LeistungSeite } from "./types";

export const seite: LeistungSeite = {
  umfangLead: "Ob punktuell ausgebessert oder das Bauteil lackiert wird, entscheidet der Schaden. Über unseren Partnerbetrieb möglich sind:",
  bildEtikett: { titel: "Foto genügt", text: "Ein Bild vom Schaden reicht für die erste Einschätzung." },
  ablauf: [
    { titel: "Foto schicken", text: "Per WhatsApp oder im Anfrageformular, am besten bei Tageslicht." },
    { titel: "Einschätzung vorab", text: "Anhand des Fotos schätzen wir ein, ob Smart Repair infrage kommt oder lackiert werden muss." },
    { titel: "Arbeit beim Partner", text: "Lack- und Smart-Repair-Arbeiten führt unser Partnerbetrieb aus, Umfang und Termin stimmen wir mit Ihnen ab." },
    { titel: "Ein Ansprechpartner", text: "Fragen und Absprachen laufen über uns, vom Foto bis zur Rückgabe." },
  ],
  vergleich: {
    kicker: "Entscheidung",
    titel: "Smart Repair oder Lackierung?",
    lead: "Es kommt auf Größe, Lage und Tiefe des Schadens an. Eine grobe Orientierung, im Einzelfall entscheidet der Blick auf den Schaden.",
    links: {
      titel: "Smart Repair",
      punkte: [
        "Kleiner Schaden, etwa Steinschlag oder kurzer Kratzer",
        "Liegt in der Fläche, nicht über Kanten oder Bauteilgrenzen",
        "Parkdelle mit intaktem Lack: ausbeulen ohne Lackieren",
      ],
    },
    rechts: {
      titel: "Lackierung",
      punkte: [
        "Größere Fläche oder mehrere Schäden auf einem Bauteil",
        "Schaden zieht über Kanten oder mehrere Bauteile",
        "Tiefe Schäden auf größerer Fläche, etwa nach einem Streifschaden",
      ],
    },
    mitte: "oder",
  },
  wissen: {
    kicker: "Gut zu wissen",
    titel: "Kurz erklärt",
    karten: [
      {
        titel: "Was ist Smart Repair?",
        text: "Kleine Schäden werden punktuell ausgebessert, statt das ganze Bauteil zu lackieren. Dazu gehören Spot-Lackierung und Ausbeulen ohne Lackieren.",
      },
      {
        titel: "Steinschlag im Lack",
        text: "Ist der Lack bis aufs Blech abgeplatzt, kann dort Rost entstehen. Kleine Steinschläge lassen sich ausbessern, bevor daraus ein größerer Schaden wird.",
      },
      {
        titel: "Wie tief ist der Kratzer?",
        text: "Bleibt der Fingernagel nicht hängen, ist oft nur der Klarlack betroffen, und Polieren kann reichen. Sieht man Grundierung oder Blech, muss nachlackiert werden.",
      },
    ],
  },
  faq: [
    {
      q: "Was sollte auf dem Foto zu sehen sein?",
      a: "Am besten zwei Bilder: eines aus etwa einem Meter Abstand, damit man sieht, wo der Schaden liegt, und eines aus der Nähe. Bei Tageslicht ohne direkte Sonne erkennt man Größe und Tiefe am besten. Eine Münze daneben hilft, die Größe einzuschätzen.",
    },
    {
      q: "Wer führt die Lackierung aus?",
      a: "Unser Partnerbetrieb für Karosserie und Lack. Absprachen und Fragen laufen über uns, so haben Sie einen Ansprechpartner, auch wenn die Arbeit dort gemacht wird.",
    },
  ],
};
