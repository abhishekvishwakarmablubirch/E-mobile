import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  isAlertOpen = false;
  public alertButtons = ['OK'];

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  constructor() { }

  ngOnInit() {
  }

}
