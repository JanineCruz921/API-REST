export class deficiency {
    constructor (id,nome,tipo,){
        this.id = id;
        this.nome = nome;
        this.tipo = tipo;
    }
}

export class user {
    constructor (id,nome,idade,deficiencia,cep){
        this.id = id;
        this.nome = nome;
        this.idade= idade;
        this.deficiencia = deficiencia.id;
        this.cep = cep;
    }
}

export class ong {
    constructor (id,nome,contato,email,sede,site, deficiencia){
        this.id = id;
        this.nome = nome;
        this.contato = contato;
        this.email = email;
        this.sede = sede;
        this.site = site;
        this.deficiencia = deficiencia.id;
    }
}