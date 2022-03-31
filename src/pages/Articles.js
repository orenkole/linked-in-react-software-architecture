import React, { useEffect, useState } from 'react';

export const Articles = () => {
	const [articles, setArticles] = useState(window && window.preloadedArticles);

	useEffect(() => {
		if(window && !window.preloadedArticles) {
			console.log("No preloaded articles found, loading from server")
			fetch('/api/articles')
			.then(resp => resp.json())
			.then(data => setArticles(data));
		}
	}, [])

	return (
		<>
		<h1>Articles</h1>
		{articles && articles.map(article => (
			<div key={article.title}>
				<h3>{article.title}</h3>
				<p>{article.author}</p>
			</div>
		))}
		</>
	);
}