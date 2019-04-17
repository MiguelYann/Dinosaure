import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = '/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  http: any;

  constructor(private htpp: HttpClient) { }
/**
 * the error handler function.
 * @param error
 */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Si une erreur cote Front est detecte
      console.error('Une erreur est survenue:', error.error.message);
    } else {
      // Express renvoie une reponse echec
      console.error(
        `Code de retour de Express ${error.status}, ` +
        `Contenu: ${error.error}`);
    }
    // On retourne un observable
    return throwError('Reessayer');
  };

/**
 *  Fonction pour extraire les données
 */
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getDinosaures(): Observable<any> {
    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  getDinosaure(id: string): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

 postDinosaure(data): Observable<any> {
    return this.http.post(apiUrl, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateDinosaure(data): Observable<any> {
    return this.http.put(apiUrl, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteDinosaure(id: string): Observable<{}> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
}
