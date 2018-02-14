import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tab = 'home';
  isCollapse = false;
  showTopBtn = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.documentElement.scrollTop > 50 || document.body.scrollTop > 50) {
      this.isCollapse = true;
    } else {
      this.isCollapse = false;
    }

    if (document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
      this.showTopBtn = true;
    } else {
      this.showTopBtn = false;
    }
  }

  goTop() {
    document.documentElement.scrollTop = 0;
  }

}
