import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'

const Profile = () => (
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
                You have not yet created a profile.
      </p>



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
      @media (max-width: 700px) {
        .row {
        margin: 3em 4em 4em;
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

export default Profile
