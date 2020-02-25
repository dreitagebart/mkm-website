import React from "react"
import { Link } from "gatsby"

import groupImage from "../assets/images/mkm01.jpeg"
import { Layout } from "../components"

const Page: React.FC = () => (
  <Layout>
    {/* Siehe Wachbach Musikkapelle Einleitungstext */}
    <div className="animated fadeIn">
      <h3 className="u-text-center font-light no-select">
        <span className="u u-LR">Herzlich willkommen!</span>
      </h3>
      <div className="divider" />
      <div className="title u-text-center">
        Gute Unterhaltung von klassisch bis modern
      </div>
      <div className="u-text-center">
        <img src={groupImage} alt="Gruppenbild am Zehntkeller" />
      </div>
      <blockquote>
        <h6 className="title font-light">
          "Ohne die Musik wäre das Leben ein Irrtum" -{" "}
          <em>Friedrich Nietzsche</em>
        </h6>
      </blockquote>
      <div className="row">
        {/* <div className="col-4">
          <div className="card">
            <div className="content">
              <p className="title level">Ausflug mit der Musikkapelle</p>
              <p>
                Auch dieses Jahr haben wir wieder einen Ausflug geplant. Weitere
                Informationen findest du auf unserem Anmeldeformular im PDF
                Format.
                <br />
                <br />
                <a href="http://musikkapelle-markelsheim.de/blog/wp-content/uploads/2019/06/Anmelde-Formular-Ausflug-2019.pdf">
                  Hier geht es zum Anmeldeformular
                </a>
              </p>
            </div>
          </div>
        </div> */}
        <div className="col-6">
          <div className="card">
            <div className="content">
              <p className="title level">Unser Verein</p>
              <p>
                Wir sind die Musikkapelle Markelsheim e.&nbsp;V. und zählen
                aktuell rund 40 aktive Musikerinnen und Musiker.
                <br />
                <br />
                <Link to="/club/about">
                  Mehr über unseren Verein erfahrt ihr hier
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <div className="content">
              <p className="title level">Unser Musikprogramm</p>
              <p>
                Wir lieben die traditionelle und konzertante Blasmusik, spielen
                aber auch gerne alles vom Musical bis hin zur Operette.
                <br />
                Lust uns live zu hören?
                <br />
                <br />
                <Link to="/events">Hier geht es zu unseren Auftritten</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Page
