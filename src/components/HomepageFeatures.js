import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Notre vision',
    src: require('../../static/img/pillar1.png').default,
    Svg: require('../../static/img/pillar1.svg').default,
    description: (
      <>
        <p style={{"text-align":"left"}}><i>Seul on va vite, mais ensemble on va plus loin.</i></p>
        <p style={{"text-align":"left"}}>Cette expression africaine résonne profondément avec la philosophie d'Africa Global Data. En puisant dans une diversité de rencontres, que ce soit à Paris ou au Gabon, l'association trouve sa force dans la collaboration.</p>
        <p style={{"text-align":"left"}}>Sous la direction du Dr Eric Makita, dont l'expertise dans le domaine des données a suscité l'intérêt de nombreux participants, tels que des étudiants, des professionnels en poste et des personnes en reconversion, Africa Global Data est née.</p>
        <p style={{"text-align":"left"}}>Africa Global Data s'engage à:</p>
        <p style={{"text-align":"left"}}>1. Informer l'Afrique et le monde sur la culture de la donnée.</p>
        <p style={{"text-align":"left"}}>2. Valoriser les données afin de fournir des informations précieuses pour relever les défis de notre continent africain et du monde.</p>
      </>
    ),
  },
  {
    title: 'Notre mission',
    src: require('../../static/img/pillar2.png').default,
    Svg: require('../../static/img/pillar2.svg').default,
    description: (
      <>
        <p style={{"text-align":"left"}}>Chaque jour, de nouveaux défis sont à relever en matière de <b>santé, d'environnement, d'inclusion sociale, d'éducation ou de citoyenneté</b>. Et chaque jour, de nouvelles idées germent et de plus en plus de citoyens veulent s'engager.</p>
        <p style={{"text-align":"left"}}>La communauté Africa Global Data rassemble celles et ceux qui veulent façonner des projets concrets et sur mesure en réponse à ces défis. Elle offre un cadre vivant et bienveillant où ces projets éclosent, mûrissent et se déploient.</p>
        <p style={{"text-align":"left"}}>Jeff Hammerbacher regrettait : <i>"The best minds of my generation are thinking about how to make people click ads. That sucks."</i> - C'est pour cette raison que nous rassemblons la communauté Africa Global Data, pour rediriger l'énergie créatrice vers l'intérêt général et la création de communs.</p>
      </>
    ),
  },
  {
    title: 'Nos valeurs',
    src: require('../../static/img/pillar3.png').default,
    Svg: require('../../static/img/pillar3.svg').default,
    description: (
      <>
        <ul style={{"text-align":"left"}}>
          <li><b>Innovation</b> – Nous nous engageons à innover dans le domaine de la data en Afrique en sensibilisant et en renforçant les compétences des apprenants, malgré les obstacles.
          Notre ambition est de devenir la plateforme de référence pour la prise de décisions en Afrique francophone, en explorants les données et les informations afin d'en tirer des enseignements précieux et pertinents.
          </li>
          <li><b>Intégrité</b> – L'intégrité est fondamentale pour nous, ce qui signifie que nous nous engageons à respecter la confidentialité, la précision et la qualité des données dans tous nos travaux et dans nos relations avec nos partenaires.</li>
          <li><b>Inclusion</b> – L'inclusion est une valeur au sein d'Africa Global Data : chaque individu est bienvenu, quel que soit son profil ou son niveau d'études.</li>
        </ul>
      </>
    ),
  },
];

function Feature({Svg, title, description,src}) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center">
        <img src={src} className={styles.featureSvg}/>
      </div> */}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
