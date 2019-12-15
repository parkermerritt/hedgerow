import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Billions = () => (
    <div>
        <Head>
            <title>Browse Billionaires</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav />
        <div className="box">
            <img className="logo" src="/HedgerowV1.png" />
        </div>
        <div className="hero">
            <h1 className="title">Follow the Money.</h1>
            <p className="description">
                Investing like top fund managers <br />
                can lead to outsized returns.
      </p>
            {/* 1st row */}
            <div className="row">
                <a className="card">
                    <h3>Carl Icahn</h3>
                    <p>Carl Icahn is the founder and controlling shareholder of Icahn Enterprises, a diversified conglomerate holding company based in New York City, formerly known as American Real Estate Partners.</p>
                    <br />
                    <h3>Net Worth: $16.2B</h3>

                </a>
                <a className="card">
                    <h3>Bill Ackman</h3>
                    <p>Bill Ackman is the founder and CEO of Pershing Square Capital Management, a hedge fund management company. Ackman is considered by some to be a contrarian investor but considers himself an activist investor.</p>
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
            {/* 2nd row */}
            <div className="lower-row">
                <a className="card">
                    <h3>David E. Shaw</h3>
                    <p>David Elliot Shaw is an American computer scientist, and billionaire hedge fund manager.
                        He founded D. E. Shaw &amp; Co., a hedge fund company which was once described by Fortune magazine
                        as "the most intriguing and mysterious force on Wall Street".</p>
                    <br />
                    <h3>Net Worth: $7.3B</h3>

                </a>
                <a className="card">
                    <h3>Ray Dalio</h3>
                    <p>Raymond Dalio is an American billionaire investor,
                        hedge fund manager, and philanthropist. Dalio is the founder, co-chairman and
                        co-chief investment officer of investment firm
                        Bridgewater Associates, one of the world's largest hedge funds.</p>
                    <br />
                    <h3>Net Worth: $18.7B</h3>
                </a>
                <a className="card" >
                    <h3>Seth Klarman</h3>
                    <p>Seth Andrew Klarman is an American billionaire investor, hedge fund manager,
                        and author. He is a proponent of value investing. He is the chief
                        executive and portfolio manager of the Baupost Group, a Boston-based private investment partnership.</p>
                    <br />
                    <h3>Net Worth: $1.5B</h3>

                </a>
            </div>
            {/* 3rd row */}
            <div className="lower-row">
                <a className="card">
                    <h3>John Paulson</h3>
                    <p>John Paulson leads Paulson &amp; Co., a New York-based investment management firm. He has been called "one of the most prominent names in high finance"
                        and "a man who made one of the biggest fortunes in Wall Street history".</p>
                    <br />
                    <h3>Net Worth: $4.2B</h3>

                </a>
                <a className="card">
                    <h3>Daniel Loeb</h3>
                    <p>Daniel Loeb is the founder and chief executive of Third Point, a New York-based hedge fund
                       focused on event-driven, value-oriented investing with $10.8 billion of assets under management, as of March 2016.</p>
                    <br />
                    <h3>Net Worth: $3.2B</h3>
                </a>
                <a className="card" >
                    <h3>Kenneth Griffin</h3>
                    <p>Kenneth Cordele Griffin is the CEO
                        Citadel, a global investment firm he founded in 1990. As of 2015, Citadel is
                         one of the world's largest alternative investment management firms with an
                         estimated $32 billion in capital.</p>
                    <br />
                    <h3>Net Worth: $13.0B</h3>

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
        padding-left: 2px;
        padding-right: 2px;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .lower-row {
        max-width: 880px;
        margin: -1em auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      @media (max-width: 700px) {
        .row {
        margin: 3em 4em 3em;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
      }
      .lower-row {
        margin: -3em 4em 3em;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
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

export default Billions