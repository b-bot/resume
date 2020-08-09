var Icon = require("react-evil-icons");

const Projects = () => (
  <div>
    <h1 className="title">Projects</h1>
    <p className="description">
      I've worked on some interesting stuff, here's a showreel.
    </p>
    <div className="container projects">
      <div className="row project-container">
        <div className="col-4 col-md-2">
          <a href="http://bdo.co.za" target="_blank">
            <div className="project-item">
              <Icon className="external" name="ei-external-link" size="s" />
              <img
                className="img-fluid project-image"
                src="static/projects/bdo.png"
              />
            </div>
          </a>
        </div>
        <div className="col-4 col-md-2">
          <a href="https://www.aig.co.za/" target="_blank">
            <div className="project-item">
              <Icon className="external" name="ei-external-link" size="s" />
              <img
                className="img-fluid project-image"
                src="static/projects/aig.png"
              />
            </div>
          </a>
        </div>
        <div className="col-4 col-md-2">
          <a href="http://vox.co.za" target="_blank">
            <div className="project-item">
              <Icon className="external" name="ei-external-link" size="s" />
              <img
                className="img-fluid project-image"
                src="static/projects/vox.png"
              />
            </div>
          </a>
        </div>
        <div className="col-4 col-md-2">
          <a href="http://integrisure.co.za" target="_blank">
            <div className="project-item">
              <Icon className="external" name="ei-external-link" size="s" />
              <img
                className="img-fluid project-image"
                src="static/projects/integrisure.png"
              />
            </div>
          </a>
        </div>
        <div className="col-4 col-md-2">
          <a href="http://nandos.co.za" target="_blank">
            <div className="project-item">
              <Icon className="external" name="ei-external-link" size="s" />
              <img
                className="img-fluid project-image"
                src="static/projects/nandos.png"
              />
            </div>
          </a>
        </div>
        <div className="col-4 col-md-2">
          <a href="http://pearlthusiofficial.com" target="_blank">
            <div className="project-item">
              <Icon className="external" name="ei-external-link" size="s" />
              <img
                className="img-fluid project-image"
                src="static/projects/pearlthusi.png"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
    <style jsx>{``}</style>
  </div>
);

export default Projects;
