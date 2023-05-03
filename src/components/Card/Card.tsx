import { Link } from 'react-router-dom'
import styles from './card.module.css'
import Button from '../Button/Button'



export default function Card(props:any) {
  return (
    <div className={styles.post}>
        <img
          className={styles.capa}
          src={`../../../public/posts/${props.post.id}/capa.png`}
          alt={props.post.titulo}
        />
        <h2 className={styles.titulo}>{props.post.titulo}</h2>
        <Link to={`/post/${props.post.id}`}>
          <Button
           titulo={"Ler mais"}/>
        </Link>
      </div>
  )
}
