import React from 'react';
import ReactMarkdown from 'react-markdown';
import SiteContent from '../data/content';

const HomePage = () => (
  <>
    <section className="content">
      <h2>Lorem content h2</h2>
      <ReactMarkdown source={SiteContent.homepage} />
    </section>
  </>
);

export default HomePage;
