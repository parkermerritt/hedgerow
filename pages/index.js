import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Link from 'next/link'


const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />
    <div className="box">
      <img className="logo" src="/HedgerowV1.png" />
    </div>
    <div className="hero">
      <h1 className="title">Welcome to Hedgerow.</h1>
      <p className="description">
        We help retail investors keep up <br />
        with smart money.
      </p>

      <div className="subsection">
        <h2>Why Hedgerow?</h2>
        <p>Billionaire hedge fund managers amass their fortunes by thinking and acting differently than the average investor.
          We provide our users analytics-driven insights into how these investors allocate their capital. </p>
      </div>

      <div className="row">
        <a className="card">
          <h3>Carl Icahn</h3>
          <h2>Icahn Enterprises</h2>

          <p>Carl Icahn is the founder and controlling shareholder of Icahn Enterprises, a diversified conglomerate holding company based in New York City, formerly known as American Real Estate Partners.</p>
          <br />
          <h3>Net Worth: $16.2B</h3>

        </a>

        <a className="card">
          <h3>Bill Ackman</h3>
          <h2>Pershing Square Capital Management</h2>

          <p>Bill Ackman is the founder and CEO of Pershing Square Capital Management, a hedge fund management company. Ackman is considered by some to be a contrarian investor, but considers himself an activist investor.</p>
          <br />
          <h3>Net Worth: $1.7B</h3>
        </a>

        <a className="card" >
          <h3>David Tepper</h3>
          <h2>Appaloosa Management</h2>

          <p>David Tepper is an American billionaire hedge fund manager and philanthropist. He is the owner of the Carolina Panthers, and the founder and president of Appaloosa Management, a global hedge fund based in Miami Beach, FL.</p>
          <br />
          <h3>Net Worth: $11.6B</h3>
        </a>
      </div>
      <div>
        <h3 className="content"><Link href="/billions"><a>View More</a></Link></h3>
      </div>


      <Footer />
    </div>

    <style jsx>{`
      a {
        color: #000000;
      }
      a:visited {
        color: #000000;
      }
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
        padding-right: 2px;
      }
      .subsection {
        padding-top: 8px;
        text-align: center;
        margin-bottom: -2.9em;
        padding: 1.8em;
      }
      .subsection p {
        margin: auto;
        max-width: 600px;
      }
      .content {
        text-align: center;
        margin-bottom: 1.5em;
        margin-top: -1.75em;
        color: #000000;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      
      @media (max-width: 700px) {
        .row {
        margin: 3em 4em 2.8em;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
      }
      .subtitle {
        display: none;
      }
      .card {
        min-width: 18em;
      }

      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        margin: 6px;
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
      .card h2 {
        margin: 0;
        color: #067df7;
        font-size: 13px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
      .box {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0em 0em -5em 0em;
      }
      .logo {
        width: 8em;
      }
    `}</style>
  </div>
)

export default Home
