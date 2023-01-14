import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication.service';
import { environment } from 'src/environments/environment';
import { UserService } from '../../../services/user.service';

// import * as myGlobals from 'globals';

@Component({
  selector: 'app-mainNav',
  templateUrl: './mainNav.component.html',
  styleUrls: ['./mainNav.component.scss']
 })
export class MainNavComponent implements OnInit {
  showFiller = false;
  currentUser: any;

  root = environment.root;

  constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private UserService: UserService,
        private authenticationService: AuthenticationService
    ) {

  }

  async ngOnInit() {

    // this.currentUser = this.authenticationService.seeProfile();
    // await this.UserService.findByEmail(this.currentUser).subscribe(res => {
    //   this.currentUser = res[0];
    //   console.log(this.currentUser);
    //   this.authenticationService.setCurrUser(this.currentUser);
    // });
  }

  logout() {
    this.currentUser = undefined;
    this.authenticationService.logout();
  }
}
