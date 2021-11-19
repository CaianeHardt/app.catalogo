import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from "../components/vmessage/vmessage.module";
import { SignInComponent } from "./signin/signin.component";

@NgModule({
    declarations: [ SignInComponent ],
    // exports: [ SignInComponent ],
    imports: [ 
        CommonModule,
        ReactiveFormsModule,
        VMessageModule

    ]
})

export class HomeModule { }