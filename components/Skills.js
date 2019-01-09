var Icon = require('react-evil-icons');

const Skills = props => (
  <div className="container skillbox">
  <h1 className="title">Skillset</h1>
  <p className="description">I can aid you with any of the following requirements.</p>
    <div className="row">
      <div className="col-3">
      <div className="skill-item">
      <Icon name="ei-chevron-left" size="m" />
      <Icon name="ei-chevron-right" size="m" />
        <div className="skill"><p>Software Development</p></div>
        </div>
        </div>
      <div className="col-3">
      <div className="skill-item">
        <Icon name="ei-eye" size="m" />
        <div className="skill"><p>UI/UX Design</p></div>
        </div>
        </div>
      <div className="col-3">
      <div className="skill-item">
        <Icon name="ei-play" size="m" />
        <div className="skill"><p>Sound Engineering</p></div>
        </div>
      </div>
      <div className="col-3">
      <div className="skill-item">
        <Icon name="ei-chart" size="m" />
        <div className="skill"> <p>SEO & Analytics</p></div>
      </div>
    </div>
    </div>
    <div className="row">
      <div className="col-3">
      <div className="skill-item">
        <Icon name="ei-cart" size="m" />
        <div className="skill"><p>eCommerce</p></div>
        </div>
        </div>
      <div className="col-3">
      <div className="skill-item">
        <Icon name="ei-pencil" size="m" />
        <div className="skill"><p>Technical Writing</p></div>
        </div>
      </div>
      <div className="col-3">
      <div className="skill-item">
        <Icon name="ei-gear" size="m" />
        <div className="skill"><p>DevOps</p></div>
      </div>
      </div>
      <div className="col-3">
        <div className="skill-item">
          <Icon className="logo" name="ei-like" size="m" />
          <div className="skill"><p>Digitial Marketing</p></div>
        </div>
      </div>
    </div>
  <style jsx>{`
    .skillbox {
      background: rgba(0,0,0,0.8);
      border-radius: 1rem;
      padding: 1rem;
      max-width: 60rem;

    }
    .logo {
      fill: white;
      margin: 0 auto;
      text-align: center;
      display: block;
    }
    .skill {
      text-align: center;
      font-weight: 700;
      margin: 0;
      color: white;
      padding: 0.5rem;
      font-weight: 300;
      vertical-align: center;
    }
    .skill-item {
      padding: 1rem 2rem;
    }
  `}</style>
  </div>
)

export default Skills
