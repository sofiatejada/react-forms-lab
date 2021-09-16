const URL = 'https://newsapi.org/v2/everything?'

export const getNewsArticles = (query) => {
  return fetch(`${URL}q=${query}?apiKey=${env.process.API_KEY}`)
    .then((res) => res.json())
    .then((json) => json.map((article) => ({
      title: article.title,
      author: article.author,
      description: article.description,
    })
    )
    )
}


