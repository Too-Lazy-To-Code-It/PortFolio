import { Component } from '@angular/core';

@Component({
  selector: 'app-social',
  standalone: true,
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent {
  socials = [
    { name: 'GitHub', url: 'https://github.com', icon: 'github' },
    { name: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
    { name: 'CodePen', url: 'https://codepen.io', icon: 'codepen' }
  ];
}