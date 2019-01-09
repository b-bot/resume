const Details = () => (
    <div className="container">
        <h1 className="title">Let's Chat</h1>
        <p className="description">You can contact me through the following channels.</p>
        <p className="contact-details">For all professional enquiries please <a className="contact-link" href="mailto:byronpolley@live.com">Email me</a> or send me a message on <a className="contact-link" href="https://linkedin.com/in/byronpolley">LinkedIn</a>.</p>
      <style jsx>{`
        .contact-details {
          color: white;
          font-size: 18px;
          line-height: 18px;
          font-weight: 700;
          text-align: center;
        }
        .contact-link {
          color: red;
          position: relative;
          transition: 0.3s;
        }
        .contact-link:after {
          position: absolute;
          content: '';
          height: 1px;
          background: red;
          width: 100%;
          bottom: 0;
          left: 0;
        }
      `}</style>
    </div>
  )
  
  export default Details