import React, { Component } from 'react'

export default class Newsitem extends Component {
    render() {

        let {title, description} = this.props;
        return (
            <>

                <div className="card" style={{ width: '18rem' }}>
                    <img src="https://techcrunch.com/wp-content/uploads/2020/01/GettyImages-1097990286.jpg?" className="card-img-top" alt="..." />
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
