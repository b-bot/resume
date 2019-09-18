const Terminal = props => (
  <div className="container terminal">
    <div className="cont">
      <div id="term" className="term term-ready">
        <div className="term-bar">
          <div className="term-winctrl">
            <span className="term-btn"></span>
            <span className="term-btn"></span>
            <span className="term-btn"></span>
          </div>
        </div>
        <div className="term-cont">
          <div className="term-line">
            <span className="term-prompt">$ </span><span className="term-cmd current">Hi friend!<br></br></span><br />
            <span className="term-prompt"></span><span className="term-cmd current">I'm <a className="term-link" href="https://b-b0t.com/" target="_blank">Byron Polley</a>, a software engineer and designer based in Johannesburg, South Africa.</span><span className="term-caret">&#x2588;</span>
          </div>
        </div>
      </div>
    </div>
      <style jsx>{`
        .terminal {
          position: relative;
          padding: 2rem;
          top: 50%;
          transform: translateY(-50%);
        }
        #term {
          height: 18rem;
          max-width: 25rem;
          margin: 0 auto;
          background: rgba(0, 0, 0, 0.8);
          border: 1px solid #dcdcdc;
          border-radius: 0.5rem;
          box-shadow: 0 0 4rem rgba(0, 0, 0, 0.4);
        }

        .term-bar {
          height: 2rem;
          width: 100%;
          display: flex;
          flex-direction: row;
          border-bottom: 1px solid #252525;
          justify-content: space-between;
        }

        .term-winctrl {
          padding: 0.5rem;
        }

        .term .term-btn {
          width: 0.6rem;
          height: 0.6rem;
          border-radius: 0.5rem;
          display: inline-block;
          margin: 0.2rem;
          background-color: #dcdcdc;
        }

        .term-cont {
          font-family: 'Inconsolata', monospace;
          color: #fff;
          padding: 0.5rem;
        }

        .term-cmd {
          background: none;
          margin: 0;
          border: 0;
          color: inherit;
          font-family: inherit;
          font-size: 1rem;
        }


        .term-link {
          whitespace: no-wrap;
          color: red;
          z-index: 10;
        }

        .term-link:hover {
          text-decoration: underline;
          cursor: pointer;
        }

        .term-caret {
          display: inline-block;
          color: #fff;
          padding: 0;
          margin: 0;
          font-family: inherit;
          font-size: inherit;
        }
        .term-caret.blink {
          color: transparent;
        }
      `}</style>
    </div>
)

export default Terminal
