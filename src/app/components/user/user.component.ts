import { Component, OnInit } from '@angular/core';
import { analyzeFileForInjectables } from '@angular/compiler';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name : String;
  age : number;
  email : String;
  address : Address;
  hobbies : String[];
  hello : any;
  post:Post[];
  isEdit:boolean = false;

  constructor(private dataservice:DataService) { 
    console.log('constructor run');
  }

  ngOnInit(): void {
    console.log('ngOnInit run');
    this.name = 'ahmed manai';
    this.age = 25;
    this.email = 'manai.ahmed@gmail.com'
    this.address = {
      street : '12 tn',
      city : 'tunis',
      state : 'tunisia'
    }
    this.hobbies = ['play piano', 'listen to music', 'write code'];
    this.hello = 'hello'; 

    this.dataservice.getpost().subscribe((posts:any) =>{
      //console.log(posts);
      this.post=posts;
      
    });

  }
  onclick(){
    this.name='ahmed';
    this.hobbies.push('new');
  }
  addhobby(hob){
    console.log(hob);
    this.hobbies.unshift(hob);
    return false;
  }
  delete(h){
    //console.log(h);
    //return false;
    for(let i = 0; i<this.hobbies.length;i++){
      if(this.hobbies[i] == h){
        this.hobbies.splice(i,1);
      }
    }
  }
  toggleEdit(){
    this.isEdit=!this.isEdit;
  }
}

interface Address{
  street : String,
  city : String,
  state : String
}
interface Post{
  userId:number
  id : number,
  title : string,
  body : string
}