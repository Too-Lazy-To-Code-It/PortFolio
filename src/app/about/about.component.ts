import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  skills: string[] = [
    '.Net',
    'Spring',
    'Angular',
    'Express.js',
    'MAYA',
    'MongoDB',
    'Docker',
    'Jenkins',
    'Unity (2D/3D)',
    'Firebase',
  ];

  placeholderImage = 'cvgamer.png';
}
