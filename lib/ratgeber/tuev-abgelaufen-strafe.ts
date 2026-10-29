import type { Artikel } from "./types";

export const artikel: Artikel = {
  slug: "tuev-abgelaufen-strafe",
  kategorie: "Prüfung & Wartung",
  keyword: "tüv abgelaufen strafe",
  suchvolumen:
    "8.700 (tüv abgelaufen strafe), 4.300 (tüv abgelaufen), 28.800 (wie viel kostet tüv abgelaufen?), 3.500 (wie lange darf der tüv abgelaufen sein ohne strafe?)",
  titel: "TÜV abgelaufen: Welche Strafe droht und was jetzt zu tun ist",
  metaTitle: "TÜV abgelaufen: Strafe, Punkte & was jetzt zu tun ist",
  metaDescription:
    "TÜV abgelaufen? 15 bis 60 Euro Bußgeld, nach acht Monaten ein Punkt, nach zwei Monaten 20 % HU-Aufschlag. Alle Stufen (Stand 2026) und was jetzt zu tun ist.",
  teaser:
    "Bis zwei Monate kein Bußgeld, danach 15 bis 60 Euro und ab acht Monaten ein Punkt. Was die überzogene HU zusätzlich kostet, ob Sie noch fahren dürfen und wie Sie ohne zweiten Anlauf zur neuen Plakette kommen.",
  leistung: "hu-au",
  datePublished: "2026-10-28",
  dateModified: "2026-10-28",
  antwort:
    "Ist der TÜV abgelaufen, sieht der Bußgeldkatalog für Pkw in den ersten zwei Monaten kein Bußgeld vor. Danach kostet es 15 Euro, über vier Monate 25 Euro und über acht Monate 60 Euro plus einen Punkt in Flensburg. Ab mehr als zwei Monaten verlangt die Prüforganisation zusätzlich 20 Prozent Aufschlag für eine Ergänzungsuntersuchung (Stand Oktober 2026).",
  kernpunkte: [
    "**Bußgeld nach Dauer:** Pkw bis 2 Monate kein Regelsatz, mehr als 2 bis 4 Monate 15 Euro, mehr als 4 bis 8 Monate 25 Euro, mehr als 8 Monate 60 Euro und 1 Punkt.",
    "**Aufschlag bei der Prüfung:** Ab mehr als zwei Monaten Überziehung wird eine Ergänzungsuntersuchung fällig, laut ADAC mit 20 Prozent höherer Gebühr.",
    "**Fällig ist die HU** bis zum Ende des Monats, der oben auf der Plakette steht. Eine gesetzliche Kulanzfrist gibt es nicht.",
    "**Weiterfahren ist nicht automatisch verboten,** aber die Behörde kann den Betrieb untersagen, und bei einem Unfall durch einen prüfpflichtigen Mangel kann die Haftpflicht bis zu 5.000 Euro zurückfordern.",
    "**Schnellster Weg zur Plakette:** Vorabcheck, Mängel beheben, dann Hauptuntersuchung, damit keine Nachprüfung nötig wird.",
  ],
  abschnitte: [
    {
      id: "welche-strafe-droht-wenn-der-tuev-abgelaufen-ist",
      titel: "Welche Strafe droht, wenn der TÜV abgelaufen ist?",
      blocks: [
        {
          type: "p",
          text: "Die Strafe für einen abgelaufenen TÜV richtet sich nach dem Bußgeldkatalog und hängt davon ab, wie lange die Hauptuntersuchung (HU) überzogen ist. Für Pkw, Motorräder und leichte Anhänger ohne Sicherheitsprüfung sieht der Katalog in den ersten zwei Monaten nach Ablauf keinen Regelsatz vor. Danach steigt die Strafe in drei Stufen, ab mehr als acht Monaten kommt ein Punkt im Fahreignungsregister in Flensburg dazu.",
        },
        {
          type: "table",
          caption:
            "Bußgelder bei überzogener HU für Pkw ohne Sicherheitsprüfung (Bußgeldkatalog Nr. 186.2, Stand Oktober 2026, Quellen: bussgeldkatalog.org, ADAC)",
          head: ["Überziehung", "Bußgeld", "Punkte", "Tatbestandsnummer"],
          rows: [
            ["bis 2 Monate", "kein Regelsatz", "–", "–"],
            ["mehr als 2 bis 4 Monate", "15 Euro", "–", "329113"],
            ["mehr als 4 bis 8 Monate", "25 Euro", "–", "329119"],
            ["mehr als 8 Monate", "60 Euro", "1", "329610"],
          ],
        },
        {
          type: "p",
          text: "Die 15 und 25 Euro sind Verwarnungsgelder, die 60 Euro ein Bußgeld mit Eintrag. Ein Fahrverbot sieht der Bußgeldkatalog für eine überzogene HU nicht vor.",
        },
        {
          type: "p",
          text: "Wer den Termin hinausschiebt, zahlt unter Umständen doppelt: Verwarnungsgeld bei einer Kontrolle und ab mehr als zwei Monaten einen Aufschlag bei der Untersuchung. Fallen bei der HU Mängel auf, kommt ein zweiter Termin dazu. Bei KFZ Gengenbach gehören Vorabcheck, Mängelbehebung und Hauptuntersuchung deshalb zu einem gemeinsamen Ablauf, beschrieben unter [HU und AU](/leistungen/hu-au).",
        },
      ],
    },
    {
      id: "ab-wann-ist-der-tuev-abgelaufen",
      titel: "Ab wann ist der TÜV abgelaufen?",
      blocks: [
        {
          type: "p",
          text: "Der TÜV ist abgelaufen, sobald der Monat endet, der oben auf der Prüfplakette am hinteren Kennzeichen steht. So regelt es § 29 Abs. 7 StVZO: Die Plakette wird „mit Ablauf des jeweils angegebenen Monats ungültig“. Steht oben die 10 und in der Mitte die 26, ist die HU bis zum 31. Oktober 2026 fällig. Ab dem 1. November gilt sie als überzogen.",
        },
        {
          type: "p",
          text: "Die Prüfplakette lesen Sie in drei Schritten:",
        },
        {
          type: "ul",
          items: [
            "**Jahr:** die zweistellige Zahl in der Mitte, etwa „26“ für 2026.",
            "**Monat:** die Zahl am äußeren Zahlenring, die in 12-Uhr-Position oben steht.",
            "**Farbe:** zeigt das Fälligkeitsjahr auch aus der Entfernung. Laut AUTO BILD steht Orange für 2025, Blau für 2026, Gelb für 2027 und Braun für 2028. Die Farben wiederholen sich im Sechsjahresrhythmus.",
          ],
        },
        {
          type: "p",
          text: "Eine gesetzliche Kulanzfrist gibt es nicht. Die zwei Monate ohne Verwarnungsgeld sind eine Regelung des Bußgeldkatalogs, keine Verlängerung der Frist. Das Fälligkeitsdatum steht außerdem in der Zulassungsbescheinigung Teil I, dem früheren Fahrzeugschein.",
        },
        {
          type: "p",
          text: "Für Pkw gilt nach Anlage VIII StVZO: erste HU 36 Monate nach der Erstzulassung, danach alle 24 Monate. Für Taxis, Transporter über 3,5 Tonnen und Mietfahrzeuge gelten kürzere Fristen, die Übersicht steht im Abschnitt zu Transportern und Firmenfahrzeugen.",
        },
      ],
    },
    {
      id: "was-kostet-es-zusaetzlich-wenn-der-tuev-abgelaufen-ist",
      titel: "Was kostet es zusätzlich, wenn der TÜV abgelaufen ist?",
      blocks: [
        {
          type: "p",
          text: "Ein abgelaufener TÜV kostet ab mehr als zwei Monaten Überziehung zusätzlich zum Bußgeld einen Aufschlag für die Ergänzungsuntersuchung. Die Ergänzungsuntersuchung ist eine vertiefte Hauptuntersuchung, die nach Anlage VIIIa Nr. 2.2 StVZO vorgeschrieben ist, wenn der Vorführtermin um mehr als zwei Monate überschritten wurde. Die Prüforganisationen berechnen dafür laut ADAC eine um 20 Prozent höhere Gebühr.",
        },
        {
          type: "table",
          caption:
            "Mögliche Kosten bei überzogener HU, Richtwerte laut ADAC und Bußgeldkatalog, Stand Oktober 2026. Die tatsächlichen Gebühren legt die jeweilige Prüforganisation fest.",
          head: ["Posten", "Betrag", "Wann"],
          rows: [
            ["HU mit AU, Pkw bis 3,5 t", "rund 163 Euro (Bundesschnitt 2026 laut ADAC)", "bei jeder HU"],
            ["Aufschlag Ergänzungsuntersuchung", "plus 20 Prozent auf die HU-Gebühr", "Überziehung mehr als 2 Monate"],
            ["Verwarnungs- oder Bußgeld", "15 bis 60 Euro", "nur bei Kontrolle, je nach Dauer"],
            ["Nachprüfung", "rund 30 Euro (laut ADAC)", "wenn die HU wegen Mängeln nicht bestanden ist"],
          ],
        },
        {
          type: "p",
          text: "Die HU-Gebühren unterscheiden sich nach Bundesland und Prüforganisation, der ADAC-Wert ist ein bundesweiter Durchschnitt. Hinzu kommen die Kosten für Reparaturen, falls bei der Prüfung Mängel auffallen. Diese hängen vom Fahrzeug und vom Befund ab.",
        },
        {
          type: "p",
          text: "Einen Ausgleich gibt es: Die neue Plakette wird nicht rückdatiert. Laut ADAC ist die nächste HU zwei volle Jahre nach dem tatsächlichen Prüftermin fällig. Wer überzogen hat, verliert also keine Zeit bis zur nächsten Prüfung, zahlt aber ab dem dritten Monat den Aufschlag.",
        },
      ],
    },
    {
      id: "darf-man-mit-abgelaufenem-tuev-noch-fahren",
      titel: "Darf man mit abgelaufenem TÜV noch fahren?",
      blocks: [
        {
          type: "p",
          text: "Mit abgelaufenem TÜV bleibt das Fahrzeug zugelassen, ein automatisches Fahrverbot gibt es nicht. Geahndet wird, dass der Halter das Fahrzeug nicht rechtzeitig zur HU vorgeführt hat. Eine Ausnahme für die Fahrt zur Prüfstelle oder zur Werkstatt kennt der Bußgeldkatalog nicht: Wer in eine Kontrolle gerät, zahlt nach der Dauer der Überziehung, auch auf dem Weg zum Termin. Drei Situationen ändern die Lage:",
        },
        {
          type: "ul",
          items: [
            "**Die Polizei stellt einen Mängelbericht aus.** Laut TÜV Hessen kann sie nach einer Kontrolle verlangen, dass Sie das Fahrzeug innerhalb einer Frist zur HU vorführen und das nachweisen.",
            "**Die Behörde untersagt den Betrieb.** Fehlt eine gültige Plakette, kann die zuständige Behörde den Betrieb im öffentlichen Verkehr untersagen oder beschränken (§ 29 Abs. 7 StVZO). Wer das Verbot missachtet, zahlt laut Bußgeldkatalog 60 Euro und bekommt einen Punkt.",
            "**Das Fahrzeug hat erkennbare Mängel.** Ziehen die Bremsen einseitig, leuchtet eine rote Warnleuchte oder ist die Beleuchtung ausgefallen, gehört das Auto nicht in den Verkehr, unabhängig vom Datum auf der Plakette.",
          ],
        },
        {
          type: "hinweis",
          titel: "Versicherung bei abgelaufenem TÜV",
          text: "Der Versicherungsschutz entfällt laut ADAC nicht automatisch: Die Kfz-Haftpflicht reguliert Schäden anderer auch bei überzogener HU. War aber ein Mangel unfallursächlich, der bei der HU hätte beanstandet werden müssen, kann sie bis zu 5.000 Euro zurückfordern. Die Kaskoversicherung kann im ungünstigsten Fall die Leistung verweigern.",
        },
        {
          type: "p",
          text: "Die HU-Pflicht gilt auch, wenn das angemeldete Fahrzeug nur auf dem eigenen Grundstück steht. Bei Saisonkennzeichen ist eine HU, die außerhalb des Betriebszeitraums fällig wurde, laut ADAC im ersten Monat des nächsten Betriebszeitraums nachzuholen.",
        },
      ],
    },
    {
      id: "tuev-abgelaufen-was-ist-jetzt-zu-tun",
      titel: "TÜV abgelaufen: Was ist jetzt zu tun?",
      blocks: [
        {
          type: "p",
          text: "Bei abgelaufenem TÜV führt der schnellste Weg zur neuen Plakette über einen Termin, in dem Vorabcheck, Reparatur und Hauptuntersuchung aufeinander folgen. Wer das Fahrzeug ungeprüft zur Prüfstelle bringt und durchfällt, braucht einen zweiten Termin, zahlt die Nachprüfung und muss innerhalb eines Monats wiederkommen.",
        },
        {
          type: "ol",
          items: [
            "**Fälligkeit prüfen:** Monat und Jahr auf der Plakette oder in der Zulassungsbescheinigung Teil I ablesen und zählen, wie viele Monate seit dem Monatsende vergangen sind. Bei mehr als zwei Monaten fällt der Aufschlag für die Ergänzungsuntersuchung an.",
            "**Bekannte Auffälligkeiten notieren:** Warnleuchten, Geräusche, ausgefallene Lampen, ein schief stehendes Lenkrad. Ein Foto oder kurzes Video davon hilft der Werkstatt bei der Einschätzung.",
            "**Termin vereinbaren:** möglichst so, dass zwischen Vorabcheck und Hauptuntersuchung Zeit für kleinere Reparaturen bleibt.",
            "**Vorabcheck und Mängelbehebung:** Die Werkstatt prüft das Fahrzeug nach den Prüfpunkten der HU und behebt gefundene Mängel nach Ihrer Freigabe.",
            "**Hauptuntersuchung:** Die HU nimmt eine amtlich anerkannte Prüforganisation ab, etwa TÜV, DEKRA, GTÜ oder KÜS. Ohne erhebliche Mängel gibt es die neue Plakette.",
            "**Bei Mängeln Nachprüfung im Folgemonat:** Bei erheblichen oder gefährlichen Mängeln muss die Nachprüfung nach Anlage VIII StVZO spätestens einen Monat nach dem Tag der HU erfolgen. Danach ist eine vollständige neue HU fällig.",
          ],
        },
        {
          type: "p",
          text: "Bei KFZ Gengenbach läuft die [Hauptuntersuchung](/leistungen/hu-au) nach diesem Muster: Vorabcheck, Mängel nach Ihrer Freigabe im selben Termin beheben, dann die Prüfung durch die Prüforganisation. Wer aus Gengenbach, Offenburg oder dem Kinzigtal kommt, spricht dabei direkt mit dem Inhaber und bekommt Befunde per Foto oder Video aufs Handy.",
        },
      ],
    },
    {
      id: "woran-scheitert-die-hu-und-was-koennen-sie-vorher-selbst-pruefen",
      titel: "Woran scheitert die HU und was können Sie vorher selbst prüfen?",
      blocks: [
        {
          type: "p",
          text: "Bei der Hauptuntersuchung erhalten laut TÜV-Report 2026 bundesweit 21,5 Prozent der Pkw im ersten Anlauf wegen erheblicher Mängel keine Plakette. Ausgewertet wurden die Mängelstatistiken von 9,5 Millionen Fahrzeugen, veröffentlicht im November 2025. Am häufigsten beanstandeten die Prüfer Beleuchtung, Bremsen und Antrieb. Aus Werkstattsicht sind es oft Kleinigkeiten: defekte Leuchtmittel, ausgeschlagene Gelenke, verschlissene Bremsen.",
        },
        {
          type: "p",
          text: "Einen Teil davon können Sie vor dem Termin in wenigen Minuten selbst prüfen:",
        },
        {
          type: "ul",
          items: [
            "**Licht:** Abblend- und Fernlicht, Blinker, Bremsleuchten, Rückfahr-, Nebelschluss- und Kennzeichenleuchte. Für die Bremsleuchten hilft eine zweite Person.",
            "**Reifen:** Das Hauptprofil muss nach § 36 StVZO am ganzen Umfang mindestens 1,6 Millimeter tief sein. Dazu keine Risse oder Beulen an der Flanke.",
            "**Scheiben und Wischer:** Risse oder Steinschläge im Sichtfeld, verschmierende Wischerblätter, leerer Waschwasserbehälter.",
            "**Warnleuchten:** Bleibt nach dem Start eine Kontrollleuchte an, etwa für Airbag, ABS oder Motor, sollte die Ursache vor der HU geklärt sein.",
            "**Bremsen und Fahrwerk:** Zieht das Auto beim Bremsen zur Seite, schleift oder quietscht es, oder poltert es über Unebenheiten, liegt der Verdacht bei Bremsen, Gelenken oder Stoßdämpfern.",
          ],
        },
        {
          type: "p",
          text: "Was über den Blick von außen hinausgeht, gehört auf die Hebebühne: Bremsleitungen, Achsgelenke, Spurstangen, Auspuffanlage und Ölverlust sieht man nur von unten. Bei einer Warnleuchte wird der Fehlerspeicher ausgelesen und das betroffene Bauteil geprüft, bevor etwas getauscht wird. Das ist Teil von [Reparatur und Diagnose](/leistungen/reparatur-diagnose).",
        },
      ],
    },
    {
      id: "gelten-fuer-transporter-und-firmenfahrzeuge-andere-regeln",
      titel: "Gelten für Transporter und Firmenfahrzeuge andere Regeln?",
      blocks: [
        {
          type: "p",
          text: "Für Firmenfahrzeuge gilt derselbe Bußgeldkatalog wie für Privatwagen: Ob ein Pkw privat oder gewerblich genutzt wird, ändert die Höhe der Strafe nicht. Entscheidend sind Fahrzeugart und Prüffrist. Verantwortlich für die rechtzeitige Vorführung ist nach § 29 Abs. 1 StVZO der Halter, bei Firmenwagen in der Regel das Unternehmen und nicht der Mitarbeiter am Steuer.",
        },
        {
          type: "table",
          caption: "HU-Fristen ausgewählter Fahrzeuge nach Anlage VIII Nr. 2.1 und 2.2 StVZO, Stand Oktober 2026",
          head: ["Fahrzeug", "HU-Frist"],
          rows: [
            ["Pkw, privat oder als Firmenwagen", "erste HU nach 36 Monaten, danach alle 24 Monate"],
            ["Taxi und Mietwagen mit Fahrer", "alle 12 Monate"],
            ["Pkw zur gewerblichen Vermietung ohne Fahrer", "alle 12 Monate (36 Monate bei Mindestmietdauer von einem Jahr)"],
            ["Transporter zur Güterbeförderung bis 3,5 t", "alle 24 Monate"],
            ["Transporter zur Güterbeförderung über 3,5 t bis 7,5 t", "alle 12 Monate"],
            ["Wohnmobil über 3,5 t bis 7,5 t", "in den ersten 72 Monaten alle 24 Monate, danach alle 12 Monate"],
            ["Anhänger über 0,75 t bis 3,5 t", "alle 24 Monate"],
          ],
        },
        {
          type: "p",
          text: "Schärfer sanktioniert werden Fahrzeuge mit Sicherheitsprüfung, etwa Lkw über 7,5 Tonnen, Busse und Anhänger über 10 Tonnen. Laut ADAC kostet dort schon eine Überziehung bis zwei Monate 15 Euro, ab mehr als vier Monaten sind es 60 Euro und ein Punkt, über acht Monate 75 Euro und ein Punkt. Transporter bis 4,5 Tonnen fallen nicht darunter, wohl aber unter die jährliche HU, sobald sie mehr als 3,5 Tonnen zulässiges Gesamtgewicht haben.",
        },
        {
          type: "p",
          text: "Für Sprinter und Transporter bis 4,5 t übernimmt KFZ Gengenbach die HU/AU-Vorbereitung und stimmt den Termin so ab, dass das Fahrzeug möglichst kurz ausfällt. Mehr dazu unter [Transporter & Sprinter](/leistungen/transporter-sprinter).",
        },
      ],
    },
  ],
  zwischenCta: {
    nachAbschnitt: 2,
    titel: "Plakette abgelaufen? Wir prüfen vorher, was bei der HU auffallen würde.",
    text: "Schicken Sie KFZ Gengenbach per WhatsApp ein Foto der Plakette und, falls vorhanden, von leuchtenden Warnleuchten. Wir melden uns mit einem Termin für Vorabcheck, Mängelbehebung und Hauptuntersuchung, damit Sie aus Gengenbach und der Ortenau möglichst ohne zweiten Anlauf zur neuen Plakette kommen.",
  },
  faq: [
    {
      q: "Wie lange darf der TÜV abgelaufen sein ohne Strafe?",
      a: "Bei Pkw sieht der Bußgeldkatalog bis zu zwei Monate nach Ablauf des Plakettenmonats kein Verwarnungsgeld vor. Überzogen ist die HU trotzdem ab dem ersten Tag des Folgemonats. Ab mehr als zwei Monaten werden bei einer Kontrolle 15 Euro fällig, und bei der Prüfung kommt der Aufschlag von 20 Prozent für die Ergänzungsuntersuchung dazu. Für Fahrzeuge mit Sicherheitsprüfung wie schwere Lkw und Busse gilt diese Schonzeit nicht.",
    },
    {
      q: "Ab wann gibt es einen Punkt in Flensburg?",
      a: "Bei Pkw gibt es einen Punkt erst, wenn die HU um mehr als acht Monate überzogen ist. Dann werden 60 Euro Bußgeld fällig. Bei Fahrzeugen mit Sicherheitsprüfung kommt der Punkt laut ADAC schon ab mehr als vier Monaten. Einen weiteren Punkt kann es geben, wenn die Behörde den Betrieb des Fahrzeugs untersagt hat und Sie trotzdem fahren.",
    },
    {
      q: "Wird die HU rückdatiert, wenn ich zu spät komme?",
      a: "Nein. Laut ADAC wird die neue Plakette nicht rückdatiert, die nächste HU ist zwei volle Jahre nach dem tatsächlichen Prüftermin fällig. Wer im Oktober 2026 eine im Juni fällige HU nachholt, muss also erst im Oktober 2028 wieder zur Prüfung. Die Strafe und den Aufschlag für die Ergänzungsuntersuchung gleicht das nicht aus.",
    },
    {
      q: "Was passiert, wenn mein Auto bei der HU durchfällt?",
      a: "Das hängt von der Mängelklasse nach Anlage VIII StVZO ab. Bei geringen Mängeln gibt es die Plakette, die Mängel sind innerhalb eines Monats zu beheben. Bei erheblichen oder gefährlichen Mängeln gibt es keine Plakette, die Nachprüfung muss spätestens einen Monat nach dem Tag der HU erfolgen, sonst ist eine neue HU fällig. Ist das Fahrzeug verkehrsunsicher, wird die Plakette entfernt und die Zulassungsbehörde benachrichtigt.",
    },
    {
      q: "Kann ich Inspektion und HU in einem Termin erledigen?",
      a: "Wenn beides ansteht, ist das oft sinnvoll, weil bei der Inspektion ohnehin Bremsen, Flüssigkeiten und Verschleißteile geprüft werden. Geben Sie in Ihrer Anfrage an, dass Inspektion und HU fällig sind, dann wird der Termin entsprechend abgestimmt. Auffälligkeiten bekommen Sie vorab per Video, und Sie entscheiden, was gemacht wird. Mehr dazu unter [Inspektion & Wartung](/leistungen/inspektion-wartung).",
    },
  ],
  fazit:
    "Ein abgelaufener TÜV kostet bei Pkw in den ersten zwei Monaten kein Verwarnungsgeld, danach 15 bis 60 Euro und ab mehr als acht Monaten einen Punkt. Spürbarer ist ab dem dritten Monat der Aufschlag von 20 Prozent für die Ergänzungsuntersuchung, dazu kommt bei Mängeln die Nachprüfung. Wer die Frist überschritten hat, sollte deshalb zügig einen Termin machen und das Fahrzeug vorher auf typische HU-Mängel prüfen lassen. So bleibt es bei einem Anlauf bis zur neuen Plakette.",
  quellen: [
    {
      titel: "ADAC: HU überzogen oder durchgefallen – was nun? (Stand 20.05.2026)",
      url: "https://www.adac.de/rund-ums-fahrzeug/reparatur-pflege-wartung/hu-und-au/hu-ueberzogen-oder-durchgefallen/",
    },
    {
      titel: "ADAC: Kosten der Hauptuntersuchung (Stand 30.07.2026)",
      url: "https://www.adac.de/rund-ums-fahrzeug/reparatur-pflege-wartung/hu-und-au/tuev-kosten/",
    },
    {
      titel: "bussgeldkatalog.org: TÜV überziehen – Bußgelder (Stand 06.08.2026)",
      url: "https://www.bussgeldkatalog.org/tuev-ueberziehen/",
    },
    {
      titel: "bussgeldkatalog.org: Tatbestandskatalog TÜV (Stand 20.07.2026)",
      url: "https://www.bussgeldkatalog.org/tatbestandskatalog-tuev/",
    },
    {
      titel: "§ 29 StVZO – Untersuchung der Kraftfahrzeuge und Anhänger",
      url: "https://www.gesetze-im-internet.de/stvzo_2012/__29.html",
    },
    {
      titel: "Anlage VIII StVZO – Untersuchungsfristen und Mängelklassen",
      url: "https://www.gesetze-im-internet.de/stvzo_2012/anlage_viii.html",
    },
    {
      titel: "Anlage VIIIa StVZO – Durchführung der Hauptuntersuchung (Nr. 2.2 Ergänzungsuntersuchung)",
      url: "https://www.gesetze-im-internet.de/stvzo_2012/anlage_viiia.html",
    },
    {
      titel: "§ 36 StVZO – Bereifung und Laufflächen",
      url: "https://www.gesetze-im-internet.de/stvzo_2012/__36.html",
    },
    {
      titel: "TÜV Hessen: Folgen einer überzogenen Hauptuntersuchung",
      url: "https://www.tuev-hessen.de/2554/folgen-einer-ueberzogenen-hauptuntersuchung/",
    },
    {
      titel: "TÜV Rheinland: Pressemitteilung zum TÜV-Report 2026 (20.11.2025)",
      url: "https://www.presseportal.de/pm/31385/6162666",
    },
    {
      titel: "AUTO BILD: TÜV-Plakette lesen, Farben 2026 (15.01.2026)",
      url: "https://www.autobild.de/artikel/tuev-plakette-lesen-farben-2026-38861.html",
    },
  ],
};
