const express = require("express")
const server = express()
server.listen(3001)

//Tema do sistema: listas de iniciativas e ongs que promovem ações sociais para pessoas com deficiências.

const ongsApoioDeficienciasMultiplas = [
    {
        nome: "Fraternidade Irmã Clara", contato: "(11) 3393-7680", Email: "contato@ficfeliz.org.br", sede: "São Paulo – SP",
        site:"ficfeliz.org.br"
    },
    {
        nome: "APABEX", contato: "(11) 5908 9000", Email: "apabex@apabex.org.br", sede: "São Paulo - SP",
        site:"apabex.org.br"
    },
    {
        nome: "Hospital Cruz Verde", contato: "(11) 5579 7335", Email: "Informação não encontrada", sede: "São Paulo – SP",
        site:"www.cruzverde.org.br"
    },
    {
        nome: "APABB", contato: "(11) 99562-7037", Email: " faleconosco@apabb.org.br", sede: "São Paulo / SP",
        site:"www.apabb.org.br"
    },
    {
        nome: "Nosso Sonho", contato: "(11)3564-0555", Email: "Informação não encontrada", sede: "São Paulo • SP ",
        site:"www.nossosonho.org.br"
    },
    {
        nome: "Casa de David", contato: " (11) 2453-6600", Email: "falecom@casadedavid.org.br", sede: "São Paulo • SP",
        site:"casadedavid.org.br"
    },
    { 
        nome: "Escola de Gente", contato: " (21) 2483-1780", Email: "escoladegente@escoladegente.org.br", sede: "Barra da Tijuca, Rio de Janeiro",
        site:"www.escoladegente.org.br"
    },
    {
        nome: "APAE", contato: "61-3224-9922", Email: "fenapaes@apaebrasil.org.br", sede: "Brasília - Distrito Federal",
        site:"apaebrasil.org.br"
    },
    {
        nome: "FADEM", contato: "(51) 3328-6780", Email: "fadem@fadem.com.br", sede: "POA - RS ",
        site:"www.fadem.com.br"
    },
]

const ongsApoioDeficienciasVisuais = [
    {
        nome: "Associação de Deficientes Visuais e Amigos", site: "www.adeva.org.br", sede: "São Paulo - SP",
        email: "adeva@adeva.org.br", contato: "11 5084-6693"
    },

    {
        nome: "Associação para Valorização de Pessoas com Deficiência", site: " www.avape.org.br ",
        sede: "São Bernardo do Campo - SP", contato: "informação não encontrada", email: "informação não encontrada"
    },
    {
        nome: "Centro de Apoio ao Deficiente Visual", site: "www.cadevi.org.br", sede: "São Paulo-SP",
        contato: "(11) 97523-0737", email: "cadevi@cadevi.org.br"
    },
    {
        nome: "Instituto de Cegos Padre Chico", site: "www.padrechico.org.br", sede: "São Paulo - SP",
        contato: "(11) 2271-1717", email: "ipc@padrechico.org.br"
    },

    {
        nome: "Laramara – Associação Brasileira de Assistência ao Deficiente Visual", site: "www.laramara.org.br ", sede: "Barra Funda - SP",
        contato: "(11) 3660-6400", email: "informação não encontrada"
    },
    {
        nome: "Associação de Cegos Louis Braille", site: "www.aclouisbraille.org.br", sede: "Belo Horizonte – MG",
        contato: "(31) 3273-5858", email: "presidente@deficientesvisuais.org.br"
    },
]

const ongsApoioAutismo = [
    {
        nome: "Instituto Autismo & Vida", sede: "Porto Alegre - RS", contato: "(51) 3414-0204",
        email: "contato@autismoevida.org.br", site: "www.autismoevida.org.br"
    },

    {
        nome: "Inspirados Pelo Autismo", sede: "Florianópolis - SC", contato: "(48) 3338 1799", email: "info@inspiradospeloautismo.com.br",
        site: "www.inspiradospeloautismo.com.br"
    },

    {
        nome: "Associação de Atendimento e Apoio ao Autista", sede: "Curitiba - PR", contato: "(41) 8416-9537", email: "aamparaautismo@yahoo.com.br",
        site: "www.aamparaautismo.org.br"
    },
    {
        nome: "Organização Cultural Alternativa", sede: "Rio de Janeiro - RJ", contato: " (21) 2209 - 2529 ", email: "contato@ongoca.org", 
        site: "www.ongoca.org"
    },
    {
        nome: "Associação Viver Autismo ", sede: "São Paulo - SP", contato: "(11) 2478 - 9448 ", email: "contato@ongviva.org.br", 
        site: "www.ongviva.org.br"
    },
    {
        nome: "Associação de Amigos do Autista de Minas Gerais ", sede: "Belo Horizonte - MG ", contato: "(31) 3241 - 3099", email: "amamg.2011@hotmail.com", 
        site: "www.autismo - br.com.br"
    },
]

//Rotas
server.get('/ApoioDeficienciasMultiplas', (request, response) => {
    return response.send({ ongsApoioDeficienciasMultiplas }),
        console.log(ongsApoioDeficienciasMultiplas)
})

server.get('/ApoioDeficienciasVisuais', (request, response) => {
    return response.send({ ongsApoioDeficienciasVisuais }),
        console.log(ongsApoioDeficienciasVisuais)
})

server.get('/ApoioAutismo', (request, response) => {
    return response.send({ ongsApoioAutismo }),
        console.log(ongsApoioAutismo)
})