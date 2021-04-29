import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent {
    constructor(private route: ActivatedRoute, private router: Router, private authorizationService: AuthorizationService) {
        this.route.queryParams.subscribe(params => {
            let code = params['code'];
            if(code == null) return;
            
            authorizationService.requestAccessToken(code).subscribe(param => {
                let access_token = param['access_token']
                if(access_token == null) return;
                authorizationService.setAccessToken(access_token).subscribe(result => {
                  if(result) this.router.navigate(['']);
                })
            })
          });
      }
}
