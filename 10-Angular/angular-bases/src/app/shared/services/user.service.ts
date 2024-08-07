import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseUser, User } from "../interfaces/user";

import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class UserService {

    private apiUrl:string = 'https://jsonplaceholder.typicode.com/users';

    constructor(private http: HttpClient){

    }

    // async getUsers():Promise<User[]>{ // obtener usuarios
    //     //const data = await fetch(this.apiUrl).then(data => data.json());
    //     const res = await fetch(this.apiUrl);
    //     const data = await res.json();

    //     return data as User[];
    // }

    getUsers():Observable<User[]> {
        return this.http.get<User[]>(this.apiUrl);
    }

    getUser(user: BaseUser): Observable<BaseUser> {
        return this.http.post<BaseUser>(this.apiUrl, user)
    }
    
}