import React from "react"
import Link from "gatsby-link"

export const Footer: React.FC = () => (
  <footer>
    <div className="content text-left">
      {/* <div className="row level">
        <div className="col-6">
          <h6
            className="title text-left white u u-LR no-select"
            style={{ letterSpacing: '.2rem' }}
          >
            So bleibst du mit uns in Kontakt
          </h6>
          <p className="white" style={{ marginTop: '1.25rem' }}>
            Shankle pork loin pancetta beef, leberkas prosciutto pork belly
            corned beef chuck bresaola ribeye alcatra.
          </p>
          <div className="row">
            <div className="input-control">
              <input
                type="text"
                className="input-contains-icon-left"
                placeholder="Name"
              />
              <span className="icon icon-left">
                <i className="fas fa-user small" aria-hidden="true" />
              </span>
            </div>
            <div className="input-control">
              <input
                type="email"
                className="input-contains-icon-left"
                placeholder="Email"
              />
              <span className="icon icon-left">
                <i className="fas fa-envelope small" aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="u-text-center">
            <button
              className="btn-outline"
              style={{
                color: '#ffffff',
                fontWeight: 'bold',
                borderRadius: 0,
              }}
            >
              Sign Me Up
              <i
                className="fas fa-chevron-right"
                style={{ paddingLeft: 8 }}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div> */}
      {/* <div className="row" /> */}
      <div className="row fluid-container u-center">
        <div className="col-fluid uppercase">
          <Link to="/impressum">Impressum</Link>
        </div>
        <div className="col-fluid uppercase">
          <Link to="/member">Mitglied werden</Link>
        </div>
        <div className="col-fluid uppercase">
          <Link to="/contact">Kontakt</Link>
        </div>
      </div>
      <div className="row" />
      <p className="white u-text-center">
        <i
          className="fas fa-code"
          style={{ margin: 8, fontSize: "1.2em", color: "#999" }}
        />
        with
        <i
          className="fas fa-heart pad-left"
          style={{ color: "#CF0000", margin: 8, fontSize: "1.2em" }}
        />
        by
        <a
          style={{ margin: 8 }}
          href="http://www.mindreport.com"
          target="blank"
        >
          dreitagebart
        </a>
      </p>
    </div>
  </footer>
)
