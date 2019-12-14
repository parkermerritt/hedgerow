import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <div className="hero">
      <h1 className="title">Welcome to Hedgerow.</h1>
      <p className="description">
        We help retail investors keep up with smart money.
      </p>

      <div className="row">
        <a className="card">
          <h3>Carl Icahn</h3>
          <p>Carl Icahn is the founder and controlling shareholder of Icahn Enterprises, a diversified conglomerate holding company based in New York City, formerly known as American Real Estate Partners.</p>
          <br />
          <h3>Net Worth: $16.2B</h3>

        </a>
        <a className="card">
          <h3>Bill Ackman</h3>
          <p>He is the founder and CEO of Pershing Square Capital Management, a hedge fund management company. Ackman is considered by some to be a contrarian investor but considers himself an activist investor.</p>
          <br />
          <h3>Net Worth: $1.7B</h3>
        </a>
        <a className="card" >
          <h3>David Tepper</h3>
          <p>David Tepper is an American billionaire hedge fund manager and philanthropist. He is the owner of the Carolina Panthers, and the founder and president of Appaloosa Management, a global hedge fund based in Miami Beach, FL.</p>
          <br />
          <h3>Net Worth: $11.6B</h3>

        </a>
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)

export default Home
