import styles from './Button.module.css'

export default function Button(props:any) {
  return (
    <button className={`${styles.botaoPrincipal} ${styles[props.tamanho]}`}>
      {props.titulo}
    </button>
  )
}
