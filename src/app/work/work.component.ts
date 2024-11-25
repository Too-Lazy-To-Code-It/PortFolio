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
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent {
  featuredProjects: Project[] = [
    {
      title: 'Sea of Wonders',
      description:
        'A deep-sea exploration game with advanced underwater mechanics, realistic visuals, and immersive gameplay, built using Unreal Engine.',
      tech: ['Unreal Engine', 'Blueprints'],
      links: {
        external: 'https://too-lazy-to-code-it.github.io/sea-of-wonders',
      },
      image: 'SeaOfWonders.png', // Replace with actual image URL
    },
    {
      title: "AI Racing Simulator",
      description: "A Unity-based racing simulation featuring AI algorithms like A*, AdHoc, and MCTS for pathfinding and decision-making. Includes grid-based navigation, collision avoidance, and competitive race mechanics.",
      tech: ["Unity", "C#", "MCTS", "A* Algorithm"],
      links: {
        github: "https://github.com/your-username/ai-racing-simulator",
        external: "https://your-username.github.io/ai-racing-simulator"
      },
      image: "RacerAi.png" // Replace with actual image URL
    },

    {
      title: 'Pac-Man AI',
      description:
        'A Pac-Man-inspired game using Unity and ML-Agents to create AI-driven gameplay for dynamic and challenging player experiences.',
      tech: ['Unity', 'ML-Agents', 'C#'],
      links: {
        github: 'https://github.com/Too-Lazy-To-Code-It/pacman-ai',
      },
      image: 'PacManAI.png', // Replace with actual image URL
    },
  ];
}
