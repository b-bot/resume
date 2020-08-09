const Bio = () => (
  <div className="container">
  <h1 className="title">Who is Byron?</h1>
  <p className="description">My friends call me b-b0t.</p>
    <div className="container">
      <div className="row">
      <div className="col-lg-6 bio-image">
        <img className="img-fluid" src="/static/portrait.jpg" />
      </div>
      <div className="col-lg-6 bio-text">
        <p>Since the release of the first iPod in 2001, Byron has firmly placed himself at the intersection of music and technology. After matriculating High School, he studied Sound Engineering at Boston Media House. After completion he then gained his Bachelors of Computer Science from Monash University. It was during his time at there that he founded Sonic Psychology, a music podcast curating the latest in the underground SoundCloud scene.</p>
        <p>After cutting his teeth in the web development realm, he then decided to make concrete decisions in what route his career would take. With the dawning of new frontend engineering practices and technologies, Byron decided to explore the full capabailities of what Web 2.0 could offer immersing himself in all aspects of the frontend experience. This created the multi-disciplinary mindset he possesses today.</p>
        <p>Today he is interested or actively involved in Web/Mobile development, UI/UX Design sound design, music production, artificial intelligence and DevOps. He runs a music blog called Artificial EQ that curates the latest music from the darkest places across the web. He has cited Elon Musk, Hideo Kojima, Harley Streten and Alexander Ljung as some of his biggest influences.</p>
      </div>
      </div>
    </div>
    <style jsx>{`
      .bio-image {
        padding: 2rem;
      }
      .bio-image img {
          border-radius: 2px;
        }
      .bio-text {
        color: white;
        text-align: justify;
        padding: 2rem;
      }
    `}</style>
  </div>
)

export default Bio
