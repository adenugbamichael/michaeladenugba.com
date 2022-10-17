// Custom App Scss
import React from "react"
import App from "next/app"
import { ToastContainer } from "react-toastify"

import auth0 from "../services/auth0"

// Styling

import "bootstrap/dist/css/bootstrap.min.css"
import "@styles/globals.scss"
import "react-toastify/dist/ReactToastify.css"

const namespace = "http://localhost:3000"

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    const user =
      typeof window === "object"
        ? await auth0.clientAuth()
        : await auth0.serverAuth(ctx.req)

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    const isSiteOwner = user && user[namespace + "/role"] === "siteOwner"

    const auth = { user, isAuthenticated: !!user, isSiteOwner }

    return { pageProps, auth }
  }

  render() {
    const { Component, pageProps, auth } = this.props

    return (
      <div>
        <ToastContainer />
        <Component {...pageProps} auth={auth} />
      </div>
    )
  }
}

//   render() {
//     const { Component, pageProps, auth } = this.props
//     return
//       <ToastContainer /> <Component {...pageProps} auth={auth} />
//   }
// }

//////////////////////////////
////////////////////////////////////
///////////////////////////////

// // Custom App Scss
// import "@styles/globals.scss"
// import "bootstrap/dist/css/bootstrap.min.css"

// import auth0 from "../services/auth0"

// function MyApp({ Component, pageProps, ctx }) {
//   const isAuthenticated = "object"
//     ? auth0.clientAuth()
//     : auth0.serverAuth(ctx.req)
//   console.log(isAuthenticated)

//   return <Component {...pageProps} />
// }

// export default MyApp
