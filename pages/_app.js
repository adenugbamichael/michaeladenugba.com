// Custom App Scss
import React from "react"
import App from "next/app"

import auth0 from "../services/auth0"

// Styling
import "bootstrap/dist/css/bootstrap.min.css"
import "@styles/globals.scss"

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

    const auth = { user, isAuthenticated: !!user }

    return { pageProps, auth }
  }

  render() {
    const { Component, pageProps, auth } = this.props
    return <Component {...pageProps} auth={auth} />
  }
}

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
