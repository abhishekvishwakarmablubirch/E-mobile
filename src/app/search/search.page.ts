import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-page',
  templateUrl: `search.page.html`,
  styleUrls: ['search.page.scss']
})
export class SearchPageComponent {
  // Component logic here
  public data = [
    'Sayaji',
    'Hotel1',
    'Hotel2',
    'Hotel3',
    'Hotel4',
    'Hotel5',
  ];
  public results = [...this.data];

  handleInputChange(event : Event) {
    const inputElement = event.target as HTMLInputElement; 
    const query = inputElement.value.toLowerCase();
    this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }
}
