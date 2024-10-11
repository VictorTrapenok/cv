import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import Me_About from "../components/me/about/about";
import { Statistic } from "antd";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" target="_blank" to="https://www.linkedin.com/in/victor-trapenok/">
            Let`s connect in LinkedIn <img src="img/linkedin.webp" style={{ width: "20px" }} />
          </Link>
        </div>
        <br />
        <i>12+ years experience</i>
        <br />
        <i>Open to relocation to USA / Europe</i>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="Principal Engineer CV - Full-time / Contract / C2C / Remote">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Me_About />
      </main>
    </Layout>
  );
}
