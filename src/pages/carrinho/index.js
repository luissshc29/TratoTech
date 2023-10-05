import React from 'react'
import styles from './Carrinho.module.scss'
import Header from 'Components/Header'
import { useDispatch, useSelector } from 'react-redux'
import Item from 'Components/Item'
import { resetarCarrinho } from 'store/reducers/carrinho'

export default function Carrinho() {

    const dispatch = useDispatch()

    const {carrinho, total} = useSelector(state => {
        let total = 0
        const carrinhoReduce = state.carrinho.reduce((itens, itemNoCarrinho) => {
            const item = state.itens.find(item => item.id === itemNoCarrinho.id)
            total +=(item.preco * itemNoCarrinho.quantidade)
            if(item.titulo.toLowerCase().includes(state.busca.toLowerCase())) {
                itens.push({
                    ...item,
                    quantidade: itemNoCarrinho.quantidade,
                  });
            }
            return itens
        }, [])
        return {
            carrinho:carrinhoReduce,
            total
        }
    })

  return (
    <div>
        <Header titulo='Carrinho de Compras' descricao='Confira produtos que você adicionou no carrinho'/>
        <div className={styles.carrinho}>
            {carrinho.map(item => (
                <Item key={item.id} {...item} carrinho={true}/>
            ))}
            <div className={styles.total}>
                <strong>
                    Resumo da compra
                </strong>
                <span>
                    Subtotal: <strong> R$ {total.toFixed(2)} </strong>
                </span>
            </div>
            <button
                className={styles.finalizar}
                onClick={() => dispatch(resetarCarrinho())}
            >
                Finalizar compra
            </button>
        </div>
    </div>
  )
}
