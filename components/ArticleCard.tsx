import Image from 'next/image';
import EyeIcon from './icons/EyeIcon';
import HeartIcon from './icons/HeartIcon';
import CommentIcon from './icons/CommentIcon';
import styles from '../styles/ArticleCard.module.css';
import { FC } from 'react';

type Article = {
  url: string;
  cover_image: string;
  title: string;
  description: string;
  page_views_count: number;
  public_reactions_count: number;
  comments_count: number;
};

type Props = {
  article: Article;
};

const ArticleCard: FC<Props> = ({ article }) => {
  return (
    <a
      href={article.url}
      target="_top"
      rel="noopener"
      className={styles.container}
    >
      <Image
        src={article.cover_image}
        alt={article.title}
        width={300}
        height={150}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{article.title}</h3>
        <p>{article.description}</p>
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <EyeIcon className={styles.icon} /> {article.page_views_count}
        </div>
        <div className={styles.stat}>
          <HeartIcon className={styles.icon} /> {article.public_reactions_count}
        </div>
        <div className={styles.stat}>
          <CommentIcon className={styles.icon} /> {article.comments_count}
        </div>
      </div>
    </a>
  );
};

export default ArticleCard;
