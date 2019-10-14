import Head from 'next/head'
import React from 'react'
import Nav from '../components/nav'

const buttonStyle = {
  position: 'relative',
  padding: '10px',
}

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
    <button style={buttonStyle} onClick={_ => alert('Check that console!')}>
      '_' is defined but never used (check that console!)
    </button>
  </div>
)

export default Home
