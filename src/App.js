import React, { useState, useEffect } from 'react';
import Header from './Header';
import Rutter from './routes';
import { pages } from './data/pages';

const App = () => {
  const [pageList, setPageList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPageList(pages());
      setLoading(false);
    }, 2000);
  }, [pageList]);
  return (
    <section className="app">
      <Header pages={pageList} loading={loading} />
      <main className="site__content-area">
        <Rutter />
      </main>
      <footer className="site__footer">Lorem footer</footer>
    </section>
  );
};
export default App;
