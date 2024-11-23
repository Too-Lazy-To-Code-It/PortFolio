import { Component } from '@angular/core';

interface Job {
  company: string;
  title: string;
  range: string;
  url: string;
  responsibilities: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  jobs: Job[] = [
    {
      company: 'Re:School',
      title: 'Game Development Intern',
      range: 'July 2024 - September 2024',
      url: 'https://reschool.com',
      responsibilities: [
        'Enhanced *Al Moughamiroun 2*, a 2D educational game, by expanding themes from 5 to 8 and designing 7+ maps per theme',
        'Integrated advanced mechanics such as zero gravity, reversed gravity, and planet gravity, boosting player engagement',
        'Optimized gameplay systems, improving response time by 25% and enhancing the overall user experience',
        'Collaborated with the team to create new assets using Photoshop and Illustrator, ensuring consistent visual design'
      ],
    },
    {
      company: 'Technologia Academy',
      title: 'Full-Stack Web Developer',
      range: 'August 2023 - September 2023',
      url: 'https://technologia-academy.com',
      responsibilities: [
        'Developed a high-performance web application using Angular and Node.js, achieving load times under 3 seconds',
        'Designed and implemented responsive UI components, enabling seamless real-time data interactions via REST APIs',
        'Collaborated with peers to deliver a feature-complete final project that adhered to industry best practices'
      ],
    },
    {
      company: 'CPF',
      title: 'Exploratory Intern',
      range: 'June 2021 - July 2021',
      url: 'https://cpf.com',
      responsibilities: [
        'Gained hands-on experience in database management and enterprise-level backup systems',
        'Explored advanced computer hardware and networking configurations, improving diagnostic skills',
        'Contributed to internal documentation on system configurations and maintenance procedures'
      ],
    },
  ];

  activeTabIndex = 0;

  setActiveTab(index: number) {
    this.activeTabIndex = index;
  }
}
