import { Component, OnInit, AfterContentChecked, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit, AfterContentChecked {

  currentAction: string;
  pageTitle: string;
  protected route: ActivatedRoute;
  protected router: Router;

  constructor(protected injector: Injector) {
    this.currentAction = '';
    this.pageTitle = '';
    this.route = this.injector.get(ActivatedRoute);
    this.router = this.injector.get(Router);
  }

  ngOnInit(): void {
    this.setCurrentAction();
  }

  ngAfterContentChecked(){
    this.setPageTitle();
  }

  protected setCurrentAction() {
    if(this.route.snapshot.url[0].path == "new")
      this.currentAction = "new"
    else
      this.currentAction = "edit"
  }

  protected setPageTitle() {
    if (this.currentAction == 'new')
      this.pageTitle = this.creationPageTitle();
    else{
      this.pageTitle = this.editionPageTitle();
    }
  }

  protected creationPageTitle(): string{
    return "Novo"
  }

  protected editionPageTitle(): string{
    return "Edição"
  }
}
