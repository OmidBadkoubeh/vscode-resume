import { FC } from 'react';
import Head from 'next/head';

type Props = {
  title: string;
};

const CustomHead: FC<Props> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Omid Badkoubeh is a Javascript Engineer with experience in several projects developed in React.js and React Native."
      />
      <meta
        name="keywords"
        content="omid, omid badkoubeh, omidbadkoubeh, web developer, omid web developer, omid developer, mern stack, omid badkoubeh portfolio"
      />
      <meta property="og:title" content="Omid Badkoubeh's Portfolio" />
      <meta
        property="og:description"
        content="Javascript Engineer with experience in several projects developed in React.js and React Native."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://omidbadkoubeh.github.io" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Omid Badkoubeh',
};
