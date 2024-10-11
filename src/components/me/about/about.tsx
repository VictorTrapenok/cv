import { Alert, Button, Card, Carousel, Rate, Result, Space, Timeline } from "antd";

export default function Me_About(): JSX.Element {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          display: `inline-block`,
          textAlign: `justify`,
        }}
      >
        <p>
          At Nanoheal, as Principal Engineer, my focus has been on multi-tenant SaaS cloud projects, harnessing Kubernetes and cloud infrastructure to
          streamline deployments and enhance product demonstrations. The solutions developed under my leadership have significantly reduced deployment times,
          saving countless hours for our team and clients. The ability to deploy services rapidly for testing has not only accelerated development cycles but
          also fortified our product's reliability and scalability. Strong skils DevOps + Full-stack + cloud engineering allows me to get better result from
          contributing to code and infrustructure in the same time.
        </p>
        <h3>Top skillsTop skills</h3>
        <p>Team Management • Software Architecture • Cloud Computing • Full-Stack Development • DevOps</p>
        <h3>Work</h3>
        <Timeline
          items={[
            {
              color: "green",
              dot: <img src={`img/logo192.png`} style={{ width: "30px" }} />,
              children: (
                <>
                  <h3>Principal Engineer @ Nanoheal</h3>
                  <p>Mar 2022 - Present · 3 yrs 8 mos</p>
                  <p>Orem, Utah, United States · Remote</p>
                  <p>
                    Development of a multi-tenant SaaS cloud project that provide web interface for managing kubernetes and deployments. It decreased deploying
                    time, and now product-sales for product demonstration can deploy nanoheal software from our internal ui in one of the existed clusters in
                    several minutes. It save a lot of working time for whole team. Developers and QA team can deploy all services from specified development
                    brunches for testing.
                  </p>
                  <p>Team Management, Kubernate and +43 other skills</p>
                </>
              ),
            },
            {
              color: "blue",
              dot: <img src={`img/cube-dev.png`} style={{ width: "40px" }} />,
              children: (
                <>
                  <h3>Senior Software Engineer @ Cube Dev</h3>
                  <p>Aug 2020 - Mar 2021 · 8 mos</p>
                  <p>Vladivostok, Primorye, Russia · Remote</p>
                  <p>
                    Work with Cube.js and cube.dev as a Full-stack developer (NodeJS, ReactJS, SQL). As a DevOps engineer, I worked with infrastructure to run
                    Kubernetes clusters in Google Cloud and AWS.
                  </p>
                  <p>Clean Coding, Message Queue and +28 skills</p>
                </>
              ),
            },
            {
              color: "blue",
              dot: <img src={`img/noveo.png`} style={{ width: "35px" }} />,
              children: (
                <>
                  <h3>Full-stack Developer @ Noveo Group</h3>
                  <p>Oct 2019 - Aug 2020 · 11 mos</p>
                  <p>Paris, Île-de-France, France · Remote</p>
                  <p>React.JS, TypeScript and NodeJS development for a large SaaS project.</p>
                  <p>Clean Coding, English and +9 skills</p>
                </>
              ),
            },
            {
              dot: <img src={`img/sancom.png`} style={{ width: "30px" }} />,
              color: "blue",
              children: (
                <>
                  <h3>Full-stack Developer @ SANCOM</h3>
                  <p>Dec 2018 - Oct 2019 · 11 mos</p>
                  <p>Vladivostok, Primorye, Russia · Remote</p>
                  <p>
                    Development and support of internal projects of the company. I developed a system for detecting answering machines in phone call records.
                    This system uses an audio fingerprint for search to answering machine in the recording. Able to detect autoresponders in any language. It
                    builds reports on the reason why unable to call to client. It already used to optimize the work of a several big call centers.
                  </p>
                  <p>Technical Architecture, webrtc and +23 skills</p>
                </>
              ),
            },
            {
              dot: <img src={`img/polemarch.png`} style={{ width: "26px" }} />,
              color: "blue",
              children: (
                <>
                  <h3>Full Stack Developer</h3>
                  <p>Feb 2017 - Nov 2018 · 1 yr 10 mos</p>
                  <p>Vladivostok, Primorye, Russia · On-site</p>
                  <p>
                    I also have freelancing experience. I often receive orders for the development of chat. For example, I am engaged in chat support on the
                    website of the Russian television channel OTR (https://otr-online.ru/online/) In general, during the study of the English language, I
                    translated many of my articles and documentation from Russian to English (here is all the documentation on this site written by me
                    https://comet-server.com/wiki/doku.php/en this took several years as I did in non-working hours)
                  </p>
                  <p>Webrtc, Web Development and +10 skills</p>
                </>
              ),
            },
          ]}
        />
        <h3>Education</h3>
        <Timeline
          items={[
            {
              color: "blue",
              children: (
                <>
                  <h3>Far Eastern Federal University (FEFU)</h3>
                  <p>Specialist Degree (Software engineer), Computing systems complexes and networks</p>
                  <p>2010 - 2015</p>
                  <p>
                    Grade: 4.9 from 5.0 <Rate value={4.9} allowHalf={true} />
                  </p>
                </>
              ),
            },
            {
              color: "blue",
              children: (
                <>
                  <h3>Primorsky Polytechnic College</h3>
                  <p>Secondary vocational education (Software engineer), Computer Programming</p>
                  <p>2006 - 2010</p>
                  <p>
                    Grade: 5 (all-A graduate) <Rate value={5} allowHalf={true} />
                  </p>
                </>
              ),
            },
          ]}
        />
        <Result
          status="success"
          title="Let's connect"
          subTitle="Thank you for considering my CV. I am open to new opportunities and would love to discuss how I can contribute to your team."
          extra={[
            <a target="_blank" href="https://calendly.com/viktor-trapenok">
              <Button type="primary" size="large">
                Shedule interview
              </Button>
            </a>,
            <a target="_blank" href="https://www.linkedin.com/in/victor-trapenok/">
              <Button key="buy" size="large">
                Connect in linkedin
              </Button>
            </a>,
          ]}
        />

        <h3>Projects</h3>
        <Space direction="vertical">
          <Card title="Unifie">
            <p>
              Development of a multi-tenant SaaS cloud project that provide web interface for managing kubernetes and deployments. It decreased deploying time,
              and now product-sales for product demonstration can deploy nanoheal software from our internal ui in one of the existed clusters in several
              minutes. It save a lot of working time for whole team. Developers and QA team can deploy all services from specified development brunches for
              testing.
            </p>
          </Card>
          <Card title="ImbaChat">
            <p>
              It is a service providing a ready chat widget for message passing between website users. It suits for social networking websites, dating websites,
              and any other communities where it is important to give users a convenient mode of communication. It is possible to build the chat into Cordova
              app
            </p>
          </Card>
          <br />
          <br />
        </Space>
      </div>
    </div>
  );
}
