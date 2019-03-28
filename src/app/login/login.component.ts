import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { GetValidationMessages } from './validationMessages';
import { LocalDataService } from '../commons/common.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userDetailsForm: FormGroup;
  account_validation_messages = this.validation_messages.account_validation_messages;
  messageLogin: string = "";
  userLoggedin: boolean = false;
  constructor(private router:Router,private formBuilder: FormBuilder, public validation_messages: GetValidationMessages, private localDataService: LocalDataService) { }
  ngOnInit() {
    this.formSkeleton()
    this.messageLogin = "";
  }
  formSkeleton() {
    this.userDetailsForm = new FormGroup({
      'emailID': new FormControl('', Validators.compose([
        Validators.required,
      ])),
      'password': new FormControl('', Validators.compose([
        Validators.required,
      ]))
    })
  }
  onSubmitUserDetails(formValue) {
    console.warn(this.localDataService.registeredUser);
    for (let i = 0; i < this.localDataService.registeredUser.length; i++) {
      if (this.localDataService.registeredUser[i].emailID == formValue.emailID && this.localDataService.registeredUser[i].password == formValue.password) {
        localStorage.setItem('email', this.localDataService.registeredUser[i].emailID)
        localStorage.setItem('name', this.localDataService.registeredUser[i].fullName)
        this.userLoggedin = true;
      } else {
        this.userLoggedin = false;
      }

    }
    if (!this.userLoggedin) {
      this.messageLogin = "Invalid Credentials!!"
    } else {
      this.router.navigate(['/home'])
    }


  }
}