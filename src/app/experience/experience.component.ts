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
      company: 'Company A',
      title: 'Senior Software Engineer',
      range: 'January 2021 - Present',
      url: 'https://companya.com',
      responsibilities: [
        'Developed and maintained web applications using Angular and Node.js',
        'Collaborated with cross-functional teams to deliver high-quality software solutions',
        'Implemented CI/CD pipelines to streamline development processes'
      ]
    },
    {
      company: 'Company B',
      title: 'Full Stack Developer',
      range: 'June 2018 - December 2020',
      url: 'https://companyb.com',
      responsibilities: [
        'Built responsive web applications using React and Express.js',
        'Optimized database queries and improved application performance',
        'Mentored junior developers and conducted code reviews'
      ]
    },
    {
      company: 'Company C',
      title: 'Junior Web Developer',
      range: 'September 2016 - May 2018',
      url: 'https://companyc.com',
      responsibilities: [
        'Assisted in the development of company websites and internal tools',
        'Implemented design mockups using HTML, CSS, and JavaScript',
        'Participated in agile development processes and sprint planning'
      ]
    }
  ];

  activeTabIndex = 0;

  setActiveTab(index: number) {
    this.activeTabIndex = index;
  }
}