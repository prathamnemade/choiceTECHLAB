import { Injectable } from '@angular/core';

@Injectable()
export class GetValidationMessages {
    account_validation_messages = {
        'emailID': [
            { type: 'required', message: '*EmailID is required' },
            { type: 'pattern', message: '*Incorrect EmailID' },
        ],
        'password': [
            { type: 'required', message: '*Password is required' },
            { type: 'minlength', message: '*Password cannot be less than 6 characters' },
            { type: 'maxlength', message: '*Password cannot be more than 20 characters' },
            { type: 'pattern', message: '*Your password must contain at least one uppercase, one lowercase,one special character and one number' },
        ],
        'fullName': [
            { type: 'required', message: '*FirstName is required' },
            { type: 'maxlength', message: '*FirstName cannot be more than 25 characters long' },
        ],
    }
}