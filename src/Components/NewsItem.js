import React, { Component } from 'react'

export class NewsItem extends Component {


    render() {

        const { title, description, imageUrl, newsUrl, date, author, source,mode } = this.props;

        const changed = ()=>{
            return this.props.mode==='light' ? 'dark' : 'light' ;
        }

        return (
            <div className= {`my-3 `} >
                <div className={`card bg-${mode}`}>
                    <span
                        className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
                        style={{ left: '90%' , zIndex: '1'  } }
                    >
                    {source}
                    </span>
                <img className="card-img-top" src={imageUrl} alt={title} />
                <div className={`card-body text-${changed()}`}>
                    <h5 className="card-title"> {title} </h5>

                    <p className="card-text"> {description} </p>
                    <p className="card-text"><small className="text-muted"> By {!author ? 'Unknown' : author} on {new Date(date).toUTCString()} </small></p>
                    <a href={newsUrl} className={`btn btn-sm btn-${changed()}`}>Read More</a>
                </div>
            </div>
            </div >
        )
    }
}

export default NewsItem
