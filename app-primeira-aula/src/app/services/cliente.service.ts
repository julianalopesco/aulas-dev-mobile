import { Injectable} from "@angular/core";

//injeção de dependência
@Injectable({providedIn: 'root'})
export class ClientService {

    constructor() {

    }

    sayHello(){
        return "Olá pelo serviço"
    }

}