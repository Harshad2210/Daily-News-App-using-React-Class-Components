import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

    static defaultProps = {
        country: 'in',
        category: 'general',
        pageSize: 3,
        mode: 'light'
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number,
        mode: PropTypes.string,
    }



    constructor() {
        super();
        console.log("Call from News Component");
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
    }

    upperString(s)  {
            return s.charAt(0).toUpperCase() + s.slice(1);
        }


    update = async (pageNo) => {
        console.log(pageNo);
        this.props.handleProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a0cd105d449048a58b48f3a19d94e0bf&page=${pageNo}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        this.props.handleProgress(70);
        let data = await fetch(url);
        let parsedData = await data.json();
        //console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        this.props.handleProgress(100);

    }

    async componentDidMount() {
        console.log("Mounted");
        document.title = `${ this.upperString(this.props.category)} - Daily News` ;
        this.update(this.state.page);
    }

    // previousHandler = async () => {
    //     console.log("Previous");
    //      this.setState({page : this.state.page-1})
    //     this.update(this.state.page);
    // }

    // nextHandler = async () => {
    //     console.log("Next");
    //      this.setState({page : this.state.page+1})
    //     if (Math.ceil(this.state.totalResults / 9) >= this.state.page + 1) {
    //         this.update(this.state.page);
    //     }
    // }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        console.log(this.state.page);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a0cd105d449048a58b48f3a19d94e0bf&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        //console.log(parsedData);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults

        })
    }

    render() {

        const changed = () => {
            return this.props.mode === 'light' ? 'dark' : 'light';
        }
        
        
        return (
            <>

                <h2 className={` text-center text-${changed()} my-3 `} >
                     Top {upperString(this.props.category)} Headlines </h2>
                {this.state.loading && <Spinner />}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length < this.state.totalResults }
                    loader={<Spinner />}
                >
                    <div className="container ">
                        <div className="row">
                            {!this.state.loading && this.state.articles.map(
                                (article) => {
                                    return (
                                        <div className="col-md-4" key={article.url} >
                                            <NewsItem mode={this.props.mode} title={article.title} description={article.description}
                                                imageUrl={article.urlToImage} newsUrl={article.url}
                                                date={article.publishedAt} author={article.author}
                                                source={article.source.name} />
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-primary "
                            onClick={this.previousHandler}   >  &larr; Previous  </button>
                        <button disabled={Math.ceil(this.state.totalResults / 9) < this.state.page + 1}
                            type="button"
                            className="btn btn-primary"
                            onClick={this.nextHandler} > Next  &rarr; </button>
                    </div> */}


            </>
        )
    }
}

export default News
