import type { LeistungSeite } from "./types";

export const seite: LeistungSeite = {
  umfangLead: "Wir arbeiten den Wartungsplan Ihres Fahrzeugs ab, nicht eine Pauschalliste. Dazu gehören je nach Intervall:",
  bildEtikett: { titel: "Eintrag ins Serviceheft", text: "Jede Inspektion wird dokumentiert." },
  ablauf: [
    { titel: "Umfang klären", text: "Marke, Modell und Kilometerstand reichen. Wir prüfen vorab, welcher Service laut Hersteller dran ist." },
    { titel: "Inspektion nach Plan", text: "Gewartet wird nach Herstellervorgabe, mit freigegebenem Öl und passenden Teilen." },
    { titel: "Befund per Video", text: "Fällt uns etwas auf, sehen Sie es im Video auf Ihrem Handy, mit unserer Einschätzung." },
    { titel: "Freigabe und Abholung", text: "Zusätzliche Arbeiten nur nach Ihrem Okay. Das Serviceheft ist beim Abholen gepflegt." },
  ],
  vergleich: {
    kicker: "Garantie",
    titel: "Freie Werkstatt, Garantie bleibt",
    lead: "Sie müssen für die Inspektion nicht in die Vertragswerkstatt. Laut ADAC muss der Hersteller in der Garantiezeit akzeptieren, dass eine freie Werkstatt die Inspektion macht, wenn nach seinen Vorgaben gearbeitet wird.",
    links: {
      titel: "Was der Hersteller verlangt",
      punkte: ["Wartung nach dem vorgeschriebenen Plan", "Öl und Teile in der geforderten Qualität", "Nachweis im Serviceheft"],
    },
    rechts: {
      titel: "So machen wir es",
      punkte: ["Wartungsumfang nach Herstellervorgabe", "Öl mit Herstellerfreigabe, passende Teile", "Eintrag ins Serviceheft bei jeder Inspektion"],
    },
    quelle: { titel: "ADAC: Vertrags- oder freie Werkstatt?", url: "https://www.adac.de/rund-ums-fahrzeug/reparatur-pflege-wartung/werkstatt-tipps/richtige-autowerkstatt-finden/" },
  },
  wissen: {
    kicker: "Gut zu wissen",
    titel: "Wann ist die Inspektion fällig?",
    karten: [
      { titel: "Serviceanzeige", text: "Viele Fahrzeuge melden den nächsten Service im Display, oft mit Restkilometern oder Tagen." },
      { titel: "Serviceheft", text: "Dort steht, welcher Umfang wann vorgesehen ist, auf Papier oder digital beim Hersteller hinterlegt." },
      { titel: "Zeit oder Kilometer", text: "Die meisten Hersteller geben beides vor. Fällig ist der Service bei dem, was zuerst erreicht wird." },
    ],
  },
  ampel: {
    titel: "Was wir finden, ordnen wir ein",
    lead: "Nicht jeder Befund muss sofort erledigt werden. Im Video sagen wir Ihnen, wie dringend es ist.",
    stufen: [
      { stufe: "rot", titel: "Sofort nötig", text: "Betrifft die Sicherheit oder führt zu Folgeschäden.", beispiel: "z. B. Bremsbeläge am Limit" },
      { stufe: "gelb", titel: "Bald einplanen", text: "Noch in Ordnung, aber beim nächsten Termin fällig.", beispiel: "z. B. Reifen mit wenig Profil" },
      { stufe: "gruen", titel: "Kann warten", text: "Kein Handlungsbedarf, wir behalten es im Blick.", beispiel: "z. B. leichte Verschleißspuren" },
    ],
  },
};
