import { DOCUMENT } from '@angular/common'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Injectable, Inject } from '@angular/core'
import { throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

@Injectable()
export class AuthorizationService {
  private readonly CLIENT_ID = '0ef8332626044b109dcd7da94f8fd798'
  private readonly CLIENT_SECRET = '3c11752bbecc492aae598c6f8bf2a3f0'
  private readonly SCOPES = 'user-top-read'
  private readonly REDIRECT_URI = 'http://localhost:4200/login'

  public access_token = null

  constructor(@Inject(DOCUMENT) private document: Document, private http: HttpClient) { }

  login(){
    this.document.location.href = 'http://accounts.spotify.com/authorize' +
    '?response_type=code' +
    '&client_id=' + this.CLIENT_ID +
    (this.SCOPES ? '&scope=' + encodeURIComponent(this.SCOPES) : '') +
    '&redirect_uri=' + encodeURIComponent(this.REDIRECT_URI) +
    '&show_dialog=true'
  }

  requestAccessToken(code: string){
    let auth = 'Basic ' + btoa(this.CLIENT_ID + ':' + this.CLIENT_SECRET);
    let body = new HttpParams().set('grant_type', 'authorization_code')
                                 .set('code', code)
                                 .set('redirect_uri', 'http://localhost:4200/login')
    let options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': auth
      }
    }

    return this.http.post('https://accounts.spotify.com/api/token', body, options).pipe(
      catchError(error => {
        return throwError(error)
      })
    )
  }

  setAccessToken(access_token: string){
    this.access_token = access_token;

    return this.http.post('http://localhost:8080/login', access_token).pipe(
      catchError(error => {
        return throwError(error)
      })
    )
  }
}
