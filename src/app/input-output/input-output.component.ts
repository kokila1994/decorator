import { newArray } from '@angular/compiler/src/util';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {
  @Input() msg:any;
  @Output() newMessage = new EventEmitter();
  name:string="kokila";
  i:any;
  hold:any;
  boolean=false;
  

  constructor(){
   
  }
  ngOnInit(){
   
  }

  newEvent(){
    this.newMessage.emit(this.boolean=true);
  }
  newEvents(){
    this.newMessage.emit(this.boolean=false);
  }

  


 
    
  }
