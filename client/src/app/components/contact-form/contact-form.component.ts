import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { MailService } from '../../services/mail.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AlertService } from 'src/app/services/alert.service';


@Component({
  selector: 'app-contactForm',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
 })
export class ContactFormComponent implements OnInit {
  public currentUser: any;

  userToggle: any;

  contactReasons: any[] = [
    {value: 'Missing Task'},
    {value: 'Incorrect Status'},
    {value: 'General Issue'},
    {value: 'Feature Request'},
    {value: 'Other'}
  ];

  root = environment.root;

  contactForm = this.formBuilder.group({
    subject: '',
    message: ''
  });

  constructor(
      private formBuilder: FormBuilder,
      private mail: MailService,
      private alertService: AlertService,
      private authenticationService: AuthenticationService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;

    if(this.root != "") {
      this.userToggle = window.location.href.split('/')[6]; //uat site
    }else{
      this.userToggle = window.location.href.split('/')[4]; // local or domain root
    }

    if(this.userToggle != null) {
      this.userToggle = this.userToggle.split('-')[1];

      if(this.userToggle == "incorrect") {
        this.contactForm.controls['subject'].setValue('Incorrect Status');
      }else {
        this.contactForm.controls['subject'].setValue('Missing Task');
      }
    }
  }

  ngOnInit() {
  }

  onSubmit(): void {
    // Process checkout data here
    this.mail.sendContactEmail('andrew.phillips-g@arup.com', this.currentUser.email + ' reported: ' + this.contactForm.value.subject, this.contactForm.value.message).subscribe( async res => {
      // res.subscribe(r =>{
      //   console.log(r);
      // });


      console.log(res);
      if(res){
        this.alertService.success('Message has been sent!', true);
      }else{
        this.alertService.error('Message failed to send!', false);
      }
    });
    console.warn('Your order has been submitted', this.contactForm.value);
    this.contactForm.reset();
  }
}
