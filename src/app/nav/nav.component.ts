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
    { number: '01', text: 'Home', href: '#home' },
    { number: '02', text: 'About', href: '#about' },
    { number: '03', text: 'Experience', href: '#experience' },
    { number: '04', text: 'Work', href: '#work' },
    { number: '05', text: 'Contact', href: '#contact' }
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
