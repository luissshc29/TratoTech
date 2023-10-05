import Header from 'Components/Header';
import styles from './Home.module.scss';
import relogio from 'assets/inicial.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Home() {

    const navigate = useNavigate()
    const {categorias} = useSelector(state => state)

  return (
    <div>
      <Header
        titulo='Classificados Tech'
        descricao='Compre diversos tipos de produtos no melhor site do Brasil!'
        imagem={relogio}
        className={styles.header}
      />

      <div className={styles.categorias}>
        <div className={styles['categorias-title']}>
            <h1>
                Categorias
            </h1>
        </div>
        <div className={styles['categorias-container']}>
            {categorias.map(item => (
                <div key={item.id} onClick={() => navigate(`/categoria/${item.id}`)}>
                    <img src={item.thumbnail} alt={item.nome}/>
                    <h1>{item.nome}</h1>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}