import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

  contactId:string=''
  contact:any;
  groupId:any;
  groupName:any;
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService) {}

  ngOnInit():void{
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data);//id-contactId=3
      this.contactId=data.contactId//3

      //view particular data-api call

      this.api.viewContact(this.contactId).subscribe((data:any)=>{
        console.log(data);//data of particular contact
        this.contact=data
        this.groupId=data.groupId//2

        //view groupname
        this.api.getGroupName(this.groupId).subscribe((data:any)=>{
        this.groupName=data.name
        console.log(this.groupName);
        
        })
      })
    })
  }
}
