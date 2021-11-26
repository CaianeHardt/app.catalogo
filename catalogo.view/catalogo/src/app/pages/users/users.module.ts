import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [UserListComponent, UserFormComponent],
  imports: [UsersRoutingModule, SharedModule],
})
export class UsersModule {}
