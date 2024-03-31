import { user } from "./classes.js";
import { ong } from "./classes.js";
import { deficiency } from "./classes.js";


export function getOng (){
    
    return response.send({ ong })
    
}

export function getDeficiency (){
    return response.send({ deficiency })
}

export function getUser (){
    return response.send({ user })
    
}



export function createDeficiency (id,nome,tipo){
    const newDeficiency = new deficiency(id,nome,tipo);

}

export function createUser (id,nome,idade,deficiencia,cep){
    const newUser = new user(id,nome,idade,deficiencia,cep);
    
}

export function createOng (id,nome,contato,email,sede,site, deficiencia){
    const newOng = new ong(id,nome,contato,email,sede,site, deficiencia);
    
}
