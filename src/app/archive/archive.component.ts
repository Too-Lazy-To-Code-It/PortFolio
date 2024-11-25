import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface ArchiveProject {
  year: number;
  title: string;
  madeAt: string;
  builtWith: string[];
  link?: string;
}

@Component({
  selector: 'app-archive',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss'],
})
export class ArchiveComponent {
  archiveProjects: ArchiveProject[] = [
    {
      year: 2024,
      title: 'Artounsi',
      madeAt: 'Academic project',
      builtWith: ['Flutter', 'Dart', 'Firebase'],
      link: 'https://github.com/Too-Lazy-To-Code-It/ArTounsi/tree/Adam',
    },
    {
      year: 2024,
      title: 'Sea of Wonders',
      madeAt: 'Academic project',
      builtWith: ['Unreal Engine 5', 'Blueprints'],
      link: 'https://gitlab.com/moenes.gueni/seas-of-wonder',
    },
    {
      year: 2024,
      title: 'Pac-Man AI',
      madeAt: 'Academic project',
      builtWith: ['Unity', 'ML-Agents', 'C#'],
      link: 'https://github.com/Too-Lazy-To-Code-It/pacman-ai',
    },
    {
      year: 2024,
      title: 'Physics Engine',
      madeAt: 'Academic project',
      builtWith: ['Unity', 'C#', 'Custom Physics'],
      link: 'https://github.com/Too-Lazy-To-Code-It/physics-engine',
    },
    {
      year: 2024,
      title: 'Racing AI Simulation',
      madeAt: 'Academic project',
      builtWith: ['Unity', 'Pathfinding Algorithms', 'C#'],
      link: 'https://github.com/Too-Lazy-To-Code-It/Path-Finding',
    },
    {
      year: 2024,
      title: 'Al Moughamiroun 2',
      madeAt: 'Re:School',
      builtWith: ['Unity', '2D Game Mechanics', 'Mirror Networking'],
      link: 'https://play.google.com/store/apps/details?id=com.EDUGAME.Al_moghamiroun_2&hl=en',
    },

    {
      year: 2023,
      title: 'Chemistry Lab (VR)',
      madeAt: 'Academic project',
      builtWith: ['Unity', 'VR','Meta Quest 2'],
      link: 'https://gitlab.com/4gamix1/chemistry-lab-vr',
    },

    {
      year: 2024,
      title: 'CI/CD Pipeline for Spring Project',
      madeAt: 'Academic project',
      builtWith: ['Jenkins', 'Docker', 'Spring', 'SonarQube','Nexus','Trivy','Owasp Scan','Angular'],
      link: 'https://github.com/Too-Lazy-To-Code-It/DevOps/tree/Adam',
    },
    {
      year: 2024,
      title: 'Akhlate',
      madeAt: 'Game Jam',
      builtWith: ['Unity', 'C#'],
    },
    {
      year: 2023,
      title: 'Endless Runner',
      madeAt: 'Academic project',
      builtWith: ['Unity', 'Procedural Generation'],
      link: 'https://gitlab.com/Too-Lazy-To-Code-It/SubwaySurfers',
    },
    {
      year: 2023,
      title: 'BuyCycle',
      madeAt: 'Technologia Academy',
      builtWith: ['MEAN Stack', 'Angular', 'Node.js'],
      link: 'https://github.com/Too-Lazy-To-Code-It/Applicathioni',
    },
    {
      year: 2023,
      title: 'Riotxd',
      madeAt: 'Personal project',
      builtWith: ['Python', 'OpenCV', 'PyAutoGUI'],
      link: 'https://github.com/Too-Lazy-To-Code-It/Riotxd', 
    },
    {
      year: 2022,
      title: 'EcoInfiltrators',
      madeAt: 'Academic project',
      builtWith: ['Unity', 'MEAN Stack', 'Angular', 'Mirror Networking'],
      link: 'https://gitlab.com/pi-ecoinfiltrators', 
    },
    {
      year: 2022,
      title: 'ARTounsi Platform',
      madeAt: 'Academic project',
      builtWith: ['Symfony', 'Twig', 'JavaFX', 'CodenameOne'],
      link: 'https://github.com/Too-Lazy-To-Code-It/PIdev',
    },
    {
      year: 2022,
      title: 'Typing Simple Script for Linux',
      madeAt: 'Academic project',
      builtWith: ['Shell', 'Bash'],
      link: 'https://github.com/Too-Lazy-To-Code-It/5wag-5cripting',
    },
    {
      year: 2021,
      title: 'Hogwarts',
      madeAt: 'Academic project',
      builtWith: ['PHP', 'HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/Too-Lazy-To-Code-It/PW', 
    },
    {
      year: 2021,
      title: 'Veneficus',
      madeAt: 'Academic project',
      builtWith: ['C', 'SDL'],
      link: 'https://github.com/Too-Lazy-To-Code-It/Veneficus',
    },
  ];
}
