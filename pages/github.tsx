import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';

import RepoCard from '../components/RepoCard';
import styles from '../styles/GithubPage.module.css';

type Props = {
  repos: Repo[];
  user: User;
};

const GithubPage: NextPage<Props> = ({ repos, user }) => {
  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };

  return (
    <>
      <div className={styles.user}>
        <div>
          <Image
            src={user.avatar_url}
            className={styles.avatar}
            alt={user.login}
            width={50}
            height={50}
          />
          <h3 className={styles.username}>{user.login}</h3>
        </div>
        <div>
          <h3>{user.public_repos} repos</h3>
        </div>
        <div>
          <h3>{user.followers} followers</h3>
        </div>
      </div>
      <h2>6 Latest Updated Repositories</h2>
      <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      <div className={styles.contributions}>
        <GitHubCalendar
          username={process.env.NEXT_PUBLIC_GITHUB_USERNAME || ''}
          theme={theme}
          hideColorLegend
        />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const githubUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME || '';
  const userRes = await fetch(`https://api.github.com/users/${githubUsername}`);
  const user = await userRes.json();

  const repoRes = await fetch(
    `https://api.github.com/users/${githubUsername}/repos?sort=created_at&per_page=6`
  );
  const repos = await repoRes.json();

  return {
    props: { title: 'GitHub', repos, user },
    revalidate: 10,
  };
};

export default GithubPage;
