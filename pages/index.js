import Head from 'next/head'
import Link from 'next/link'
import Icon from 'react-evil-icons'

import "../styles.scss"
import Header from '../components/Header'
import Stars from '../components/Stars'
import Terminal from '../components/Terminal'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Technologies from '../components/Technologies'
import Github from '../components/Github'
import Resume from '../components/Resume'
import Details from '../components/Details'
import Footer from '../components/Footer'
import Layout from '../components/Layout';

const Index = () => (
  <Layout>
    <Head>
      <title>Byron Polley | Résumé</title>

      {/* Meta */}
      <meta charSet="utf-8" />
      <meta name="author" content="Byron Polley" />
      <meta name="keywords" content="byron, polley, byron polley, software, software engineering, web, web development, web design, developer, javascript, node, html, css" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Software &amp; Sound" />

      {/* Favicon */}
      <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png?v=2" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
      <link rel="manifest" href="/static/site.webmanifest" />
      <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#2a2a2a" />
      <meta name="msapplication-TileColor" content="#2a2a2a" />
      <meta name="theme-color" content="#2a2a2a" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@b_b0t" />
      <meta name="twitter:site" content="@b_b0t" />
      <meta name="twitter:image" content="https://byronpolley.com/static/og.jpg" />

      {/* Facebook */}
      <meta property="og:title" content="Byron Polley" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://byronpolley.com" />
      <meta property="og:description" content="Multi-disciplinary software engineer and designer. How I can I help you, human?" />
      <meta property="og:image" content="https://byronpolley.com/static/og.jpg" />
      <meta property="fb:app_id" content="915132422187282" />

      {/* Misc */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/evil-icons@1.9.0/assets/evil-icons.min.css" />
      <script src="https://cdn.jsdelivr.net/npm/evil-icons@1.9.0/assets/evil-icons.min.js"></script>
      <script name="custom" src="static/custom.js" key="custom"></script>
    </Head>
    <Header />
    <Stars />
    <section id="intro">
      <Terminal />
      <Icon name="ei-arrow-down" className="next" size="l" />
    </section>
    <section id="technologies">
        <Technologies />
      </section>
    <section id="projects">
      <Projects />
    </section>
    <section id="experience">
      <Experience />
    </section>
    <section id="details">
      <Details />
    </section>
    <section id="resume">
      <Resume />
    </section>
    <section id="github">
      <Github />
    </section>
    <div className="footer-item">
      <img className="b0t" src="static/b0t.png" />
    </div>
    <Footer />
  </Layout>
)

export default Index
