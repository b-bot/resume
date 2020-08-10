import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Artificial from "../components/svg/Artificial";
import Bakery from "../components/svg/Bakery";
import Cavalry from "../components/svg/Cavalry";
import Monash from "../components/svg/Monash";

const Experience = (props) => (
  <div>
    <h1 className="title">Experience</h1>
    <p className="description">A brief history of time.</p>
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="January 2020 - Present"
        iconStyle={{ background: "#18aafa", color: "#fff" }}
        icon={<img className="png" src="/static/sovtech.png" />}
      >
        <h3 className="vertical-timeline-element-title">Fullstack Engineer</h3>
        <h4 className="vertical-timeline-element-subtitle">
          <a target="_blank" rel="noopener noreferrer" href="https://sov.tech">
            SovTech
          </a>
        </h4>
        <p>Software Development, DevOps, Product Management</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="April 2018 - December 2019"
        iconStyle={{ background: "#18aafa", color: "#fff" }}
        icon={<Cavalry />}
      >
        <h3 className="vertical-timeline-element-title">Frontend Engineer</h3>
        <h4 className="vertical-timeline-element-subtitle">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://hellocavalry.com"
          >
            Cavalry Media
          </a>
        </h4>
        <p>Software Development, SEO & Analytics, DevOps</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="May 2017 - May 2019"
        iconStyle={{ background: "#18aafa", color: "#fff" }}
        icon={<Artificial />}
      >
        <h3 className="vertical-timeline-element-title">Founder</h3>
        <h4 className="vertical-timeline-element-subtitle">Artificial EQ</h4>
        <p>
          Software Development, UI/UX Design, SEO & Analytics, Digital
          Marketing, eCommerce
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="July 2016 - March 2018"
        iconStyle={{ background: "#18aafa", color: "#fff" }}
        icon={<Bakery />}
      >
        <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://thebread.co.za"
          >
            The Bread
          </a>{" "}
          /{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://bakery.co.za"
          >
            Bakery
          </a>
        </h4>
        <p>
          Software Development, UI/UX Design, SEO & Analytics, Digital
          Marketing, eCommerce
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="July 2012 - November 2015"
        iconStyle={{ background: "#18aafa", color: "#fff" }}
        icon={<Monash />}
      >
        <h3 className="vertical-timeline-element-title">Graduate</h3>
        <h4 className="vertical-timeline-element-subtitle">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.monash.edu/"
          >
            Monash University
          </a>
        </h4>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://badges.wes.org/Evidence?i=7f9923f8-b98a-45dd-bcc8-018b1c88303f&type=ca"
        >
          <img className="wes-badge" src="/static/wes.png" />
        </a>
        <p>Bachelor of Computer & Information Sciences</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
    <style jsx>{`
      .wes-badge {
        max-width: 4.5rem;
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
      }
      .png {
        max-width: 100%;
        padding: 12px;
      }
    `}</style>
  </div>
);

export default Experience;
