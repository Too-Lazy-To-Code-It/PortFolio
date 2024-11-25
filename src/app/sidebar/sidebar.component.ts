import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  socialLinks = [
    { name: 'GitHub', url: 'https://github.com/yourusername', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/yourusername', icon: 'linkedin' }
  ];

  email = 'Adam.Rafraf@esprit.tn';
}

