import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../api/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {}

  logout() {
    this.authService.performLogout();
  }

}
