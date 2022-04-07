import React, { Component } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types';

export default class News extends Component {

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  static defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general'
  }


  constructor() {
    super();
    console.log("constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }

  }

  prevClick = async () => {
    console.log("previous");
    console.log("component did")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.probs.country}&category=${this.props.category}&apiKey=4a308d2650a14c4bbac9ef6a6cbb54cd&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1
    })
  }

  nextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

    }
    else {
      console.log("component did")
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4a308d2650a14c4bbac9ef6a6cbb54cd&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1
      })
    }
  }


  async componentDidMount() {
    console.log("component did")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4a308d2650a14c4bbac9ef6a6cbb54cd&page=1&pageSize=${this.props.pageSize}`
    
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults
    })


  }

  render() {
    // console.log("render")
    return (
      <>

        <div className="container my-3">
          <h1>NewsAllOver Headings</h1>
          <div className="row" >
            {this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>

                <Newsitem author={element.author ? element.author :" "} title={element.title ? element.title : " "} description={element.description ? element.description : " "} imageUrl={element.urlToImage ? element.urlToImage : "https://images.cnbctv18.com/wp-content/uploads/2019/10/SENSEX_NSE_nifty_BSE_Stock-market-1019x573.jpg"} newsUrl={element.url}
                />
              </div>
            })}
          </div>
          <div className="d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-info" onClick={this.prevClick}>Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-info" onClick={this.nextClick}>Next</button>
          </div>
        </div>
      </>
    )
  }
}