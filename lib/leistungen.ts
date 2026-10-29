export type Leistung = {
  slug: string;
  /** Schlüssel im Anfrage-Konfigurator */
  key: string;
  name: string;
  short: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  image: { src: string; alt: string };
  umfang: string[];
  text: string[];
  faq: { q: string; a: string }[];
  partner?: boolean;
};

const u = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=70`;

export const leistungen: Leistung[] = [
  {
    slug: "motorinstandsetzung",
    key: "motor",
    name: "Motorinstandsetzung",
    short: "Vom Ölverlust bis zum Motorschaden: Diagnose, Teilüberholung oder komplette Instandsetzung.",
    h1: "Motorinstandsetzung in Gengenbach",
    metaTitle: "Motorinstandsetzung Gengenbach & Ortenau | KFZ Gengenbach",
    metaDescription:
      "Motorschaden, Ölverbrauch, Steuerkette oder Zylinderkopf: Motorinstandsetzung in Gengenbach für Pkw und Transporter bis 4,5 t. Anfrage in 2 Minuten.",
    intro:
      "Die Motorinstandsetzung ist unser Schwerpunkt. Bevor ein Austauschmotor fällig wird, prüfen wir, was sich am vorhandenen Motor sinnvoll reparieren lässt, und zeigen Ihnen den Befund per Video.",
    image: { src: u("1486262715619-67b85e0b08d3"), alt: "Geöffneter Motorraum mit Motorblock" },
    umfang: [
      "Fehlerdiagnose bei Leistungsverlust, Geräuschen oder Warnleuchte",
      "Steuerkette und Zahnriemen inklusive Wasserpumpe",
      "Zylinderkopf, Zylinderkopfdichtung und Ventiltrieb",
      "Ölverlust und erhöhter Ölverbrauch",
      "Turbolader, Einspritzung und Abgasrückführung",
      "Teil- und Komplettinstandsetzung des Motors",
    ],
    text: [
      "Ein Motorschaden ist selten ein Totalschaden. Häufig lassen sich einzelne Baugruppen wie Steuertrieb, Zylinderkopf oder Turbolader gezielt instand setzen. Das ist meist wirtschaftlicher als ein Austauschmotor, und Sie behalten ein Fahrzeug, dessen Geschichte Sie kennen.",
      "Wir zerlegen nur so weit wie nötig, dokumentieren den Zustand per Foto und Video und besprechen mit Ihnen, welche Reparatur sich für Ihr Fahrzeug lohnt. Erst nach Ihrer Freigabe geht es weiter.",
    ],
    faq: [
      {
        q: "Lohnt sich eine Motorinstandsetzung bei meinem Fahrzeug?",
        a: "Das hängt vom Schaden, dem Fahrzeugwert und dem übrigen Zustand ab. Nach der Diagnose bekommen Sie eine klare Einschätzung, ob Instandsetzung, Austauschmotor oder ein Verkauf sinnvoller ist.",
      },
      {
        q: "Kann ich mein Auto mit Motorschaden noch zu Ihnen fahren?",
        a: "Bei Klopfen, starkem Ölverlust oder roter Öl-Warnleuchte bitte nicht weiterfahren. Schreiben Sie uns per WhatsApp, dann besprechen wir, wie das Fahrzeug am besten zu uns kommt.",
      },
      {
        q: "Arbeiten Sie auch an Transportern?",
        a: "Ja, an Transportern und Sprintern bis 4,5 t zulässiges Gesamtgewicht. Lkw nehmen wir nicht an.",
      },
    ],
  },
  {
    slug: "inspektion-wartung",
    key: "inspektion",
    name: "Inspektion & Wartung",
    short: "Inspektion nach Herstellervorgaben, Ölservice und Verschleißteile, ohne Garantieverlust.",
    h1: "Inspektion und Wartung in Gengenbach",
    metaTitle: "Inspektion & Ölwechsel Gengenbach | KFZ Gengenbach",
    metaDescription:
      "Inspektion nach Herstellervorgaben, Ölwechsel und Wartung für alle Marken in Gengenbach. Auffälligkeiten zeigen wir Ihnen per Video. Jetzt anfragen.",
    intro:
      "Wir warten Fahrzeuge aller Marken nach den Vorgaben des Herstellers. Fällt uns dabei etwas auf, schicken wir Ihnen ein kurzes Video und Sie entscheiden, was gemacht wird.",
    image: { src: u("1487754180451-c456f719a1fc"), alt: "Motoröl wird in einen Motor nachgefüllt" },
    umfang: [
      "Inspektion nach Herstellerplan, Eintrag ins Serviceheft",
      "Ölwechsel mit Filter nach Freigabe des Herstellers",
      "Bremsflüssigkeit, Kühlmittel und Filter",
      "Zahnriemen- und Steuerkettenwechsel nach Intervall",
      "Klimaservice und Batterieprüfung",
    ],
    text: [
      "Sie haben einen festen Ansprechpartner. Den Wartungsumfang klären wir vorab, damit Sie wissen, was gemacht wird, bevor das Auto auf der Bühne steht.",
      "Was über die Inspektion hinausgeht, machen wir nie ohne Rücksprache. Sie sehen den Befund im Video, bekommen eine Empfehlung und entscheiden selbst.",
    ],
    faq: [
      {
        q: "Verliere ich die Herstellergarantie, wenn ich nicht in die Vertragswerkstatt gehe?",
        a: "Nein. Entscheidend ist, dass die Wartung nach Herstellervorgaben und mit passenden Teilen erfolgt und dokumentiert wird. Das machen wir bei jeder Inspektion. Anders ist es bei Kulanz nach Ablauf der Garantie: Die ist freiwillig, und manche Hersteller knüpfen sie an Wartung in der Vertragswerkstatt.",
      },
      {
        q: "Wie lange dauert eine Inspektion?",
        a: "Das hängt vom Wartungsumfang Ihres Fahrzeugs ab. Wann Sie das Auto bringen und wieder abholen, stimmen wir direkt bei Ihrer Anfrage ab.",
      },
      {
        q: "Woher weiß ich, welche Inspektion bei meinem Auto fällig ist?",
        a: "Meist zeigt das Fahrzeug den nächsten Service im Kombiinstrument an. Im Serviceheft oder im digitalen Wartungsnachweis steht, welcher Umfang wann vorgesehen ist. Geben Sie in der Anfrage Marke, Modell und Kilometerstand an, dann klären wir den Umfang vorab.",
      },
      {
        q: "Was kostet eine Inspektion bei Ihnen?",
        a: "Das hängt vom Fahrzeug und vom vorgesehenen Wartungsumfang ab, deshalb nennen wir auf der Website keine Pauschalpreise. Nach Ihrer Anfrage bekommen Sie eine Einschätzung. Arbeiten, die darüber hinausgehen, machen wir erst nach Ihrer Freigabe.",
      },
      {
        q: "Warten Sie auch Transporter und Wohnmobile?",
        a: "Ja, Transporter, Sprinter und Wohnmobile bis 4,5 t zulässiges Gesamtgewicht warten wir genauso nach Herstellervorgaben.",
      },
    ],
  },
  {
    slug: "hu-au",
    key: "hu",
    name: "HU / AU",
    short: "Vorabcheck, Mängelbehebung und Hauptuntersuchung in einem Termin.",
    h1: "HU und AU in Gengenbach",
    metaTitle: "TÜV / HU & AU Gengenbach | KFZ Gengenbach",
    metaDescription:
      "Hauptuntersuchung und Abgasuntersuchung in Gengenbach: Vorabcheck, Mängel direkt beheben, Plakette in einem Termin. Jetzt Termin anfragen.",
    intro:
      "Wir prüfen Ihr Fahrzeug vorab, beheben Mängel direkt und kümmern uns um die Hauptuntersuchung. So kommen Sie ohne zweiten Anlauf zur neuen Plakette.",
    image: { src: u("1771340012378-3c86cb649193"), alt: "Mechaniker prüft einen Motorraum bei geöffneter Haube" },
    umfang: [
      "Vorabcheck nach den Prüfpunkten der Hauptuntersuchung",
      "Abgasuntersuchung (AU)",
      "Behebung von Mängeln an Licht, Bremsen, Fahrwerk und Reifen",
      "Hauptuntersuchung durch eine amtlich anerkannte Prüforganisation",
    ],
    text: [
      "Die meisten Fahrzeuge fallen wegen Kleinigkeiten durch: defekte Leuchtmittel, ausgeschlagene Gelenke, verschlissene Bremsen. Beim Vorabcheck finden wir solche Punkte, bevor sie zur Nachprüfung führen.",
      "Gefundene Mängel beheben wir nach Ihrer Freigabe im selben Termin. Die Hauptuntersuchung selbst nimmt eine amtlich anerkannte Prüforganisation ab.",
    ],
    faq: [
      {
        q: "Wann ist meine HU fällig?",
        a: "Das steht auf der Plakette am hinteren Kennzeichen und im Fahrzeugschein. Neufahrzeuge müssen nach drei Jahren zur ersten HU, danach alle zwei Jahre.",
      },
      {
        q: "Was passiert, wenn mein Auto Mängel hat?",
        a: "Sie bekommen vorher Bescheid, was gefunden wurde, und entscheiden, was wir beheben. Erst dann geht das Fahrzeug zur Prüfung.",
      },
    ],
  },
  {
    slug: "reifenservice-achsvermessung",
    key: "reifen",
    name: "Reifenservice & Achsvermessung",
    short: "Reifenwechsel, Montage, Wuchten und Achsvermessung für ruhigen Geradeauslauf.",
    h1: "Reifenservice und Achsvermessung in Gengenbach",
    metaTitle: "Reifenwechsel & Achsvermessung Gengenbach | KFZ Gengenbach",
    metaDescription:
      "Reifenwechsel, Reifenmontage, Wuchten und Achsvermessung in Gengenbach. Für Pkw und Transporter bis 4,5 t. Termin unverbindlich anfragen.",
    intro:
      "Ob saisonaler Radwechsel oder neue Reifen: Wir montieren, wuchten und vermessen die Achsen, damit Ihr Fahrzeug sauber geradeaus läuft und die Reifen gleichmäßig abfahren.",
    image: { src: u("1764015805414-df7de89d405b"), alt: "Mechaniker wechselt ein Rad mit dem Schlagschrauber" },
    umfang: [
      "Radwechsel Sommer/Winter",
      "Reifenmontage und Auswuchten",
      "Achsvermessung und Spureinstellung",
      "Prüfung von Profiltiefe, Alter und Reifendruck-Sensoren (RDKS)",
      "Neue Reifen auf Anfrage",
    ],
    text: [
      "Zieht Ihr Fahrzeug zur Seite, steht das Lenkrad schief oder fahren die Reifen innen oder außen einseitig ab, stimmt oft die Achsgeometrie nicht. Eine Achsvermessung schafft Klarheit und schont Reifen und Fahrwerk.",
      "Nach Arbeiten am Fahrwerk, einem Bordsteinkontakt oder dem Einbau neuer Reifen empfehlen wir die Vermessung grundsätzlich.",
    ],
    faq: [
      {
        q: "Wann sollte ich die Achsen vermessen lassen?",
        a: "Bei einseitigem Reifenverschleiß, schiefem Lenkrad, nach Fahrwerksarbeiten oder einem harten Bordsteinkontakt.",
      },
      {
        q: "Können Sie auch neue Reifen besorgen?",
        a: "Ja. Geben Sie im Anfrageformular Ihre Reifengröße oder Ihr Fahrzeug an, dann melden wir uns mit passenden Optionen.",
      },
    ],
  },
  {
    slug: "reparatur-diagnose",
    key: "reparatur",
    name: "Reparatur & Diagnose",
    short: "Bremsen, Kupplung, Fahrwerk, Elektrik: Fehlersuche mit Diagnosegerät und Reparatur aller Marken.",
    h1: "Kfz-Reparatur und Diagnose in Gengenbach",
    metaTitle: "Kfz-Reparatur & Fehlerdiagnose Gengenbach | KFZ Gengenbach",
    metaDescription:
      "Warnleuchte, Geräusche, Bremsen oder Kupplung: Fehlerdiagnose und Reparatur aller Marken in Gengenbach. Befund per Video, Freigabe durch Sie.",
    intro:
      "Leuchtet eine Warnlampe oder macht das Auto Geräusche, suchen wir den Fehler systematisch: Fehlerspeicher auslesen, prüfen, eingrenzen. Den Befund zeigen wir Ihnen per Video.",
    image: { src: u("1760317890314-e964ffd7e6a6"), alt: "Nahaufnahme einer Bremsscheibe mit Bremssattel" },
    umfang: [
      "Fehlerdiagnose mit Diagnosetester",
      "Bremsen: Beläge, Scheiben, Sättel, Bremsflüssigkeit",
      "Kupplung und Zweimassenschwungrad",
      "Fahrwerk, Stoßdämpfer und Lenkung",
      "Auspuff, Katalysator und Partikelfilter",
      "Elektrik, Batterie, Lichtmaschine und Anlasser",
    ],
    text: [
      "Ein ausgelesener Fehlercode ist ein Hinweis, keine Diagnose. Wir prüfen die betroffenen Bauteile, bevor wir etwas tauschen. Das spart Ihnen Teile, die gar nicht defekt sind.",
      "Wir reparieren Fahrzeuge aller Marken und arbeiten mit Teilen in Erstausrüster- oder gleichwertiger Qualität.",
    ],
    faq: [
      {
        q: "Meine Motorkontrollleuchte leuchtet. Kann ich weiterfahren?",
        a: "Leuchtet sie dauerhaft gelb, sollten Sie zeitnah kommen. Blinkt sie oder leuchtet rot, bitte nicht weiterfahren und uns kontaktieren.",
      },
      {
        q: "Reparieren Sie alle Marken?",
        a: "Ja, wir arbeiten an Pkw aller Marken sowie an Transportern bis 4,5 t.",
      },
    ],
  },
  {
    slug: "transporter-sprinter",
    key: "transporter",
    name: "Transporter & Sprinter bis 4,5 t",
    short: "Wartung, Reparatur und Motorarbeiten an Transportern, Sprintern und Wohnmobilen bis 4,5 t.",
    h1: "Transporter- und Sprinter-Werkstatt in Gengenbach",
    metaTitle: "Sprinter & Transporter Werkstatt Gengenbach | KFZ Gengenbach",
    metaDescription:
      "Werkstatt für Sprinter, Transporter und Kastenwagen bis 4,5 t in Gengenbach: Inspektion, Reparatur, Motorinstandsetzung. Jetzt anfragen.",
    intro:
      "Ein Transporter, der steht, kostet jeden Tag Geld. Wir warten und reparieren Sprinter und andere Transporter bis 4,5 t zulässiges Gesamtgewicht und melden uns schnell mit einem Termin.",
    image: { src: u("1688619103602-35c5b27a6619"), alt: "Weißer Transporter auf einer kurvigen Landstraße" },
    umfang: [
      "Inspektion und Ölservice",
      "Bremsen, Fahrwerk und Kupplung",
      "Motor- und Turbolader-Instandsetzung",
      "Reifenservice und Achsvermessung",
      "HU/AU-Vorbereitung",
    ],
    text: [
      "Wir arbeiten an Transportern, Kastenwagen und Wohnmobilen auf Transporterbasis bis 4,5 t. Für Lkw sind wir nicht ausgestattet.",
      "Für Gewerbekunden stimmen wir Termine so ab, dass das Fahrzeug möglichst kurz ausfällt. Schreiben Sie dazu einfach in die Anfrage, wann der Transporter verfügbar ist.",
    ],
    faq: [
      {
        q: "Bis zu welchem Gewicht arbeiten Sie?",
        a: "Bis 4,5 t zulässiges Gesamtgewicht. Lkw darüber nehmen wir nicht an.",
      },
      {
        q: "Betreuen Sie auch mehrere Firmenfahrzeuge?",
        a: "Ja. Nennen Sie uns in der Anfrage die Anzahl der Fahrzeuge, dann besprechen wir einen passenden Ablauf.",
      },
    ],
  },
  {
    slug: "karosserie-unfallinstandsetzung",
    key: "karosserie",
    name: "Karosserie & Unfallinstandsetzung",
    short: "Unfallschaden aufnehmen, reparieren lassen und koordinieren, über unseren Partnerbetrieb.",
    h1: "Karosserie und Unfallinstandsetzung",
    metaTitle: "Unfallinstandsetzung & Karosserie Gengenbach | KFZ Gengenbach",
    metaDescription:
      "Unfallschaden in Gengenbach reparieren lassen: Wir nehmen den Schaden auf und koordinieren die Karosseriearbeiten mit unserem Partnerbetrieb.",
    intro:
      "Nach einem Unfall brauchen Sie einen Ansprechpartner, nicht drei. Wir nehmen den Schaden auf, übernehmen die Technik und koordinieren die Karosseriearbeiten mit unserem Partnerbetrieb.",
    image: { src: u("1632605170384-c3f4d89162a3"), alt: "Fahrzeug in einer Karosseriewerkstatt" },
    umfang: [
      "Schadensaufnahme mit Fotos",
      "Karosseriearbeiten über unseren Partnerbetrieb",
      "Mechanische Reparaturen nach dem Unfall in unserer Werkstatt",
      "Abstimmung mit Ihnen während der gesamten Reparatur",
    ],
    text: [
      "Karosserie- und Lackarbeiten führt ein spezialisierter Partnerbetrieb aus. Sie bleiben trotzdem bei uns: Wir sind Ihr Ansprechpartner von der Schadensaufnahme bis zur Rückgabe.",
      "Technische Folgeschäden an Fahrwerk, Achse oder Kühlung reparieren wir selbst und vermessen das Fahrzeug anschließend.",
    ],
    faq: [
      {
        q: "Wer führt die Karosseriearbeiten aus?",
        a: "Unser Partnerbetrieb für Karosserie und Lack. Die Koordination und alle mechanischen Arbeiten übernehmen wir.",
      },
    ],
    partner: true,
  },
  {
    slug: "lackierung-smart-repair",
    key: "lack",
    name: "Lackierung & Smart Repair",
    short: "Kratzer, Dellen und Steinschläge: Lack- und Smart-Repair-Arbeiten über unseren Partnerbetrieb.",
    h1: "Lackierung und Smart Repair",
    metaTitle: "Lackierung & Smart Repair Gengenbach | KFZ Gengenbach",
    metaDescription:
      "Kratzer, Parkdellen und Lackschäden ausbessern lassen: Lackierung und Smart Repair für Gengenbach und Umgebung über unseren Partnerbetrieb.",
    intro:
      "Kleine Schäden müssen nicht teuer sein. Kratzer, Parkdellen und Steinschläge lassen sich oft punktuell ausbessern, ohne das ganze Bauteil zu lackieren.",
    image: { src: u("1632605192331-085fa2082575"), alt: "Lackierer lackiert ein Fahrzeug mit der Spritzpistole" },
    umfang: [
      "Kratzer und Lackschäden ausbessern",
      "Parkdellen ohne Lackieren entfernen (wo möglich)",
      "Teil- und Bauteillackierung",
      "Koordination über unseren Partnerbetrieb",
    ],
    text: [
      "Smart Repair eignet sich für kleine, örtlich begrenzte Schäden. Bei größeren Schäden wird das betroffene Bauteil lackiert. Welche Variante passt, sieht man am besten auf einem Foto.",
      "Schicken Sie uns im Anfrageformular oder per WhatsApp ein Foto des Schadens. Die Arbeiten führt unser Partnerbetrieb aus, Ihr Ansprechpartner bleiben wir.",
    ],
    faq: [
      {
        q: "Kann ich ein Foto vom Schaden schicken?",
        a: "Ja, am einfachsten per WhatsApp an unsere Nummer. So können wir den Schaden schon vorab einschätzen.",
      },
    ],
    partner: true,
  },
  {
    slug: "fahrzeugverkauf",
    key: "verkauf",
    name: "Fahrzeugverkauf",
    short: "Neu- und Gebrauchtwagen aus der Hand einer Werkstatt, technisch geprüft.",
    h1: "Fahrzeugverkauf in Gengenbach",
    metaTitle: "Gebrauchtwagen & Neuwagen Gengenbach | KFZ Gengenbach",
    metaDescription:
      "Neu- und Gebrauchtwagen in Gengenbach von Ihrer Kfz-Werkstatt: technisch geprüft, ehrlich beschrieben. Suchauftrag unverbindlich anfragen.",
    intro:
      "Sie suchen ein Fahrzeug? Wir vermitteln Neu- und Gebrauchtwagen und prüfen jedes Fahrzeug vorher technisch, so wie wir es für uns selbst tun würden.",
    image: { src: u("1492144534655-ae79c964c9d7"), alt: "Weißes Auto vor heller Wand" },
    umfang: [
      "Gebrauchtwagen, technisch geprüft",
      "Neuwagen auf Anfrage",
      "Suchauftrag nach Ihren Vorgaben",
      "Übergabe mit frischem Service auf Wunsch",
    ],
    text: [
      "Beim Gebrauchtwagenkauf zählt, was unter dem Blech steckt. Weil wir täglich an Motoren arbeiten, wissen wir, worauf es bei einem Modell ankommt, und sagen Ihnen das auch.",
      "Beschreiben Sie in der Anfrage, was Sie suchen: Fahrzeugtyp, Budgetrahmen und Einsatzzweck. Wir melden uns mit passenden Angeboten.",
    ],
    faq: [
      {
        q: "Nehmen Sie auch Fahrzeuge in Zahlung?",
        a: "Sprechen Sie uns an. Wir schauen uns Ihr aktuelles Fahrzeug an und machen Ihnen einen Vorschlag.",
      },
    ],
  },
];

export const getLeistung = (slug: string) => leistungen.find((l) => l.slug === slug);

/** Auswahl im Konfigurator (Reihenfolge = Anzeige) */
export const anfrageLeistungen = [
  { key: "inspektion", label: "Inspektion & Ölwechsel" },
  { key: "hu", label: "HU / AU" },
  { key: "reparatur", label: "Reparatur & Diagnose" },
  { key: "motor", label: "Motorinstandsetzung" },
  { key: "reifen", label: "Reifen & Achsvermessung" },
  { key: "karosserie", label: "Unfall & Karosserie" },
  { key: "lack", label: "Lack & Smart Repair" },
  { key: "verkauf", label: "Fahrzeug kaufen" },
] as const;
