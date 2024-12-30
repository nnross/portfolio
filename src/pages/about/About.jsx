import propTypes from 'prop-types';

import Intro from '../../components/Intro';
import Contact from '../../components/Contact';
import Title from '../../components/Title';
import List from '../../components/List';
import Hobbies from '../../components/Hobbies';

const About = ({ className = 'about', id = 'about' }) => (
  <div className={className} id={id}>
    <div className={`${className}__intro`} id={`${id}__intro`}>
      <Contact />
      <Intro />
    </div>
    <div className={`${className}__lists`} id={`${id}__lists`}>
      <Title className={'skills'} arrow1={'arrow_1_part1'} arrow2={'arrow_1_part2'} question={'Well, what do I know so far?'} title={'skills and tools'} />
      <List title={'UI/UX design'} items={['interaction design', 'visual design', 'responsive design', 'accessibility', 'user research', 'figma', 'notion', 'procreate', 'illustration']} />
      <List title={'frontend development'} items={['javaScript', 'HTML & CSS', 'frontend frameworks', 'version control', 'java', 'python', 'node.js', 'react.js', 'express.js', 'REST APIs', 'github', 'CI/CD', 'SCRUM']} />
      <Title className={'courses'} arrow1={'arrow_2_part1'} arrow2={'arrow_2_part2'} question={'And what kind of studies have prepared me?'} title={'relevant courses'} />
      <List title={'UI/UX design'} items={['usability, user experience and analytics', 'digital art and interactive experiences', 'principles of interaction design', 'interactive storytelling', 'gamification and serious games', 'changing art and culture', 'introduction to psychology of personality', 'social psychology', 'introduction to cognitive psychology and neuropsychology', 'cognitive processes']} />
      <List title={'frontend development'} items={['full stack web development', 'basic course of software engineering']} />
      <Title className={'hobby'} arrow1={'arrow_3_part1'} arrow2={'arrow_3_part2'} question={'But who am I as a person?'} title={'hobbies'} />
      <Hobbies />
      <Title className={'more'} arrow1={'arrow_4'} question={'Learn more about my skillset from my projects and disciplines!'} />
    </div>
  </div>
);

export default About;

About.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
};