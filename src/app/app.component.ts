import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('cursor', { static: true }) cursorRef!: ElementRef;

  sections = [
    { id: 'about', name: 'About' },
    { id: 'experience', name: 'Experience' },
    { id: 'work', name: 'Work' },
    { id: 'contact', name: 'Contact' }
  ];

  activeSection = 'home';
  isNavHidden = false;
  lastScrollTop = 0;
  
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    this.isNavHidden = st > this.lastScrollTop;
    this.lastScrollTop = st <= 0 ? 0 : st;
    
    this.updateActiveSection();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.cursorRef && this.cursorRef.nativeElement) {
      this.cursorRef.nativeElement.style.transform = `translate(${event.clientX - 4}px, ${event.clientY - 4}px)`;
    }
  }

  onLinkHover(event: MouseEvent) {
    if (this.cursorRef && this.cursorRef.nativeElement) {
      this.cursorRef.nativeElement.style.transform = `translate(${event.clientX - 4}px, ${event.clientY - 4}px) scale(4)`;
    }
  }

  onLinkLeave() {
    if (this.cursorRef && this.cursorRef.nativeElement) {
      this.cursorRef.nativeElement.style.transform = `scale(1)`;
    }
  }

  private updateActiveSection() {
    const sections = ['home', ...this.sections.map(s => s.id)];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection = section;
          break;
        }
      }
    }
  }
}