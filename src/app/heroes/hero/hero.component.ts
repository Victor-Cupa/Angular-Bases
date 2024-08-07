import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizeName(): string {
    return this.name.toUpperCase();

  }

  get heroDescription(): string {
    return `${this.name} tiene ${this.age} años`;
  }

  changeHero(): void {
    this.name = 'victor';
  }

  changeAge(): void {
    this.age = 34;
  }

  resetView(): void {
    this.name = 'Ironman';
    this.age = 45;
  };
}

