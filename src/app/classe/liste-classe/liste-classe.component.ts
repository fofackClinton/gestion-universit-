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

  editClasse(classe :Classe){
    this.router.navigate(['classe/:id/edit',classe.idclasse])
  }
    //effacer et redirection vers la liste des classes
   deleteClasse(classe : Classe){
      this.classeService.deletetById(classe.idclasse)
      .subscribe(() => this.goToClasseList);
  }
  //retourné à la liste de classe
  goToClasseList(classe :Classe){
    this.router.navigate(['/classe',classe.idclasse ]);
  }

}
