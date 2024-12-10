import { Classe } from './../models/classe.models';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable()
export class ClasseService {

  //injection de l'http clientmodule
  constructor(private http: HttpClient){}

  //récupération de la liste des classes
  getClasse(): Observable<Classe[]>{
      return this.http.get<Classe[]>('localhost:8190/api/classe').pipe
      (
        tap((response) => this.log(response)),
        catchError((error)=> this.handleError(error, undefined))
      );
  }

  //récupération d'une classe à partir de son ID
  getById(classeID: number): Observable<Classe|undefined > {
    return this.http.get<Classe>(`localhost:8190/api/classe/${classeID}`).pipe
    (
      tap((response) => this.log(response)),
      catchError((error)=> this.handleError(error, undefined))
    );
  }

  //méthode de mise à jour d'une classe

  updateClasse(classe: Classe): Observable<Classe|undefined>{
    //envoie du contenue de la requete
    const httpOptions = {
      headers: new HttpHeaders ({ 'Content-Type': 'application/json' })
    };
    return this.http.put('localhost:8190/api/classe',classe,httpOptions).pipe
    (
      tap((response) => this.log(response)),
      catchError((error)=> this.handleError(error, undefined))
    );
  }

  //ajout d'une nouvelle classe
  addClasse(classe: Classe): Observable<null>{
    //envoie du contenue de la requete
    const httpOptions = {
      headers: new HttpHeaders ({ 'Content-Type': 'application/json' })
    };
    return this.http.post('localhost:8190/api/classe',classe,httpOptions).pipe
    (
      tap((response) => this.log(response)),
      catchError((error)=> this.handleError(error, undefined))
    );
  }


  //supression d'une classe
  deletetById(classeID: number): Observable<Classe|undefined > {
    return this.http.delete<Classe>(`localhost:8190/api/classe/${classeID}`).pipe
    (
      tap((response) => this.log(response)),
      catchError((error)=> this.handleError(error, undefined))
    );
  }

  //méthode de loging du contenu
  private log(response: Classe | Classe[] | undefined |any)
  {
    console.table(response);
  }

  //méthode de récupération de l'érreur
  private handleError(error: Error, errorValue: any)
  {
    console.error(error);
    return of(errorValue);
  }
}
