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
  featuredProjects: Project[] = [
    {
      title: 'Project A',
      description: 'A web application for managing personal finances and budgeting. Features include expense tracking, income management, and financial goal setting.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      links: {
        github: 'https://github.com',
        external: 'https://projecta.com'
      },
      image: '/placeholder.svg?height=300&width=500'
    },
    {
      title: 'Project B',
      description: 'An e-commerce platform for artisanal products. Includes features like user authentication, product catalog, shopping cart, and secure payment integration.',
      tech: ['Angular', 'Firebase', 'Stripe API'],
      links: {
        github: 'https://github.com',
        external: 'https://projectb.com'
      },
      image: '/placeholder.svg?height=300&width=500'
    },
    {
      title: 'Project C',
      description: 'A mobile app for tracking fitness activities and nutrition. Integrates with wearable devices and provides personalized workout and meal plans.',
      tech: ['React Native', 'Redux', 'GraphQL', 'AWS'],
      links: {
        github: 'https://github.com',
        external: 'https://projectc.com'
      },
      image: '/placeholder.svg?height=300&width=500'
    }
  ];
}