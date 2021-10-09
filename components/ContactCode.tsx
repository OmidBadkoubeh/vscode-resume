import { FC } from 'react';

import styles from '../styles/ContactCode.module.css';

type Props = {};

const ContactCode: FC<Props> = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;website:{' '}
        <a
          href="https://omidbadkoubeh.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          omidbadkoubeh.github.io
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;email:{' '}
        <a
          href="mailto:omid.badkoubeh@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          omid.badkoubeh@gmail.com
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;github:{' '}
        <a
          href="https://github.com/omidbadkoubeh"
          target="_blank"
          rel="noopener noreferrer"
        >
          omidbadkoubeh
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;linkedin:{' '}
        <a
          href="https://www.linkedin.com/in/nitinranganath/"
          target="_blank"
          rel="noopener noreferrer"
        >
          omidbadkoubeh
        </a>
        ;
      </p>
      {/* <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;twitter:{' '}
        <a
          href="https://www.twitter.com/iamnitinr"
          target="_blank"
          rel="noopener noreferrer"
        >
          iamnitinr
        </a>
        ;
      </p> */}
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;instagram:{' '}
        <a
          href="https://www.instagram.com/omid_badkoubeh"
          target="_blank"
          rel="noopener noreferrer"
        >
          omid_badkoubeh
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;polywork:{' '}
        <a
          href="https://www.polywork.com/omidbadkoubeh"
          target="_blank"
          rel="noopener noreferrer"
        >
          omidbadkoubeh
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;telegram:{' '}
        <a
          href="https://t.me/omidbadkoubeh"
          target="_blank"
          rel="noopener noreferrer"
        >
          omidbadkoubeh
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;codepen:{' '}
        <a
          href="https://codepen.io/omidbadkoubeh"
          target="_blank"
          rel="noopener noreferrer"
        >
          omidbadkoubeh
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;codesandbox:{' '}
        <a
          href="https://codesandbox.io/u/omidbadkoubeh"
          target="_blank"
          rel="noopener noreferrer"
        >
          omidbadkoubeh
        </a>
        ;
      </p>
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
