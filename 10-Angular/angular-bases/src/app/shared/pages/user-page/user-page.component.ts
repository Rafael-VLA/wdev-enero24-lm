import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'shared-user-page',
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {
  public users: User[] = []; // Usuarios

  constructor(private userService: UserService){
    
  }

  ngOnInit(){
    // this.userService.getUsers().then(
    //   users => {
    //     this.users = users;
    //   }
    // );

    this.userService.getUsers().subscribe(
      data => {
        this.users = data;
      }
    )
  }

  concatenar(website: string){
    return `https://${website}`;
  }

}
