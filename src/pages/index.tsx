import React from "react"

export default () => (
  <>
    <header>
      <h1 itemProp="name">
        Luke Channings{" "}
        <p>
          is a <span itemProp="jobTitle">Freelance Programmer</span> in{" "}
          <span itemProp="workLocation">London</span>
        </p>
      </h1>
    </header>

    <section id="skills">
      <h2>Skills</h2>
      <p>
        <span aria-hidden="true">
          <strong>TL; WR</strong>,{" "}
        </span>
        these are the buzzwords you’re looking for:
      </p>
      <ul>
        <li>
          <span itemProp="knowsAbout">Front-End Architecture</span>
        </li>
        <li>
          <span itemProp="knowsAbout">React</span>,
          <span itemProp="knowsAbout">Redux</span>,
          <span itemProp="knowsAbout">CSS Modules</span>, etc.
        </li>
        <li>
          <span itemProp="knowsAbout">JavaScript</span> (all versions, ESM,
          Babel, TS, etc)
        </li>
        <li>
          <span itemProp="knowsAbout">Webpack</span> |
          <span itemProp="knowsAbout">Make</span> |
          <span itemProp="knowsAbout">Grunt</span>
        </li>
        <li>
          <span itemProp="knowsAbout">Node.js</span>
        </li>
        <li>
          <span itemProp="knowsAbout">Express</span> |
          <span itemProp="knowsAbout">Koa</span>,
          <span itemProp="knowsAbout">Swagger</span> for designing REST APIs
          (and API Gateway security)
        </li>
        <li>
          Testing with <span itemProp="knowsAbout">Jest</span>, usually
        </li>
        <li>
          <span itemProp="knowsAbout">GitLab</span>,
          <span itemProp="knowsAbout">Jenkins</span>,
          <span itemProp="knowsAbout">S3</span>,
          <span itemProp="knowsAbout">CloudFront</span>,
          <span itemProp="knowsAbout">Lambda</span>, Terraform, AWSCLI, and lest
          we forget good ol' SSH and SCP.
        </li>
      </ul>
      <hr />
      <p>
        I have extensive experience working on large JavaScript projects, from
        front-end architecture to weighing in on DevOps. I have a wide range of
        skills but like to focus on JavaScript development and architecture (on
        the front-end and back-end) at much as possible.
      </p>
      <p>
        For my last major front-end project I worked with React, which involved
        helping to design a front-end architecture that was server-rendered
        (ReactJS.NET), and used Redux for useful features such as serialisable
        and immutable application state, which makes time travel debugging
        possible, as well as allowing the capture of application state exactly
        in an error case.
      </p>
      <p>
        For my last end-to-end project, I was involved in many aspects of
        development (including front-end architecture), and also contributed to
        some micro-service development, built on Node and built, tested, and
        deployed within Docker containers. Container orchestration with Rancher
        Server, using AWS to host and run the infrastructure.
      </p>
      <p>
        I prefer pure JavaScript whenever possible, and preferably the latest
        flavour. I like to keep my finger on the pulse of the JavaScript
        community, and I'm usually aware of new language features, tooling, and
        frameworks (and if I'm not, I catch on quickly). I've also spent a lot
        of time with 'NIX systems, and am a lot more at home on macOS or Linux
        than Windows, so I fit right in writing shell scripts or configuring a
        Linux server.
      </p>
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
            <em>Job Title</em>: UI Engineer <em>Tech</em>: React, Redux, Jest,
            Node.js, Highcharts, D3, Electron, Storybook
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
            <em>Job Title</em>: JavaScript developer <em>Tech</em>: React, Jest,
            Node.js, Splunk, Storybook
          </p>
        </summary>
        <p>
          During my time contracting for HSBC I worked on three major projects:
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
            worked on BAU features, and also optimisation and reducing technical
            debt.
          </li>
          <li>
            Globalisation project - Many of the projects within Originations
            boil down to forms that users need to fill in, I architected a
            frontend solution that abstracts these forms into JSON Schema
            contracts to colocate the validation rules (key business logic) and
            the form output structure. This React component will output a form
            (using the component library I started with) based on the JSON
            Schema, with little coding required other than authoring the JSON
            Schema. This allowed the monotonous work of building forms to be
            greatly simplified, freeing up developers to focus on more
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
          This was a very challenging project and I was heavily involved in the
          full stack. We built a micro services architecture with the intention
          of allowing each service to scale with demand - the Emirates homepage
          gets millions of visits a day.
        </p>
        <p>
          I designed component-based frontend solution using vanilla JS for the
          frontend to fit Emirates&#39; bespoke requirements. Accessibility was
          an important aspect of this project, as airlines are legally required
          to support WCAG AAA standard.
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
          (+jQuery), I convinced people on the team that flux architecture using
          Redux &amp; React would be easier to maintain, with a smaller bundle
          size and better performance.
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
          was my first job. I worked on the Lexus Europe website where I worked
          on a number of features, including an interactive 360 degree view of
          various Lexus models.
        </p>
        <p>
          I was involved in various projects over the three years, working on
          projects for the Co-Op and Pizza Hut.
        </p>
        <p>
          My final project (2014 - 2015) was a rewrite of the Lexus frontend
          that allowed pages to be dynamically configured using the Tridion CMS,
          the frontend architecture was based on components that were nestable
          and configurable. Internationalisation is at the core of the design
          for this website, as it needs to support 48 languages, one of which
          was right to left.
        </p>
      </details>
    </section>

    <section id="some-things-ive-worked-on">
      <h2>Project links</h2>
      <ul>
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
          <a target="_blank" href="https://github.com/LukeChannings/.config">
            .config
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://github.com/LukeChannings/space-invaders"
          >
            space-invaders FRP
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://github.com/LukeChannings/translate-json-cli"
          >
            translate-json-cli tool
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
      <h2>Contact &amp; Social</h2>
      <ul>
        <li>
          <a
            href="&#x6d;&#x61;&#x69;&#108;&#116;&#x6f;&#58;&#x63;&#x6f;&#110;&#116;&#x61;&#x63;&#116;&#64;&#108;&#x75;&#x6b;&#x65;&#x63;&#104;&#x61;&#110;&#110;&#x69;&#110;&#x67;&#x73;&#46;&#x63;&#x6f;&#x6d;"
            className="email"
          >
            &#x45;&#x6d;&#x61;&#x69;&#108;
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/channings/">Linkedin</a>
        </li>
        <li>
          <a href="https://twitter.com/LukeChannings">Twitter</a>
        </li>
        <li>
          <a href="https://github.com/LukeChannings">GitHub</a>
        </li>
      </ul>
    </section>

    <section id="hobbies">
      <h2>What else do I do?</h2>
      <ul>
        <li>
          I have a new love for home automation. I've got deep into
          <a href="https://en.wikipedia.org/wiki/MQTT">MQTT</a>,{" "}
          <a href="https://github.com/Koenkk/zigbee2mqtt">Zigbee</a>,{" "}
          <a href="https://www.home-assistant.io">Home Assistant</a>, and{" "}
          <a href="https://developer.amazon.com/alexa">Alexa</a>. IoT and Home
          Automation are two things that are very hard to do without big
          security risks, and I spend some of my free time designing a home
          automation system that works offline and doesn't need cloud services.
        </li>
        <li>
          I like to spend the weekends going on day-long hikes in the country.
          Walking has always been a great way to clear my head and get some
          exercise!
        </li>
        <li>
          I'm a massive coffee snob. All of my coffee beans are fresh and I own
          a Rancillio Silvia + Rocky (espresso), a Hario V60 (pour-over), and
          Aeropress, and a French Press. I love learning about coffee, there's a
          lot of depth to it even though it seems simple at first.
        </li>
      </ul>
    </section>
  </>
)
