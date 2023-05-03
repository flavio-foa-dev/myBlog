import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import styles from './NotFound404.module.css'
import erro404 from "../../assets/erro_404.png"

export default function NotFound() {
  const url = useNavigate()
  return (
    <>
        <div className={styles.conteudoContainer}>
          <span className={styles.texto404}>404</span>
            <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>
            <p className={styles.paragrafo}>
              Tem certeza de que era isso que você estava procurando?
            </p>
            <p className={styles.paragrafo}>
              Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
            </p>

            <div
              className={styles.botaoContainer}
              onClick={() => url("/")}
            >
              <Button titulo={"voltar"} tamanho="lg" />
            </div>
            <img
                className={styles.imagemCachorro}
                src={erro404}
                alt="Cachorro de óculos"
            />
        </div>
        <div className={styles.espacoEmBranco}></div>
    </>

)
}
