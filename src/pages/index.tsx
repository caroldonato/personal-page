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
  FramedPhoto, 
  PhotoFrame, 
  hoverableStyle, 
  HoverableButton,
  SectionDivider, 
  SectionDividerWrapper, 
  SectionDividerEndRight,
  VerticalDivider,
  HorizontalDivider } from "../components/layout/layout.style";
import Badge from "../components/badges/badges";

import { SiBootstrap, SiCss3, SiCypress, SiDotnet, SiFigma, SiGatsby, SiHtml5, SiIonic, SiJavascript, SiJquery, SiJunit5, SiMongodb, SiNodedotjs, SiPenpot, SiPostman, SiReact, SiSwagger, SiTailwindcss, SiTypescript } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { TbBrandNextjs } from "react-icons/tb";
import { FaDatabase, FaFileDownload, FaJava } from "react-icons/fa";
import { VscJson } from "react-icons/vsc";
import { RiSendPlaneFill } from "react-icons/ri";

import cvPTBR from '../assets/cv-pt-br-carolinedonato.pdf';
import cvENUS from '../assets/cv-en-us-carolinedonato.pdf';

const IndexPage: React.FC<PageProps> = () => {

  return (
      <Layout>
        <section id="hero" className="pt-7 px-5 bg-zinc-900">
          <div className="flex flex-col justify-center md:w-full md:flex-row md:space-between items-center">
            <div className="flex flex-col justify-center items-center w-full mb-10">
              <Title>Carol Donato</Title>
              {/* <FramedPhoto className="w-56 my-5 md:mb-0">
                <StaticImage src="../assets/photo.jpeg" alt="A nerd" className="rounded-full" placeholder="blurred" style={{position: "relative"}} />
              </FramedPhoto> */}

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
                <li>📆 Always eager to learn and keeping up to date with new technologies</li>
                <li>🧮 I want to learn more about automated testing and DevOps</li>
              </ul>
            </div>
          </div>

          <SectionTitle className="self-center text-center my-10 text-sm">For all the details, see my CV</SectionTitle>
          <div className="flex flex-row justify-evenly items-center">
              <HoverableButton className="flex flex-col justify-center items-center" href={cvPTBR} download><b className="mb-2">PT-BR </b> <FaFileDownload /></HoverableButton>
              <HoverableButton className="flex flex-col justify-center items-center" href={cvENUS} download><b className="mb-2">EN-US </b> <FaFileDownload /></HoverableButton>
          </div>
          <SectionDivider className="mt-10" />
        </section>

        <section id="experience" className="px-5 pt-10 bg-zinc-900">
          <SectionTitle>Experience</SectionTitle>
              <div className="flex flex-col justify-start items-start mt-10">
                <text>◽ <b>Anexs Tecnologia - Jan 2020 to Dec 2020 </b></text>
                <p>Internship in Web Development and Mobile Development</p>
                <HorizontalDivider className="my-10" />
                <text>◽ <b>Anexs Tecnologia - Jan 2021 to Present </b></text>
                <p>Fullstack Developer</p>
              </div>
          <SectionDivider className="mt-10" />
        </section>

        <section id="skills" className="mt-10 px-5">
          <SectionTitle>Skills</SectionTitle>
          
          <p>These are some of the technologies I am most experienced at:</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-8 gap-4 my-10">
            <Badge Icon={<SiDotnet />} Description=".NET/C#" Experience={{ Value: 4, Unit: "Years" }} Color="#6809db" />
            <Badge Icon={<SiNodedotjs />} Description="NodeJS" Experience={{ Value: 4, Unit: "Years" }} Color="#00b015" />
            <Badge Icon={<FaJava />} Description="Java" Experience={{ Value: 2, Unit: "Years" }} Color="#cc2e0e" />
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

          <p>And here are some technologies I've been using a lot recently:</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-8 gap-4 my-10">
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
          <SectionTitle>Contact</SectionTitle>
          <form id="ContactForm">
            <div className="grid grid-cols-1 gap-x-4 gap-y-3 md:grid-cols-2 md:max-w-screen-md md:gap-y-2">
              <div className="flex flex-col">
                <label>Name</label>
                <input name="Name" id="Name" placeholder="Name" />
              </div>
              <div className="flex flex-col">
                <label>E-mail</label>
                <input name="Email" id="Email" placeholder="E-mail" />
              </div>
              <div className="flex flex-col">
                <label>Phone</label>
                <input name="Phone" id="Phone" placeholder="Phone" />
              </div>
              <div className="flex flex-col">
                <label>Website</label>
                <input name="Website" id="Website" placeholder="Website" />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label>Message</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <textarea name="Message" id="Message" rows={5} className="w-full" placeholder="Let me know what you think!"></textarea>
                  <HoverableButton 
                    id="Send"
                    className="flex flex-row w-full md:w-fit p-3 justify-center items-center rounded-sm">
                      Send <RiSendPlaneFill className="ml-2" />
                  </HoverableButton>
                </div>
              </div>
            </div>
          </form>
        </section>
      </Layout>
  )
}

export default IndexPage;

export function Head(props: HeadProps) {
  return (
    <>
      <html lang="en" />
      <title>Carol Donato - Full Stack Dev</title>
    </>
  )
}