import { navData } from "@/lib/navigation";
import { HeaderClient } from "./HeaderClient";

/** Server-Hülle: baut die schlanken Menüdaten, damit keine Artikeltexte ins Client-Bundle wandern. */
export function Header() {
  return <HeaderClient nav={navData()} />;
}
