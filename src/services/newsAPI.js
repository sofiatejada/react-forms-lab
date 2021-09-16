const URL = 'https://newsapi.org/v2/everything?'

export const getNewsArticles = (query) => {
  return fetch(`${URL}q=${query}&apiKey=${process.env.API_KEY}`)
    .then((res) => res.json())
    .then((json) => json.articles.map((article) => ({
      title: article.title,
      author: article.author,
      description: article.description,
    })
    )
    )
}


