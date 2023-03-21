import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyContact } from 'src/model/myContact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  // contactId:any;
  allGroups:any[]=[];
  contact:MyContact={}
  // contactName:string='';
  constructor(private api:ApiService,private route:Router){}
  ngOnInit():void{
    this.api.getAllGroups().subscribe((data:any)=>{
    console.log(data);//array(3)
    this.allGroups=data
    })
  }
  //add new contact
  addContact(){
    this.api.addContact(this.contact).subscribe(
      (data:any)=>{
        this.route.navigateByUrl('')//render to admin page
      }
    )
  }
}
