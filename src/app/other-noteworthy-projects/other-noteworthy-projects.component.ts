import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  externalLink?: string;
}

@Component({
  selector: 'app-other-noteworthy-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './other-noteworthy-projects.component.html',
  styleUrls: ['./other-noteworthy-projects.component.scss'],
})
export class OtherNoteworthyProjectsComponent {
  projects: Project[] = [
    {
      title: 'Artounsi',
      description:
        'An art gallery mobile application showcasing and selling artwork. Built with Flutter and integrated with Firebase for secure backend functionality.',
      technologies: ['Flutter', 'Firebase'],
      githubLink: 'https://github.com/Too-Lazy-To-Code-It/artounsi',
      externalLink: 'https://too-lazy-to-code-it.github.io/artounsi',
    },
    {
      title: 'CI/CD Pipeline for Spring Project',
      description:
        'Designed and implemented an automated CI/CD pipeline for a Spring project, incorporating Jenkins, Docker, and SonarQube for code quality assurance.',
      technologies: ['Jenkins', 'Docker', 'Spring', 'SonarQube'],
      githubLink: '#', // Add actual link if available
      externalLink: '#', // Add actual link if available
    },
    {
      title: 'Physics Engine',
      description:
        'A custom rigid body simulation engine developed with Unity and C# for realistic physics-based gameplay. Optimized for accurate collision handling and enhanced performance.',
      technologies: ['Unity', 'C#', 'Custom Physics'],
      githubLink: 'https://github.com/Too-Lazy-To-Code-It/physics-engine',
      externalLink: '#', // Add actual link if available
    },
    {
      title: 'BuyCycle',
      description:
        'A web application for buying and selling bicycles, featuring a user-friendly interface and a robust MEAN stack backend for seamless functionality.',
      technologies: ['MEAN Stack', 'Angular', 'Node.js'],
      githubLink: 'https://github.com/Too-Lazy-To-Code-It/buycycle',
      externalLink: '#', // Add actual link if available
    },
    {
      title: 'EcoInfiltrators',
      description:
        'Engineered a Unity-based game featuring procedurally generated maps and NPCs for enhanced replayability. Integrated multiplayer networking with Mirror and built a supporting MEAN-stack web application.',
      technologies: ['Unity', 'Mirror Networking', 'MEAN Stack'],
      githubLink: '#', // Add actual link if available
      externalLink: '#', // Add actual link if available
    },
    {
      title: 'Chemistry Lab (VR)',
      description:
        'Developed a VR application for interactive chemistry experiments using Unity. Implemented Mirror networking to enable collaborative virtual lab sessions, enhancing educational engagement.',
      technologies: ['Unity', 'VR', 'Mirror Networking'],
      githubLink: '#', // Add actual link if available
      externalLink: '#', // Add actual link if available
    },
  ];
  ;
}
