import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-tbl',
  templateUrl: './tbl.component.html',
  styleUrl: './tbl.component.scss',
})
export class TblComponent {
  selectedItem: string = '';
  constructor(private router: Router, private srv: DataService) {}

  onSelect() {
    console.log(this.selectedItem);
    // localStorage.setItem('amTablet', event.target.value)
    // this.srv.setSelectTablet(event.target.value);
    this.router.navigate(['/home']);
  }

  onSelectTablet(value: string) {
    this.selectedItem = value;
    localStorage.setItem('amTablet', this.selectedItem);
    this.srv.setSelectTablet(this.selectedItem);
  }
}
