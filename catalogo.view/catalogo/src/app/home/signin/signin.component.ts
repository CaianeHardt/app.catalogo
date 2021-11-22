import { HttpHeaders } from "@angular/common/http";
// import { Router } from "@angular/compiler/src/core";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/auth.service";
import { PlatformDetectorService } from "src/app/core/plataform-detector/plataform-detector.service";


@Component({
    templateUrl:'./signin.component.html'
})
 

export class SignInComponent implements OnInit {
    
    loginForm!: FormGroup;
    
    @ViewChild("usersEmailInput")
    usersEmailInput!: ElementRef<HTMLInputElement>;
    
    // @ViewChild('usersEmailInput', {static: false}) ElementRef<HTMLInputElement>,


   
    
    

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router, 
        private platformDetectorService: PlatformDetectorService
        
    
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
            // this.platformDetectorService.isPlatformBrowser() && 
            // this.usersEmailInput.nativeElement.focus();    
            

            this.authService
                .authenticate(email, password)
                .subscribe(
                    () => this.router.navigate(['users' + email]),
                    // () => this.router.navigateByUrl('users/' + email),
            
                    err => {
                        console.log(err);
                        this.loginForm.reset();
                        this.platformDetectorService.isPlatformBrowser() && 
                            this.usersEmailInput.nativeElement.focus();
                        alert('Email ou senha inválido')
                    }
                )

        }
    }
 

    // this.platformDetectorService.isPlatformBrowser() && 
    //                         this.usersEmailInput.nativeElement.focus();
    // Aqui, a expressão booleana avalia e se for V executa a segunda linha