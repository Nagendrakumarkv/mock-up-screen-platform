export interface Encounter {
  id: string;
  dos: string;
  provider: string;
  tags: string[];
  status: 'new' | 'pending' | 'done';
}

export interface Patient {
  name: string;
  dob: string;
  mrn: string;
  plan: string;
}

export interface PatientStats {
  raf: string;
  hccs: number;
  gaps: number;
  cpts: number;
  reviewYear: string;
}
