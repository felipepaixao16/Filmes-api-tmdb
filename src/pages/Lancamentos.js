import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'

import CardSerie from "../components/cardLista"
import Tab from '../components/tab';

export default function Lancamentos() {

    const [filmes, setFilmes] = useState([])

    useEffect(() => load(), [] )

    async function load(){
        try{

        const resposta = await axios.get("https://api.themoviedb.org/3/movie/latest?api_key=d5c137af53cf85d58907c1af93a391f5&language=en-US")
        setFilmes(resposta.data.results)
        console.log(resposta.data.results)
        }catch(console.error();)
    }

}

    return (
        <Fragment>
            <div className="tabs">
                <Tab text="Lançamentos" target="lancamentos" />
                <Tab text="Sobre" target="sobre" />
            </div>
            <div className="content">
                {filmes.map( (filme) => <CardSerie titulo={}/>)}
            </div>
        </Fragment>
    )
}