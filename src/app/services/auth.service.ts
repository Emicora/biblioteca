import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = '/api';

  constructor(private http: HttpClient) { }

  login(mail: string, contrasena: string): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/auth/login', { mail, contrasena }).pipe(
      tap(response => {
        // Almacenar el token y el rol en el almacenamiento local
        localStorage.setItem('token', response.token);
        localStorage.setItem('role', response.role);
      })
    );
  }


  getRole(): string | null {
    return localStorage.getItem('role');
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }
}
