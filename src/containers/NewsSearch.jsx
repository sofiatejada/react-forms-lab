import React, { Component } from 'react';
import ArticleList from '../components/news/ArticleList';
import { getNewsArticles } from '../services/newsAPI';
import Search from '../components/news/Search';

export default class NewsSearch extends Component {

  state = {
    articles: [],
    search: 'pokemon',
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

  handeSubmit = (event) => {
    event.preventDefault()
    getNewsArticles(this.state.search)
  }  

  render() {
    const { articles, search } = this.state;

    return (
      <div>
        <Search search={search} onSearchChange={this.handleSearch} onSearchSubmit={this.handeSubmit} />
        <ArticleList articles={articles} />
      </div>
    )
  }
}
