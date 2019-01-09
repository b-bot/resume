const Github = () => (
  <div className="container">
  <div className="github-chart">
  <h1 className="title">GitHub Contribution Graph</h1>
  <p className="description">Everyone needs a little version control right? Go and see how I <a href="https://github.com/b-b0t">Git</a>.</p>
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
