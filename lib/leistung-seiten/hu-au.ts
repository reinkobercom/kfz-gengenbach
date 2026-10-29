import type { LeistungSeite } from "./types";

export const seite: LeistungSeite = {
  umfangLead: "Vorabcheck, Reparatur und Prüfung folgen in einem Termin aufeinander. Dazu gehören:",
  bildEtikett: { titel: "Vorabcheck vor der HU", text: "Mängel finden, bevor geprüft wird." },
  umfangBild: { src: "https://images.unsplash.com/photo-1760317890314-e964ffd7e6a6?auto=format&fit=crop&w=1200&q=70", alt: "Nahaufnahme einer Bremsscheibe mit Bremssattel" },
  symptome: {
    titel: "Das können Sie vor dem Termin checken",
    lead: "Einen Teil der häufigen HU-Mängel sehen Sie in wenigen Minuten selbst. Den Rest prüfen wir auf der Hebebühne.",
    punkte: [
      "Alle Leuchten: Abblend-, Fern- und Bremslicht, Blinker, Kennzeichenleuchte",
      "Reifen mit mindestens 1,6 mm Profil, ohne Risse oder Beulen",
      "Frontscheibe ohne Risse oder Steinschläge im Sichtfeld",
      "Wischerblätter, die nicht schmieren, und Wasser im Waschbehälter",
      "Keine Warnleuchte, die nach dem Start an bleibt",
      "Kein Ziehen zur Seite und kein Schleifen beim Bremsen",
      "Kein Poltern über Unebenheiten",
    ],
  },
  arbeitsweise: [
    "Unser Teil ist die Vorbereitung: Mängel finden, mit Ihnen besprechen und nach Ihrer Freigabe beheben. Sie haben dabei einen Ansprechpartner vom Vorabcheck bis zur Plakette.",
    "Die Hauptuntersuchung selbst nimmt eine amtlich anerkannte Prüforganisation ab.",
  ],
  ablauf: [
    { titel: "Fälligkeit klären", text: "Ein Foto der Plakette per WhatsApp reicht, dann planen wir den Termin." },
    { titel: "Vorabcheck", text: "Wir prüfen das Fahrzeug nach den Prüfpunkten der HU, von Licht bis Fahrwerk." },
    { titel: "Mängel beheben", text: "Befunde sehen Sie per Foto oder Video. Behoben wird nach Ihrer Freigabe im selben Termin." },
    { titel: "Hauptuntersuchung", text: "Die Prüfung nimmt eine amtlich anerkannte Prüforganisation ab. Ohne erhebliche Mängel gibt es die neue Plakette." },
  ],
  vergleich: {
    titel: "Mit Vorabcheck oder direkt zur Prüfung?",
    lead: "Ein Vorabcheck ist keine Pflicht. Er senkt das Risiko, dass das Fahrzeug durchfällt und ein zweiter Termin nötig wird.",
    mitte: "oder",
    links: {
      titel: "Direkt zur Prüfung",
      punkte: [
        "Mängel zeigen sich erst bei der Hauptuntersuchung",
        "Bei erheblichen Mängeln gibt es keine Plakette",
        "Reparatur und Nachprüfung innerhalb eines Monats",
      ],
    },
    rechts: {
      titel: "Mit Vorabcheck",
      punkte: [
        "Prüfpunkte der HU vorher durchgesehen",
        "Befund per Foto oder Video aufs Handy",
        "Mängel nach Ihrer Freigabe im selben Termin behoben",
        "Zur Prüfung mit behobenen Mängeln",
      ],
    },
    quelle: { titel: "Anlage VIII StVZO: Untersuchungsfristen und Mängelklassen", url: "https://www.gesetze-im-internet.de/stvzo_2012/anlage_viii.html" },
  },
  wissen: {
    titel: "Wann muss Ihr Fahrzeug zur HU?",
    karten: [
      { titel: "Plakette lesen", text: "Fällig ist die HU bis zum Ende des Monats, der oben auf der Plakette steht. Eine Kulanzfrist gibt es nicht." },
      { titel: "Pkw: 3 Jahre, dann 2", text: "Die erste HU ist 36 Monate nach der Erstzulassung fällig, danach alle 24 Monate (Anlage VIII StVZO)." },
      { titel: "Transporter über 3,5 t", text: "Transporter zur Güterbeförderung über 3,5 t bis 7,5 t müssen jedes Jahr zur HU. Bis 3,5 t gilt der Zwei-Jahres-Rhythmus." },
    ],
  },
  faq: [
    {
      q: "Was bedeuten die Mängelklassen bei der HU?",
      a: "Bei geringen Mängeln gibt es die Plakette, die Mängel müssen innerhalb eines Monats behoben werden. Bei erheblichen oder gefährlichen Mängeln gibt es keine Plakette, die Nachprüfung muss spätestens einen Monat nach der HU erfolgen. Ist das Fahrzeug verkehrsunsicher, wird die Plakette entfernt und die Zulassungsbehörde benachrichtigt. So regelt es Anlage VIII der StVZO.",
    },
    {
      q: "Gehört die Abgasuntersuchung zur HU?",
      a: "Ja. Die AU ist Teil der Hauptuntersuchung, eine eigene Plakette dafür gibt es nicht mehr. Bei uns ist die Abgasuntersuchung deshalb fester Bestandteil des HU-Termins und muss nicht separat vereinbart werden.",
    },
    {
      q: "Meine HU ist schon abgelaufen. Was jetzt?",
      a: "Machen Sie zügig einen Termin, denn je länger die HU überzogen ist, desto teurer wird es. Schicken Sie uns ein Foto der Plakette per WhatsApp, dann planen wir Vorabcheck, Mängelbehebung und Prüfung. Welche Bußgelder und Aufschläge gelten, steht in unserem Ratgeber zum abgelaufenen TÜV.",
    },
  ],
};
