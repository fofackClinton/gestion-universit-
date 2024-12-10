import { ClasseService } from './../classe.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Classe } from 'src/app/models/classe.models';



@Component({
  selector: 'app-liste-classe',
  templateUrl: './liste-classe.component.html',
  styleUrls: ['./liste-classe.component.css']
})

export class ListeClasseComponent implements OnInit {

  classeList: Classe[];

  constructor(
    private router: Router,
    private classeService: ClasseService
  ){}

  ngOnInit() {
    this.classeService.getClasse()
    .subscribe(classeList => this.classeList = classeList);
  }

  goToClasse(classe :Classe){
    this.router.navigate(['/classe',classe.idclasse])
  }

}
