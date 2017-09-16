import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//aqui passa valores para o template
export class AppComponent {

  title = 'app';
  labelButton = "Me clique";
  isButtonDisabled:boolean = false;
  meuInput = "teste input voltando";
  students = ["Diogo","leo","Bichao","Homao"];
  inputPush = "";

  executarAcao(param) {
    this.labelButton = param;
    this.meuInput = "voce clicou";
  }

  executaRegra() {
    this.meuInput = "acao inserir";
    

    this.students.push(this.inputPush);
    
    this.inputPush = "";//limpar
  }
}
