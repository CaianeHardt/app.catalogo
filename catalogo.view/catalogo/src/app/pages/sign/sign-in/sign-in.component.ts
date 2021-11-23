import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/plataform-detector/plataform-detector.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  loginForm!: FormGroup;

  @ViewChild('usersEmailInput')
  usersEmailInput!: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService,
  ) {}

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

    this.authService.signIn(email, password).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('users/' + email);
    });

    // this.authService
    //     .signIn(email, password)
    //     .subscribe(
    //         () => this.router.navigate(['users' + email]),
    //         // () => this.router.navigateByUrl('users/' + email),

    //         err => {
    //             console.log(err);
    //             this.loginForm.reset();
    //             this.platformDetectorService.isPlatformBrowser() &&
    //                 this.usersEmailInput.nativeElement.focus();
    //             alert('Email ou senha inválido')
    //         }
    //     )
  }
}
