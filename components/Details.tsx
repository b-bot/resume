var Icon = require("react-evil-icons");

const Details = () => (
  <div className="container">
    <h1 className="title">Let's Chat</h1>
    <p className="description">For enquiries drop me a mail.</p>
    <Icon name="ei-comment" size="m" />
    <p className="contact-details">
      <a className="contact-link" href="mailto:byronpolley@live.com">
        byronpolley@live.com
      </a>
    </p>
    <style jsx>{`
      .contact-details {
        color: white;
        font-size: 24px;
        line-height: 18px;
        font-weight: 400;
        text-align: center;
        letter-spacing: 2px;
        padding-bottom: 3rem;
      }
      .contact-link {
        color: white;
        position: relative;
        transition: 0.3s;
        display: inline-block;
        vertical-align: middle;
        transform: perspective(1px) translateZ(0);
      }
      .contact-link:hover {
        animation-name: hvr-pulse;
        font-weight: 700;
        animation-duration: 1s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        transform: scale(1.1);
      }
      .contact-link:after {
        position: absolute;
        content: "";
        height: 2px;
        background: #18aafa;
        width: 100%;
        bottom: -12px;
        left: 0;
        transition: 0.3s;
      }
      .contact-link:hover:after {
        height: 4px;
      }
    `}</style>
  </div>
);

export default Details;
