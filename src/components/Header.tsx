import React, { useState } from "react"
import { push, Link } from "gatsby"
import cx from "classnames"
import logo from "../assets/images/logo.png"

interface ActiveState {
  isActive: boolean
  page: string
}

export const Header: React.FC = () => {
  const [active, setActive] = useState<ActiveState>({
    isActive: false,
    page: "",
  })

  const activeClass = cx("header-nav", { active })

  const onMenuClick = (page: string) => {
    push(`/${page}`)
    setActive({ isActive: false, page })
  }

  return (
    <div className="header">
      <div className="nav-item no-hover" onClick={() => push("/")}>
        <img
          src={logo}
          style={{ margin: 14, width: 200, height: "auto" }}
          alt="Musikkapelle Markelsheim e. V."
        />
      </div>
      <div className="nav-btn">
        <div
          className="nav-item u u-C"
          style={{ textAlign: "center" }}
          onClick={() => setActive(a => ({ ...a, active: !active.isActive }))}
        >
          <h6
            className="title font-light"
            style={{ fontSize: 18, padding: 14 }}
          >
            NAVIGATION
            <i className="fas fa-chevron-down" style={{ paddingLeft: 8 }} />
          </h6>
        </div>
      </div>
      <div className={activeClass}>
        <div className="nav-center">
          <div
            className={cx("nav-item u-text-center u u-C", {
              active: active.page.includes("club"),
            })}
            onClick={() => onMenuClick("club/about")}
          >
            <Link>Verein</Link>
          </div>
          <div
            className={cx("nav-item u-text-center u u-C", {
              active: active.page === "events",
            })}
            onClick={() => onMenuClick("events")}
          >
            <Link>Termine</Link>
          </div>
          <div
            className={cx("nav-item u-text-center u u-C", {
              active: active.page === "history",
            })}
            onClick={() => onMenuClick("history")}
          >
            <Link>Geschichte</Link>
          </div>
          <div
            className={cx("nav-item u-text-center u u-C", {
              active: active.page === "images",
            })}
            onClick={() => onMenuClick("images")}
          >
            <Link>Bilder</Link>
          </div>
          <div
            className={cx("nav-item u-text-center u u-C", {
              active: active.page.includes("markelsheim"),
            })}
            onClick={() => onMenuClick("markelsheim/region")}
          >
            <Link>Markelsheim</Link>
          </div>
          <div
            className={cx("nav-item u-text-center u u-C", {
              active: active.page === "links",
            })}
            onClick={() => onMenuClick("links")}
          >
            <Link>Links</Link>
          </div>
          <div
            className={cx("nav-item u-text-center u u-C", {
              active: active.page === "contact",
            })}
            onClick={() => onMenuClick("contact")}
          >
            <Link>Kontakt</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
