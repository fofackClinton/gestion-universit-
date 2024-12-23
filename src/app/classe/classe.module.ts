import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeClasseComponent } from './liste-classe/liste-classe.component';
import { DetailClasseComponent } from './detail-classe/detail-classe.component';
import { RouterModule, Routes } from '@angular/router';
import { ClasseService } from './classe.service';
import { ModifierClasseComponent } from './modifier-classe/modifier-classe.component';


const ClasseRoutes: Routes = [
  { path: 'classe', component:ListeClasseComponent},
  { path: 'classe-detail/:id', component: DetailClasseComponent },
  {path: 'classe/:id/edit', component: ModifierClasseComponent}

];
@NgModule({
  declarations: [
    ListeClasseComponent,
    DetailClasseComponent,
    ModifierClasseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ClasseRoutes)
  ],
  providers: [ClasseService]
})
export class ClasseModule { }
