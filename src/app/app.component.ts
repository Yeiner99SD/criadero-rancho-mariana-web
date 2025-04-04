import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {


  isVisible = false;
  isBouncing = true;
  
  private router = inject(Router)
  
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        window.scrollTo({top:0, behavior:'smooth'})
      }
    })
  }

  
  @HostListener('window:scroll', [])
  onScroll() {
    this.isVisible = window.scrollY > 300;
    this.isBouncing = true
  }

 
  scrollToTop() {
    this.isBouncing = false; 
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
 
  }
}
