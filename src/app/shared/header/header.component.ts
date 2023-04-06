import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-shared',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() public contador: number = 0;

  // @Output() cria um evento para o componente que é disparado quando esse evento é preenchido com um dado
  @Output() public enviarDados = new EventEmitter();

  public list: Array<{nome: string; idade: number}> = [
    {nome: "Nicolas Pizzoni", idade: 23},
    {nome: "Daniel Pizzoni", idade: 48},
  ]

  getDados(index: number){
    this.enviarDados.emit(this.list[index])
  }

}
