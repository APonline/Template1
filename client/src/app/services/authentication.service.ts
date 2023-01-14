import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
// import { map, timestamp } from 'rxjs/operators';
// import { UserService } from '../services/user.service';
// import * as myGlobals from 'globals';
// import { environment } from 'src/environments/environment';
// import { Subject, Subscription } from 'rxjs';
// import { MsalService } from '@azure/msal-angular';
// import { EventType } from '@azure/msal-browser';
// import { isNull } from 'util';
// import { OnBehalfOfClient } from '@azure/msal-common';
// import { async } from '@angular/core/testing';
// //// import {toPromise} from 'rxjs/add/operators';

// //// Add here the endpoints for MS Graph API services you would like to use.
// const graphConfig = {
//   graphGetGroupList: 'https:////graph.microsoft.com/v1.0/groups',
//   graphGetGroup: 'https:////graph.microsoft.com/v1.0/groups/',
//   graphMeEndpoint: 'https:////graph.microsoft.com/v1.0/me',
//   graphMeDetailsEndpoint: 'https:////graph.microsoft.com/v1.0/me/people/?$search="',
//   //// graphSearchUsersEndpoint: 'https:////graph.microsoft.com/v1.0/me/people?$search=',
//   graphSearchUsersEndpoint: 'https:////graph.microsoft.com/v1.0/me/people?&$search="',
//   graphSearchUsersEndpoint2: "https:////graph.microsoft.com/v1.0/users?$top=20&$filter=startswith(displayName,'",
//   graphGetCompanyEndpoint: 'https:////graph.microsoft.com/v1.0/me/people?$search="',
//   graphMePhotoEndpoint: 'https:////graph.microsoft.com/v1.0/me/photos/240x240/$value',
//   graphUserPhotoEndpoint: 'https:////graph.microsoft.com/v1.0/users/',
//   graphMailEndpoint: 'https:////graph.microsoft.com/v1.0/me/messages',
//   graphGetCompaniesEndpoint: 'https:////graph.microsoft.com/v1.0/organization?$select=displayName&$search="'
// };

// //// Add here scopes for access token to be used at MS Graph API endpoints.
// const tokenRequest = {
//   scopes: ['Mail.Read']
// };


// const msalConfig = {
//   auth: {
//     clientId: '847037bc-bf8c-40aa-9eb6-7b1005d31a03',
//     authority: 'https:////login.microsoftonline.com/organizations',
//     redirectUri: 'http:////127.0.0.1:30662/',
//   },
//   cache: {
//     cacheLocation: 'sessionStorage', //// This configures where your cache will be stored
//     storeAuthStateInCookie: true, //// Set this to "true" if you are having issues on IE11 or Edge
//     forceRefresh: false //// Set this to "true" to skip a cached token and go to the server to get a new
//   }
// };
// //// Add here scopes for id token to be used at MS Identity Platform endpoints.
// const loginRequest = {
//   scopes: ['openid', 'profile', 'People.Read', 'People.Read.All', 'User.Read', 'User.Read.All', 'User.ReadBasic.All', 'Group.Read.All', 'GroupMember.Read.All', 'Contacts.Read', 'OrgContact.Read.All'],
// };

// const baseUrl = environment.apiUrl + '/users';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  public currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  use = '';
//   MSALaccessToken;
//   accessToken: string;
//   userMail: any;
//   searching = [];
//   expiresAt: number;

//   //// Create a stream of logged in status to communicate throughout app
//   private loggedIn = new Subject<boolean>();
//   loggedIn$ = this.loggedIn.asObservable();
//   private loggingIn = new Subject<boolean>();
//   loggingIn$ = this.loggedIn.asObservable();

  userProfile: any = null;

