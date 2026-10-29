import type { Artikel } from "./types";

export const artikel: Artikel = {
  slug: "achsvermessung-kosten",
  kategorie: "Reifen & Fahrwerk",
  keyword: "achsvermessung kosten",
  suchvolumen: "3.600",
  titel: "Achsvermessung: Kosten, Dauer und wann sie nötig ist",
  metaTitle: "Achsvermessung Kosten: Preise, Dauer, Anlässe",
  metaDescription:
    "Was kostet eine Achsvermessung, wie lange dauert sie und wann ist sie nötig? Richtwerte mit Quellen, Anzeichen-Tabelle und Rechnung zum Reifenabrieb.",
  teaser:
    "Richtwerte für Achsvermessung und Spureinstellung mit Quellen, typische Anlässe und eine Tabelle, welche Anzeichen wirklich auf die Achsgeometrie hindeuten.",
  leistung: "reifenservice-achsvermessung",
  datePublished: "2026-10-28",
  dateModified: "2026-10-28",
  antwort:
    "Eine Achsvermessung kostet laut AUTO ZEITUNG je nach Fahrzeug etwa 50 bis 150 Euro (Stand Oktober 2025). Muss die Spur anschließend eingestellt werden, nennt die Zeitschrift dafür meist 70 bis 150 Euro. Die Messung selbst dauert rund 15 bis 30 Minuten. Nötig ist sie nach Fahrwerksarbeiten, einem harten Bordsteinkontakt oder bei einseitig abgefahrenen Reifen.",
  kernpunkte: [
    "**Richtwert:** Fachmedien nennen für die Achsvermessung etwa 50 bis 150 Euro, für Kleinwagen eher am unteren, für große SUV eher am oberen Ende.",
    "**Messen ist nicht Einstellen:** Die Vermessung zeigt die Abweichung, die Einstellung korrigiert sie. Die Einstellung kostet oft extra und hängt vom Aufwand ab.",
    "**Typische Anlässe:** Bordsteinkontakt, Tausch von Spurstange oder Querlenker, Tieferlegung, neue Reifen nach ungleichem Abrieb.",
    "**Dauer:** Die Messung dauert rund 15 bis 30 Minuten, mit Einstellung etwa eine Stunde, mit Kalibrierung von Assistenzsystemen bis zu zwei Stunden.",
    "**Nicht jedes Symptom ist die Spur:** Lenkradzittern deutet eher auf eine Unwucht, Ziehen beim Bremsen eher auf die Bremse.",
  ],
  abschnitte: [
    {
      id: "was-kostet-eine-achsvermessung",
      titel: "Was kostet eine Achsvermessung?",
      blocks: [
        {
          type: "p",
          text: "Eine Achsvermessung kostet nach Angaben mehrerer Fachmedien und Werkstattportale meist zwischen 50 und 150 Euro. Den Ausschlag geben drei Dinge: die Fahrzeugklasse, das Messverfahren und die Frage, ob nach der Messung auch eingestellt werden muss. Kleinwagen liegen am unteren Ende, große SUV und Sportwagen am oberen.",
        },
        {
          type: "table",
          caption:
            "Veröffentlichte Richtwerte für Achsvermessung und Spureinstellung in Deutschland. Keine Preise von KFZ Gengenbach, sondern Angaben der genannten Quellen.",
          head: ["Quelle (Stand)", "Achsvermessung", "Spureinstellung / mit Einstellung"],
          rows: [
            ["AUTO ZEITUNG (23.10.2025)", "ca. 50–⁠150 €, reine Spurvermessung teils ab ca. 30 €", "meist 70–⁠150 €"],
            ["AUTO BILD (20.10.2024)", "ab rund 60 €", "große SUV/Sportwagen inkl. Einstellung meist nicht viel mehr als 150 €"],
            ["kfzteile24 Magazin (ohne Datum)", "Kleinwagen ab ca. 50 €, Limousinen und SUV ca. 70–⁠140 €", "vorher klären, ob die Einstellung enthalten ist"],
            ["repareo (ohne Datum)", "ab ca. 25 €; 3D-Verfahren 25–⁠50 €, Laser 60–⁠100 €", "ca. 40–⁠150 €, stark aufwandsabhängig"],
          ],
        },
        {
          type: "p",
          text: "Die Spannen gehen auseinander, weil manche Angebote nur die Messung umfassen und andere die Einstellung gleich mit. Fragen Sie deshalb immer, ob der genannte Betrag **Messung und Einstellung** abdeckt. Festgerostete Einstellschrauben oder ein verbogenes Bauteil kosten zusätzlich, weil dann erst repariert werden muss, bevor sich etwas einstellen lässt. Ein seriöser Preis steht deshalb erst fest, wenn das Fahrzeug auf dem Messstand war.",
        },
        {
          type: "p",
          text: "Bei Transportern und Wohnmobilen auf Transporterbasis richtet sich der Aufwand nach Achsbauart und Fahrzeuggröße. Die oben genannten Richtwerte beziehen sich auf Pkw.",
        },
      ],
    },
    {
      id: "was-wird-bei-der-achsvermessung-gemessen",
      titel: "Was wird bei der Achsvermessung gemessen?",
      blocks: [
        {
          type: "p",
          text: "Bei der Achsvermessung erfasst ein Messsystem die Winkel, in denen die Räder zur Straße und zueinander stehen, und vergleicht sie mit den Sollwerten des Herstellers. Moderne Anlagen arbeiten mit Laser oder als 3D-System mit Reflektoren an den Rädern und einer Kamera. Die wichtigsten Messgrößen sind:",
        },
        {
          type: "ul",
          items: [
            "**Spur:** Stellung der Räder einer Achse zueinander, von oben betrachtet. Zeigen die Vorderkanten leicht nach innen, spricht man von Vorspur, nach außen von Nachspur. Eine falsche Spur ist die häufigste Ursache für Schiefziehen und abgefahrene Reifenschultern.",
            "**Sturz:** Neigung des Rads von vorn betrachtet. Steht das Rad oben nach innen geneigt, ist der Sturz negativ. Ein falscher Sturz lässt den Reifen einseitig innen oder außen abfahren.",
            "**Nachlauf:** Neigung der Lenkachse von der Seite betrachtet. Er sorgt dafür, dass das Lenkrad nach einer Kurve von selbst in die Mitte zurückläuft und das Auto stabil geradeaus fährt.",
            "**Spreizung und weitere Werte:** Laut kfzteile24 gehören auch Spreizung, Spurdifferenzwinkel, Rad- und Achsversatz zu einer vollständigen Messung.",
          ],
        },
        {
          type: "p",
          text: "Für die Messung muss das Fahrzeug richtig vorbereitet sein: Reifendruck auf Sollwert, Lenkrad gerade, keine schwere Zuladung. Ein falscher Luftdruck verfälscht das Ergebnis, deshalb wird er vorher geprüft.",
        },
      ],
    },
    {
      id: "achsvermessung-oder-spureinstellung-was-ist-der-unterschied",
      titel: "Achsvermessung oder Spureinstellung: Was ist der Unterschied?",
      blocks: [
        {
          type: "p",
          text: "Achsvermessung und Spureinstellung sind zwei Arbeitsschritte: Die Achsvermessung stellt fest, ob und wie weit die Achsgeometrie vom Sollwert abweicht, die Spureinstellung korrigiert die Abweichung. Ohne vorherige Messung lässt sich nicht einstellen, ohne anschließende Einstellung bringt die Messung nur eine Diagnose.",
        },
        {
          type: "p",
          text: "An der Vorderachse ist die Spur bei nahezu allen Pkw über die Spurstangen verstellbar. Sturz und Nachlauf dagegen lassen sich je nach Achskonstruktion nur eingeschränkt oder gar nicht einstellen. Zeigt die Messung einen falschen Sturz an einer Achse ohne Einstellmöglichkeit, ist häufig ein Bauteil verbogen, zum Beispiel ein Querlenker oder ein Federbein nach einem Bordsteinkontakt. Dann hilft keine Einstellung, sondern nur der Tausch des Teils und danach eine erneute Vermessung.",
        },
        {
          type: "p",
          text: "Für die Kosten heißt das: Eine Messung mit Werten im Toleranzbereich ist der günstigste Fall. Muss eingestellt werden, steigt der Aufwand. Findet sich ein beschädigtes Teil, kommt eine [Fahrwerksreparatur](/leistungen/reparatur-diagnose) hinzu. Lassen Sie sich deshalb das Messprotokoll mit Ist- und Sollwerten zeigen. Es dokumentiert, was vorher falsch war und ob nach der Einstellung alles im Toleranzbereich liegt.",
        },
      ],
    },
    {
      id: "wann-ist-eine-achsvermessung-noetig",
      titel: "Wann ist eine Achsvermessung nötig?",
      blocks: [
        {
          type: "p",
          text: "Eine Achsvermessung ist nötig, sobald sich an der Achsgeometrie etwas verändert haben kann, entweder durch Arbeiten am Fahrwerk oder durch einen Schlag aufs Rad. Fachmedien und Reifenhändler nennen übereinstimmend diese Anlässe:",
        },
        {
          type: "ul",
          items: [
            "**Nach Fahrwerksarbeiten:** Tausch von Spurstange, Spurstangenkopf, Querlenker, Traggelenk, Stoßdämpfer oder Radlager. Neue Teile liegen zwar in der Toleranz, weichen aber vom alten Bauteil ab.",
            "**Nach einem Schlag aufs Rad:** harter Bordsteinkontakt beim Einparken, ein tiefes Schlagloch, ein Unfall mit Radbeteiligung.",
            "**Nach Umbauten:** Tieferlegung, Sportfahrwerk, Spurverbreiterung, Räder in anderer Dimension oder größere Felgen.",
            "**Bei neuen Reifen nach ungleichem Abrieb:** Waren die alten Reifen einseitig abgefahren, fährt der neue Satz sonst genauso ab.",
            "**Bei Anzeichen im Fahrbetrieb:** Schiefziehen, schief stehendes Lenkrad, einseitiger Reifenabrieb (siehe Tabelle im nächsten Abschnitt).",
          ],
        },
        {
          type: "p",
          text: "Für vorbeugende Prüfungen gibt es keine gesetzliche Frist. reifen.com empfiehlt eine Kontrolle einmal jährlich oder alle 20.000 Kilometer, AUTO BILD vorsorglich alle zwei Jahre. Ein Schlagloch nach dem Winter oder ein hoher Bordstein in einer engen Ortsdurchfahrt reicht oft schon, damit die Spur nicht mehr stimmt. Wer in Gengenbach und im Kinzigtal ohnehin im Frühjahr die Sommerreifen montieren lässt, kann die Vermessung mit dem [Reifenservice und der Achsvermessung](/leistungen/reifenservice-achsvermessung) in einem Termin verbinden.",
        },
        {
          type: "p",
          text: "Ausgeschlagene Gelenke und Spiel in der Lenkung sind außerdem typische Mängel bei der [Hauptuntersuchung](/leistungen/hu-au). Steht die HU ohnehin an oder ist sie schon überzogen ([was dann droht](/ratgeber/tuev-abgelaufen-strafe)), lohnt es sich, das Fahrwerk vorher prüfen zu lassen.",
        },
      ],
    },
    {
      id: "anzeichen-fuer-eine-verstellte-spur",
      titel: "Welche Anzeichen deuten auf eine verstellte Spur hin?",
      blocks: [
        {
          type: "p",
          text: "Eine verstellte Spur zeigt sich vor allem durch drei Anzeichen: Das Auto zieht zur Seite, das Lenkrad steht bei Geradeausfahrt schief, und die Reifen fahren innen oder außen einseitig ab. Nicht jedes ähnliche Symptom hat aber mit der Achsgeometrie zu tun. Die folgende Übersicht hilft einzuschätzen, ob eine Achsvermessung der richtige erste Schritt ist.",
        },
        {
          type: "table",
          caption:
            "Häufige Anzeichen, mögliche Ursachen und ob eine Achsvermessung das Problem löst. Allgemeine Orientierung, keine Diagnose für den Einzelfall.",
          head: ["Anzeichen", "Wahrscheinliche Ursache", "Hilft eine Achsvermessung?"],
          rows: [
            ["Auto zieht bei gerade gehaltenem Lenkrad zur Seite", "Spur oder Sturz verstellt, ungleicher Reifendruck, Reifen mit unterschiedlichem Verschleiß", "Ja, nach Prüfung des Reifendrucks"],
            ["Auto zieht nur beim Bremsen zur Seite", "Bremse: klemmender Bremssattel, ungleich verschlissene Beläge", "Nein, zuerst Bremse prüfen"],
            ["Lenkrad steht bei Geradeausfahrt schief", "Spur verstellt, etwa nach Bordsteinkontakt oder Tausch der Spurstange", "Ja"],
            ["Reifen innen oder außen einseitig abgefahren", "Sturz oder Spur außerhalb der Toleranz, eventuell verbogenes Bauteil", "Ja, bei verbogenem Teil erst nach dessen Tausch"],
            ["Sägezahnartiger Abrieb am Profil", "Spur verstellt, verschlissene Stoßdämpfer", "Teilweise, Dämpfer mitprüfen"],
            ["Lenkrad zittert bei bestimmten Geschwindigkeiten", "Unwucht der Räder", "Nein, Räder auswuchten"],
            ["Lenkrad läuft nach der Kurve schlecht zurück", "Nachlauf, schwergängige Lenkung oder Gelenke", "Teilweise, Lenkung mitprüfen"],
            ["Poltern oder Klopfen über Unebenheiten", "Ausgeschlagene Gelenke, Lager oder Koppelstangen", "Nein, erst reparieren, dann vermessen"],
          ],
        },
        {
          type: "p",
          text: "Die Reihenfolge ist entscheidend: Erst wird geprüft, ob Bremse, Reifen oder ein ausgeschlagenes Gelenk die Ursache sind. Eine Achsvermessung an einem Fahrwerk mit Spiel liefert keine verlässlichen Werte, und eine Einstellung hält dann nicht.",
        },
      ],
    },
    {
      id: "wie-lange-dauert-eine-achsvermessung",
      titel: "Wie lange dauert eine Achsvermessung?",
      blocks: [
        {
          type: "p",
          text: "Eine Achsvermessung dauert laut AUTO ZEITUNG etwa 15 bis 30 Minuten, je nach Messverfahren. Das 3D-Verfahren mit Reflektoren und Kamera ist schneller, die Laservermessung kann laut repareo und Quick zwischen 30 Minuten und zwei Stunden dauern. Muss anschließend eingestellt werden, rechnet AUTO BILD mit rund einer Stunde insgesamt.",
        },
        {
          type: "p",
          text: "Länger wird es, wenn Einstellschrauben festsitzen oder ein Bauteil erst getauscht werden muss. Planen Sie bei älteren Fahrzeugen oder nach einem Winter mit viel Streusalz deshalb etwas Puffer ein.",
        },
        {
          type: "hinweis",
          titel: "Fahrerassistenzsysteme nach der Einstellung",
          text: "Spurhalte- und Abstandsassistenten sind auf die Fahrwerkseinstellung abgestimmt. Ändert sich die Spur, kann laut AUTO BILD eine Kalibrierung von Kamera und Sensoren nötig sein; die Gesamtdauer steigt dann auf bis zu zwei Stunden. Ob und wie kalibriert wird, gibt der Hersteller für das jeweilige Modell vor. Sprechen Sie das bei der Terminanfrage an, wenn Ihr Fahrzeug solche Systeme hat.",
        },
        {
          type: "p",
          text: "Bei vielen Fahrzeugen mit ESP wird nach der Einstellung außerdem der Lenkwinkelsensor neu angelernt, damit das System die neue Geradeausstellung kennt. Auch das gibt der Hersteller vor.",
        },
      ],
    },
    {
      id: "wann-lohnt-sich-eine-achsvermessung",
      titel: "Wann lohnt sich eine Achsvermessung? Eine Beispielrechnung",
      blocks: [
        {
          type: "p",
          text: "Eine Achsvermessung lohnt sich, sobald die Reifen sichtbar ungleich abfahren, weil der vorzeitige Reifenverschleiß schnell mehr kostet als die Vermessung. Vergölst schreibt, dass eine falsche Achsgeometrie die Lebensdauer der Reifen im Extremfall um bis zu 80 Prozent verkürzen kann. Wie sich schon ein geringerer Mehrverschleiß auswirkt, zeigt die folgende Rechnung.",
        },
        {
          type: "table",
          caption:
            "Beispielrechnung mit angenommenen Werten, nur zur Veranschaulichung: zwei Vorderreifen zu je 100 € (ohne Montage), geplante Laufleistung 40.000 km, wegen verstellter Spur nur 25.000 km.",
          head: ["Annahme", "Spur korrekt", "Spur verstellt"],
          rows: [
            ["Laufleistung der Vorderreifen", "40.000 km", "25.000 km"],
            ["Reifenkosten je 1.000 km (2 × 100 €)", "5,00 €", "8,00 €"],
            ["Reifenkosten auf 40.000 km", "200 €", "320 €"],
            ["Mehrkosten nur für Reifen", "–", "120 € zuzüglich zusätzlicher Montage"],
          ],
        },
        {
          type: "p",
          text: "Schon in diesem zurückhaltenden Beispiel übersteigt der Mehrverschleiß die veröffentlichten Richtwerte für eine Achsvermessung. Hinzu kommen Punkte, die sich schwer in Euro fassen lassen: ein Auto, das ständig gegengelenkt werden muss, und abgefahrene Reifenschultern, die bei Nässe schlechter haften. Setzen Sie für eine eigene Rechnung den Preis Ihrer Reifen und die Laufleistung ein, die Sie bisher erreicht haben.",
        },
        {
          type: "p",
          text: "Umgekehrt gilt: Fährt das Auto geradeaus, steht das Lenkrad gerade und sind die Reifen gleichmäßig abgefahren, gibt es keinen Anlass für eine Vermessung außer Fahrwerksarbeiten oder einem Schlag aufs Rad.",
        },
      ],
    },
  ],
  zwischenCta: {
    nachAbschnitt: 2,
    titel: "Reifen einseitig abgefahren oder Lenkrad schief?",
    text: "Schicken Sie uns ein Foto der Reifenlauffläche per WhatsApp oder über das Anfrageformular. Wir geben Ihnen eine erste Einschätzung, ob eine Achsvermessung sinnvoll ist, und vermessen Pkw und Transporter bis 4,5 t direkt in Gengenbach.",
  },
  faq: [
    {
      q: "Wie viel kostet eine Achsvermessung nur vorne?",
      a: "Die veröffentlichten Richtwerte unterscheiden meist nicht zwischen Vorderachse und allen vier Rädern, fragen Sie deshalb beim Angebot nach dem Umfang. Bei modernen Fahrzeugen mit Mehrlenker-Hinterachse ist eine reine Vorderachsvermessung aber wenig aussagekräftig, weil die Hinterachse die Fahrtrichtung mitbestimmt. Eine Vermessung aller vier Räder zeigt, ob das Fahrzeug insgesamt gerade läuft.",
    },
    {
      q: "Ist eine Spureinstellung das Gleiche wie eine Achsvermessung?",
      a: "Nein. Die Achsvermessung misst die Winkel der Räder und vergleicht sie mit den Herstellerwerten. Die Spureinstellung korrigiert anschließend die Spur über die Spurstangen. Eine Einstellung ohne vorherige Messung ist nicht möglich. Im Alltag werden beide Begriffe oft gleichgesetzt, deshalb sollten Sie bei einem Angebot nachfragen, ob die Einstellung enthalten ist.",
    },
    {
      q: "Muss ich nach dem Reifenwechsel die Achsen vermessen lassen?",
      a: "Nach einem normalen Radwechsel von Sommer- auf Winterräder nicht zwingend. Sinnvoll ist eine Vermessung, wenn die alten Reifen einseitig abgefahren waren, wenn Sie Reifen in einer anderen Größe oder größere Felgen montieren oder wenn das Auto nach dem Wechsel zur Seite zieht.",
    },
    {
      q: "Kann ich eine Achsvermessung selbst machen?",
      a: "Eine grobe Kontrolle ist möglich: Läuft das Auto auf gerader, ebener Straße geradeaus? Steht das Lenkrad mittig? Sind die Reifen innen und außen gleich abgefahren? Für eine genaue Messung von Spur, Sturz und Nachlauf in Grad und Winkelminuten braucht es aber einen Messstand und die Sollwerte des Herstellers. Eine Einstellung nach Augenmaß führt meist zu neuem Reifenverschleiß.",
    },
    {
      q: "Kann jede Werkstatt eine Achsvermessung durchführen?",
      a: "Nein, nur Werkstätten mit einem Achsmessstand. Fragen Sie bei Transportern und Wohnmobilen zusätzlich nach, ob der Messstand für Ihr Fahrzeuggewicht und Ihren Radstand ausgelegt ist. Wir vermessen Pkw und Transporter bis 4,5 t zulässiges Gesamtgewicht. Wichtig ist außerdem, dass die Werkstatt die Sollwerte des Herstellers für Ihr Modell hinterlegt hat und Ihnen ein Messprotokoll aushändigt.",
    },
  ],
  fazit:
    "Eine Achsvermessung kostet laut Fachmedien meist 50 bis 150 Euro, die Einstellung kann hinzukommen. Die Messung dauert rund eine Viertel- bis halbe Stunde, mit Einstellung etwa eine Stunde. Nötig ist sie nach Fahrwerksarbeiten, einem harten Bordsteinkontakt, bei Umbauten und immer dann, wenn das Auto zieht, das Lenkrad schief steht oder die Reifen einseitig abfahren. Zittern, Poltern oder Ziehen beim Bremsen haben dagegen meist andere Ursachen. Bei sichtbar ungleichem Reifenabrieb kann sich die Vermessung schon über die eingesparten Reifen rechnen.",
  quellen: [
    {
      titel: "AUTO ZEITUNG: Achsvermessung – Ablauf, Kosten und wann sie nötig ist (23.10.2025)",
      url: "https://www.autozeitung.de/achsvermessung-spureinstellung-205313.html",
    },
    {
      titel: "AUTO BILD: Achsvermessung – Kosten, Dauer und Ablauf (20.10.2024)",
      url: "https://www.autobild.de/artikel/achsvermessung-kosten-dauer-ablauf-8507407.html",
    },
    {
      titel: "kfzteile24 Magazin: Achsvermessung",
      url: "https://www.kfzteile24.de/magazin/werkstatt-service/achsvermessung",
    },
    {
      titel: "repareo: Achsvermessung – Kosten und Ablauf",
      url: "https://www.repareo.de/achsvermessung/",
    },
    {
      titel: "reifen.com: Achsvermessung – Infos und Tipps",
      url: "https://www.reifen.com/de-de/infos-tipps/auto/reifen/achsvermessung",
    },
    {
      titel: "Vergölst: Achsvermessung – Kosten",
      url: "https://vergoelst.de/achsvermessung-kosten.html",
    },
    {
      titel: "Quick Reifendiscount: Achsvermessung",
      url: "https://www.quick.de/reifenservice/achsvermessung",
    },
  ],
};
