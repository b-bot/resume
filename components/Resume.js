const Resume = () => (
    <div className="container">
    <h1 className="title-alt">Download Résumé</h1>
    <p className="description-alt">A written resume format and a quick-reference visual CV are provided below.</p>
    <div className="container">
      <div className="row">
        <div className="col">
        <a className="resume" href="/static/resume.pdf" target="_blank">Text</a>
        </div>
        <div className="col">
        <a className="resume" href="/static/cv.pdf" target="_blank">Visual CV</a>
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
            max-width: 7rem;
            border: 1px solid transparent;
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