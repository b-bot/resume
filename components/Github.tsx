const Github = () => (
  <div className="container">
  <div className="github-chart">
  <h1 className="title">Contribution Graph</h1>
  <p className="description">Go and see my code over on <a href="https://github.com/b-b0t" target="_blank">GitHub</a>.</p>
    <img className="img-fluid" src="https://ghchart.rshah.org/ff0000/b-b0t" alt="b" />
    <style jsx>{`
    .github-chart {
      display: block;
      text-align: center;
      margin-bottom: 2rem;
      max-width: 40rem !important;
      margin: 0 auto;
    }
    .github-chart img {
      margin: 0 auto;
    }
    `}</style>
  </div>
</div>
)

export default Github
