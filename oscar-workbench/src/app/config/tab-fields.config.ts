import { TabFieldConfig } from '../models/tab-config.model';

// ── ICD / HCC Tab Fields ──────────────────────────────────────────────────────
export const ICD_FIELD_CONFIG: TabFieldConfig[] = [
  // Row 1: 4 cols
  { key: 'icd',  label: 'ICD-10',      type: 'text',   placeholder: 'E11.65',   cols: 1, listId: 'icdList', required: true },
  { key: 'hcc',  label: 'HCC Cat',     type: 'text',   placeholder: '19',       cols: 1 },
  { key: 'raf',  label: 'RAF Wt',      type: 'text',   placeholder: '0.302',    cols: 1 },
  { key: 'dos',  label: 'DOS',         type: 'text',   placeholder: '09/14/24', cols: 1 },
  // Row 2: 2 cols
  { key: 'desc', label: 'Description', type: 'text',   placeholder: 'T2DM with Hyperglycemia', cols: 2, disabled: true },
  { key: 'src',  label: 'Evidence Source', type: 'select',
    options: ['PDF Page 1', 'Claims', 'Lab Result', 'Manual'], cols: 2 },
  // Row 3: 3 cols
  { key: 'conf',  label: 'Confidence',     type: 'select', options: ['High', 'Medium', 'Low'], cols: 1 },
  { key: 'notes', label: 'Coder Notes',    type: 'text',   placeholder: 'Notes...',            cols: 1 },
  { key: 'opp',   label: 'Opportunity Type', type: 'opp-lookup', cols: 1 },
];

// ── ICD Gaps Tab Fields ───────────────────────────────────────────────────────
export const GAPS_FIELD_CONFIG: TabFieldConfig[] = [
  // Row 1: 3 cols
  { key: 'icd',      label: 'ICD-10 Gap',  type: 'text',   placeholder: 'I50.22',    cols: 1, listId: 'icdList', required: true },
  { key: 'hcc',      label: 'HCC Cat',     type: 'text',   placeholder: '85',        cols: 1 },
  { key: 'type',     label: 'Gap Type',    type: 'select', options: ['Recapture', 'New Suspect', 'Potential'], cols: 1 },
  // Row 2: 2 cols
  { key: 'desc', label: 'Description',  type: 'text', placeholder: 'Chronic Systolic HF', cols: 2, disabled: true },
  { key: 'raf',  label: 'RAF Impact',   type: 'text', placeholder: '0.368',               cols: 2 },
  // Row 3: 3 cols
  { key: 'priority', label: 'Priority',   type: 'select', options: ['High', 'Medium', 'Low'], cols: 1 },
  { key: 'evidence', label: 'Evidence',   type: 'text',   placeholder: 'PDF p.1, Labs',     cols: 1 },
  { key: 'opp',      label: 'Opportunity Type', type: 'opp-lookup',                          cols: 1 },
];

// ── CPT Tab Fields ────────────────────────────────────────────────────────────
export const CPT_FIELD_CONFIG: TabFieldConfig[] = [
  // Row 1: 4 cols
  { key: 'cpt',   label: 'CPT Code',   type: 'text', placeholder: '99215',     cols: 1, listId: 'cptList', required: true },
  { key: 'mod',   label: 'Modifier',   type: 'text', placeholder: '25',        cols: 1 },
  { key: 'units', label: 'Units',      type: 'number', placeholder: '1',       cols: 1 },
  { key: 'dos',   label: 'DOS',        type: 'text', placeholder: '09/14/24',  cols: 1 },
  // Row 2: 3 cols
  { key: 'desc',  label: 'Description',    type: 'text', placeholder: 'Office visit, high complexity', cols: 2, disabled: true },
  { key: 'icd',   label: 'Linked ICD',     type: 'text', placeholder: 'E11.65, I50.22',               cols: 1 },
  { key: 'pos',   label: 'Place of Service', type: 'select',
    options: ['11 - Office', '21 - Inpatient', '22 - Outpatient'], cols: 1 },
  // Row 3: 3 cols
  { key: 'expected', label: 'Expected $',    type: 'text', placeholder: '285.00',  cols: 1 },
  { key: 'notes',    label: 'Coder Notes',   type: 'text', placeholder: 'Notes...',cols: 1 },
  { key: 'opp',      label: 'Opportunity Type', type: 'opp-lookup',               cols: 1 },
];

// ── CPT Gaps Tab Fields ───────────────────────────────────────────────────────
export const CPT_GAPS_FIELD_CONFIG: TabFieldConfig[] = [
  // Row 1: 3 cols
  { key: 'cpt',    label: 'CPT Gap',       type: 'text',   placeholder: '93000', cols: 1, listId: 'cptList', required: true },
  { key: 'reason', label: 'Gap Reason',    type: 'select', options: ['Missing Procedure', 'Under-coded', 'Missed Service'], cols: 1 },
  { key: 'impact', label: 'Revenue Impact',type: 'text',   placeholder: '$142.00', cols: 1 },
  // Row 2: 2 cols
  { key: 'desc',     label: 'Description',     type: 'text', placeholder: 'ECG not billed',      cols: 2, disabled: true },
  { key: 'evidence', label: 'Evidence',         type: 'text', placeholder: 'PDF p.2, Orders',    cols: 2 },
  // Row 3: 2 cols
  { key: 'priority', label: 'Priority',         type: 'select', options: ['High', 'Medium', 'Low'], cols: 1 },
  { key: 'opp',      label: 'Opportunity Type', type: 'opp-lookup',                                  cols: 1 },
];

// Map tab id → config
export const TAB_FIELD_CONFIGS: { [tabId: string]: TabFieldConfig[] } = {
  hcc:     ICD_FIELD_CONFIG,
  gaps:    GAPS_FIELD_CONFIG,
  cpt:     CPT_FIELD_CONFIG,
  cptgaps: CPT_GAPS_FIELD_CONFIG,
};
