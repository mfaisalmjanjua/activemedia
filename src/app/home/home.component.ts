import { Component } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  items:any[] = [];

  constructor(private itemService: DataService) { }

  ngOnInit(): void {
    this.items = this.itemService.getAllItems();
  }
}
