import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable, throwError } from "rxjs";

import { map, catchError } from "rxjs/operators";

import { MovieDTO } from "../../models/movie.dto";

import { API_CONFIG } from "../../config/api.config";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {}

  getAllUpcoming(page: number = 1): Observable<MovieDTO[]>{
    const url = `${API_CONFIG.baseUrl}/${page}`;
    return this.http.get(url).pipe(
      catchError(this.handleError),
      map(this.jsonDataToMoviesDTO)
    )
  }

  // PRIVATE METHODS

  private jsonDataToMoviesDTO(jsonData: any[]): MovieDTO[]{
    const movies: MovieDTO[] = [];
    jsonData.forEach(element => movies.push(element as MovieDTO));
    return movies;
  }

  private handleError(error: any): Observable<any>{
    console.log("Error ->", error);
    return throwError(error);
  }

}
