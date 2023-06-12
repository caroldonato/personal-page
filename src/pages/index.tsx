import * as React from "react";
import type { HeadProps, PageProps } from "gatsby";
import Layout from "../components/layout/layout";
import { StaticImage } from "gatsby-plugin-image";

import "../styles/global.styles.css";
import "@fontsource/lexend-deca";
import "@fontsource/press-start-2p";

import { 
  SectionTitle, 
  Title, 
  PhotoFrame, 
  HoverableButton,
  SectionDivider, 
  VerticalDivider,
  HoverableLink,
  HoverableMedia
} from "../components/layout/layout.style";

import Badge from "../components/badges/badges";
import Collapsible from "../components/collapsible/collapsible";
import Timeline from "../components/timeline/timeline";

import { SiBootstrap, SiCss3, SiCypress, SiDotnet, SiFigma, SiGatsby, SiGithub, SiHtml5, SiIonic, SiJavascript, SiJquery, SiJunit5, SiLinkedin, SiMongodb, SiNodedotjs, SiPenpot, SiPostman, SiReact, SiSwagger, SiTailwindcss, SiTypescript } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { TbBrandNextjs } from "react-icons/tb";
import { FaDatabase, FaFileDownload, FaJava } from "react-icons/fa";
import { VscJson } from "react-icons/vsc";
import { RiSendPlaneFill, RiSendPlaneLine } from "react-icons/ri";

import cvPTBR from '../assets/cv-pt-br-carolinedonato.pdf';
import cvENUS from '../assets/cv-en-us-carolinedonato.pdf';

