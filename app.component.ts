import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as xlsx from 'xlsx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 @ViewChild('epltable', { static: false }) epltable: ElementRef;
 clubs = [
  {
    position: 1,
    name: "Liverpool",
    played: 20,
    won: 19,
    drawn: 1,
    lost: 0,
    points: 58
  },
  {
    position: 2,
    name: "Leicester City",
    played: 21,
    won: 14,
    drawn: 3,
    lost: 4,
    points: 45
  },
  {
    position: 3,
    name: "Manchester City",
    played: 21,
    won: 14,
    drawn: 2,
    lost: 5,
    points: 44
  },
  {
    position: 4,
    name: "Chelsea",
    played: 21,
    won: 11,
    drawn: 3,
    lost: 7,
    points: 36
  },
  {
    position: 5,
    name: "Manchester United",
    played: 21,
    won: 8,
    drawn: 7,
    lost: 6,
    points: 31
  }
 ];
 constructor() {}
 ngOnInit() {}
 exportToExcel() {
  const ws: xlsx.WorkSheet =   
  xlsx.utils.table_to_sheet(this.epltable.nativeElement);
  const wb: xlsx.WorkBook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
  xlsx.writeFile(wb, 'epltable.xlsx');
 }
}