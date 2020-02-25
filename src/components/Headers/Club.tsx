import React, { useState } from "react"
import cx from "classnames"
import { push, Link } from "gatsby"
import { withWindowSize, WindowSizeProps } from "react-fns"

interface WrappedProps extends WindowSizeProps {}

interface LabelState {
  about: string
  leadership: string
  membership: string
  recruitment: string
  band: string
}

const WrappedClub: React.FC<WrappedProps> = ({ width }) => {
  const [labels, setLabels] = useState<LabelState>({
    about: "Über uns",
    leadership: "Vorstandschaft",
    membership: "Mitgliedschaft",
    recruitment: "Ausbildung",
    band: "Unsere Musikkappelle",
  })

  const onLinkClick = (value: string) => {
    // setLabels({ active: value, title: this.state.labels[value] })

    push(`/club/${value}`)
  }

  return (
    <div className="animated fadeIn">
      <h3 className="u-text-center font-light no-select">
        <span className="u u-LR">Verein</span>
      </h3>
      <div className="divider" />
      <div
        className={
          width > 600
            ? "tab-container tabs-center uppercase"
            : "text-center uppercase"
        }
      >
        <ul className="no-bullets">
          <li
            onClick={() => onLinkClick("about")}
            className={cx({
              selected: window.location.pathname.includes("about"),
            })}
          >
            <Link>{labels.about}</Link>
          </li>
          <li
            onClick={() => onLinkClick("membership")}
            className={cx({
              selected: window.location.pathname.includes("membership"),
            })}
          >
            <Link>{labels.membership}</Link>
          </li>
          <li
            onClick={() => onLinkClick("recruitment")}
            className={cx({
              selected: window.location.pathname.includes("recruitment"),
            })}
          >
            <Link>{labels.recruitment}</Link>
          </li>
          <li
            onClick={() => onLinkClick("band")}
            className={cx({
              selected: window.location.pathname.includes("band"),
            })}
          >
            <Link>{labels.band}</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export const HeaderClub = withWindowSize<{}>(WrappedClub)
