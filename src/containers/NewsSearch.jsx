import React, { Component } from 'react';
import ArticleList from '../components/news/ArticleList';
import { getNewsArticles } from '../services/newsAPI';
import Search from '../components/news/Search';

export default class NewsSearch extends Component {

  state = {
    articles: [],
    search: '',
  }

  async componentDidMount() {
    if(this.state.search.length) {
      getNewsArticles(this.state.search).then((articles) => this.setState({
        articles
      })
      )
    }
  }

  handleSearch = (event) => {
    this.setState({ search: event.target.value })
  }

  render() {
    const { articles, search } = this.state;

    return (
      <div>
        <Search search={search} onSearchChange={this.handleSearch} />
        <ArticleList articles={articles} />
      </div>
    )
  }
}
