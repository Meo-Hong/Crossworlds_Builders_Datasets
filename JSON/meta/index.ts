import lcRound7 from "./LC_round7.json";
import wcs2026 from "./WCS_2026.json";
import type lcRound1 from "./LC_round1.json";
import type lcRound2 from "./LC_round2.json";
import type lcRound3 from "./LC_round3.json";
import type lcRound4 from "./LC_round4.json";
import type lcRound5 from "./LC_round5.json";
import type lcRound6 from "./LC_round6.json";

export type MetaDoc =
  | typeof lcRound7
  | typeof lcRound6
  | typeof lcRound5
  | typeof lcRound4
  | typeof lcRound3
  | typeof lcRound2
  | typeof lcRound1;

export type MetaRoundOption = { id: string; series: string; round: number };

const META_LOADERS: Record<string, () => Promise<MetaDoc>> = {
  LC_round7: () => Promise.resolve(lcRound7),
  LC_round6: () => import("./LC_round6.json").then((mod) => mod.default),
  LC_round5: () => import("./LC_round5.json").then((mod) => mod.default),
  LC_round4: () => import("./LC_round4.json").then((mod) => mod.default),
  LC_round3: () => import("./LC_round3.json").then((mod) => mod.default),
  LC_round2: () => import("./LC_round2.json").then((mod) => mod.default),
  LC_round1: () => import("./LC_round1.json").then((mod) => mod.default),
};

export const LATEST_META_DOC: MetaDoc = lcRound7;

export const META_ROUND_OPTIONS: MetaRoundOption[] = [7, 6, 5, 4, 3, 2, 1].map((round) => ({
  id: `LC_round${round}`,
  series: "LC",
  round,
}));

export function loadMetaDoc(id: string): Promise<MetaDoc | undefined> {
  const load = META_LOADERS[id];
  return load ? load() : Promise.resolve(undefined);
}

const WCS_DOCS = [wcs2026] as const;

export type WcsDoc = (typeof WCS_DOCS)[number];

export const WCS_EVENTS: WcsDoc[] = [...WCS_DOCS].sort((a, b) => b.year - a.year);
