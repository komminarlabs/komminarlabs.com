import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Terraform Providers',
    Svg: require('@site/static/img/Terraform-LogoMark_onLight.svg').default,
    description: (
      <>
        Komminar Labs offers specialized Terraform Providers for InfluxDB, InfluxDB v3, CrateDB, and Mage AI.
        Our providers make it easy to deploy, configure, and manage these powerful platforms,
        freeing you to focus on insights and AI innovation. Designed for reliability and performance,
        they simplify integrations and scale to meet your needs.
      </>
    ),
  },
  {
    title: 'Terraform Modules',
    Svg: require('@site/static/img/Terraform-LogoMark_onLight.svg').default,
    description: (
      <>
        Our Terraform Modules streamline the setup of AWS data services like Glue, SageMaker, and Managed Grafana.
        With pre-built solutions that follow best practices, these modules let you quickly build scalable data and AI workflows on AWS.
        Ideal for simplifying complex setups, they keep your team focused on delivering results.
      </>
    ),
  },
  {
    title: 'Pulumi Providers',
    Svg: require('@site/static/img/avatar-on-black.svg').default,
    description: (
      <>
        Komminar Labs’ Pulumi Providers for InfluxDB, CrateDB, and Mage AI let you manage cloud infrastructure using languages like Python, TypeScript, and Go.
        These providers streamline automation and scaling for teams working on time-series data and AI/ML applications, making infrastructure as code accessible and efficient.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
