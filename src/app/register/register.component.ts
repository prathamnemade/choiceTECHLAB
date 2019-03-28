import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { GetValidationMessages } from '../login/validationMessages';
import { LocalDataService } from '../commons/common.constants';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userRegisterForm: FormGroup;
  dataSaved: string = ""
  account_validation_messages = this.validation_messages.account_validation_messages
  constructor(private formBuilder: FormBuilder, public validation_messages: GetValidationMessages, private localDataService: LocalDataService) { }
  ngOnInit() {
    this.formSkeleton()
    this.dataSaved = ""
  }
  formSkeleton() {
    this.userRegisterForm = new FormGroup({
      'fullName': new FormControl('', Validators.compose([
        Validators.maxLength(25),
        Validators.required
      ])),
      'emailID': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ])),
      'password': new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$'),
      ]))
    })
  }
  onSubmitRegisterDetails(formValue) {
    for (let i = 0; i < this.localDataService.registeredUser.length; i++) {
      if (this.localDataService.registeredUser[i] == formValue) {
        this.dataSaved = "User is already registered!!"
      }

    }
    this.localDataService.registeredUser.push(formValue)
    this.dataSaved = "Registered successfully!!"
  }

}