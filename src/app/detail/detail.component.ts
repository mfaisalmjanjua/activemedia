import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  item: any = {};

  c: boolean = false;
  isPopupOpen = false;
  selectedVideoUrl: string;
  elementRef: any;

  constructor(
    private route: ActivatedRoute,
    private itemService: DataService
  ) {}

  ngOnInit(): void {
    const i = this.route.params.subscribe((params: Params) => {
      const id = +params['id'];
    });
    this.route.params.subscribe((params: Params) => {
      const id = +params['id'];
      this.item = this.itemService.getItem(id);
    });
  }

  getProfile() {
    console.log(this.item);
  }

  showPopup(url: string) {
    this.isPopupOpen = true;
    this.selectedVideoUrl = url;
  }

  hidePopup() {
    this.isPopupOpen = false;
    const video = this.elementRef.nativeElement.querySelector('#video');
    video.pause();
    video.currentTime = 0;
  }
}
