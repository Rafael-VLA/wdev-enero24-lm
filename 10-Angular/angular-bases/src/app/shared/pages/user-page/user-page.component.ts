import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { BaseUser, User } from '../../interfaces/user';

@Component({
  selector: 'shared-user-page',
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {
  public users: User[] = []; // Usuarios
  
  public user:(BaseUser | null) = null; 

  constructor(private userService: UserService){
    
  }

  public obtenerUsuario(){

    const newUser: BaseUser = {
      id: 0,
      name: "Rafael Sequeira",
      username: "rsequeira"
    }

    this.userService.getUser(newUser).subscribe((data) => {
      this.user = data;
    });

  }

  ngOnInit(){
    // USANDO FETCH
    // this.userService.getUsers().then(
    //   users => {
    //     this.users = users;
    //   }
    // );

    // USANDO HTTP

    // VERSION < 18
    // this.userService.getUsers().subscribe(
    //   data => {
    //     this.users = data;
    //   }
    // )

    // VERSION >= 18
    // this.userService.getUsers().subscribe({
    //   next: (data) => {
    //     console.log(data)
    //   },
    //   error: (error) => {
    //     console.error(error)
    //   }
    // });

    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  concatenar(website: string){
    return `https://${website}`;
  }

  get getJsonUser(){
    return JSON.stringify(this.user)
  }

}
