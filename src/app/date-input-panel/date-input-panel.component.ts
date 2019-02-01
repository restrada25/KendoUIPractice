import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-input-panel',
  templateUrl: './date-input-panel.component.html',
  styleUrls: ['./date-input-panel.component.css']
})
export class DateInputPanelComponent implements OnInit {

  public value: Date = new Date(2000, 2, 10);

  constructor() { }

  ngOnInit() {
  }

}
