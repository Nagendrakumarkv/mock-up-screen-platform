import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Encounter } from '../models/encounter.model';
import { Claim } from '../models/claim.model';

@Injectable({ providedIn: 'root' })
export class EncounterService {
  private _encounters = new BehaviorSubject<Encounter[]>([
    { id: 'ENC-054', dos: '11/12/24', provider: 'Dr. Chen',     tags: ['DM', 'HF'],       status: 'new' },
    { id: 'ENC-053', dos: '10/29/24', provider: 'Dr. Patel',    tags: ['HTN', 'CKD'],     status: 'pending' },
    { id: 'ENC-052', dos: '10/14/24', provider: 'Dr. Kim',      tags: ['COPD'],           status: 'done' },
    { id: 'ENC-051', dos: '10/01/24', provider: 'Dr. Chen',     tags: ['DM'],             status: 'done' },
    { id: 'ENC-050', dos: '09/20/24', provider: 'Dr. Williams', tags: ['CAD', 'HF'],      status: 'done' },
    { id: 'ENC-049', dos: '09/14/24', provider: 'Dr. Chen',     tags: ['DM', 'HF', 'CKD'], status: 'pending' },
    { id: 'ENC-048', dos: '09/01/24', provider: 'Dr. Patel',    tags: ['HTN'],            status: 'done' },
    { id: 'ENC-047', dos: '08/15/24', provider: 'Dr. Kim',      tags: ['DM', 'CKD'],     status: 'done' },
    { id: 'ENC-046', dos: '08/02/24', provider: 'Dr. Chen',     tags: ['HF'],             status: 'done' },
    { id: 'ENC-045', dos: '07/22/24', provider: 'Dr. Williams', tags: ['COPD', 'DM'],    status: 'done' },
    { id: 'ENC-044', dos: '07/10/24', provider: 'Dr. Patel',    tags: ['CAD'],            status: 'done' },
    { id: 'ENC-043', dos: '06/28/24', provider: 'Dr. Chen',     tags: ['DM', 'HTN'],     status: 'done' },
    { id: 'ENC-042', dos: '06/15/24', provider: 'Dr. Kim',      tags: ['CKD'],            status: 'done' },
    { id: 'ENC-041', dos: '09/14/24', provider: 'Dr. Chen',     tags: ['DM', 'HF', 'CKD'], status: 'pending' },
  ]);

  private _claims = new BehaviorSubject<Claim[]>([
    { claimId: 'CLM-88401', patientId: 'PID-10023', patientName: 'Johnson, Michael A.', dob: '03/15/1958', gender: 'M', dos: '09/14/24', claimYear: '2024', providerName: 'Dr. Chen', providerNpi: '1098765432', facilityName: 'Northview Medical Associates', facilityType: 'Office', claimType: 'Professional', icd10: 'E11.65, I50.22', icdDesc: 'T2DM with Hyperglycemia, Chronic Systolic HF', cpt: '99215', cptDesc: 'Office visit, high complexity', pos: '11', status: 'paid', payerName: 'UHC MA', payerType: 'Medicare Advantage', hcc: '19, 85', rxHcc: 'None', raf: '0.670', encType: 'Follow-up', chronicFlag: 'Yes', auditFlag: 'No', sourceSys: 'Epic', lastUpdated: '09/20/24' },
    { claimId: 'CLM-88402', patientId: 'PID-10023', patientName: 'Johnson, Michael A.', dob: '03/15/1958', gender: 'M', dos: '09/14/24', claimYear: '2024', providerName: 'Dr. Chen', providerNpi: '1098765432', facilityName: 'Northview Medical Associates', facilityType: 'Office', claimType: 'Professional', icd10: 'I50.22', icdDesc: 'Chronic Systolic HF', cpt: '93000', cptDesc: 'Electrocardiogram', pos: '11', status: 'paid', payerName: 'UHC MA', payerType: 'Medicare Advantage', hcc: '85', rxHcc: 'None', raf: '0.368', encType: 'Testing', chronicFlag: 'Yes', auditFlag: 'No', sourceSys: 'Epic', lastUpdated: '09/20/24' },
    { claimId: 'CLM-86210', patientId: 'PID-09882', patientName: 'Smith, Robert J.', dob: '01/10/1950', gender: 'M', dos: '07/22/24', claimYear: '2024', providerName: 'Dr. Williams', providerNpi: '1122334455', facilityName: 'Westside Clinic', facilityType: 'Office', claimType: 'Professional', icd10: 'J44.1', icdDesc: 'COPD with Exacerbation', cpt: '99214', cptDesc: 'Office/outpatient visit mod mdm', pos: '11', status: 'denied', payerName: 'Aetna', payerType: 'Commercial', hcc: '111', rxHcc: 'None', raf: '0.335', encType: 'Acute Visit', chronicFlag: 'Yes', auditFlag: 'Yes', sourceSys: 'Cerner', lastUpdated: '08/01/24' },
    { claimId: 'CLM-83902', patientId: 'PID-07611', patientName: 'Doe, Jane T.', dob: '05/22/1965', gender: 'F', dos: '05/10/24', claimYear: '2024', providerName: 'Dr. Kim', providerNpi: '1445566778', facilityName: 'Eastview Health', facilityType: 'Office', claimType: 'Professional', icd10: 'N18.3', icdDesc: 'CKD Stage 3a', cpt: '99213', cptDesc: 'Office/outpatient visit low mdm', pos: '11', status: 'paid', payerName: 'Humana', payerType: 'Medicare Advantage', hcc: '137', rxHcc: 'None', raf: '0.236', encType: 'Follow-up', chronicFlag: 'Yes', auditFlag: 'No', sourceSys: 'Epic', lastUpdated: '05/25/24' },
    { claimId: 'CLM-90012', patientId: 'PID-11005', patientName: 'Brown, Alice D.', dob: '11/05/1970', gender: 'F', dos: '10/29/24', claimYear: '2024', providerName: 'Dr. Patel', providerNpi: '1998877665', facilityName: 'City Hospital', facilityType: 'Outpatient', claimType: 'Professional', icd10: 'I10', icdDesc: 'Essential Hypertension', cpt: '99215', cptDesc: 'Office visit, high complexity', pos: '22', status: 'pending', payerName: 'UHC MA', payerType: 'Medicare Advantage', hcc: 'None', rxHcc: 'None', raf: '0.000', encType: 'Follow-up', chronicFlag: 'Yes', auditFlag: 'No', sourceSys: 'Epic', lastUpdated: '11/02/24' }
  ]);

  encounters$ = this._encounters.asObservable();
  claims$ = this._claims.asObservable();

  filterEncounters(query: string): Encounter[] {
    const q = query.toLowerCase();
    return this._encounters.getValue().filter(e =>
      !q || e.dos.includes(q) || e.provider.toLowerCase().includes(q) || e.tags.some(t => t.toLowerCase().includes(q))
    );
  }

  filterClaims(query: string, statusFilter: string): Claim[] {
    const q = query.toLowerCase();
    return this._claims.getValue().filter(c => {
      const matchStatus = statusFilter === 'All' || c.status === statusFilter.toLowerCase();
      const matchSearch = !q || c.claimId.toLowerCase().includes(q) || c.icd10.toLowerCase().includes(q) || c.cpt.toLowerCase().includes(q) || c.providerName.toLowerCase().includes(q);
      return matchStatus && matchSearch;
    });
  }
}
