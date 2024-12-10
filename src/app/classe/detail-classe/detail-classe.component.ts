import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClasseService } from './../classe.service';
import { Classe } from 'src/app/models/classe.models';

@Component({
  selector: 'app-detail-classe',
  templateUrl: './detail-classe.component.html',
  styleUrls: ['./detail-classe.component.css']
})
export class DetailClasseComponent {
  classeList: Classe[];
  classe : Classe|undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private classeService: ClasseService
  ){}

  ngOnInit() {
    const classeID: string|null = this.route.snapshot.paramMap.get('id');
    if (classeID) {
      this.classeService.getById(+classeID)
      .subscribe(classe => this.classe = classe);

    }
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
   //effacer et redirection vers la liste des classes
  deleteClasse(classe : Classe){
    this.classeService.deletetById(classe.idclasse)
    .subscribe(() => this.goToClasseList);
  }

  goToClasseList(classe :Classe){
    this.router.navigate(['/classe',classe.idclasse ]);
  }

  goToEditClasse(classe: Classe)
  {
    this.router.navigate(['/classe-detail',classe.idclasse]);
  }


}
