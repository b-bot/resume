const Resume = () => (
    <div className="container">
    <h1 className="title-alt">Download Résumé</h1>
    <p className="description-alt">A quick-reference visual version or the standard one are provided for download below.</p>
    <div className="container">
      <div className="row">
        <div className="col">
        <a href="/static/resume.pdf" download><button className="resume">Text</button></a>
        </div>
        <div className="col">
        <a href="/static/cv.pdf" download><button className="resume">Visual CV</button></a>
        </div>
      </div>
    </div>
      <style jsx>{`
      .max-width: {
        max-width: 30rem;
      }
        .resume {
            display: block;
            text-align: center;
            margin: 1rem auto;
            background: black;
            border-radius: 3rem;
            padding: 0.5rem 1rem;
            text-transform: uppercase;
            color: white;
            font-weight: bold;
            min-width: 6.5rem;
          }
          .resume:hover {
            background: white;
            color: black;
            cursor: pointer;
            border: 1px solid black;
          }
      `}</style>
    </div>
  )
  
  export default Resume