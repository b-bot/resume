import Ableton from '../components/svg/Ableton'
import Analytics from '../components/svg/Analytics'
import Angularjs from '../components/svg/Angularjs'
import Bootstrap from '../components/svg/Bootstrap'
import Git from '../components/svg/Git'
import Gulp from '../components/svg/Gulp'
import Mysql from '../components/svg/Mysql'
import Nodejs from '../components/svg/Nodejs'
import Photoshop from '../components/svg/Photoshop'
import Php from '../components/svg/Php'
import Reactjs from '../components/svg/Reactjs'
import Sass from '../components/svg/Sass'
import Shopify from '../components/svg/Shopify'
import Sketch from '../components/svg/Sketch'
import Wordpress from '../components/svg/Wordpress'

const Technologies = props => (
  <div className="container">
  <div className="technologies">
  <h1 className="title">Technologies & Frameworks</h1>
  <p className="description">I'm knowledgeable in a wide variety of platforms. You can say I'm a Web 2.0 kid.</p>
    <div className="box">
      <div className="col">
        <div className="techbox">
          <div className="logo">
            <Nodejs />
          </div>
          <div className="tech">
            <p>Node</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="techbox">
          <div className="logo">
            <Reactjs />
          </div>
          <div className="tech">
            <p>React</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="techbox">
          <div className="logo">
            <Angularjs />
          </div>
          <div className="tech">
            <p>Angular</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="techbox">
          <div className="logo">
            <Shopify />
          </div>
          <div className="tech">
            <p>Shopify</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="techbox">
          <div className="logo">
            <Wordpress />
          </div>
          <div className="tech">
            <p>Wordpress</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="techbox">
          <div className="logo">
            <Bootstrap />
          </div>
          <div className="tech">
            <p>Bootstrap</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="techbox">
          <div className="logo">
            <Git />
          </div>
          <div className="tech">
            <p>Git</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="techbox">
          <div className="logo">
            <Mysql />
          </div>
          <div className="tech">
            <p>MySQL</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="techbox">
          <div className="logo">
            <Photoshop />
          </div>
          <div className="tech">
            <p>Photoshop</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="techbox">
          <div className="logo">
            <Sketch />
          </div>
          <div className="tech">
            <p>Sketch</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="techbox">
          <div className="logo">
            <Php />
          </div>
          <div className="tech">
            <p>PHP</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="techbox">
          <div className="logo">
            <Sass />
          </div>
          <div className="tech">
            <p>Sass</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="techbox">
          <div className="logo">
            <Ableton />
          </div>
          <div className="tech">
            <p>Ableton</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="techbox">
          <div className="logo">
            <Analytics />
          </div>
          <div className="tech">
            <p>Google Analytics</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="techbox">
          <div className="logo">
            <Gulp />
          </div>
          <div className="tech">
            <p>Gulp</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <style jsx>{`
    .logo {
      padding: 1.5rem;
      background: white;
      border-radius: 4px;
      margin: 0 auto;
      max-width: 100%;
      height: auto;
      box-shadow: 0 1px 3px rgba(255,255,255,0.10), 0 1px 2px rgba(255,255,255,0.24);
      transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }
    .logo:hover {
      box-shadow: 0 14px 20px rgba(255,255,255,0.20), 0 10px 10px rgba(255,255,255,0.22);
    }
    .tech {
      text-align: center;
      font-weight: 700;
      margin: 0;
      color: white;
      padding: 0.5rem;
    }
    svg {
      width: 100%;
      height: 100%;
    }
  `}</style>
  </div>
)

export default Technologies
