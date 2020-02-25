import React, { useState } from "react"
import cx from "classnames"
import { navigate, Link } from "gatsby"

interface LabelState {
  history: string
  region: string
}

export const HeaderMarkelsheim: React.FC = () => {
  const [labels] = useState<LabelState>({
    history: "Geschichte",
    region: "Region",
  })

  const onLinkClick = (value: string) => {
    navigate(`/markelsheim/${value}`)
  }

  return (
    <div className="animated fadeIn">
      <h3 className="u-text-center font-light no-select">
        <span className="u u-LR">Markelsheim</span>
      </h3>
      <div className="divider" />
      <div className="tab-container tabs-center uppercase">
        <ul>
          <li
            onClick={() => onLinkClick("region")}
            className={cx({
              selected: window.location.pathname.includes("region"),
            })}
          >
            <Link>{labels.region}</Link>
          </li>
          <li
            onClick={() => onLinkClick("history")}
            className={cx({
              selected: window.location.pathname.includes("history"),
            })}
          >
            <Link>{labels.history}</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
