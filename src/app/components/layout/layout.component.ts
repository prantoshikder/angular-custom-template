import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  public isCollapsed: boolean = false;

  handleHideShow() {
    console.log('hide');

    this.isCollapsed = !this.isCollapsed;
  }
}
