import type { LeistungSeite } from "./types";

export const seite: LeistungSeite = {
  umfangLead: "Für Pkw und Transporter bis 4,5 t, vom saisonalen Radwechsel bis zur Spureinstellung:",
  bildEtikett: { titel: "Achsen vermessen", text: "Für sauberen Geradeauslauf." },
  umfangBild: { src: "https://images.unsplash.com/photo-1727893119356-1702fe921cf9?auto=format&fit=crop&w=1200&q=70", alt: "Werkstatthalle mit Hebebühnen" },
  symptome: {
    titel: "Anzeichen an Reifen und Lenkung",
    lead: "Diese Anzeichen deuten auf verstellte Achsen, eine Unwucht oder verschlissene Reifen hin. Was dahintersteckt, klären wir am Fahrzeug.",
    punkte: [
      "Das Auto zieht bei gerade gehaltenem Lenkrad zur Seite",
      "Das Lenkrad steht bei Geradeausfahrt schief",
      "Reifen fahren innen oder außen einseitig ab",
      "Sägezahnartiger Abrieb am Profil",
      "Das Lenkrad zittert bei bestimmten Geschwindigkeiten",
      "Die Reifendruck-Kontrollleuchte leuchtet",
      "Risse oder Beulen an der Reifenflanke",
    ],
    warnung: {
      titel: "Profil unter 1,6 mm",
      text: "Das Hauptprofil muss nach § 36 StVZO am ganzen Umfang mindestens 1,6 mm tief sein. Darunter ist der Reifen nicht mehr zulässig und muss ersetzt werden.",
    },
  },
  arbeitsweise: [
    "Vor der Vermessung prüfen wir Reifendruck, Reifen und Fahrwerk. An einem Fahrwerk mit Spiel liefert die Messung keine verlässlichen Werte, und eine Einstellung hält nicht.",
    "Die Messung zeigt die Abweichung vom Sollwert des Herstellers, die Einstellung korrigiert sie. Ist ein Bauteil verbogen, besprechen wir die Reparatur vorher mit Ihnen.",
  ],
  ablauf: [
    { titel: "Größe nennen", text: "Reifengröße oder Fahrzeug reichen. Für neue Reifen melden wir uns mit passenden Optionen." },
    { titel: "Reifen prüfen", text: "Profiltiefe, Alter, Schäden und Reifendruck-Sensoren sehen wir uns vor der Montage an." },
    { titel: "Montieren und wuchten", text: "Die Räder werden montiert und ausgewuchtet, damit sie ruhig laufen." },
    { titel: "Achsen vermessen", text: "Bei Anzeichen oder nach Fahrwerksarbeiten vermessen wir die Achsen und stellen die Spur ein." },
  ],
  vergleich: {
    titel: "Auswuchten oder Achsvermessung?",
    lead: "Nicht jedes Problem am Lenkrad hat mit der Spur zu tun. Diese Einordnung hilft als erste Orientierung, geprüft wird am Fahrzeug.",
    mitte: "oder",
    links: {
      titel: "Auswuchten",
      punkte: ["Lenkrad zittert bei bestimmten Geschwindigkeiten", "Unruhe nach Radwechsel oder Reifenmontage", "Ursache meist eine Unwucht am Rad"],
    },
    rechts: {
      titel: "Achsvermessung",
      punkte: [
        "Auto zieht zur Seite, Lenkrad steht schief",
        "Reifen fahren einseitig ab",
        "Nach Fahrwerksarbeiten oder Bordsteinkontakt",
        "Ursache meist verstellte Spur oder Sturz",
      ],
    },
  },
  wissen: {
    titel: "Profil, Saison und Reifenalter",
    karten: [
      {
        titel: "Profil messen",
        text: "Am genauesten mit einem Profiltiefenmesser an mehreren Stellen der Lauffläche. Die Verschleißanzeiger in den Hauptrillen markieren die gesetzliche Grenze von 1,6 mm.",
      },
      {
        titel: "Faustregel O bis O",
        text: "Winterreifen von Oktober bis Ostern ist eine Faustregel, kein Gesetz. Vorgeschrieben sind Reifen mit Alpine-Symbol bei Glatteis, Schnee und Schneematsch (§ 2 Abs. 3a StVO).",
      },
      {
        titel: "Alter an der DOT-Nummer",
        text: "Die letzten vier Ziffern der DOT-Nummer auf der Flanke nennen Woche und Jahr der Herstellung: 2419 steht für die 24. Woche 2019.",
      },
    ],
  },
  faq: [
    {
      q: "Wie lange dauert eine Achsvermessung?",
      a: "Die Messung selbst dauert laut AUTO ZEITUNG je nach Verfahren etwa 15 bis 30 Minuten, mit Einstellung rechnet AUTO BILD mit rund einer Stunde. Länger wird es, wenn Einstellschrauben festsitzen oder ein verbogenes Bauteil erst getauscht werden muss.",
    },
    {
      q: "Was ist der Unterschied zwischen Achsvermessung und Spureinstellung?",
      a: "Die Achsvermessung stellt fest, ob und wie weit Spur und Sturz vom Sollwert des Herstellers abweichen. Die Spureinstellung korrigiert die Abweichung. Ohne Messung lässt sich nicht einstellen, ohne Einstellung bleibt die Messung eine Diagnose.",
    },
    {
      q: "Müssen nach der Achsvermessung Assistenzsysteme kalibriert werden?",
      a: "Das kann sein. Spurhalte- und Abstandsassistenten sind auf die Fahrwerkseinstellung abgestimmt, nach einer Änderung der Spur kann eine Kalibrierung von Kamera und Sensoren nötig sein. Ob das der Fall ist, gibt der Hersteller für das Modell vor. Nennen Sie uns bei der Anfrage, welche Systeme Ihr Fahrzeug hat.",
    },
  ],
};
