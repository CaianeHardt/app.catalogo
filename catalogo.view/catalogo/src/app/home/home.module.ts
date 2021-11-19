import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageComponents } from "../components/vmessage/vmessage.components";
import { VMessageModule } from "../components/vmessage/vmessage.module";
import { SignInComponent } from "./signin/signin.component";

@NgModule({
    declarations: [ SignInComponent ],
    // exports: [ SignInComponent ],
    imports: [ 
        CommonModule,
        ReactiveFormsModule,
        VMessageComponents

    ]
})

export class HomeModule { }