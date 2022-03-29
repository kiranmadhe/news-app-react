import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
  render() {
    return (
      <>
    <div>This is News </div>
    <div className="container">
    <Newsitem title ="main news"/>
    <Newsitem/>
    <Newsitem/>
    <Newsitem/>
    <Newsitem/>
    <Newsitem/>
    <Newsitem/>
    <Newsitem/>
    <Newsitem/>
    </div>

      </>
    )
  }
}
