import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyContact } from 'src/model/myContact';
import { MyGroup } from 'src/model/myGroup';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit{
  contactId: string='';
  contact:MyContact={}
  groups:MyGroup[]=[]
  
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService, private route:Router ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data.Id);
      this.contactId=data.Id;
      //call a api for getting particular contact details
      this.api.viewContact(this.contactId).subscribe((data:any)=>{
        console.log(data);//particular contact details
        this.contact=data
        //call a api for getting all group details
        this.api.getAllGroups().subscribe((data:any)=>{
          console.log(data);
          this.groups=data
          
        })
      })

    })
  }
  updateContact(){
    this.api.updateContact(this.contactId,this.contact).subscribe((data:any)=>{
      console.log(data);
      this.route.navigateByUrl('')
      
    })
  }
}
