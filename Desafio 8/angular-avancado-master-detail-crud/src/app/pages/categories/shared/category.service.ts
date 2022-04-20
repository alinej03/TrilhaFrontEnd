import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { map, catchError, flatMap } from "rxjs/operators";

import { Category } from "./category.model";
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiPath: string = "https://p38yx781aa.execute-api.us-east-1.amazonaws.com/Stage/categorias";
  private user: string = "aline_justiniano";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]> {
    return this.http.get(`${this.apiPath}?user_id=${this.user}`).pipe(catchError(this.handleError));
  }

  create(category: Category): Observable<Category> {
    category.user_id = this.user;
    category.id = uuid.v4();
    return this.http.post(this.apiPath, category).pipe(catchError(this.handleError));
  }

  update(category: Category): Observable<Category> {
    category.user_id = this.user;

    return this.http.put(`${this.apiPath}`, category).pipe(catchError(this.handleError));
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiPath}?user_id=${this.user}&id=${id}`).pipe(catchError(this.handleError));
  }



  // PRIVATE METHODS

  private handleError(error: any): Observable<any>{
    console.log("ERRO NA REQUISIÇÃO => ", error);
    return throwError(error);
  }
}