import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  selectedTab: string = 'movies'; // Default selected tab

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }
}
