import { GetStaticProps, NextPage } from 'next';

import styles from '../styles/AboutPage.module.css';

type Props = {};

const AboutPage: NextPage<Props> = () => {
  return (
    <>
      <h1 className={styles.title}>About Page</h1>
      <p className={styles.paragraph}>
        Javascript Engineer with experience in several projects developed in{' '}
        <span className={styles.underline}>React.js</span> and{' '}
        <span className={styles.underline}>React Native</span>. Also worked with{' '}
        <span className={styles.underline}>Apollo Client</span> and{' '}
        <span className={styles.underline}>GraphQL</span>. Skilled in
        implementing User Interface, Testing and Debugging. With good knowledge
        of Design Systems such as{' '}
        <span className={styles.underline}>Material UI</span> and CSS frameworks
        like <span className={styles.underline}>TailwindCSS</span>.
      </p>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = () => {
  return {
    props: { title: 'About' },
  };
};

export default AboutPage;
