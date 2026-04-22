export interface OppOption {
  label: string;
  type: 'group' | 'subgroup' | 'option';
  value?: string;
  depth: number;
  id?: string;
  parent?: string;
}

export const OPPORTUNITY_OPTIONS: OppOption[] = [
  { label: 'Coding Opportunity', type: 'group', depth: 0, id: 'grp1' },
  { label: 'Cdi Disagree To Coder - ICD', type: 'option', value: 'Coding Opportunity / Cdi Disagree To Coder - ICD', depth: 1, parent: 'grp1' },
  { label: 'HCC', type: 'group', depth: 0, id: 'grp2' },
  { label: 'Hierarchical Condition Category', type: 'subgroup', depth: 1, id: 'sub1', parent: 'grp2' },
  { label: 'HCC - Radiology or Lab', type: 'option', value: 'HCC / Hierarchical Condition Category / HCC - Radiology or Lab', depth: 2, parent: 'sub1' },
  { label: 'HCC - Conditions with Active MEAT', type: 'option', value: 'HCC / Hierarchical Condition Category / HCC - Conditions with Active MEAT', depth: 2, parent: 'sub1' },
  { label: 'HCC - Specificity', type: 'option', value: 'HCC / Hierarchical Condition Category / HCC - Specificity', depth: 2, parent: 'sub1' },
  { label: 'HCC - Combination codes', type: 'option', value: 'HCC / Hierarchical Condition Category / HCC - Combination codes', depth: 2, parent: 'sub1' },
  { label: 'HCC - Status codes', type: 'option', value: 'HCC / Hierarchical Condition Category / HCC - Status codes', depth: 2, parent: 'sub1' },
  { label: 'HCC - Chronic condition without active MEAT', type: 'option', value: 'HCC / Hierarchical Condition Category / HCC - Chronic condition without active MEAT', depth: 2, parent: 'sub1' },
];
