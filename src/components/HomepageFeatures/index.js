import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


const FeatureList1 = [
  {
    title: 'PORTEFØLJE',
    url: "docs/Algoritmeportefolje"
    //Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default
  }
];

const FeatureList2 = [
  {
    title: 'FOR STUDENTER',
    url: "docs/Bli_med_i_Fintech"
    //Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default
  },
  {
    title: 'FOR BEDRIFTER',
    url: "docs/Bedriftpresentasjoner"
    //Svg: require('@site/static/img/undraw_docusaurus_react.svg').default
  },
];

function Feature({title, url}) {
  return (
    <div className={styles.title}>
      <a href={url}><h1>{title}</h1></a>
    </div>
    // <div>
    //   <div className="text--center">
    //     <Svg claskksName={styles.featureSvg} role="img" />
    //   </div>

   
    // </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        {/* <div className="row"> */}

          <div className={styles.FeatureList1}>
            {FeatureList1.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>

          <div className={styles.FeatureList2}>
            {FeatureList2.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        {/* </div> */}
      </div>
    </section>
  );
}
