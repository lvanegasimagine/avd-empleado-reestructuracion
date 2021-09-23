import { PlatformLocation } from '@angular/common';
import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-main-pages',
  templateUrl: './main-pages.component.html',
  styleUrls: ['./main-pages.component.css']
})
export class MainPagesComponent implements OnInit, OnDestroy {

  /**
   *
   */
  constructor(private router: Router) {
    // this.ciclo();
  }
  
  ciclo(){
    window.location.reload();
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.router.navigateByUrl('/dashboard', {skipLocationChange: true}).then(()=>
    //     this.router.navigate(["/dashboard"]));
    //     console.log('onta');
    // this.ciclo();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // this.ciclo();
  }
}
