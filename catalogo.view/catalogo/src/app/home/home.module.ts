import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from "@angular/router";
import { VMessageModule } from "../components/vmessage/vmessage.module";
import { SignInComponent } from "./signin/signin.component";

@NgModule({
    declarations: [ SignInComponent ],
    // exports: [ SignInComponent ],
    imports: [ 
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        RouterModule

    ]
})

export class HomeModule { }