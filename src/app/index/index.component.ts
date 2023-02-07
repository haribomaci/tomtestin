//
// * File: index.component.ts <br>
// * Author: Tóth Júlia <br>
// * Copyright: 2023, Tóth Júlia <br>
// * Group: Szoft 2/N <br>
// * Date: 2022-02-07 <br>
// * Github: https://github.com/haribomaci/ <br>
// * Licenc: GNU GPL <br> 
//

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit{
  kg = new FormControl("");
  m = new FormControl("");
  value = new FormControl("");

  valueVisible = false;

  constructor(){}

  ngOnInit(): void {
    
  }
  Keyup(event:any){
    if(event.key == "Enter"){
      this.Enter();
    }
  }
    Enter(){
      this.onClickCalcButton();
    }
  onClickCalcButton(){
    let kg = Number(this.kg.value);
    let m = Number(this.m.value);
    let value = this.calcIndex(kg, m);
    console.log(value);
    this.value.setValue(String(value));
    this.valueVisible = true;
  }
  calcIndex(kg: number, m: number){
    let value = kg / Math.pow(2, m);
    return value;
  }
}
