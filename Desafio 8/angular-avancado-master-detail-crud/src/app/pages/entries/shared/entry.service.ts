import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { map, catchError, flatMap } from "rxjs/operators";

import { CategoryService } from "../../categories/shared/category.service";

import { Entry } from "./entry.model";
import * as uuid from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class EntryService {

  private apiPath: string = "https://p38yx781aa.execute-api.us-east-1.amazonaws.com/Stage/lancamentos";
  private user: string = "aline_justiniano";

  constructor(private http: HttpClient) { }


  getAll(): Observable<Entry[]> {
    return this.http.get(`${this.apiPath}?user_id=${this.user}`).pipe(catchError(this.handleError));
  }

  getById(id: string): Observable<Entry> {
    const url = `${this.apiPath}/${id}?user_id=${this.user}`;

    return this.http.get(url).pipe(
      catchError(this.handleError)
    )
  }

  create(entry: Entry): Observable<Entry> {
    entry.user_id = this.user;
    entry.id = uuid.v4();
    return this.http.post(this.apiPath, entry).pipe(catchError(this.handleError));
  }

  update(entry: Entry): Observable<Entry> {
    entry.user_id = this.user;
    return this.http.put(`${this.apiPath}`, entry).pipe(catchError(this.handleError));
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