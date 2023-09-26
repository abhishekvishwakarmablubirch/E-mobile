// data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private items: any[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    // Add more items here
  ];

  getItems(): any[] {
    return this.items;
  }
}
