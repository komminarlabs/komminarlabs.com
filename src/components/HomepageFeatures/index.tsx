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
        Discover our extensive library of open-source Terraform providers at Komminar Labs, trusted by thousands for seamless integrations and enhanced control.
        Continuously updated, these providers empower you to accelerate your infrastructure management and streamline your automation efforts.
      </>
    ),
  },
  {
    title: 'Terraform Modules',
    Svg: require('@site/static/img/Terraform-LogoMark_onLight.svg').default,
    description: (
      <>
        Explore our collection of open-source Terraform modules at Komminar Labs, designed for seamless integration and enhanced control.
        Continuously updated, these modules empower you to accelerate your infrastructure projects and streamline your workflows.
      </>
    ),
  },
  {
    title: 'Pulumi Providers',
    Svg: require('@site/static/img/avatar-on-black.svg').default,
    description: (
      <>
        Discover our rich library of open-source Pulumi providers at Komminar Labs, crafted for effective infrastructure as code management.
        By leveraging Pulumi's innovative approach, you can define and provision cloud resources using familiar programming languages.
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
