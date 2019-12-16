import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import fetch from 'isomorphic-unfetch';
import CryptoJS from 'crypto-js';
import utf8 from 'utf8';
import utfx from 'utfx';
const crypto = require('crypto');


const Billions = (props) => (
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
                    <h3>{props.data.billionaires[0].name}</h3>
                    <h2>{props.data.billionaires[0].company}</h2>
                    <p>{props.data.billionaires[0].description}</p>
                    <br />
                    <h3>Net Worth: {props.data.billionaires[0].networth}</h3>
                    <div className="holdings">
                        <h2>Top Holdings:</h2>
                        <p>{props.data.billionaires[0].topholdings[0]}&ensp;&ensp;{props.data.billionaires[0].topholdings[1]}&ensp;&ensp;{props.data.billionaires[0].topholdings[2]}</p>
                    </div>
                </a>

                <a className="card">
                    <h3>{props.data.billionaires[1].name}</h3>
                    <h2>{props.data.billionaires[1].company}</h2>
                    <p>{props.data.billionaires[1].description}</p>
                    <br />
                    <h3>Net Worth: {props.data.billionaires[1].networth}</h3>
                    <div className="holdings">
                        <h2>Top Holdings:</h2>
                        <p>{props.data.billionaires[1].topholdings[0]}&ensp;&ensp;{props.data.billionaires[1].topholdings[1]}&ensp;&ensp;{props.data.billionaires[1].topholdings[2]}</p>
                    </div>
                </a>

                <a className="card" >
                    <h3>{props.data.billionaires[2].name}</h3>
                    <h2>{props.data.billionaires[2].company}</h2>
                    <p>{props.data.billionaires[2].description}</p>
                    <br />
                    <h3>Net Worth: {props.data.billionaires[2].networth}</h3>
                    <div className="holdings">
                        <h2>Top Holdings:</h2>
                        <p>{props.data.billionaires[2].topholdings[0]}&ensp;&ensp;{props.data.billionaires[2].topholdings[1]}&ensp;&ensp;{props.data.billionaires[2].topholdings[2]}</p>
                    </div>
                </a>
            </div>
            {/* 2nd row */}
            <div className="lower-row">
                <a className="card">
                    <h3>{props.data.billionaires[3].name}</h3>
                    <h2>{props.data.billionaires[3].company}</h2>
                    <p>{props.data.billionaires[3].description}</p>
                    <br />
                    <h3>Net Worth: {props.data.billionaires[3].networth}</h3>
                    <div className="holdings">
                        <h2>Top Holdings:</h2>
                        <p>{props.data.billionaires[3].topholdings[0]}&ensp;&ensp;{props.data.billionaires[3].topholdings[1]}&ensp;&ensp;{props.data.billionaires[3].topholdings[2]}</p>
                    </div>
                </a>
                <a className="card">
                    <h3>{props.data.billionaires[4].name}</h3>
                    <h2>{props.data.billionaires[4].company}</h2>
                    <p>{props.data.billionaires[4].description}</p>
                    <br />
                    <h3>Net Worth: {props.data.billionaires[4].networth}</h3>
                    <div className="holdings">
                        <h2>Top Holdings:</h2>
                        <p>{props.data.billionaires[4].topholdings[0]}&ensp;&ensp;{props.data.billionaires[4].topholdings[1]}&ensp;&ensp;{props.data.billionaires[4].topholdings[2]}</p>
                    </div>
                </a>
                <a className="card" >
                    <h3>{props.data.billionaires[5].name}</h3>
                    <h2>{props.data.billionaires[5].company}</h2>
                    <p>{props.data.billionaires[5].description}</p>
                    <br />
                    <h3>Net Worth: {props.data.billionaires[5].networth}</h3>
                    <div className="holdings">
                        <h2>Top Holdings:</h2>
                        <p>{props.data.billionaires[5].topholdings[0]}&ensp;&ensp;{props.data.billionaires[5].topholdings[1]}&ensp;&ensp;{props.data.billionaires[5].topholdings[2]}</p>
                    </div>
                </a>
            </div>
            {/* 3rd row */}
            <div className="lower-row">
                <a className="card">
                    <h3>{props.data.billionaires[6].name}</h3>
                    <h2>{props.data.billionaires[6].company}</h2>
                    <p>{props.data.billionaires[6].description}</p>
                    <br />
                    <h3>Net Worth: {props.data.billionaires[6].networth}</h3>
                    <div className="holdings">
                        <h2>Top Holdings:</h2>
                        <p>{props.data.billionaires[6].topholdings[0]}&ensp;&ensp;{props.data.billionaires[6].topholdings[1]}&ensp;&ensp;{props.data.billionaires[6].topholdings[2]}</p>
                    </div>
                </a>
                <a className="card">
                    <h3>{props.data.billionaires[7].name}</h3>
                    <h2>{props.data.billionaires[7].company}</h2>
                    <p>{props.data.billionaires[7].description}</p>
                    <br />
                    <h3>Net Worth: {props.data.billionaires[7].networth}</h3>
                    <div className="holdings">
                        <h2>Top Holdings:</h2>
                        <p>{props.data.billionaires[7].topholdings[0]}&ensp;&ensp;{props.data.billionaires[7].topholdings[1]}&ensp;&ensp;{props.data.billionaires[7].topholdings[2]}</p>
                    </div>
                </a>
                <a className="card" >
                    <h3>{props.data.billionaires[8].name}</h3>
                    <h2>{props.data.billionaires[8].company}</h2>
                    <p>{props.data.billionaires[8].description}</p>
                    <br />
                    <h3>Net Worth: {props.data.billionaires[8].networth}</h3>
                    <div className="holdings">
                        <h2>Top Holdings:</h2>
                        <p>{props.data.billionaires[8].topholdings[0]}&ensp;&ensp;{props.data.billionaires[8].topholdings[1]}&ensp;&ensp;{props.data.billionaires[8].topholdings[2]}</p>
                    </div>
                </a>
            </div>

            <Footer />
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
      .holdings h2 {
        text-align: center;
        padding-top:6px;
      }
      .holdings p {
        text-align: center;
        margin-top: -20px;
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

Billions.getInitialProps = async function () {

    const call_url = 'http://hedgerow-nlb-65187fa0e3471e3d.elb.us-east-2.amazonaws.com/mysfits'

    const res = await fetch(call_url);
    const data = await res.json();
    console.log('DATA: ' + JSON.stringify(data.billionaires[0].name));

    return {
        data
    }

};

export default Billions