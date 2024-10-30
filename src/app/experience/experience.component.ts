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
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  jobs: Job[] = [
    {
      company: 'Innovative Tech',
      title: 'Senior Software Engineer',
      range: 'January 2021 - Present',
      url: 'https://innovativetech.com',
      responsibilities: [
        'Led the development of a high-performance web application using Angular and Node.js, resulting in a 40% increase in user engagement',
        'Implemented advanced caching strategies and optimized database queries, improving overall application response time by 60%',
        'Mentored junior developers, conducted code reviews, and established best practices, enhancing team productivity by 25%',
        'Collaborated with UX/UI designers to implement responsive and accessible designs, ensuring WCAG 2.1 AA compliance'
      ]
    },
    {
      company: 'DataDriven Solutions',
      title: 'Full Stack Developer',
      range: 'June 2018 - December 2020',
      url: 'https://datadrivensolutions.com',
      responsibilities: [
        'Developed and maintained multiple RESTful APIs using Express.js and MongoDB, supporting over 1 million daily active users',
        'Architected and implemented a real-time data visualization dashboard using React and D3.js, processing over 100,000 data points per second',
        'Integrated machine learning models into the application pipeline, improving prediction accuracy by 30%',
        'Participated in agile development processes, consistently delivering features on time and within scope'
      ]
    },
    {
      company: 'WebCraft Studios',
      title: 'Junior Web Developer',
      range: 'September 2016 - May 2018',
      url: 'https://webcraftstudios.com',
      responsibilities: [
        'Collaborated on the development of responsive websites for various clients using HTML5, CSS3, and JavaScript',
        'Implemented pixel-perfect designs from Figma mockups, ensuring cross-browser compatibility and mobile responsiveness',
        'Assisted in the migration of legacy PHP applications to modern JavaScript frameworks, improving maintainability and performance',
        'Contributed to the companys internal component library, streamlining development processes and ensuring consistency across projects'
      ]
    }
  ];

  activeTabIndex = 0;

  setActiveTab(index: number) {
    this.activeTabIndex = index;
  }
}