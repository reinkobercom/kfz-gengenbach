import type { LeistungSeite } from "./types";

export const seite: LeistungSeite = {
  umfangLead: "Erst suchen wir die Ursache, dann reparieren wir, was wirklich defekt ist. Dazu gehören:",
  bildEtikett: { titel: "Erst prüfen, dann tauschen", text: "Bauteile werden geprüft, bevor wir sie ersetzen." },
  umfangBild: { src: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&w=1200&q=70", alt: "Mechaniker arbeitet am Motor eines Fahrzeugs" },
  symptome: {
    titel: "Woran Sie es merken",
    lead: "Viele Defekte kündigen sich an. Mit diesen Anzeichen sollten Sie vorbeikommen:",
    punkte: [
      "Warnleuchte im Cockpit, etwa Motor, ABS oder Batterie",
      "Quietschen oder Schleifen beim Bremsen",
      "Das Auto zieht beim Bremsen zur Seite",
      "Die Kupplung rutscht durch oder greift sehr spät",
      "Poltern über Bodenwellen oder unruhige Lenkung",
      "Der Motor springt schlecht an",
      "Lautes Dröhnen aus dem Auspuff",
    ],
    warnung: {
      titel: "Nicht weiterfahren",
      text: "Leuchtet eine rote Warnleuchte, etwa für Bremse, Öldruck oder Kühlmitteltemperatur, halten Sie an, sobald es sicher möglich ist. Das gilt auch, wenn sich das Bremspedal weich anfühlt oder durchtreten lässt. Rufen Sie uns an oder schreiben Sie per WhatsApp.",
    },
  },
  ablauf: [
    { titel: "Fehlerspeicher auslesen", text: "Mit dem Diagnosetester lesen wir die gespeicherten Fehler aus, als ersten Hinweis auf die Ursache." },
    { titel: "Bauteile prüfen", text: "Die verdächtigen Teile prüfen wir direkt am Fahrzeug, bis die Ursache feststeht." },
    { titel: "Befund per Video", text: "Sie sehen den Defekt auf Ihrem Handy und erfahren, wie dringend die Reparatur ist." },
    { titel: "Reparatur nach Freigabe", text: "Erst nach Ihrem Okay reparieren wir, mit Teilen in Erstausrüster- oder gleichwertiger Qualität." },
  ],
  vergleich: {
    titel: "Reparieren oder tauschen?",
    lead: "Nicht jedes defekte Bauteil muss komplett ersetzt werden. Anhand des Befunds sagen wir Ihnen, was technisch sinnvoll ist.",
    mitte: "oder",
    links: {
      titel: "Reparieren",
      punkte: [
        "Der Fehler liegt an einem Einzelteil, etwa Sensor, Kabel oder Stecker",
        "Das Bauteil lässt sich abdichten, einstellen oder instand setzen",
        "Der übrige Zustand des Bauteils ist gut",
      ],
    },
    rechts: {
      titel: "Tauschen",
      punkte: [
        "Verschleißteile sind am Limit, etwa Bremsbeläge oder Kupplungsscheibe",
        "Bremsen und Stoßdämpfer achsweise, damit beide Seiten gleich arbeiten",
        "Eine Reparatur wäre unsicher oder hielte nicht lange",
      ],
    },
  },
  ampel: {
    titel: "Wie dringend ist der Befund?",
    lead: "Im Video sagen wir Ihnen, was sofort gemacht werden muss und was bis zum nächsten Termin warten kann.",
    stufen: [
      { stufe: "rot", titel: "Sofort nötig", text: "Betrifft die Fahrsicherheit oder führt zu Folgeschäden.", beispiel: "z. B. Bremsbeläge am Limit, undichte Bremsleitung" },
      { stufe: "gelb", titel: "Bald einplanen", text: "Funktioniert noch, sollte aber nicht lange warten.", beispiel: "z. B. Kupplung, die spät greift, schwächelnde Batterie" },
      { stufe: "gruen", titel: "Kann warten", text: "Kein akuter Handlungsbedarf, wir behalten es im Blick.", beispiel: "z. B. Flugrost an Bremsscheiben oder Auspuff" },
    ],
  },
  faq: [
    {
      q: "Reicht es nicht, den Fehlerspeicher auszulesen?",
      a: "Meist nicht. Der Fehlerspeicher zeigt, welches System eine Abweichung meldet, aber nicht immer, welches Bauteil defekt ist. Ein Fehler zur Lambdasonde kann zum Beispiel auch an einer Undichtigkeit oder an einem Kabel liegen. Deshalb prüfen wir die Ursache, bevor wir Teile tauschen.",
    },
    {
      q: "Muss ich bei einem neuen Geräusch gleich kommen?",
      a: "Das kommt auf das Geräusch an. Schleifen oder Quietschen beim Bremsen und neues Poltern im Fahrwerk sollten Sie bald prüfen lassen, weil es um Sicherheitsteile geht. Nehmen Sie das Geräusch am besten mit dem Handy auf und schicken Sie es uns per WhatsApp. Dann können wir besser einschätzen, wie eilig der Termin ist.",
    },
  ],
};
