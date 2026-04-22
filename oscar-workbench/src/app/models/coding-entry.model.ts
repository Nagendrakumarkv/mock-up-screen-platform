export interface HccEntry {
  icd: string;
  desc: string;
  hcc: string;
  raf: string;
  dos: string;
  conf: string;
  src: string;
  notes?: string;
  opp?: string;
}

export interface GapEntry {
  icd: string;
  desc: string;
  hcc: string;
  raf: string;
  priority: string;
  type: string;
  evidence?: string;
  opp?: string;
}

export interface CptEntry {
  cpt: string;
  desc: string;
  mod: string;
  units: number;
  dos: string;
  icd: string;
  pos: string;
  notes?: string;
  expected?: string;
  opp?: string;
}

export interface CptGapEntry {
  cpt: string;
  desc: string;
  reason: string;
  impact: string;
  priority: string;
  evidence?: string;
  opp?: string;
}

export type CodingEntry = HccEntry | GapEntry | CptEntry | CptGapEntry;
