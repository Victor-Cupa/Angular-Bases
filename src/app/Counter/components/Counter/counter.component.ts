import { Component} from '@angular/core';

@ Component({
 selector: 'app-counter',
 template: ` <h2> Counter: {{counter}}</h2>
 <button (click)="increaseBy(+1)">+1</button>
<button (click)="resetCounter()">Reset</button>
<button (click)="increaseBy(-1)">-1</button>`
})

export class counterComponent{
  public counter:number=0;
  increaseBy(value:number):void{
    this.counter += value;
   }
   resetCounter(){
    this.counter = 10;
   }
}
