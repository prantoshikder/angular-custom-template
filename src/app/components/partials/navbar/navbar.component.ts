import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Output() handleHideShow = new EventEmitter();

  isCollapsed: any;

  handleCollapse() {
    this.handleHideShow.emit(true);
  }
}
