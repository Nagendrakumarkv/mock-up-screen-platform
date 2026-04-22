export interface TabFieldConfig {
  key: string;
  label: string;
  type: 'text' | 'select' | 'opp-lookup' | 'number' | 'textarea';
  placeholder?: string;
  options?: string[];
  cols?: number;       // grid column span (1-4 in a cols-4 grid)
  disabled?: boolean;
  listId?: string;     // for datalist autocomplete
  editOnly?: boolean;  // only show in edit form
  addOnly?: boolean;   // only show in add form
  required?: boolean;
}
