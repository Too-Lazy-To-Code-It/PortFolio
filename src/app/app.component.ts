import { NavbarComponent } from './nav/nav.component';

import { Component, HostListener, ViewChild, ElementRef, Inject, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, NavigationEnd, Router } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { OtherNoteworthyProjectsComponent } from "./other-noteworthy-projects/other-noteworthy-projects.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    WorkComponent,
    ContactComponent,
    OtherNoteworthyProjectsComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title='Adam Rafraf'
  @ViewChild('cursor', { static: false }) cursorRef!: ElementRef;

  activeSection = 'Home';
  isArchivePage = false;
  isMobile = false;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isArchivePage = event.url === '/archive';
      }
    });
    
    if (isPlatformBrowser(this.platformId)) {
      this.checkIfMobile();
    }
  }
  
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const window = inject(Window);
      // Use window object here if needed
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkIfMobile();
    }
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateActiveSection();
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (isPlatformBrowser(this.platformId) && this.cursorRef?.nativeElement) {
      this.cursorRef.nativeElement.style.transform = `translate(${event.clientX - 4}px, ${event.clientY - 4}px)`;
    }
  }

  onLinkHover(event: MouseEvent): void {
    if (isPlatformBrowser(this.platformId) && this.cursorRef?.nativeElement) {
      this.cursorRef.nativeElement.style.transform = `translate(${event.clientX - 4}px, ${event.clientY - 4}px) scale(1.5)`;
      this.cursorRef.nativeElement.style.backgroundColor = 'rgba(100, 255, 218, 0.3)';
    }
  }

  onLinkLeave(): void {
    if (isPlatformBrowser(this.platformId) && this.cursorRef?.nativeElement) {
      this.cursorRef.nativeElement.style.transform = `translate(${this.cursorRef.nativeElement.offsetLeft}px, ${this.cursorRef.nativeElement.offsetTop}px) scale(1)`;
      this.cursorRef.nativeElement.style.backgroundColor = 'var(--green)';
    }
  }

  private updateActiveSection(): void {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = (current as HTMLElement).offsetHeight;
      const sectionTop = (current as HTMLElement).offsetTop - 50;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        this.activeSection = sectionId || '';
      }
    });
  }

  private checkIfMobile(): void {
    this.isMobile = window.innerWidth <= 768;
  }
}

