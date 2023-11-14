import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SquaresService {
  private apiUrl = 'https://localhost:7044/Squares';

  constructor(private http: HttpClient) {}

  GetSquaresURL(min: number, max: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?min=${min}&max=${max}`);
  }
}
