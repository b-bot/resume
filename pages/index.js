import Head from 'next/head'
import Link from 'next/link'
import Icon from 'react-evil-icons'

import "../styles.scss"
import Header from '../components/Header'
import Stars from '../components/Stars'
import Terminal from '../components/Terminal'
import Experience from '../components/Experience'
import Song from '../components/Song'
import Projects from '../components/Projects'
import Technologies from '../components/Technologies'
import Bio from '../components/Bio'
import Github from '../components/Github'
import Skills from '../components/Skills'
import Resume from '../components/Resume'
import Details from '../components/Details'
import Footer from '../components/Footer'


const Index = () => (
  <div>
    <Head>
      <title>Byron Polley</title>
      <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name="theme-color" content="black" />
    	<meta property="og:title" content="Byron Polley" />
    	<meta property="og:type" content="website" />
    	<meta property="og:description" content="Software || Sound Engineer" />
    	<meta property="og:url" content="https://byronpolley.com" />
    	<meta property="og:image" content="static/meta/facebook.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@b_b0t" />
      <meta name="twitter:creator" content="@b_b0t" />
      <meta name="twitter:title" content="Byron Polley | Home" />
      <meta name="twitter:description" content="Software || Sound Engineer" />
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
      <Song />
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
    <section id="bio">
        <Bio />
    </section>
    <section id="skills">
      <Skills />
    </section>
    <section id="resume">
      <Resume />
    </section>
    <section id="details">
      <Details />
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
