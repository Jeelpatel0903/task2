import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { User } from '../datatype';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit {

  @Input() item1: User[] = [];


  // Additional variables to store individual properties
  editedUserId: number = 0;
  editedUserName: string = '';
  editedUserLocation: string = '';
  editedUserGstNumber: string = '';

  hello: string = "jeel";

  constructor() { }

  ngOnInit(): void {
    // Assuming you want to initialize the variables with the values from the first user in the array
    if (this.item1.length > 0) {
      this.editedUserId = this.item1[0].userid;
      this.editedUserName = this.item1[0].username;
      this.editedUserLocation = this.item1[0].userlocation;
      this.editedUserGstNumber = this.item1[0].usergstnumber;
    }
  }

  editUserData() {
    // Create a new User object with the edited values
    const editedUser: User = {
      userid: this.editedUserId,
      username: this.editedUserName,
      userlocation: this.editedUserLocation,
      usergstnumber: this.editedUserGstNumber
    };

    // Emit the updated user data to the parent component

  }
}
