import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule, RouterLink, RouterOutlet, MatIconModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  activeNav = 'users';
  navItems = [
    { name: 'users', icon: 'person' },
    { name: 'locations', icon: 'location_on' },
    { name: 'gateways', icon: 'router' },
    { name: 'devices', icon: 'devices' },
    { name: 'geofences', icon: 'map' },
    { name: 'wells', icon: 'oil_barrel' },
  ];
  onNavChange(nav: string) {
    this.activeNav = nav;
  }
}
