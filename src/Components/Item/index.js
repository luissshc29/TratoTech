import classNames from 'classnames';
import styles from './Item.module.scss';
import { AiOutlineHeart, AiFillHeart, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { FaCartPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { mudarCarrinho, mudarQuantidade } from 'store/reducers/carrinho';
import { mudarFavorito } from 'store/reducers/itens';

const iconeProps = {
    size: 24,
    color: '#041833',
};

const quantidadeProps = {
    size: 32,
    color: '#1875E8'
  }

export default function Item(props) {
    const {
        titulo,
        foto,
        preco,
        descricao,
        favorito,
        id,
        carrinho,
        quantidade
    } = props;

    const resolverFavorito = () => {
       dispatch(mudarFavorito(id))
    }

    const alterarCarrinho = () => {
        dispatch(mudarCarrinho(id))
    }

    const estaNoCarrinho = useSelector(state => state.carrinho.some(item => item.id === id))

    const dispatch = useDispatch()

    return (
        <div className={classNames({
            [styles.item]: true,
            [styles.itemNoCarrinho]: carrinho
        })}>
            <img src={foto} alt={titulo}  className={styles['item-imagem']}/>
            <div className={styles['item-descricao']}>
                <div className={styles['item-titulo']}>
                    <h2>{titulo}</h2>
                    <p>{descricao}</p>
                </div>
                <div className={styles['item-info']}>
                    <div className={styles['item-preco']}>
                        R$ {preco.toFixed(2)}
                    </div>
                    <div className={styles['item-acoes']}>
                        {favorito
                            ? <AiFillHeart {...iconeProps} color='#ff0000' className={styles['item-acao']} onClick={resolverFavorito} />
                            : <AiOutlineHeart {...iconeProps} className={styles['item-acao']} onClick={resolverFavorito} />
                        }
                        {carrinho ?
                        (
                            <div className={styles.quantidade}>
                                Quantidade:
                                <AiFillMinusCircle {...quantidadeProps} onClick={() => {
                                    if (quantidade > 1) {
                                        dispatch(mudarQuantidade({id, quantidade:-1}))
                                    } else {
                                        dispatch(alterarCarrinho)
                                    }
                                }}/>
                                <span>{String(quantidade || 0).padStart(2, '0')}</span>
                                <AiFillPlusCircle {...quantidadeProps} onClick={() => dispatch(mudarQuantidade({id, quantidade:1}))}/>
                            </div>
                        )
                        : (
                            <FaCartPlus
                                {...iconeProps}
                                color={estaNoCarrinho ? '#1875E8' : iconeProps.color}
                                className={styles['item-acao']}
                                onClick={alterarCarrinho}
                            />
                        )
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}