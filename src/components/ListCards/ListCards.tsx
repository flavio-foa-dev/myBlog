import Card from "../Card/Card";
import styles from './listCards.module.css'
import posts from "../../json/posts.json"


export default function ListCards() {
  return (
    <>
      <ul className={styles.posts}>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Card post={post} />

          </li>
        ))}
      </ul>
    </>
  )
}
