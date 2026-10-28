export type Ort = {
  slug: string;
  /** Wert, der im Konfigurator vorausgewählt wird */
  formOrt: string;
  name: string;
  orte: string[];
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  anfahrt: string;
  absaetze: string[];
  schwerpunkte: string[];
  faq: { q: string; a: string }[];
};

export const orte: Ort[] = [
  {
    slug: "offenburg",
    formOrt: "Offenburg",
    name: "Offenburg",
    orte: ["Offenburg", "Durbach", "Ebersweier", "Hohberg"],
    h1: "Ihre Kfz-Werkstatt für Offenburg, Durbach und Hohberg",
    metaTitle: "Kfz-Werkstatt für Offenburg | Motorinstandsetzung & Service",
    metaDescription:
      "Kfz-Werkstatt für Offenburg, Durbach, Ebersweier und Hohberg: Inspektion, HU/AU, Reparatur und Motorinstandsetzung in Gengenbach. Persönlich, schnell, mit Video-Befund.",
    intro:
      "In Offenburg gibt es viele Werkstätten. Zu uns nach Gengenbach kommen Kundinnen und Kunden aus Offenburg, Durbach und Hohberg, weil sie einen festen Ansprechpartner wollen und bei Motorproblemen eine Werkstatt, die darauf spezialisiert ist.",
    anfahrt:
      "Von Offenburg erreichen Sie uns über die B33 Richtung Kinzigtal, vorbei an Ortenberg und Ohlsbach. Aus Durbach, Ebersweier und Hohberg fahren Sie über Offenburg auf die B33.",
    absaetze: [
      "Bei uns sprechen Sie direkt mit dem Inhaber, der auch selbst am Fahrzeug arbeitet. Keine Weiterleitung, keine wechselnden Ansprechpartner. Fällt bei der Arbeit etwas auf, bekommen Sie ein kurzes Video aufs Handy und entscheiden selbst.",
      "Besonders lohnt sich der Weg bei Motorthemen: Steuerkette, Zylinderkopf, Ölverbrauch oder Turbolader. Hier prüfen wir, ob eine gezielte Instandsetzung möglich ist, bevor ein teurer Austauschmotor zur Sprache kommt.",
    ],
    schwerpunkte: ["motorinstandsetzung", "reparatur-diagnose", "inspektion-wartung", "transporter-sprinter"],
    faq: [
      {
        q: "Lohnt sich der Weg von Offenburg nach Gengenbach?",
        a: "Für Inspektion und Reparatur bekommen Sie bei uns einen festen Ansprechpartner und den Befund per Video. Bei Motorthemen kommt unsere Spezialisierung dazu.",
      },
      {
        q: "Betreuen Sie auch Firmenfahrzeuge aus Offenburg?",
        a: "Ja, Pkw und Transporter bis 4,5 t. Nennen Sie in der Anfrage die Anzahl der Fahrzeuge.",
      },
    ],
  },
  {
    slug: "zell-am-harmersbach",
    formOrt: "Zell am Harmersbach",
    name: "Zell a. H. & Harmersbachtal",
    orte: ["Zell am Harmersbach", "Unterharmersbach", "Oberharmersbach", "Nordrach", "Unterentersbach", "Oberentersbach"],
    h1: "Kfz-Werkstatt für Zell am Harmersbach und das Harmersbachtal",
    metaTitle: "Kfz-Werkstatt für Zell a. H., Nordrach & Oberharmersbach",
    metaDescription:
      "Werkstatt für Zell am Harmersbach, Unterharmersbach, Oberharmersbach, Nordrach und Entersbach: Inspektion, HU/AU, Reifen, Reparatur und Motorinstandsetzung.",
    intro:
      "Aus dem Harmersbachtal sind Sie schnell bei uns in Gengenbach. Ob Inspektion, Reifenwechsel oder ein Motorproblem: Sie schicken die Anfrage, wir melden uns mit einem Termin.",
    anfahrt:
      "Aus Zell am Harmersbach, Unterharmersbach, Oberharmersbach und Nordrach fahren Sie talauswärts Richtung Biberach und dort auf die B33 nach Gengenbach.",
    absaetze: [
      "Wer im Tal wohnt, fährt viel bergauf und bergab. Das beansprucht Bremsen, Kupplung und im Winter die Reifen stärker als im Flachland. Beim Service schauen wir deshalb besonders auf diese Verschleißteile und sagen Ihnen offen, was wirklich ansteht.",
      "Viele Betriebe im Tal sind mit Transportern unterwegs. Sprinter und andere Transporter bis 4,5 t warten und reparieren wir genauso wie Pkw.",
    ],
    schwerpunkte: ["reparatur-diagnose", "reifenservice-achsvermessung", "transporter-sprinter", "motorinstandsetzung"],
    faq: [
      {
        q: "Kann ich mein Auto morgens bringen und abends abholen?",
        a: "Sprechen Sie uns bei der Anfrage darauf an. Wir planen den Termin so, dass es zu Ihrem Tag passt, soweit der Arbeitsumfang das zulässt.",
      },
      {
        q: "Wechseln Sie auch Reifen für Fahrzeuge aus dem Harmersbachtal?",
        a: "Ja, Radwechsel, Montage, Wuchten und Achsvermessung für Pkw und Transporter.",
      },
    ],
  },
  {
    slug: "biberach-steinach",
    formOrt: "Biberach (Baden)",
    name: "Biberach & Steinach",
    orte: ["Biberach (Baden)", "Prinzbach", "Steinach"],
    h1: "Kfz-Werkstatt für Biberach, Prinzbach und Steinach",
    metaTitle: "Kfz-Werkstatt für Biberach (Baden) & Steinach | KFZ Gengenbach",
    metaDescription:
      "Werkstatt für Biberach (Baden), Prinzbach und Steinach im Kinzigtal: Inspektion, HU/AU, Reifenservice, Reparatur und Motorinstandsetzung in Gengenbach.",
    intro:
      "Für Biberach, Prinzbach und Steinach sind wir die Werkstatt direkt talabwärts an der B33. Kurzer Weg, fester Ansprechpartner und ein Video, wenn am Fahrzeug etwas auffällt.",
    anfahrt:
      "Aus Steinach und Biberach fahren Sie auf der B33 talabwärts Richtung Offenburg bis Gengenbach. Aus Prinzbach geht es zunächst nach Biberach und dann auf die B33.",
    absaetze: [
      "Viele im Kinzigtal pendeln täglich über die B33. Bei hohen Laufleistungen zählt eine Wartung, die nach Herstellervorgaben erfolgt und Verschleiß früh erkennt. Genau das bekommen Sie bei uns, dokumentiert im Serviceheft.",
      "Steht die HU an, prüfen wir vorab, beheben Mängel nach Ihrer Freigabe und kümmern uns um die Prüfung. So sparen Sie sich eine Nachprüfung.",
    ],
    schwerpunkte: ["inspektion-wartung", "hu-au", "motorinstandsetzung", "reifenservice-achsvermessung"],
    faq: [
      {
        q: "Wie schnell bekomme ich einen Termin?",
        a: "Das hängt von der Auslastung ab. Schicken Sie die Anfrage mit Ihrer Dringlichkeit, dann melden wir uns mit dem nächsten passenden Termin.",
      },
    ],
  },
  {
    slug: "ortenberg-ohlsbach-berghaupten",
    formOrt: "Ortenberg",
    name: "Ortenberg, Ohlsbach & Berghaupten",
    orte: ["Ortenberg", "Ohlsbach", "Berghaupten"],
    h1: "Kfz-Werkstatt für Ortenberg, Ohlsbach und Berghaupten",
    metaTitle: "Kfz-Werkstatt für Ortenberg, Ohlsbach & Berghaupten",
    metaDescription:
      "Ihre Werkstatt in der direkten Nachbarschaft: Inspektion, HU/AU, Reifen, Reparatur und Motorinstandsetzung für Ortenberg, Ohlsbach und Berghaupten.",
    intro:
      "Für Ortenberg, Ohlsbach und Berghaupten sind wir die Werkstatt in der direkten Nachbarschaft. Kurz anfragen, Termin bekommen, Auto bringen.",
    anfahrt:
      "Ortenberg und Ohlsbach liegen an der B33 zwischen Offenburg und Gengenbach. Von Berghaupten aus sind Sie in wenigen Minuten bei uns in Gengenbach.",
    absaetze: [
      "Bei einer Werkstatt um die Ecke ist auch der kleine Termin schnell erledigt: Radwechsel, Ölservice oder eine Warnleuchte, die geprüft werden soll. Sie schicken die Anfrage, wir melden uns.",
      "Und wenn es größer wird, etwa ein Motorproblem, sind Sie bei uns richtig. Die Motorinstandsetzung ist unser Schwerpunkt.",
    ],
    schwerpunkte: ["inspektion-wartung", "reifenservice-achsvermessung", "reparatur-diagnose", "motorinstandsetzung"],
    faq: [
      {
        q: "Kann ich ein Foto oder Video vom Problem schicken?",
        a: "Ja, am einfachsten per WhatsApp. Geräusche lassen sich oft schon per Sprachnachricht oder Video grob einordnen.",
      },
    ],
  },
];

export const getOrt = (slug: string) => orte.find((o) => o.slug === slug);
