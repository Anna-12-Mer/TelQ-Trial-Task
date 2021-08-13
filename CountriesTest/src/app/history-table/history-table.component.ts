import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.css']
})
export class HistoryTableComponent implements OnInit {

  @Input() countriesInput: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
