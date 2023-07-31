import { Component } from '@angular/core';
import {teacher } from '../teacher';
@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  teachers =teacher;
  searchtext="";
  name="";
  seachText(){
    this.searchtext = this.name;
  }
  reset(){
    this.searchtext = "";
    this.name="";
  }
}
