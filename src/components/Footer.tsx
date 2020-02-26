import React from "react"
import Link from "gatsby-link"

export const Footer: React.FC = () => (
  <footer>
    <div className="content text-left">
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
