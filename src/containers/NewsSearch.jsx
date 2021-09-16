import React, { Component } from 'react';
import ArticleList from '../components/news/ArticleList';
import { getNewsArticles } from '../services/newsAPI';
import Search from '../components/news/Search';

export default class NewsSearch extends Component {

  state = {
    loading: true,
    articles: [],
    search: '',
  }

  async componentDidMount() {
    getNewsArticles().then((articles) => this.setState({
      articles, loading: false,
    }))
  }

  handleSubmit = (event) => {
    this.setState({ search: event.target.value })
  }

  render() {
    const { articles, search } = this.state;

    return (
      <div>
        <Search search={search} />
        <ArticleList articles={articles} />
      </div>
    )
  }
}
