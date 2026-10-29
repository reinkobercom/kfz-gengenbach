import { seite as fahrzeugverkauf } from "./fahrzeugverkauf";
import { seite as huAu } from "./hu-au";
import { seite as inspektionWartung } from "./inspektion-wartung";
import { seite as karosserieUnfallinstandsetzung } from "./karosserie-unfallinstandsetzung";
import { seite as lackierungSmartRepair } from "./lackierung-smart-repair";
import { seite as motorinstandsetzung } from "./motorinstandsetzung";
import { seite as reifenserviceAchsvermessung } from "./reifenservice-achsvermessung";
import { seite as reparaturDiagnose } from "./reparatur-diagnose";
import { seite as transporterSprinter } from "./transporter-sprinter";
import type { LeistungSeite } from "./types";

export type { LeistungSeite } from "./types";

/** Seiteninhalte je Leistungs-Slug. Fehlt ein Eintrag, zeigt die Seite das Grundlayout. */
export const leistungSeiten: Partial<Record<string, LeistungSeite>> = {
  "fahrzeugverkauf": fahrzeugverkauf,
  "hu-au": huAu,
  "inspektion-wartung": inspektionWartung,
  "karosserie-unfallinstandsetzung": karosserieUnfallinstandsetzung,
  "lackierung-smart-repair": lackierungSmartRepair,
  "motorinstandsetzung": motorinstandsetzung,
  "reifenservice-achsvermessung": reifenserviceAchsvermessung,
  "reparatur-diagnose": reparaturDiagnose,
  "transporter-sprinter": transporterSprinter,
};
