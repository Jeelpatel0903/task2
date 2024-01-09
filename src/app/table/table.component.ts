import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../datatype';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() list:User[]=[]

  constructor() { }

  ngOnInit(): void {
  }

}
