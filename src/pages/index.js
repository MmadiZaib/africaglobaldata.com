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
    name: "Eric Makita",
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
    src: "img/team/renaud.jpeg",
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
    src: "img/team/marty.png",
    name: "Muriel  Andong Bitome",
    role: "Directrice de la communication",
    contact: "#",
  },
  {
    src: "img/team/marty.png",
    name: "Boris",
    role: "Référent webinaire et international",
    contact: "#",
  },
  {
    src: "img/team/marty.png",
    name: "Grégoire",
    role: "Référent environnement",
    contact: "#",
  },
  {
    src: "img/team/marty.png",
    name: "Patrick",
    role: "Référent Big Data",
    contact: "#",
  },
  {
    src: "img/team/marty.png",
    name: "Joseph",
    role: "Référent Data science",
    contact: "#",
  },
  {
    src: "img/team/marty.png",
    name: "Ludvidia",
    role: "Sous Référente Data science",
    contact: "#",
  },
  {
    src: "img/team/marty.png",
    name: "Kevin",
    role: "Référent blockchain",
    contact: "#",
  },
  {
    src: "img/team/marty.png",
    name: "Andy",
    role: "Référent blockchain",
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
  { src: "img/partners/latitudes.png", url: "https://www.latitudes.cc/" },
  { src: "img/partners/labelia.jpg", url: "https://www.labelia.org/" },
  { src: "img/partners/vendredi.png", url: "https://www.vendredi.cc/" },
  { src: "img/partners/bayes.png", url: "https://www.bayesimpact.org/en/" },
  { src: "img/partners/datagen.png", url: "https://www.datageneration.co/" },
  { src: "img/partners/eclaircies.png", url: "https://eclaircies.co/" },
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
                <p>
                  Africa Global data est une association loi 1901 (
                  <i>100% bénévole, 100% open-source, 100% citoyenne</i>) créée
                  en 2014 qui rassemble une communauté de{" "}
                  <b>4000+ volontaires</b> tech (Data Scientists, Data Analysts,
                  Data Engineers, Developers, UX/UI Designers, Product & Project
                  Owners) souhaitant mettre leurs compétences au profit
                  d'associations, d'ONG, et de l'ESS - et de s'engager pour
                  l'intérêt général.
                </p>
                <p>
                  Nous réalisons chaque année des{" "}
                  <b>
                    saisons d'accélération où une dizaine de projets sont
                    accompagnés par les bénévoles sur des thématiques sociales,
                    sociétales et environnementales
                  </b>
                  . Nous avons ainsi accompagné, accéléré et co-construits plus
                  de <Link to="/projects">100 projets</Link> depuis 2014.
                </p>
                <p>
                  Nous sommes également fervents{" "}
                  <b>critiques des risques et des dérives de la technologie</b>,
                  faire partie de la communauté est aussi s'engager pour une
                  technologie sobre et respectueuse des enjeux sociaux et
                  environnementaux, et accepter que la technologie n'est pas la
                  solution à tous les problèmes.
                </p>
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
