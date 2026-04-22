import { Component, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { OPPORTUNITY_OPTIONS, OppOption } from '../../config/opp-options.config';

@Component({
  selector: 'app-opp-lookup',
  templateUrl: './opp-lookup.component.html',
  styles: []
})
export class OppLookupComponent {
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();
  
  options = OPPORTUNITY_OPTIONS;
  isOpen = false;
  searchQuery = '';

  constructor(private eRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  toggle() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.searchQuery = '';
      this.resetCollapseStates();
    }
  }

  onSearch(query: string) {
    this.searchQuery = query;
  }

  selectOption(opt: OppOption) {
    if (opt.type === 'option') {
      this.value = opt.value || '';
      this.valueChange.emit(this.value);
      this.isOpen = false;
    }
  }

  toggleGroup(event: Event, group: OppOption) {
    event.stopPropagation();
    group['collapsed'] = !group['collapsed'];
  }

  isHidden(opt: OppOption): boolean {
    if (this.searchQuery) {
      if (opt.type === 'group' || opt.type === 'subgroup') return true;
      return !opt.label.toLowerCase().includes(this.searchQuery.toLowerCase());
    }
    
    // Check if any parent is collapsed
    let current = opt;
    while (current && current.parent) {
      const parent = this.options.find(o => o.id === current.parent);
      if (parent && parent['collapsed']) return true;
      current = parent as OppOption;
    }
    return false;
  }

  private resetCollapseStates() {
    this.options.forEach(o => {
      if (o.type === 'group' || o.type === 'subgroup') {
        o['collapsed'] = true;
      }
    });
  }
}
