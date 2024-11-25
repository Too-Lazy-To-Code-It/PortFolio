import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subject, fromEvent } from 'rxjs';
import { takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';

interface NavItem {
  number: string;
  text: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isScrolled = false;
  isMobileMenuOpen = false;
  private destroy$ = new Subject<void>();

  navItems: NavItem[] = [
    { number: '01.', text: 'About', href: '#about' },
    { number: '02.', text: 'Experience', href: '#experience' },
    { number: '03.', text: 'Work', href: '#work' },
    { number: '04.', text: 'projects', href: '#projects' },
    { number: '05.', text: 'Contact', href: '#contact' }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      fromEvent(window, 'scroll')
        .pipe(
          takeUntil(this.destroy$),
          debounceTime(50),
          distinctUntilChanged()
        )
        .subscribe(() => {
          this.isScrolled = window.pageYOffset > 50;
        });

      fromEvent(window, 'resize')
        .pipe(
          takeUntil(this.destroy$),
          debounceTime(50)
        )
        .subscribe(() => {
          if (window.innerWidth > 768) {
            this.isMobileMenuOpen = false;
          }
        });
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}

