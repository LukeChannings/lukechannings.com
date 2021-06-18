import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
import { dateFormatter } from "../util"
import styles from "./index.module.css"

export default () => {
  const blogItems = useStaticQuery<GatsbyTypes.BlogListQuery>(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              author
              category
              date
              tags
              title
            }
            slug
          }
        }
      }
    }
  `)
  return (
    <>
      <SEO title={"Luke Channings is a freelance developer"} />
      <header className={styles.header}>
        <img
          src="/static/favicon-196.png"
          alt="A bearded white man smiling softly"
          className={styles.avatar}
        />
        <h1 itemProp="name">
          Luke Channings{" "}
          <p>
            is a <span itemProp="jobTitle">Freelance Developer</span> based in{" "}
            <span itemProp="workLocation">London</span>
          </p>
        </h1>
      </header>

      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>
            I have over 10 years experience creating all sorts of things for the
            web;
          </li>
          <li>
            A deep understanding of the Frontend toolchain &mdash; I've built
            component libraries, codemods, and more custom Webpack
            configurations than I care to count.
          </li>
          <li>
            I keep up-to-date on new and upcoming web platform features, have a
            knowledge of browser support, and I do progressive enhancement by
            default.
          </li>
          <li>
            I'm aware that not everyone uses the web the same way, and I care
            about keeping the web accessible for everyone.
          </li>
          <li>I can even write maintainable CSS without a preprocessor!</li>
        </ul>
      </section>

      <section id="availability">
        <h2>Availability</h2>

        <p>
          I am available for new contracts in <strong>September, 2021</strong>!
        </p>
      </section>

      <section id="work-history">
        <details>
          <summary>
            <h3 id="mosaic-october-2019">
              Mosaic Smart Data (October 2019 - Present)
            </h3>
            <p>
              <em>Job Title</em>: UI Engineer <em>Tech</em>: React, Redux,
              TypeScript, Protocol Buffers, Highcharts, AG-Grid, D3, Storybook
            </p>
          </summary>

          <p>
            Mosaic is a small FinTech start-up building data insights and
            visualisations that large banks can't.
          </p>
        </details>
        <details>
          <summary>
            <h3 id="hsbc-november-2017---october-2019">
              HSBC (November 2017 - October 2019)
            </h3>
            <p>
              <em>Job Title</em>: JavaScript developer <em>Tech</em>: React,
              Jest, Node.js, Splunk, Storybook
            </p>
          </summary>
          <p>
            During my time contracting for HSBC I worked on three major
            projects:
          </p>
          <ul>
            <li>
              Defining the architecture and direction for a component library to
              be adopted throughout Originations and later all of HSBC. This
              involved communicating Atomic Design as a concept, and pushing
              npm-published and semver-versioned builds.
            </li>
            <li>
              Credit Cards UK New To Bank and Existing To Bank product, where I
              worked on BAU features, and also optimisation and reducing
              technical debt.
            </li>
            <li>
              Globalisation project - Many of the projects within Originations
              boil down to forms that users need to fill in, I architected a
              frontend solution that abstracts these forms into JSON Schema
              contracts to colocate the validation rules (key business logic)
              and the form output structure. This React component will output a
              form (using the component library I started with) based on the
              JSON Schema, with little coding required other than authoring the
              JSON Schema. This allowed the monotonous work of building forms to
              be greatly simplified, freeing up developers to focus on more
              interesting projects.
            </li>
          </ul>
        </details>
        <details>
          <summary>
            <h3 id="amaze-august-2016---october-2017">
              Amaze (August 2016 - October 2017)
            </h3>
            <p>
              <em>Job Title</em>: Technical Architect <em>Tech</em>: Node.js,
              vanilla JS, mocha, chai and jsdom, Docker, RancherOS, ELK, Tridion
              CMS, Couchbase, haproxy, Varnish
            </p>
          </summary>
          <p>
            I was attracted back to Amaze to work on the Emirates project. I
            worked as a Technical Architect, which ended up being 50% TA and 50%
            Tech Lead - I had a small team of 2 people to build out a frontend.
          </p>
          <p>
            This was a very challenging project and I was heavily involved in
            the full stack. We built a micro services architecture with the
            intention of allowing each service to scale with demand - the
            Emirates homepage gets millions of visits a day.
          </p>
          <p>
            I designed component-based frontend solution using vanilla JS for
            the frontend to fit Emirates&#39; bespoke requirements.
            Accessibility was an important aspect of this project, as airlines
            are legally required to support WCAG AAA standard.
          </p>
        </details>
        <details>
          <summary>
            <h3 id="akqa-september-2015---july-2016">
              AKQA (September 2015 - July 2016)
            </h3>
            <p>
              <em>Job Title</em>: Senior Developer <em>Tech</em>: React, AVA,
              React.NET (embedded V8 in C# for SSR), SiteCore CMS
            </p>
          </summary>
          <p>
            At AKQA I worked primarily on a car configurator for Volvo. When I
            joined the team the project was a hybrid Backbone / React app
            (+jQuery), I convinced people on the team that flux architecture
            using Redux &amp; React would be easier to maintain, with a smaller
            bundle size and better performance.
          </p>
          <p>
            This was a dynamic web application allowing the user to configure
            their car&#39;s trim level.
          </p>
        </details>
        <details>
          <summary>
            <h3 id="amaze-august-2013---october-2015">
              Amaze (August 2013 - October 2015)
            </h3>
            <p>
              <em>Job Title</em>: Started as a Junior Developer, when I left my
              title was Senior Developer <em>Tech</em>: Vanilla JS, jQuery,
              Backbone, XML, XSLT, HTML Canvas
            </p>
          </summary>
          <p>
            Amaze is an agency that I started at Amaze working for in 2013, this
            was my first job. I worked on the Lexus Europe website where I
            worked on a number of features, including an interactive 360 degree
            view of various Lexus models.
          </p>
          <p>
            I was involved in various projects over the three years, working on
            projects for the Co-Op and Pizza Hut.
          </p>
          <p>
            My final project (2014 - 2015) was a rewrite of the Lexus frontend
            that allowed pages to be dynamically configured using the Tridion
            CMS, the frontend architecture was based on components that were
            nestable and configurable. Internationalisation is at the core of
            the design for this website, as it needs to support 48 languages,
            one of which was right to left.
          </p>
        </details>
      </section>

      <section id="some-things-ive-worked-on">
        <h2>Work</h2>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://github.com/lukechannings/moviematch"
              className="uri"
            >
              MovieMatch - A web app to help groups pick a movie to watch on
              Plex
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/lukechannings/gesha"
              className="uri"
            >
              Gesha - A tool for making better espresso
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/lukechannings/kube-config"
              className="uri"
            >
              kubeconfig - A Kubernetes GitOps config for my Home
            </a>
          </li>
          <li>
            <a
              href="https://dco-cc.hsbc.co.uk/ntb?productCode=UJANT&offerId=MM10006"
              className="uri"
            >
              HSBC Credit Cards - New To Bank
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.emirates.com/uk/english/"
              className="uri"
            >
              Emirates Group homepage
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="http://www.volvocars.com/intl/build"
              className="uri"
            >
              http://www.volvocars.com/intl/build
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.lexus.eu/en/#Introduction"
              className="uri"
            >
              https://www.lexus.eu/en/#Introduction
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/Pizzaface/Alexa-Chromecast-Skill-2.0"
            >
              Alexa Skill to control a Chromecast
            </a>
          </li>
        </ul>
      </section>

      <section id="where-to-find-me">
        <h2>Contact</h2>
        <ul>
          <li>
            <a href="mailto:contact@lukechannings.com" className="email">
              Email
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/luke-channings/">Linkedin</a>
          </li>
          <li>
            <a href="https://github.com/LukeChannings">GitHub</a>
          </li>
          <li>
            <a href="https://twitter.com/LukeChannings">Twitter</a>
          </li>
        </ul>
      </section>

      <section id="blogs">
        <h2>Blogs</h2>
        <ul>
          {blogItems.allMdx.edges.map(({ node }) => {
            return (
              <li key={node.slug}>
                <a href={`/blog/${node.slug}`}>
                  {dateFormatter(node.frontmatter?.date)} ·{" "}
                  {node.frontmatter?.title}
                </a>
              </li>
            )
          })}
        </ul>
      </section>

      <section id="hobbies">
        <h2>What else do I do?</h2>
        <ul>
          <li>
            I am deep into home automation, using{" "}
            <a href="https://en.wikipedia.org/wiki/MQTT">MQTT</a>
            {", "}
            <a href="https://github.com/Koenkk/zigbee2mqtt">Zigbee</a>
            {", "}
            <a href="https://www.home-assistant.io">Home Assistant</a>
            {", and "}
            <a href="https://developer.amazon.com/alexa">Alexa</a>. IoT and Home
            Automation are two things that are very hard to do without big
            security risks, and I spend some of my free time designing a home
            automation system that works offline and doesn't need cloud
            services.
          </li>
          <li>
            I like to spend the weekends going on day-long hikes in the country.
            Walking has always been a great way to clear my head and get some
            exercise!
          </li>
        </ul>
      </section>
    </>
  )
}
