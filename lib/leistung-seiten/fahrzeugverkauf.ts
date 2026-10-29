import type { LeistungSeite } from "./types";

export const seite: LeistungSeite = {
  umfangLead: "Jedes Fahrzeug, das wir anbieten, prüfen wir vorher technisch. Zum Angebot gehören:",
  bildEtikett: { titel: "Technisch geprüft", text: "Jedes Fahrzeug vor dem Verkauf." },
  symptome: {
    kicker: "Suchauftrag",
    titel: "Das sollten Sie uns sagen",
    lead: "Je genauer die Anfrage, desto besser passen die Angebote. Diese Angaben helfen uns:",
    punkte: [
      "Fahrzeugtyp, z. B. Kombi, SUV oder Kleinwagen",
      "Ihr Budgetrahmen",
      "Einsatzzweck: Pendeln, Familie, Anhänger oder Gewerbe",
      "Neu- oder Gebrauchtwagen",
      "Wünsche zu Kraftstoff und Getriebe",
      "Bis wann Sie das Fahrzeug brauchen",
      "Ob Sie Ihr aktuelles Fahrzeug abgeben möchten",
    ],
  },
  arbeitsweise: [
    "Beim Gebrauchtwagenkauf zählt, was unter dem Blech steckt. Weil wir täglich an Motoren arbeiten, wissen wir, worauf es bei einem Modell ankommt, und sagen Ihnen das auch.",
    "Sie bekommen passende Angebote und unsere Einschätzung dazu. Ob Sie kaufen, entscheiden Sie.",
  ],
  ablauf: [
    { titel: "Wunsch nennen", text: "Sie beschreiben in der Anfrage, was Sie suchen. Das geht auch per WhatsApp." },
    { titel: "Angebote erhalten", text: "Wir melden uns mit Fahrzeugen, die zu Ihren Vorgaben passen, gebraucht oder neu." },
    { titel: "Technische Prüfung", text: "Vor dem Verkauf prüfen wir das Fahrzeug technisch und sagen Ihnen, was wir gefunden haben." },
    { titel: "Übergabe", text: "Auf Wunsch bekommen Sie das Fahrzeug mit frischem Service und gepflegtem Serviceheft." },
  ],
  wissen: {
    kicker: "Gut zu wissen",
    titel: "Worauf beim Gebrauchtwagen achten",
    karten: [
      { titel: "Wartungsnachweis", text: "Serviceheft oder digitaler Wartungsnachweis zeigen, ob nach Herstellerplan gewartet wurde. Lücken sollten sich mit Rechnungen erklären lassen." },
      { titel: "Kaltstart", text: "Lassen Sie den Motor bei der Besichtigung kalt starten. Rasseln, Rauch oder unruhiger Lauf fallen dann eher auf als bei warmem Motor." },
      { titel: "HU-Bericht", text: "Der letzte Prüfbericht der Hauptuntersuchung nennt auch geringe Mängel. Fragen Sie, ob sie seitdem behoben wurden." },
    ],
  },
  faq: [
    {
      q: "Ist die Anfrage verbindlich?",
      a: "Nein. Sie beschreiben, was Sie suchen, und wir melden uns mit passenden Angeboten. Ob Sie eines davon kaufen, entscheiden Sie selbst, nachdem Sie unsere Einschätzung zum Fahrzeug kennen.",
    },
    {
      q: "Was heißt bei Ihnen technisch geprüft?",
      a: "Wir sehen uns das Fahrzeug vor dem Verkauf in unserer Werkstatt an, so wie wir es für uns selbst tun würden. Was uns dabei auffällt, sagen wir Ihnen vor dem Kauf, auch Kleinigkeiten. So wissen Sie, in welchem Zustand das Fahrzeug ist.",
    },
    {
      q: "Bekomme ich das Fahrzeug mit frischem Service?",
      a: "Auf Wunsch ja. Dann machen wir vor der Übergabe den fälligen Service nach Herstellervorgabe und tragen ihn ins Serviceheft ein. Sagen Sie uns das am besten schon in der Anfrage, dann planen wir es gleich mit ein.",
    },
  ],
};
