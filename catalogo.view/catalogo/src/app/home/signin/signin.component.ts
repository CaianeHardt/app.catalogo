import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    templateUrl:'./signin.component.html'
})

export class SignInComponent implements OnInit {
    loginForm!: FormGroup;

    constructor(private formBuilder: FormBuilder){}

        ngOnInit(): void {
            this.loginForm = this.formBuilder.group({
                email: ['', Validators.required],
                password: ['', Validators.required],
            });
        }
    }
 

 