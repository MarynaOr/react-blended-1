import arr from '/src/data/article.json';
import styles from './BlogCard.module.css';
import { formatDateToNow } from '/src/Helpers/data.js';
const BlogCard = () => {

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img className={styles.cardPoster} src={arr.poster} alt="card__image" />
      </div>
      <div className={styles.cardBody}>
        <span className={styles.tag}> {arr.tag} </span>
        <h2 className={styles.cardTitle}> {arr.title} </h2>
        <p className={styles.cardText}>{arr.description}</p>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.userBox}>
          <img className={styles.avatar} src={arr.avatar} alt={arr.name} />
          <div>
            <h3 className={styles.userName}> {arr.name} </h3>
            <small className={styles.date}>{formatDateToNow(arr.postedAt)}</small>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
