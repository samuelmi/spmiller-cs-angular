import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Output() optionSelectedEvent = new EventEmitter<string>();

  tabSelected: string = "home";


  constructor() { }

  ngOnInit() {
  }

  // Notifies main-container of the tab change
  optionSelected(option: string) {
    this.tabSelected = option;
    this.optionSelectedEvent.emit(option);
  }

}
