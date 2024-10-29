import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p style={{fontSize: "1.1rem", margin: "-1rem 0px 1rem 0px"}}>- Fondsforvaltning og algoritmisk trading -</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Nordnetportefolje">
            Se Fintech Enigma Fondet
          </Link>
        </div>
      </div>
    </header>
  );
}

// import { useCookies } from "react-cookie";
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// export const CheckSession = () => {
//   const [cookies, setCookie] = useCookies();
//   if(cookies.SESSION === 'true'){
//     console.log((cookies.SESSION));
//   }
//   else{

//     const [ response, setResponse ] = useState({});
//     useEffect( () => {
//         axios.get( ('http://127.0.0.1:5000/newSesion') )
//         .then(res => {
//             setResponse(res.data);
//         });
//     }, []);

//     console.log(response);
//     setCookie("SESSION", 'true');
//   }
// }

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  // CheckSession();
  return (
    <Layout
    title={`${siteConfig.title}`}
    description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}