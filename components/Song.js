const Song = () => (
  <div className="container">
  <h1 className="title-alt">Latest Track</h1>
  <p className="description-alt">Follow me on <a href="https://soundcloud.com/b-b0t">SoundCloud</a> to stay updated.</p>
    <div className="soundcloud">
      <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/519387978&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
    </div>
    <style jsx>{`
      .soundcloud {
        max-width: 40rem !important;
        margin: 0 auto;
        padding: 1rem;
      }
    `}</style>
  </div>
)

export default Song
