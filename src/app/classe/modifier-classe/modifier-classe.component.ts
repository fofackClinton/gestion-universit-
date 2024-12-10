import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClasseService } from './../classe.service';
import { Classe } from 'src/app/models/classe.models';

@Component({
  selector: 'app-modifier-classe',
  templateUrl: './modifier-classe.component.html',
  styleUrls: ['./modifier-classe.component.css']
})
export class ModifierClasseComponent {
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
  }

}
