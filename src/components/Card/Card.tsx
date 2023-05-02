import styles from './card.module.css'



export default function Card(props:any) {
  console.log(props)
  return (
    <div className={styles.post}>
      <img className={styles.capa} src={`../../../public/posts/${props.post.id}/capa.png`}
        alt={props.post.titulo}
      />
      <h2 className={styles.titulo}>{props.post.titulo}</h2>
      <button className={styles.botaoLer}>Ler</button>

    </div>
  )
}
