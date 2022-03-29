import React, { Component } from 'react'

export default class Newsitem extends Component {
    render() {

        let {title, description} = this.props;
        return (
            <>

                <div className="card" style={{ width: '18rem' }}>
                    <img src="https://www.investing.com/news/economy/asian-shares-gain-as-boj-defends-ultraeasy-stance-oil-eases-on-shanghai-lockdown-2793524" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </>
        )
    }
}
