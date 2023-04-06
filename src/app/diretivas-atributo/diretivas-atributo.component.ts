import { Component, OnInit } from '@angular/core';

interface ListProps {
  nome: string;
}

@Component({
  selector: 'app-diretivas-atributo',
  templateUrl: './diretivas-atributo.component.html',
  styleUrls: ['./diretivas-atributo.component.css']
})

export class DiretivasAtributoComponent implements OnInit {
  public valor: boolean = true;
  public fontSize: string = "30px";
  public nome: string = "";
  public list: Array<ListProps> = [];

  ngOnInit() {
    setInterval(() => {
      this.valor = !this.valor
    }, 3000)
  }

  salvar() {
    this.list.push({nome: this.nome})
    this.nome = ""
  }
}
