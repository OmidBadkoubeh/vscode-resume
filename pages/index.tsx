import { NextPage } from 'next';
import Link from 'next/link';

import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';

type Props = {};

const HomePage: NextPage<Props> = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I BUILD</h1>
          <h1>WEBSITES</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Omid Badkoubeh</h1>
            <h6 className={styles.bio}>Frontend Developer</h6>
            <Link href="/projects" passHref>
              <button className={styles.button}>View Work</button>
            </Link>
            <Link href="/contact" passHref>
              <button className={styles.outlined}>Contact Me</button>
            </Link>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}

export default HomePage;
