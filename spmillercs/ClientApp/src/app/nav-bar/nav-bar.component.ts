import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Output() optionSelectedEmitter = new EventEmitter<string>();

  tabSelected: string = "home";


  constructor() { }
//test
  ngOnInit() {
  }

  optionSelected(option: string) {
    this.tabSelected = option;
    this.optionSelectedEmitter.emit(option);
  }

}
