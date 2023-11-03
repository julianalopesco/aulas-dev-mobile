import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../model/user";

const URL = "https://gorest.co.in/public/v2/users" //api rest utilizada

@Injectable({providedIn: 'root'})
export class UserService {
    constructor(private http: HttpClient) { }

    //operações do serviço REST
    getUsers():Observable<User[]> {
        return this.http.get<User[]>(URL)
    }

    postUser(user: User) {
        this.http.post(URL, user)
        .subscribe(response => {
            console.log('salvo')
        }, (error) => {
            console.error(error) //tratando o erro 
        })
    }

    putUser(id: number, user: User) {
        this.http.put(`${URL}/${id}`,user) //url padrão da rest 
        .subscribe( response => {
            console.log('usuario salvo')
        },(error) => {
            console.error(error) //tratando o erro 
        })
    }

    deleteUser(id: number) {
        this.http.delete(`${URL}/${id}`)
        .subscribe( response => {
            console.log('usuario deletado')
        },(error) => {
            console.error(error) //tratando o erro 
        })
    }
}