import { GetStaticProps, NextPage } from 'next';

type Props = {};

const AboutPage: NextPage<Props> = () => {
  return (
    <>
      <h1>About Page</h1>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = () => {
  return {
    props: { title: 'About' },
  };
};

export default AboutPage;
