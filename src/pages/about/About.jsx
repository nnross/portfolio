import propTypes from "prop-types";
import Intro from "../../components/Intro";
import Contact from "../../components/Contact";
import Title from "../../components/Title";
import List from "../../components/List";
import Hobbies from "../../components/Hobbies";

const About = ({ className = "about", id = "about" }) => {
  return (
    <div className={className} id={id}>
      <div className={`${className}__intro`} id={`${id}__intro`}>
        <Contact />
        <Intro />
      </div>
      <div className={`${className}__lists`} id={`${id}__lists`}>
        <Title
          className={"skills"}
          arrow1={"arrow_1_part1"}
          arrow2={"arrow_1_part2"}
          question={"Well, what do I know so far?"}
          title={"skills and tools"}
        />
        <List
          title={"UI/UX design"}
          items={[
            "interaction design",
            "visual design",
            "responsive design",
            "usability",
            "accessibility",
            "user research",
            "information architecture",
            "figma",
            "notion",
            "procreate",
            "illustration",
          ]}
        />
        <List
          title={"frontend development"}
          items={[
            "javaScript",
            "HTML & CSS",
            "frontend frameworks",
            "version control",
            "java",
            "python",
            "node.js",
            "react.js",
            "express.js",
            "REST APIs",
            "github",
            "CI/CD",
            "scrum",
          ]}
        />
        <img
          className={`${className}__lists__logos`}
          src="/logos.svg"
          alt="logos of figma, github, node, express, react, and java"
        />
        <Title
          className={"courses"}
          arrow1={"arrow_2_part1"}
          arrow2={"arrow_2_part2"}
          question={"And what kind of studies have prepared me?"}
          title={"relevant courses"}
        />
        <List
          title={"UI/UX design"}
          items={[
            "usability, user experience and analytics",
            "modern user interfaces*",
            "digital art and interactive experiences",
            "principles of interaction design*",
            "interactive storytelling*",
            "gamification and serious games",
            "changing art and culture",
            "introduction to cognitive psychology and neuropsychology",
            "cognitive processes*",
          ]}
          ongoing={"* ongoing courses"}
        />
        <List
          title={"frontend development"}
          items={[
            "full stack web development",
            "basic course of software engineering",
            "device-agnostic design*",
            "personal projects",
          ]}
          ongoing={"* ongoing courses"}
        />
        <Title
          className={"hobby"}
          arrow1={"arrow_3_part1"}
          arrow2={"arrow_3_part2"}
          question={"But who am I as a person?"}
          title={"hobbies"}
        />
        <Hobbies />
        <Title
          className={"more"}
          arrow1={"arrow_4"}
          question={
            "Thank You for taking the time to look at my portfolio. Learn more about my skillset from my projects and disciplines!"
          }
        />
      </div>
    </div>
  );
};

export default About;

About.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
};
