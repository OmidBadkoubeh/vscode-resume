import ProjectCard from '../components/ProjectCard';
import { getProjects } from './api/projects';
import styles from '../styles/ProjectsPage.module.css';
import { GetStaticProps, NextPage } from 'next';

type Props = {
  projects: Project[];
};

const ProjectsPage: NextPage<Props> = ({ projects }) => {
  return (
    <>
      <h2>Look What I&apos;ve Built</h2>
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = getProjects();

  return {
    props: { title: 'Projects', projects },
  };
};

export default ProjectsPage;
