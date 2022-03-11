import React, { Fragment } from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Search from '../components/Search'
import PostList from '../components/PostList'

const Home = ({ children }) => {
  return (
    <Fragment>
      <Header>{ children }</Header>
      <Search />
      <PostList />
      <Nav />
    </Fragment>
  )
}

export default Home;