const IndexPage: React.FC<PageProps> = () => {
  const [contentSendButton, setContentSendButton] = React.useState(<>Send <RiSendPlaneFill className="ml-2" /></>);
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");

  function handleSendClick() {
    if (name && message) {
      setContentSendButton(<>Sent! <RiSendPlaneLine className="ml-2" /></>)

      setTimeout(() => {
        setContentSendButton(<>Send <RiSendPlaneFill className="ml-2" /></>)
      }, 3000);
    }
  }

  return (
      <Layout>
        <section id="hero" className="pt-7 px-5 bg-zinc-900">
          <div className="flex flex-col justify-center md:w-full md:flex-row md:space-between items-center">
            <div className="flex flex-col justify-center items-center w-full mb-10">
              <Title>Carol Donato</Title>
              <PhotoFrame className="mt-10">
                <StaticImage src="../assets/photo.jpeg" alt="A nerd" placeholder="blurred" style={{position: "relative"}} />
                <div className="text-center my-2">
                    <div>Fullstack Developer</div>
                    <div>Since 2020</div>
                </div>
              </PhotoFrame>
            </div>
          </div>
          <SectionDivider />
        </section>

        <section id="about" className="mt-10 px-5">
          <Title className="self-center text-center mb-10">About Me</Title>
          <div className="flex flex-row justify-between flex-wrap gap-5">
            <div className="flex flex-col justify-start items-start md:items-end md:text-right md:flex-1">
              <SectionTitle>Basics</SectionTitle>
              <ul>
                <li>Brazilian living in Brazil 🌴</li>
                <li>Programming as a hobby since I was 9 years old 💜</li>
                <li>Bachelor's degree in Computer Science 🎓</li>
                <li>Fullstack developer with more front-end experience 💻</li>
                <li>Native brazilian-portuguese speaker, fluent in english 🌎</li>
              </ul>
            </div>
            <div>
              <VerticalDivider />
            </div>
            <div className="flex flex-col justify-start items-start md:text-left md:flex-1">
              <SectionTitle>More</SectionTitle>
              <ul>
                <li>✅ Passionate about designing and implementing aesthetically pleasing and functionally reliable software</li>
                <li>🎨 More experienced in front-end, but capable in back-end tasks as well</li>
                <li>📃 Enjoy writing and reading documentation</li>
                <li>📆 Always eager to learn and keeping up to date with new technologies</li>
                <li>🧮 I want to learn more about automated testing and DevOps</li>
              </ul>
            </div>
          </div>

          <SectionTitle className="self-center text-center my-10 text-sm">For all the details, see my CV</SectionTitle>
          <div className="flex flex-row justify-evenly items-center">
              <HoverableLink className="flex flex-col justify-center items-center" href={cvPTBR} download><b className="mb-2">PT-BR </b> <FaFileDownload /></HoverableLink>
              <HoverableLink className="flex flex-col justify-center items-center" href={cvENUS} download><b className="mb-2">EN-US </b> <FaFileDownload /></HoverableLink>
          </div>
          <SectionDivider className="mt-10" />
        </section>

        <section id="experience" className="px-5 pt-10 bg-zinc-900">
          <SectionTitle>Experience</SectionTitle>
              <div className="flex flex-col justify-start items-start mt-10">
                <Collapsible title="Anexs Tecnologia - Developer Internship">
                  <>
                    <div><b>From Jan 2020 to Dec 2020</b></div>
                    <p>I interned in Anexs Tecnologia during my last year of university, and learned Web Development as well as Mobile Development techniques while working with a small team on various projects. Below are some of my responsabilities during this internship:</p>
                    <ul>
                      <li>Assisted development team in delivering requirements through activities in both front and back-end, for general web development as well as mobile apps;</li>

                      <li>Worked with senior developers to learn patterns and best practices to be carried out;</li>

                      <li>Sought out and studied documentation to learn the fundamentals of employed tech stacks;</li>

                      <li>Maintained an organized and up-to-date version control through GitHub utilizing the GitFlow approach.</li>
                    </ul>
                  </>
                </Collapsible>

                <Collapsible title="Anexs Tecnologia - Fullstack Developer">
                  <>
                    <div><b>From Jan 2021 to Present</b></div>
                    <p>After my one-year internship, I was hired as a full-time fullstack developer at Anexs Tecnologia. Below are some of the skills and responsabilities I worked with for this role:</p>
                    <ul>
                      <li>Develop features and projects from the ground up, applying methods and principles established during internship;</li>

                      <li>Design database schemas and improve upon existing schemas, as well as their respective ORM models and back-end queries;</li>

                      <li>Design page layouts, or accurately implement pre-existing designs;</li>

                      <li>Interact with clients and non-development teams in order to define requirements and implementation details according to user needs;</li>

                      <li>Optimize and organize code according to best practices and performance metrics;</li>

                      <li>Stay up to date with emerging technologies and stacks in order to find best fits for projects;</li>

                      <li>Employ best practices in version control and management, as well as participate in task management and write documentation;</li>

                      <li>Work with other members of the development team in order to iterate upon and improve code both in terms of functionality as well as organization and readability.</li>
                    </ul>
                  </>
                </Collapsible>
              </div>
          <SectionDivider className="mt-10" />
        </section>

        <section id="skills" className="mt-10 px-5">
          <SectionTitle>Skills</SectionTitle>
          
          <p>These are some of the technologies I am most experienced at:</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-8 gap-4 my-10">
            <Badge Icon={<SiDotnet />} Description=".NET/C#" Experience={{ Value: 4, Unit: "Years" }} Color="#6809db" />
            <Badge Icon={<SiNodedotjs />} Description="NodeJS" Experience={{ Value: 4, Unit: "Years" }} Color="#00b015" />
            <Badge Icon={<SiJavascript />} Description="Javascript" Experience={{ Value: 4, Unit: "Years" }} Color="#ffce0a" />

            <Badge Icon={<SiHtml5 />} Description="HTML" Experience={{ Value: 4, Unit: "Years" }} Color="#ff3f0a" />
            <Badge Icon={<SiCss3 />} Description="CSS" Experience={{ Value: 4, Unit: "Years" }} Color="#0a95ff" />
            <Badge Icon={<SiBootstrap />} Description="Bootstrap" Experience={{ Value: 4, Unit: "Years" }} Color="#984aff" />
            <Badge Icon={<SiJquery />} Description="JQuery" Experience={{ Value: 4, Unit: "Years" }} Color="#1d42a1" />

            <Badge Icon={<SiReact />} Description="React" Experience={{ Value: 4, Unit: "Years" }} Color="#00c9d4" />
            <Badge Icon={<SiReact />} Description="React Native" Experience={{ Value: 4, Unit: "Years" }} Color="#00c9d4" />
            <Badge Icon={<SiIonic />} Description="Ionic" Experience={{ Value: 1, Unit: "Year" }} Color="#57aeff" />

            <Badge Icon={<BsFiletypeSql />} Description="SQL" Details="(MySQL, PostgreSQL, MSSQL)" Experience={{ Value: 4, Unit: "Years" }} Color="#c92020" />
            <Badge Icon={<SiMongodb />} Description="NoSQL" Details="(MongoDB, Firebase)" Experience={{ Value: 4, Unit: "Years" }} Color="#008507" />
            <Badge Icon={<FaDatabase />} Description="ORMs" Details="(EntityFramework, Hibernate)" Experience={{ Value: 4, Unit: "Years" }} Color="#6809db" />

            <Badge Icon={<VscJson />} Description="REST" Experience={{ Value: 4, Unit: "Years" }} Color="#00c28b" />
            <Badge Icon={<SiPostman />} Description="Postman" Experience={{ Value: 4, Unit: "Years" }} Color="#ff7a14" />
            <Badge Icon={<SiSwagger />} Description="Swagger" Experience={{ Value: 2, Unit: "Years" }} Color="#00e632" />
            <Badge Icon={<SiFigma />} Description="Figma" Experience={{ Value: 4, Unit: "Years" }} Color="#a900e6" />
          </div>

          <p>Here are some technologies I've been using recently:</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-8 gap-4 my-10">
            <Badge Icon={<FaJava />} Description="Java" Experience={{ Value: 2, Unit: "Years" }} Color="#cc2e0e" />
            <Badge Icon={<TbBrandNextjs />} Description="NextJS" Experience={{ Value: 2, Unit: "Year" }} Color="#05ebcc" />
            <Badge Icon={<SiTailwindcss />} Description="TailwindCSS" Experience={{ Value: 2, Unit: "Years" }} Color="#3d24ff" />
            <Badge Icon={<SiGatsby />} Description="SSGs" Details="(11ty, Astro, GatsbyJS, NextJS)" Experience={{ Value: 2, Unit: "Years" }} Color="#b473ff" />
            <Badge Icon={<SiTypescript />} Description="Typescript" Experience={{ Value: 1, Unit: "Year" }} Color="#05ebcc" />
            <Badge Icon={<SiCypress />} Description="Cypress.io" Experience={{ Value: 1, Unit: "Year" }} Color="#24d482" />
            <Badge Icon={<SiJunit5 />} Description="JUnit" Experience={{ Value: 1, Unit: "Year" }} Color="#d91200" />
            <Badge Icon={<SiPenpot />} Description="Penpot" Experience={{ Value: 1, Unit: "Year" }} Color="#eb66ff" />
          </div>
          
          <SectionDivider className="mt-10" />
        </section>

        {/* <section id="projects" className="px-5 pt-10 bg-zinc-900">
          <SectionTitle>Projects</SectionTitle>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet, ligula ut laoreet vulputate, purus nisl consequat tortor, a molestie sem leo id magna. Duis et felis eget enim imperdiet aliquam at in sem. Vivamus blandit elementum arcu. Nam ante ante, scelerisque vitae viverra in, ultrices nec nulla. Nullam ut dolor nulla. Sed vel libero euismod mi rhoncus pulvinar. Fusce at diam in odio maximus euismod ac at libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam lacinia purus et orci varius elementum.</p>
          <SectionDivider className="mt-10" />
        </section> */}

        <section id="contact" className="px-5 py-10 bg-zinc-900">
          <div className="flex flex-col gap-10 md:flex-row md:justify-between">
            <div className="flex flex-col flex-1">
              <SectionTitle>Contact</SectionTitle>
              <form name="ContactForm" id="ContactForm" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                <div className="grid grid-cols-1 gap-x-4 gap-y-3 md:grid-cols-2 md:max-w-screen-md md:gap-y-2">
                  <input type="hidden" name="subject" value="Contact from from caroldonato.netlify.app" />
                  <input type="hidden" name="form-name" value="ContactForm" />

                  <div className="flex flex-col">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" required />
                  </div>

                  <div className="flex flex-col">
                    <label>E-mail</label>
                    <input type="text" name="email" placeholder="E-mail" />
                  </div>

                  <div className="flex flex-col">
                    <label>Phone</label>
                    <input type="text" name="phone" placeholder="Phone" />
                  </div>
                  
                  <div className="flex flex-col">
                    <label>Website</label>
                    <input type="text" name="website" placeholder="Website" />
                  </div>

                  <div className="flex flex-col md:col-span-2">
                    <label>Message</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <textarea name="message" rows={5} className="w-full" placeholder="Let me know what you think!" required></textarea>
                      <HoverableButton 
                        id="Send"
                        type="submit"
                        className="flex flex-row w-full md:w-fit p-3 justify-center items-center"
                        onClick={handleSendClick}>
                          { contentSendButton }
                      </HoverableButton>
                    </div>
                  </div>

                </div>
              </form>
            </div>
            <div className="flex flex-col flex-1 md:items-center">
              <SectionTitle>Links</SectionTitle>
              <div className="flex flex-row w-100 justify-start items-center gap-10">
                <HoverableMedia href="https://github.com/caroldonato" target="_blank" title="GitHub"><SiGithub size={48} /></HoverableMedia>
                <HoverableMedia href="https://www.linkedin.com/in/caroline-donato/" target="_blank" title="LinkedIn"><SiLinkedin size={48} /></HoverableMedia>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="w-100 flex flex-row justify-center items-center">@ Carol Donato - 2023</div>
        </footer>
      </Layout>
  )
}

export default IndexPage;

export function Head(props: HeadProps) {
  return (
    <>
      <html lang="en" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Carol Donato - Full Stack Dev</title>
    </>
  )
}