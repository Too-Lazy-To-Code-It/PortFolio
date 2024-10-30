import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isScrolled = false;
  lastScrollTop = 0;
  isNavHidden = false;

  navItems = [
    { number: '01.', text: 'About', href: '#about' },
    { number: '02.', text: 'Experience', href: '#experience' },
    { number: '03.', text: 'Work', href: '#work' },
    { number: '04.', text: 'Contact', href: '#contact' }
  ];

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    this.isScrolled = st > 0;
    this.isNavHidden = st > this.lastScrollTop && st > 100;
    this.lastScrollTop = st <= 0 ? 0 : st;
  }
}