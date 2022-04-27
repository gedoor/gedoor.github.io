import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '书架',
    Png: require('@site/static/img/Screenshot/light_1.png').default,
  },
  {
    title: '阅读界面',
    Png: require('@site/static/img/Screenshot/light_3.png').default,
  },
  {
    title: '漫画',
    Png: require('@site/static/img/Screenshot/light_4.png').default,
  },
  {
    title: '书架（黑暗）',
    Png: require('@site/static/img/Screenshot/dark_1.png').default,
  },
  {
    title: '发现（黑暗）',
    Png: require('@site/static/img/Screenshot/dark_5.png').default,
  },
  {
    title: '书源管理（黑暗）',
    Png: require('@site/static/img/Screenshot/dark_4.png').default,
  },
];

function Feature({Png, title}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Png} className={styles.featureImg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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