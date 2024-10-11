import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<"svg">>;
  Img?: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Full-Stack",
    // Svg: require("@site/static/img/icons/ico-devops1.svg").default,
    Img: "/img/icons/fullstack.webp",
    description: <>TypeScript, Node.Js, React, PHP, C++,</>,
  },
  {
    title: "DevOps",
    // Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    Img: "/img/icons/ico-devops1.png",
    description: <>CI/CD, Docker, GitLab, GitHub, Cube.dev, Kafka, MySQL, PostgreSQL</>,
  },
  {
    title: "Cloud engineering",
    Img: "/img/icons/cloud.png",
    // Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>Kubernetes, AWS, Azure, Google cloud, Cost-optimization</>,
  },
];

function Feature({ title, Svg, description, Img }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {Svg && <Svg className={styles.featureSvg} role="img" />}
        {Img && <img src={Img} style={{ height: "200px" }} />}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
