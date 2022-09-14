import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('mobile') sideNav?: ElementRef;
  logoImageUrl: string = 'src/assets/logo.png';

  constructor() {}

  ngAfterViewInit(): void {
    M.Sidenav.init(this.sideNav?.nativeElement);
  }
}
