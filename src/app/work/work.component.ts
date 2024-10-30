import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  tech: string[];
  links: { github?: string; external?: string };
  image: string;
}

@Component({
  selector: 'app-work',
  standalone: true,
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  featuredProjects:  Project[] = [
    {
      title: 'Halcyon Theme',
      description: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
      tech: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper'],
      links: {
        github: 'https://github.com/Too-Lazy-To-Code-It/PortFolio',
        external: 'none'
      },
      image: 'https://placehold.in/200.avif'
    },
    {
      title: 'Spotify Profile',
      description: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
      tech: ['React', 'Styled Components', 'Express', 'Spotify API', 'Heroku'],
      links: {
        github: 'https://github.com/Too-Lazy-To-Code-It/PortFolio',
        external: ''
      },
      image: 'https://placehold.in/200.avif'
    }
  ];
}