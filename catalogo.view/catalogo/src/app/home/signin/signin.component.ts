import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/core/auth.service";

@Component({
    templateUrl:'./signin.component.html'
})

export class SignInComponent implements OnInit {
    loginForm!: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService
        ){}

        ngOnInit(): void {
            this.loginForm = this.formBuilder.group({
                email: ['', Validators.required],
                password: ['', Validators.required],
            });
        }

        login(): void {
            const email = this.loginForm.get('email')?.value;
            const password = this.loginForm.get('password')?.value;
            

            this.authService
                .authenticate(email, password)
                .subscribe (
                    () => console.log('autenticado'),
                    err => {
                        console.log(err);
                        this.loginForm.reset();
                        alert('Email ou senha inválido')
                    }
                )

        }
    }
 