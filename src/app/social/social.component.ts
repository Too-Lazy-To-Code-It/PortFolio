import { Component } from '@angular/core';

@Component({
  selector: 'app-social',
  standalone: true,
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent {
  socials = [
    { name: 'GitHub', url: 'https://github.com/Too-Lazy-To-Code-It', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/adam-rafraf/', icon: 'linkedin' },
  ];
}