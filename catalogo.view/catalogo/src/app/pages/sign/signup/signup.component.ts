import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    templateUrl: './signup.component.html'
})
export class SignUpComponent implements OnInit {

    signupForm!: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
            email: ['',
            [
                Validators.required,
                Validators.email
            ]
        ],
            fullName: ['',
            [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(40)
            ]
        ],
            password: ['',
            [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(14)
            ]
        ],
        })
    }
}