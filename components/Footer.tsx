var Icon = require('react-evil-icons');

const Footer = () => (
  <div className="footer">
      <div className="social">
      <a href="mailto:byronpolley@live.com">
          <Icon name="ei-envelope" size="s" />
        </a>
        <a href="https://www.linkedin.com/in/byronpolley/">
          <Icon name="ei-sc-linkedin" size="s" />
        </a>
        <a href="https://github.com/b-b0t">
          <Icon name="ei-sc-github" size="s" />
        </a>
      </div>
      <style jsx>{`
      .footer {
        position: relative;
        bottom: 0;
        background-color: white;
        width: 100%;
        z-index: 10;
        border-top: 2px solid black;
      }
      .social {
        margin: 0 auto;
        text-align: center;
      }
      `}</style>
    </div>
)

export default Footer
