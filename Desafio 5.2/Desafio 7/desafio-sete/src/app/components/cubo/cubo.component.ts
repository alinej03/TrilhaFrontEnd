import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cubo',
  templateUrl: './cubo.component.html',
  styleUrls: ['./cubo.component.scss']
})
export class CuboComponent implements OnInit {

  valor: number = 0;

  constructor(private router: ActivatedRoute) { 
    this.router.queryParams.subscribe(param => this.valor = param['valor']);
  }

  ngOnInit(): void {

  }

}
