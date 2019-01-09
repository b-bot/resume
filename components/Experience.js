import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import Artificial from '../components/svg/Artificial'
import Bakery from '../components/svg/Bakery'
import Cavalry from '../components/svg/Cavalry'
import Monash from '../components/svg/Monash'

const Experience = props => (
  <div>
  <h1 className="title">Experience</h1>
  <p className="description">A brief history of time.</p>
  <VerticalTimeline>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="April 2018 - Present"
      iconStyle={{ background: '#ff1e1e', color: '#fff' }}
      icon={<Cavalry />}
    >
      <h3 className="vertical-timeline-element-title">Frontend Engineer</h3>
      <h4 className="vertical-timeline-element-subtitle"><a href="https://hellocavalry.com">Cavalry Media</a></h4>
      <p>
        Software Development, SEO & Analytics, DevOps
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="May 2017 - Present"
      iconStyle={{ background: '#c73629', color: '#fff' }}
      icon={<Artificial />}
    >
      <h3 className="vertical-timeline-element-title">Founder</h3>
      <h4 className="vertical-timeline-element-subtitle"><a href="https://artificialeq.co">Artificial EQ</a></h4>
      <p>
        Sound Engineering, Podcasting, Music Curating, Writing
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="July 2016 - March 2018"
      iconStyle={{ background: '#e63221', color: '#fff' }}
      icon={<Bakery />}
    >
      <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
      <h4 className="vertical-timeline-element-subtitle"><a href="https://thebread.co.za">The Bread</a> / <a href="https://bakery.co.za">Bakery</a></h4>
      <p>
        Software Development, UI/UX Design, SEO & Analytics, Digital Marketing, eCommerce
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="July 2012 - November 2015"
      iconStyle={{ background: '#e63221', color: '#fff' }}
      icon={<Monash />}
    >
      <h3 className="vertical-timeline-element-title">Graduate</h3>
      <h4 className="vertical-timeline-element-subtitle"><a href="https://msa.ac.za">Monash University</a></h4>
      <p>
        Bachelor of Computer & Information Sciences
      </p>
    </VerticalTimelineElement>
  </VerticalTimeline>
  <style jsx>{`

  `}</style>
  </div>
)

export default Experience
