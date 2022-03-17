import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apresentacao',
  templateUrl: './apresentacao.component.html',
  styleUrls: ['./apresentacao.component.scss']
})
export class ApresentacaoComponent implements OnInit {

  nomeAluna: string = "Aline";
  nomeTutor: string = "Elivel";
  data = new Date();
  turma: string = "turma 10";

  constructor() { }

  ngOnInit(): void {

  }

}
