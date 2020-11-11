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
  // toggleTheme(): void {
  //   if (this.overlay.classList.contains("custom-theme")) {
  //     this.overlay.classList.remove("custom-theme");
  //     this.overlay.classList.add("light-custom-theme");
  //   } else if (this.overlay.classList.contains("light-custom-theme")) {
  //     this.overlay.getContainerElement().classList.remove("light-custom-theme");
  //     this.overlay.classList.add("custom-theme");
  //   } else {
  //     this.overlay.classList.add("light-custom-theme");
  //   }
  //   if (document.body.classList.contains("custom-theme")) {
  //     document.body.classList.remove("custom-theme");
  //     document.body.classList.add("light-custom-theme");
  //   } else if (document.body.classList.contains("light-custom-theme")) {
  //     document.body.classList.remove("light-custom-theme");
  //     document.body.classList.add("custom-theme");
  //   } else {
  //     this.overlay.classList.add("light-custom-theme");
  //   }
  // }
  changeTheme(){
    let tumbler = document.querySelector(".tumbler");
    tumbler.classList.toggle("pull-right");
    // tumbler.style.transform= "translateX(calc(100% - 2px))";
    let element = document.body;
    element.classList.toggle("dark-mode");
    let element_2 = document.querySelector(".toolbar");
    element_2.classList.toggle("dark-mode");
    let element_3 = document.querySelector(".bio-box");
      element_3.classList.toggle("dark-mode-bio");
  }
}

