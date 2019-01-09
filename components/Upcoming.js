import Axe from '../components/svg/Axe';

const Upcoming = () => (
    <div className="container">
    <h1 className="title">Upcoming Project</h1>
    <p className="description">The tree remembers what the axe forgets.</p>
    <div className="artwork">
        <Axe />
    </div>
      <style jsx>{`
      .artwork {
          max-width: 30rem;
          margin: 0 auto;
          padding: 4rem;
      }
      `}</style>
    </div>
  )
  
  export default Upcoming