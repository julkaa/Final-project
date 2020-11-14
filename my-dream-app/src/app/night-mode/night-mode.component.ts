import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-night-mode',
  templateUrl: './night-mode.component.html',
  styleUrls: ['./night-mode.component.scss']
})
export class NightModeComponent implements OnInit {
state:false;
  constructor() {}

  ngOnInit(): void {
  }
 changeTheme(){
    let tumbler = document.querySelector(".tumbler");
    tumbler.classList.toggle("pull-right");
    // tumbler.style.transform= "translateX(calc(100% - 2px))";
    let element = document.body;
    element.classList.toggle("dark-mode");
    let element_2 = document.querySelector(".header");
    element_2.classList.toggle("dark-mode");
    let element_3 = document.querySelector(".bio-box");
      element_3.classList.toggle("dark-mode-bio");
  }
}

