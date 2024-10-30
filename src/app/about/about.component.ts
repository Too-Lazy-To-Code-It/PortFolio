import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  skills: string[] = [
    'JavaScript (ES6+)',
    'TypeScript',
    'Angular',
    'React',
    'Node.js',
    'Python',
    'SQL',
    'Git'
  ];

  placeholderImage = 'https://via.placeholder.com/300x300';
}