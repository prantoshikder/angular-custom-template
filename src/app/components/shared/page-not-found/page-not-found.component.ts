import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent {
  isVisibleMiddle = false;

  showModalMiddle() {
    this.isVisibleMiddle = true;
  }

  handleCloseModal() {
    this.isVisibleMiddle = false;
  }
}
