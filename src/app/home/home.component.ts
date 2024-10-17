import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') canvas: ElementRef;
  items:any[] = [];

  constructor(private itemService: DataService) { }

  ngOnInit(): void {
    this.items = this.itemService.getAllItems();
  }

  ngAfterViewInit() {
  }
}
