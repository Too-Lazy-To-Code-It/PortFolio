import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { OtherNoteworthyProjectsComponent } from './other-noteworthy-projects/other-noteworthy-projects.component';
import { ArchiveComponent } from './archive/archive.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'experience', component: ExperienceComponent, title: 'Experience' },
  { path: 'work', component: WorkComponent, title: 'Work' },
  { path: 'projects', component: OtherNoteworthyProjectsComponent, title: 'Projects' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: 'archive', component: ArchiveComponent, title: 'Archive' },
  { path: '**', redirectTo: '' }
];

