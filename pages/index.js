import Head from 'next/head'
import Link from 'next/link'
import Icon from 'react-evil-icons'

import "../styles.scss"
import Header from '../components/Header'
import Stars from '../components/Stars'
import Terminal from '../components/Terminal'
import Experience from '../components/Experience'
import Soundcloud from '../components/Soundcloud'
import Projects from '../components/Projects'
import Technologies from '../components/Technologies'
import Github from '../components/Github'
import Resume from '../components/Resume'
import Details from '../components/Details'
import Footer from '../components/Footer'


const Index = () => (
  <div>
    <Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-98859891-1"></script>
      <script name="google" src="static/google.js" key="google"></script>
      <title>Byron Polley | Résumé</title>
      <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name="theme-color" content="black" />
    	<meta property="og:title" content="Byron Polley" />
    	<meta property="og:type" content="website" />
    	<meta property="og:description" content="I'm Byron Polley, a UI designer &amp; software developer based in Johannesburg, South Africa." />
    	<meta property="og:url" content="https://byronpolley.com" />
    	<meta property="og:image" content="static/meta/facebook.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@b_b0t" />
      <meta name="twitter:creator" content="@b_b0t" />
      <meta name="twitter:title" content="Byron Polley" />
      <meta name="twitter:description" content="I'm Byron Polley, a UI designer &amp; software developer based in Johannesburg, South Africa." />
      <meta name="twitter:image" content="static/meta/twitter.png" />
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
    <section id="song">
      <Soundcloud />
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
  </div>
)

export default Index
