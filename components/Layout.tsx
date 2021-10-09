import { FC } from 'react';

import TitleBar from './Titlebar';
import Sidebar from './Sidebar';
import Explorer from './Explorer';
import BottomBar from './BottomBar';
import TabsBar from './Tabsbar';
import styles from '../styles/Layout.module.css';

type Props = {};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <TitleBar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div style={{ width: '100%' }}>
          <TabsBar />
          <main className={styles.content}>{children}</main>
        </div>
      </div>
      <BottomBar />
    </>
  );
};

export default Layout;
