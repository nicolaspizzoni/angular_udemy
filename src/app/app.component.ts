import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';

  public addValue:number = 0

  public getDadosHeader: {nome: string; idade: number} | undefined;

  adicionar() {
    this.addValue += 1
  }

  setDados(dado: {nome: string; idade: number}) {
    this.getDadosHeader = dado
  }

}
