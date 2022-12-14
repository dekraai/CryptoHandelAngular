import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;
  constructor() { }

  ngOnInit(): void {
    this.lookForToken();
  }

  lookForToken() {
    if (sessionStorage.getItem("token") != null) {
      this.isLoggedIn = true;
    }
  }

}
