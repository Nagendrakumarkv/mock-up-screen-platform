import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HccEntry, GapEntry, CptEntry, CptGapEntry } from '../models/coding-entry.model';

@Injectable({ providedIn: 'root' })
export class CodingDataService {

  private _hccData = new BehaviorSubject<HccEntry[]>([
    { icd: 'E11.65', desc: 'T2DM with Hyperglycemia',           hcc: '19',  raf: '0.302', dos: '09/14/24', conf: 'High',   src: 'PDF p.1' },
    { icd: 'I50.22', desc: 'Chronic Systolic HF, compensated',  hcc: '85',  raf: '0.368', dos: '09/14/24', conf: 'High',   src: 'PDF p.1' },
    { icd: 'N18.3',  desc: 'CKD Stage 3a',                      hcc: '137', raf: '0.236', dos: '09/14/24', conf: 'High',   src: 'PDF p.1' },
    { icd: 'I10',    desc: 'Essential Hypertension',             hcc: '0',   raf: '0.000', dos: '09/14/24', conf: 'High',   src: 'Claims' },
    { icd: 'J44.1',  desc: 'COPD with Acute Exacerbation',      hcc: '111', raf: '0.335', dos: '07/22/24', conf: 'Medium', src: 'Claims' },
  ]);

  private _gapData = new BehaviorSubject<GapEntry[]>([
    { icd: 'I50.22', desc: 'Systolic HF not recaptured this year',           hcc: '85',  raf: '0.368', priority: 'High',   type: 'Recapture' },
    { icd: 'E13.65', desc: 'Secondary DM with HGC - potential upgrade',     hcc: '18',  raf: '0.318', priority: 'Medium', type: 'Potential' },
    { icd: 'G47.33', desc: 'Obstructive Sleep Apnea - see labs',            hcc: '0',   raf: '0.000', priority: 'Low',    type: 'New Suspect' },
    { icd: 'I25.10', desc: 'Atherosclerotic CAD - prior hx noted',          hcc: '86',  raf: '0.298', priority: 'High',   type: 'Recapture' },
    { icd: 'N18.4',  desc: 'CKD Stage 4 - eGFR trending down',             hcc: '136', raf: '0.289', priority: 'Medium', type: 'Potential' },
  ]);

  private _cptData = new BehaviorSubject<CptEntry[]>([
    { cpt: '99215', desc: 'Office visit, high complexity', mod: '25', units: 1, dos: '09/14/24', icd: 'E11.65', pos: '11' },
    { cpt: '93000', desc: 'ECG, routine',                  mod: '',   units: 1, dos: '09/14/24', icd: 'I50.22', pos: '11' },
    { cpt: '99417', desc: 'Prolonged service 15min',       mod: '',   units: 2, dos: '09/14/24', icd: 'E11.65', pos: '11' },
  ]);

  private _cptGapData = new BehaviorSubject<CptGapEntry[]>([
    { cpt: '99490', desc: 'Chronic Care Management not billed',   reason: 'Missing Procedure', impact: '$42.50', priority: 'High' },
    { cpt: '99484', desc: 'Behavioral integration not captured',  reason: 'Under-coded',       impact: '$68.00', priority: 'Medium' },
    { cpt: '99091', desc: 'Remote monitoring data not billed',    reason: 'Missed Service',    impact: '$57.80', priority: 'High' },
    { cpt: 'G2211', desc: 'Longitudinal care add-on missing',     reason: 'Missing Procedure', impact: '$16.00', priority: 'Low' },
  ]);

  hccData$    = this._hccData.asObservable();
  gapData$    = this._gapData.asObservable();
  cptData$    = this._cptData.asObservable();
  cptGapData$ = this._cptGapData.asObservable();

  // ── HCC ──
  getHccData()   { return this._hccData.getValue(); }
  addHcc(e: HccEntry)    { this._hccData.next([...this._hccData.getValue(), e]); }
  updateHcc(i: number, e: HccEntry) { const d = [...this._hccData.getValue()]; d[i] = e; this._hccData.next(d); }
  removeHcc(i: number)   { const d = [...this._hccData.getValue()]; d.splice(i, 1); this._hccData.next(d); }

  // ── Gaps ──
  getGapData()   { return this._gapData.getValue(); }
  addGap(e: GapEntry)    { this._gapData.next([...this._gapData.getValue(), e]); }
  updateGap(i: number, e: GapEntry) { const d = [...this._gapData.getValue()]; d[i] = e; this._gapData.next(d); }
  removeGap(i: number)   { const d = [...this._gapData.getValue()]; d.splice(i, 1); this._gapData.next(d); }

  // ── CPT ──
  getCptData()   { return this._cptData.getValue(); }
  addCpt(e: CptEntry)    { this._cptData.next([...this._cptData.getValue(), e]); }
  updateCpt(i: number, e: CptEntry) { const d = [...this._cptData.getValue()]; d[i] = e; this._cptData.next(d); }
  removeCpt(i: number)   { const d = [...this._cptData.getValue()]; d.splice(i, 1); this._cptData.next(d); }

  // ── CPT Gaps ──
  getCptGapData() { return this._cptGapData.getValue(); }
  addCptGap(e: CptGapEntry)    { this._cptGapData.next([...this._cptGapData.getValue(), e]); }
  updateCptGap(i: number, e: CptGapEntry) { const d = [...this._cptGapData.getValue()]; d[i] = e; this._cptGapData.next(d); }
  removeCptGap(i: number)   { const d = [...this._cptGapData.getValue()]; d.splice(i, 1); this._cptGapData.next(d); }
}
