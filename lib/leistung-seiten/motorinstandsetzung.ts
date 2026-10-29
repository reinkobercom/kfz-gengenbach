import type { LeistungSeite } from "./types";

export const seite: LeistungSeite = {
  umfangLead: "Wir setzen gezielt die Baugruppe instand, die den Schaden verursacht. Typische Arbeiten am Motor:",
  bildEtikett: { titel: "Zustand dokumentiert", text: "Foto und Video vom geöffneten Motor." },
  symptome: {
    kicker: "Anzeichen",
    titel: "Woran Sie es merken",
    lead: "Ein Motorschaden kündigt sich oft an. Diese Anzeichen sollten Sie prüfen lassen:",
    punkte: [
      "Motorkontrollleuchte oder Öl-Warnleuchte im Display",
      "Rasseln oder Klappern, vor allem beim Kaltstart",
      "Ölflecken unter dem Fahrzeug oder häufiges Nachfüllen",
      "Leistungsverlust oder Notlaufprogramm",
      "Blauer oder weißer Rauch aus dem Auspuff",
      "Kühlmittelverlust ohne sichtbare Undichtigkeit",
      "Pfeifen oder Heulen beim Beschleunigen",
    ],
    warnung: {
      titel: "Nicht weiterfahren",
      text: "Bei Klopfen, starkem Ölverlust, roter Öl-Warnleuchte oder Temperaturanzeige im roten Bereich den Motor abstellen. Weiterfahren kann aus einem Teilschaden einen Totalschaden machen. Schreiben Sie uns per WhatsApp, dann klären wir, wie das Fahrzeug zu uns kommt.",
    },
  },
  arbeitsweise: [
    "Am Motor gehen wir in fester Reihenfolge vor: Ursache finden, Befund zeigen, dann reparieren. Wir zerlegen nur so weit wie nötig und dokumentieren den Zustand per Foto und Video.",
    "Welche Reparatur sich für Ihr Fahrzeug lohnt, besprechen wir anhand des Befunds. Erst nach Ihrer Freigabe geht es weiter.",
  ],
  ablauf: [
    { titel: "Ursache eingrenzen", text: "Sie schildern die Anzeichen, wir lesen den Fehlerspeicher aus und prüfen den Motor gezielt." },
    { titel: "Gezielt zerlegen", text: "Geöffnet wird nur so weit, wie es für einen sicheren Befund nötig ist." },
    { titel: "Befund per Video", text: "Sie sehen die betroffenen Bauteile auf Ihrem Handy, dazu unsere Einschätzung zum weiteren Weg." },
    { titel: "Freigabe, dann Reparatur", text: "Instand gesetzt wird erst nach Ihrem Okay und nur im freigegebenen Umfang." },
  ],
  vergleich: {
    kicker: "Entscheidung",
    titel: "Instandsetzen oder Austauschmotor?",
    lead: "Welcher Weg passt, hängt vom Schaden, vom Fahrzeug und von Ihren Plänen damit ab. Nach dem Befund gehen wir diese Punkte mit Ihnen durch.",
    mitte: "oder",
    links: {
      titel: "Instandsetzen",
      punkte: [
        "Der Schaden ist auf eine Baugruppe begrenzt, etwa Steuertrieb oder Zylinderkopf",
        "Motorblock und Kurbeltrieb sind in Ordnung",
        "Sie möchten das Fahrzeug noch lange fahren",
        "Sie behalten den Motor, dessen Geschichte Sie kennen",
      ],
    },
    rechts: {
      titel: "Austauschmotor",
      punkte: [
        "Motorblock oder Kurbelwelle sind beschädigt",
        "Mehrere Baugruppen sind gleichzeitig betroffen",
        "Die Instandsetzung wäre aufwendiger als der Tausch",
        "Ein passender Motor ist für Ihr Modell verfügbar",
      ],
    },
  },
  wissen: {
    kicker: "Gut zu wissen",
    titel: "Begriffe rund um den Motor",
    karten: [
      {
        titel: "Teilinstandsetzung",
        text: "Instand gesetzt wird nur die betroffene Baugruppe, etwa der Zylinderkopf oder der Steuertrieb. Der übrige Motor bleibt unberührt.",
      },
      {
        titel: "Komplettinstandsetzung",
        text: "Der Motor wird vollständig zerlegt, geprüft und mit neuen Verschleißteilen wie Lagern, Kolbenringen und Dichtungen wieder aufgebaut.",
      },
      {
        titel: "Steuertrieb",
        text: "Steuerkette oder Zahnriemen halten Kurbel- und Nockenwelle im Takt. Springt oder reißt der Trieb, können Ventile und Kolben beschädigt werden.",
      },
    ],
  },
  faq: [
    {
      q: "Wie lange dauert eine Motorinstandsetzung?",
      a: "Das hängt vom Schaden ab. Ein Steuerkettenwechsel ist eine andere Größenordnung als ein überholter Zylinderkopf oder ein komplett zerlegter Motor. Dazu kommt die Lieferzeit der Teile. Nach dem Befund nennen wir Ihnen einen realistischen Zeitrahmen, damit Sie planen können.",
    },
    {
      q: "Was kostet eine Motorinstandsetzung?",
      a: "Eine belastbare Zahl gibt es erst nach dem Befund, weil der Umfang von Fall zu Fall stark schwankt. Nach der Diagnose wissen Sie, welche Arbeiten nötig sind, und entscheiden dann, ob wir weitermachen. Ohne Ihre Freigabe wird nichts repariert.",
    },
    {
      q: "Ist erhöhter Ölverbrauch schon ein Motorschaden?",
      a: "Nicht unbedingt. Öl kann außen über undichte Dichtungen verloren gehen oder im Motor verbrennen, etwa über verschlissene Ventilschaftdichtungen, Kolbenringe oder den Turbolader. Wie ernst es ist, zeigt erst die Ursache. Notieren Sie, wie viel Öl Sie auf 1.000 Kilometer nachfüllen, und bringen Sie die Angabe zur Diagnose mit.",
    },
  ],
};
