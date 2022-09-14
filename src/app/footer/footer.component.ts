import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  logoImageUrl: string = 'src/assets/logo.png';
  year: number;

  constructor() {
    this.year = new Date().getFullYear();
  }

  ngOnInit(): void {}
}
