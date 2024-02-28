import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import HomepageFeatures from "../components/HomepageFeatures";
import styles from "./index.module.css";

function HomeButton({ text, to }) {
  return (
    <div className="text--center col-sm-4">
      <Link className="button button--secondary button--lg button-home" to={to}>
        {text}
      </Link>
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx("hero--primary", styles.heroBanner)}
      style={{
        backgroundImage: `url(${useBaseUrl("img/headerdfg.jpg")})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        // minHeight:"calc(100vh - 60px)",
        zIndex: 0,
        padding: "0px !important",
      }}
    >
      <div
        style={{
          backgroundColor: "rgb(10, 39, 43,0.5)",
          height: "100%",
          width: "100%",
          color: "white !important",
          "padding-top": "40px",
          "padding-bottom": "40px",
        }}
      >
        <div className="container">
          <img
            src={`${useBaseUrl("img/logo-dfg-new2.png")}`}
            style={{ width: 200, "margin-bottom": 0 }}
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div
            className="row"
            style={{ display: "flex", "justify-content": "center" }}
          >
            <HomeButton
              text="🌎 Découvrir l'association"
              to="https://africaglobaldata.com"
            />
            <HomeButton text="💪 Rejoindre la communauté" to="/join" />
            <HomeButton text="💡 Proposer un projet" to="/propose" />
            {/* <HomeButton text="🤗 Participer à la saison 12" to="/saison12" /> */}
          </div>
        </div>
      </div>
    </header>
  );
}

const TeamMember = ({ src, name, contact, role }) => {
  return (
    <div className="member-wrapper">
      <img alt="team" className="member-img" src={`${useBaseUrl(src)}`} />
      <div>
        <h2 style={{ "align-content": "baseline" }} className="member-name">
          <a href={contact} target="_blank">
            {name}
          </a>
        </h2>
        <p className="member-role">{role}</p>
      </div>
    </div>
  );
};

const teamList = [
  {
    src: "img/team/eric-makita.jpeg",
    name: "Dr Eric Makita",
    role: "Président",
    contact: "https://www.linkedin.com/in/eric-makita",
  },
  {
    src: "img/team/jolène.jpeg",
    name: "Jolène Eyeang Bitome",
    role: "Sécrétaire Général",
    contact: "https://www.linkedin.com/in/jol%C3%A8ne-eyeang-bitome-3964b616b/",
  },
  {
    src: "img/team/renaud.jpg",
    name: "Renaud Moukala",
    role: "Comptable",
    contact: "https://www.linkedin.com/in/renaud-moukala-0ab4192b1",
  },
  {
    src: "img/team/zaib.jpeg",
    name: "Zaïb M'Madi",
    role: "Web Developer",
    contact: "https://www.linkedin.com/in/mmadi-zaib",
  },
  {
    src: "img/team/georf.jpeg",
    name: "Georf Miguiama Bamba",
    role: "Référent  Intelligence Artificielle",
    contact: "https://www.linkedin.com/in/georfmiguiamabamba",
  },
  // {src:"img/team/lucile.jpg","name":"Lucile Ritchie","role":"Coordinatrice","contact":"https://www.linkedin.com/in/lucileritchie/"},
  {
    src: "img/team/muriel.png",
    name: "Muriel  Andong Bitome",
    role: "Directrice de la communication",
    contact: "#",
  },
  {
    src: "img/team/gregory.jpg",
    name: "Dr Gregory Obiang Ndong",
    role: "Référent environnement",
    contact: "#",
  },
  {
    src: "img/team/ghilsain.jpg",
    name: "Dr Ghislain Strozzi Moussavou",
    role: "Référent environnement",
    contact: "#",
  },
  {
    src: "img/team/joseph.jpg",
    name: "Joseph Assu Ondo",
    role: "Référent Data science",
    contact: "#",
  },
  {
    src: "img/team/ludvia.jpg",
    name: "Ludvia Mbourou",
    role: "Référente Data science",
    contact: "#",
  },
  {
    src: "img/team/andy.jpg",
    name: "Andy Afene",
    role: "Référent blockchain",
    contact: "#",
  },
  {
    src: "img/team/kevin-nzeng.jpg",
    name: "Kevin Nzeng Essimengane",
    role: "Référent Blockchain",
    contact: "#",
  },
  {
    src: "img/team/karine.jpg",
    name: "Karine Mazand",
    role: "Avocate",
    contact: "#",
  },
  {
    src: "img/team/marty.png",
    name: "Patrick Moyap",
    role: "Référent Big Data",
    contact: "#",
  },
  {
    src: "img/team/marty.png",
    name: "Kevin Mezui",
    role: "Référent Intelligence Artificielle",
    contact: "#",
  },
  // {src:"img/team/clement.jfif","name":"Clément Mayer","role":"Coordinateur","contact":"https://www.linkedin.com/in/cl%C3%A9ment-mayer-02a61216/"},
  // {src:"img/team/mickael.jpg","name":"Mickael Fine","role":"Coordinateur","contact":"https://www.linkedin.com/in/mickaelfine/"},
  // {src:"img/team/josephine.jpg","name":"Joséphine Lecoq-Vallon","role":"Responsable de la communauté","contact":"https://www.linkedin.com/in/josephine-lecoq-vallon/"},
  // {src:"img/team/julie.png","name":"Julie Jouvencel","role":"Coordinatrice","contact":"https://www.linkedin.com/in/juliejouvencel/"},
  // {src:"img/team/margaux.jpg","name":"Margaux David","role":"Designeuse","contact":"https://www.linkedin.com/in/margauxdavid/"},
  // {src:"img/team/eloi.png","name":"Eloi Pérignon","role":"Communication & RP","contact":"https://www.linkedin.com/in/eloi-perignon/"},
  // {src:"img/team/fred.png","name":"Frédéric Bardolle","role":"Conseil des sages","contact":"https://www.linkedin.com/in/fbardolle/"},
];

const SectionTeam = () => {
  return (
    <div
      className=""
      style={{
        display: "flex",
        "align-items": "flex-start",
        "justify-content": "center",
        "flex-wrap": "wrap",
        "margin-top": "50px",
      }}
    >
      {teamList.map((el) => (
        <TeamMember
          src={el.src}
          name={el.name}
          contact={el.contact}
          role={el.role}
        />
      ))}
    </div>
  );
};

const Partner = ({ src, url }) => {
  return (
    <div className="logo-partner-wrapper">
      <a href={url} target="_blank">
        <img
          alt="partner"
          className="logo-partner"
          src={`${useBaseUrl(src)}`}
        />
      </a>
    </div>
  );
};

const partnersList = [
  { src: "img/partners/GABTROTTER.jpg", url: "https://www.latitudes.cc/" },
  { src: "img/partners/libreville-american-corner.jpg", url: "https://www.labelia.org/" },
];

const SectionPartners = () => {
  return (
    <div
      className=""
      style={{
        display: "flex",
        "align-items": "center",
        "justify-content": "center",
        "flex-wrap": "wrap",
        "margin-top": "50px",
      }}
    >
      {partnersList.map((el) => (
        <Partner src={el.src} url={el.url} />
      ))}
    </div>
  );
};

const Project = ({ src, url }) => {
  return (
    <div className="logo-partner-wrapper">
      <Link to={url}>
        <img
          alt="project"
          className="logo-partner"
          src={`${useBaseUrl(src)}`}
        />
      </Link>
    </div>
  );
};

const projectsList = [
  { src: "img/projects/logos/off.png", url: "" },
  { src: "img/projects/logos/ceebios.jpg", url: "/projects/ceebios" },
  { src: "img/projects/logos/labelia.jpg", url: "/projects/labelia" },
  { src: "img/projects/logos/cc.png", url: "" },
  { src: "img/projects/logos/pyro.png", url: "/projects/pyronear" },
  { src: "img/projects/logos/2tonnes.png", url: "" },
];

const SectionProjects = () => {
  return (
    <div
      className=""
      style={{
        display: "flex",
        "align-items": "center",
        "justify-content": "center",
        "flex-wrap": "wrap",
        "margin-top": "50px",
      }}
    >
      {projectsList.map((el) => (
        <Project src={el.src} url={el.url} />
      ))}
    </div>
  );
};

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Africa Global Data - le numérique pour l'intérêt général"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />

{/*         <section>
          <div className="container main-section">
            <h1>Les news</h1>
            <h2>La Saison 12 Data For Good</h2>
            <p>La saison 12 de Data For Good a commencé (3 mois entre le 3 février 2024 et fin avril), retrouvez toutes les informations sur <a href="/saison12">cette page</a></p>
            <a href="/saison12">
            <img
                  src={`${useBaseUrl("img/saison12.png")}`}
                  alt="dfg-saison12"
                  style={{ width: "100%", "margin-bottom": "20px" }}
                />
            </a>
            </div>
        </section> */}

        <section className="light-green">
          <div className="container main-section">
            <h1>L'association Africa Global Data</h1>
            <div className="row">
              <div className="col col--6">
                <img
                  src={`${useBaseUrl("img/africa.png")}`}
                  alt="dfg-demoday"
                  style={{ width: "100%", "margin-bottom": "20px" }}
                />
              </div>
              <div
                className="col col--6"
                style={{ "text-align": "left", "align-content": "center" }}
              >
                <p>Africa Global Data, association loi 1901 dédiée à l'engagement citoyen et fondée en 2024, incarne l'esprit de collaboration et d'entraide. Guidée par la sagesse africaine qui enseigne que l'union fait la force, notre communauté bénévole et open-source de passionnés tech s'unit pour offrir ses compétences au service des associations, des ONG et de l'économie sociale et solidaire.
Notre philosophie s'ancre dans la conviction que la collaboration transcende les frontières, qu'elles soient géographiques, culturelles ou professionnelles, à travers le monde.Guidés par une expertise collective en données, qui séduit étudiants, professionnels actifs et personnes en reconversion, nous puisons notre force dans la diversité de nos rencontres et de nos échanges. 
Cela souligne notre conviction profonde que c'est en unissant nos efforts que nous pouvons accomplir de grandes choses pour l'intérêt général.
                </p>
                <p>
                Depuis sa création en 2024, Africa Global Data organise des périodes intensives de soutien, où une sélection de projets reçoit l'appui de nos bénévoles engagés. Ces initiatives, centrées sur des questions sociales, sociétales et environnementales, profitent non seulement de notre encadrement mais aussi d'un programme enrichi de formations, conférences, et webinaires. Cette stratégie globale est conçue pour amplifier leur impact et augmenter les compétences de ceux qui s'investissent pour construire un futur plus prometteur.
                </p>
                <p>En outre, nous portons un regard critique sur les risques et les dérives potentielles de la technologie. Être membre de notre communauté signifie promouvoir une approche de la technologie qui soit éthique, sobre et alignée sur les défis sociaux et environnementaux. Cela implique de reconnaître que la technologie, malgré sa puissance, n'est pas une panacée pour tous les problèmes.</p>
                <b>Eric Makita, PhD</b>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container main-section">
            <h1>Les projets Africa Global Data</h1>
            <p>
              Plus d'informations dans la page{" "}
              <Link to="/projects">🔥 Projets</Link>
            </p>
            <SectionProjects />
          </div>
        </section>
        <section className="light-green">
          <div className="container main-section">
            <h1>L'équipe Africa Global Data</h1>
            <p>
              🖐 Vous pouvez contacter l'équipe à{" "}
              <Link to="mailto:hello@africaglobaldata.com">
                hello@africaglobaldata.com
              </Link>
            </p>
            <SectionTeam />
          </div>
        </section>
        <section>
          <div className="container main-section">
            <h1>Nos partenaires</h1>
            <SectionPartners />
          </div>
        </section>
      </main>
    </Layout>
  );
}
