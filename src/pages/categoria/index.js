import Header from 'Components/Header'
import Item from 'Components/Item'
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styles from './Categoria.module.scss'
import { v4 as uuid } from 'uuid'

export default function Categoria() {

    const { nomeCategoria } = useParams()
//    const categoria = useSelector(state => state.categorias.find(item => item.id === nomeCategoria))
//    const itens = useSelector(state => state.itens).filter(item => item.categoria === nomeCategoria)


    const {categoria, itens} = useSelector(state => {

        return {
            categoria: state.categorias.find(item => item.id === nomeCategoria),
            itens: state.itens.filter(item => item.categoria === nomeCategoria && item.titulo.toLowerCase().includes(state.busca.toLowerCase()))
        }
    })

    return (
        <div>
            <Header
                titulo={categoria.nome}
                descricao={categoria.descricao}
                imagem={categoria.header}
            />
            <div className={styles.itens}>
                {itens.map(item => (
                    <Item {...item} key={uuid()}/>
                ))}
            </div>
        </div>
    )
}
