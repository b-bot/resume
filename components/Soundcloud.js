const Soundcloud = () => (
  <div>
  <h1 className="title">SoundCloud</h1>
  <p className="description">I produce electronic music and design sounds. Here is some of my work.</p>
    <div className="soundcloud">
      <iframe width="100%" height="350" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/647012544&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
    </div>
    <style jsx>{`
      .soundcloud {
        max-width: 40rem;
        height: auto;
        margin: 0 auto;
        padding: 2rem;
      }
    `}</style>
  </div>
)

export default Soundcloud
