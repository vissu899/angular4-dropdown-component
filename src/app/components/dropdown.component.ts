import { Component, Input } from '@angular/core';
import { FilterPipe } from '../pipes/filter.pipe';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  providers: [FilterPipe]
})

export class DropdownComponent {

  dropdownOptions = [];
  selectedValue: string;
  expandOptions: any = false;

  constructor() {
    this.dropdownOptions = [
      {
        label: 'AZERBAIJAN',
        value: '01'
      },
      {
        label: 'ARMENIA',
        value: '02'
      },
      {
        label: 'ARABIA',
        value: '03'
      },

      {
        label: 'BAHRAIN',
        value: '04'
      },
      {
        label: 'BAHRAIN',
        value: '05'
      },
      {
        label: 'BANGLADESH',
        value: '06'
      },
      {
        label: 'CAMBODIA',
        value: '07'
      },
      {
        label: 'CHINA',
        value: '08'
      },
      {
        label: 'EAST',
        value: '10'
      },
      {
        label: 'INDIA',
        value: '11'
      },
      {
        label: 'INDONESIA',
        value: '12'
      },
      {
        label: 'IRAN',
        value: '13'
      },
      {
        label: 'IRAQ',
        value: '14'
      },
      {
        label: 'JAPAN',
        value: '15'
      },
      {
        label: 'JORDAN',
        value: '16'
      },
      {
        label: 'KAZAKHSTAN',
        value: '17'
      },
      {
        label: 'KUWAIT',
        value: '18'
      },
      {
        label: 'KYRGYZSTAN',
        value: '19'
      },
      {
        label: 'BAHRAIN',
        value: '20'
      }
    ];
  }

  selectOption(option) {
    this.selectedValue = option.label;
    this.expandOptions = false;
  }

  openOptions(e) {
    this.expandOptions = true;
  }

  clearOptions() {
    this.selectedValue = '';
  }

}
