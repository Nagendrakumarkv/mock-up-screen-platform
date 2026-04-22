import { Injectable } from '@angular/core';
import { TabFieldConfig } from '../models/tab-config.model';
import { TAB_FIELD_CONFIGS } from '../config/tab-fields.config';

@Injectable({ providedIn: 'root' })
export class TabConfigService {
  getTabConfig(tabId: string): TabFieldConfig[] {
    return TAB_FIELD_CONFIGS[tabId] || [];
  }

  /** Group fields by row based on cols hint (sum <= 4 = same row, else new row) */
  groupFieldsByRow(fields: TabFieldConfig[]): TabFieldConfig[][] {
    const rows: TabFieldConfig[][] = [];
    let current: TabFieldConfig[] = [];
    let colCount = 0;
    const totalCols = 4;

    fields.forEach(f => {
      const span = f.cols || 1;
      if (colCount + span > totalCols) {
        if (current.length) rows.push(current);
        current = [f];
        colCount = span;
      } else {
        current.push(f);
        colCount += span;
      }
    });
    if (current.length) rows.push(current);
    return rows;
  }
}
