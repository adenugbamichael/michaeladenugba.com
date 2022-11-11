import React from "react"
import Header from "../shared/Header"
import Head from "next/head"

const BaseLayout = (props) => {
  const {
    className,
    children,
    isAuthenticated,
    user,
    isSiteOwner,
    title,
    cannonical,
  } = props
  const headerType = props.headerType || "default"
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta
          name='description'
          content='Hello world 🌎. I am michael, a software engineer, mainly focused in frontend development, but I enjoy creating apps and things people will like to use. I also use an open source to share knowledge.'
        />
        <meta
          name='keywords'
          content='michael adenugba project, michael developer, michael frontend, michael software, michael engineer, michael open source'
        />
        <meta
          property='og:title'
          content='Michael Adenugba - software engineer, programmer, developer, blogger'
          d
        />
        <meta property='og:locale' content='en_EU' />
        <meta property='og:url' content='https://localhost:3000' />
        <meta property='og:type' content='website' />
        <meta
          property='og:description'
          content=' I am michael, a software engineer, mainly focused in frontend development.'
        />

        {cannonical && (
          <link rel='cannonical' href={`localhost:3000${cannonical}`} />
        )}

        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css'
        />
        <link
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
          rel='stylesheet'
        />
      </Head>
      <div className='layout-container'>
        <Header
          className={`port-nav-${headerType}`}
          isAuthenticated={isAuthenticated}
          user={user}
          isSiteOwner={isSiteOwner}
        />
        <main className={`cover ${className}`}>
          <div className='wrapper'>{children}</div>
        </main>
      </div>
    </React.Fragment>
  )
}

export default BaseLayout