//   loggedInB: boolean;
//   public userInfo: any = null;
//   private subscription: Subscription;
//   public isIframe: boolean;

  constructor(
//     private http: HttpClient,
//     private UserService: UserService,
//     private msalService: MsalService,
//     //// private sanitizer: DomSanitizer,
//     private userService: UserService
    ) {
//     ////  This is to avoid reload during acquireTokenSilent() because of hidden iframe
//     this.isIframe = window !== window.parent && !window.opener;

      this.use = this.userProfile;

      this.currentUserSubject = new BehaviorSubject<any>(null);
      this.currentUser = this.currentUserSubject.asObservable();

//     //// this.MSALaccessToken = this.msalService.instance.acquireTokenRedirect(loginRequest)
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

//   ngOnDestroy() {
//   }

//   async login() {
//     const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
//     const accounts = this.msalService.instance.getAllAccounts();
//     if (accounts.length > 0) {
//       this.msalService.instance.setActiveAccount(accounts[0]);
//     }

//     this.msalService.instance.addEventCallback((event) => {
//       //// set active account after redirect
//       if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
//         const account = event.payload.account;
//         this.msalService.instance.setActiveAccount(account);
//       }
//     });

//     //// handle auth redired/do all initial setup for msal
//     this.msalService.instance.handleRedirectPromise().then(authResult => {
//       //// Check if user signed in
//       const account = this.msalService.instance.getActiveAccount();
//       if (!account) {
//         //// redirect anonymous user to login page
//         this.msalService.instance.loginRedirect();
//       }
//     }).catch(err => {
//       //// TODO: Handle errors
//       console.log(err);
//     });
//     this.userProfile = this.msalService.instance.getActiveAccount();
//     await this.UserService.findByEmail( this.userProfile.username.toLowerCase() ).subscribe(res => {
//       this.userProfile = res[0];
//       this.setCurrUser(this.userProfile);
//     });
//     this.MSALaccessToken = this.userProfile.idTokenClaims;
//     this.getProfileToken();
//   }

  logout() {
    this.userProfile = null;
    //this.msalService.logout();
  }

//   setLoggedIn(value: boolean) {
//     //// Update login status subject
//     this.loggedIn.next(value);
//   }

//   seeProfile(): Observable<any> {
//     if (!this.msalService.instance.getActiveAccount()) { return; }



//     //// this.MSALaccessToken = this.msalService.instance.acquireTokenRedirect(loginRequest)

//     this.userProfile.name = this.userProfile.idTokenClaims.name;
//     this.userProfile.email = this.userProfile.username;
//     //// this.userProfile.compName = await this.userCompany(this.userProfile.email);
//     //// this.userProfile.picture = await this.getUserPhoto(this.userProfile.email);
//     this.userProfile.email.toLowerCase();

//     ////this.setCurrUser(this.userProfile.email.toLowerCase());

//     return this.userProfile.username.toLowerCase();
//   }

setCurrUser(user) {
    this.currentUserSubject = new BehaviorSubject(user);
    this.currentUser = this.currentUserSubject.asObservable();
}

//   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//   async handleAuth() {
//     if (this.msalService.instance.getActiveAccount()) { //// DIFF MSAL VERSION
//       this.setLoggedIn(true);
//       this.loggingIn.next(false);
//     } else {
//       this.setLoggedIn(false);
//       this.loggingIn.next(false);
//     }
//   }

//   public async getProfile() {

//     //// GET OUR USER INFO
//     this.userProfile = await this.callMSGraph(graphConfig.graphMeEndpoint, this.MSALaccessToken, res => {
//       return res;
//     });
//   }


//   async getProfileToken() {
//     await this.getTokenPopup(loginRequest)
//     .then(response => this.MSALaccessToken = response.accessToken)
//     .catch(error => {
//       ////console.log('silent token acquisition fails. acquiring token using popup');
//       console.error(error);
//       //// fallback to interaction when silent call fails
//       return this.msalService.acquireTokenPopup(loginRequest)
//         .toPromise()
//         .then(tokenResponse => {})
//         .catch(er => console.error(er));
//     });
//   }

//   //// Helper function to call MS Graph API endpoint
//   //// using authorization bearer token scheme
//   callMSGraph(endpoint, accessToken, callback) {
//     const headers = new Headers();
//     const bearer = `Bearer ${accessToken}`;

//     headers.append('Authorization', bearer);

//     const options = {
//       method: 'GET',
//       headers
//     };

//     ////console.log('request made to Graph API at: ' + new Date().toString());

//     return fetch(endpoint, options)
//       .then(response => response.json())
//       .then(response => callback(response, endpoint))
//       .catch(error => console.error(error));
//   }

//   getTokenPopup(request) {
//     ////this.userProfile = this.msalService.instance.getActiveAccount();
//     ////return this.msalService.acquireTokenSilent(request);
//     return this.msalService.instance.acquireTokenSilent(request);
//   }

//   callMSGraphImg(endpoint, accessToken, callback) {
//     const headers = new Headers();
//     const bearer = `Bearer ${accessToken}`;

//     headers.append('Authorization', bearer);

//     const options = {
//       method: 'GET',
//       headers,
//       responseType: 'blob'
//     };

//     ////console.log('request made to Graph API at: ' + new Date().toString());

//     return fetch(endpoint, options)
//       .then(response => response.ok ? response.blob() : null)
//       .then(response => callback(response, endpoint))
//       .catch(error => console.error(error));
//   }

//   getPhoto() {
//     return this.callMSGraphImg(graphConfig.graphMePhotoEndpoint, this.MSALaccessToken, res => {
//       if (res) {
//         return new Promise((resolve, reject) => {
//           const reader = new FileReader();
//           reader.readAsDataURL(res); //// converts the blob to base64 and calls onload
//           reader.onload = () => resolve(reader.result); //// data url
//         });
//       } else {
//         return;
//       }
//     });
//   }
//   getUserPhoto(id) {
//     return this.callMSGraphImg(graphConfig.graphUserPhotoEndpoint + id + '/photos/120x120/$value', this.MSALaccessToken, res => {
//       if (res) {
//         return new Promise((resolve, reject) => {
//           const reader = new FileReader();
//           reader.readAsDataURL(res); //// converts the blob to base64 and calls onload
//           reader.onload = () => resolve(reader.result); //// data url
//         });
//       } else {
//         return;
//       }
//     });
//   }
//   async userDetails(id) {
//     return await this.callMSGraph(graphConfig.graphSearchUsersEndpoint + id + '"', this.MSALaccessToken, (res) => {
//       return res;
//     });
//   }
//   async searchUsers(searching) {
//     await this.callMSGraph(graphConfig.graphSearchUsersEndpoint2 + searching + "')", this.MSALaccessToken, (res) => {
//       this.searching = res;
//     });
//   }
//   async userCompany(id) {
//     return await this.callMSGraph(graphConfig.graphGetCompaniesEndpoint + id + '"', this.MSALaccessToken, async (res) => {
//       return res;
//     });
//   }

//   get(id: any): Observable<any> {
//     return this.http.get(`${baseUrl}/${id}`);
//   }
}
