import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../datatype';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listarray:User[] = [];

  AddUserData(data:User){
    
    console.log(data);
    
    this.listarray.push(data);

    console.log(this.listarray);
    
    
    
    
  }

}
