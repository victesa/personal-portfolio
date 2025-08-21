import React, { useEffect, useRef } from 'react';
import './ArticlesPage.css';

const ArticlesPage = () => {
  const articleSectionRef = useRef(null);

  useEffect(() => {
    const scrollTimeout = setTimeout(() => {
      if (articleSectionRef.current) {
        articleSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 2000);

    return () => clearTimeout(scrollTimeout);
  }, []);

  return (
    <div className="articles-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Journey and Dream written down</h1>
        </div>
      </section>

      <section ref={articleSectionRef} className="articles-list">
        <h2 className="articles-heading">All Articles</h2>
        {/* You can map your articles here */}
        <div className="article-card">Article 1</div>
        <div className="article-card">Article 2</div>
        <div className="article-card">Article 3</div>
      </section>
    </div>
  );
};

export default ArticlesPage;
