import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.css'
})
export class HeroListComponent {
  public heroNames: string[] = ['Spiderman','IronMan','Hulk', 'she Hulk','Thor','Antman'];
  public deleteHero?:string ;
  removeLastHero (): void {
   this.deleteHero= this.heroNames.pop();
  }
}
