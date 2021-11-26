import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

interface User {
  id: number;
  name: string;
  email: string;
}

const USERS: User[] = [
  {
    id: 1,
    name: "Teste 1",
    email: "teste1@gmail.com"
  },
  {
    id: 2,
    name: "Teste 2",
    email: "teste2@gmail.com"
  },
  {
    id: 3,
    name: "Teste 3",
    email: "teste3@gmail.com"
  }
]

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {

  constructor(private userService: UserService) { }
  
  columns: string[] = ['Name', 'Email'];
  users = USERS;

  deleteResource(user: User) {
    const mustDelete = confirm('Deseja realmente excluir este item?');
    
    if (mustDelete){
      this.userService.delete(user.id).subscribe(
        () => this.users = this.users.filter(element => element != user),
        () => alert("Erro ao tentar excluir!")
      )
    }
  }
}
