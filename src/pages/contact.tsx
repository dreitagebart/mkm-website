import React, { useState } from "react"
import axios from "axios"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

import { Layout } from "../components"
import { SiteMetadataProps } from "../types"

interface ErrorState {
  message?: string
  mail?: string
  name?: string
}

interface FormState {
  name: string
  mail: string
  phone: string
  message: string
}

const Page: React.FC<SiteMetadataProps> = ({ data }) => {
  const [success, setSuccess] = useState(false)
  const [form, setForm] = useState<FormState>({
    name: "",
    mail: "",
    phone: "",
    message: "",
  })

  const [errors, setErrors] = useState<ErrorState>({
    message: "",
    mail: "",
    name: "",
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formErrors: ErrorState = {}

    const { name, mail, message, phone } = form

    if (!message) formErrors.message = "Bitte gebe eine Nachricht an"

    if (!mail)
      formErrors.mail = "Wir benötigen deine eMail Adresse zur Kontaktaufnahme"

    if (!name) formErrors.name = "Verrate uns deinen Namen"

    setErrors(formErrors)

    if (Object.keys(formErrors).length > 0) return

    axios
      .post("http://www.musikkapelle-markelsheim.de/blog/contactMail.php", {
        name,
        phone,
        message,
        mail,
      })
      .then(() => {
        setSuccess(true)
      })
      .catch((error: Error) => {
        console.log(error)
      })
  }

  const handleFormChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSuccess(false)
    setForm(f => ({ ...f, [event.target.name]: event.target.value }))
  }

  return (
    <Layout>
      <div className="animated fadeIn">
        <Helmet title={`Kontakt - ${data.site.siteMetadata.title}`} />
        <h3 className="u-text-center font-light no-select">
          <span className="u u-LR">Kontakt</span>
        </h3>
        <div className="divider" />
        <div>
          <h6 className="font-light">
            <b>Musikkapelle Markelsheim e. V.</b>
            <br />
            Frau Verena Hüttl
            <br />
            Schwarzrieslingstraße 3<br />
            97980 Markelsheim
          </h6>
        </div>
        <p className="title">
          Wenn du mit uns Kontakt aufnehmen möchtest, dann verwende doch bitte
          untenstehendes Kontaktformular.
        </p>
        {success && (
          <div className="toast toast--success">
            <button className="btn-close"></button>
            <p>Kontaktformular wurde erfolgreich versendet!</p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="frame">
            <div className="form-section">
              <div className="row">
                <div className="col-3">
                  <label htmlFor="contact-name">
                    <h6 className="title font-light">Vor- und Zuname</h6>
                    <span className="info subtitle">z. B. Max Mustermann</span>
                  </label>
                </div>
                <div className="col-9">
                  <div className="input-control">
                    <input
                      id="contact-name"
                      className={
                        errors.name
                          ? "input-large input-error text-danger"
                          : "input-large"
                      }
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleFormChange}
                      placeholder="Dein Vor- und Zuname"
                    />
                  </div>
                  {errors.name && (
                    <div className="text-danger">{errors.name}</div>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <label htmlFor="contact-mail">
                    <h6 className="title font-light">eMail Adresse</h6>
                    <span className="info subtitle">
                      wird zur Kontaktaufnahme benötigt
                    </span>
                  </label>
                </div>
                <div className="col-9">
                  <div className="input-control">
                    <input
                      id="contact-mail"
                      className={
                        errors.mail
                          ? "input-large input-error text-danger"
                          : "input-large"
                      }
                      type="email"
                      name="mail"
                      value={form.mail}
                      onChange={handleFormChange}
                      placeholder="deine@mailadresse.de"
                    />
                  </div>
                  {errors.mail && (
                    <div className="text-danger">{errors.mail}</div>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <label htmlFor="contact-phone">
                    <h6 className="title font-light">Telefon</h6>
                    <span className="info subtitle">
                      Deine Festnetz- oder Mobilnummer
                    </span>
                  </label>
                </div>
                <div className="col-9">
                  <div className="input-control">
                    <input
                      id="contact-phone"
                      className="input-large"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleFormChange}
                      placeholder="0160 123 245 67"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <label htmlFor="contact-message">
                    <h6 className="title font-light">Nachricht</h6>
                    <span className="info subtitle">
                      was du uns mitteilen möchtest
                    </span>
                  </label>
                </div>
                <div className="col-9">
                  <div className="input-control">
                    <textarea
                      className={
                        errors.message ? "input-error text-danger" : undefined
                      }
                      name="message"
                      id="contact-message"
                      placeholder="Deine Nachricht"
                      value={form.message}
                      onChange={handleFormChange}
                    ></textarea>
                  </div>
                  {errors.message && (
                    <div className="text-danger">{errors.message}</div>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn-accent btn-large pull-right"
                  >
                    Senden
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <br></br>
        <h3 className="u-text-center font-light no-select">
          <span className="u u-LR">Mitglied werden?</span>
        </h3>
        <div className="divider" />
        <div className="u-text-center font-light">
          Du möchtest Mitglied in unserer Musikkapelle werden? Dann kannst du
          hier das Mitgliedsforumular herunterladen und ausgefüllt an uns zurück
          senden.
        </div>
        <div className="u-center">
          <div className="u-text-center" style={{ margin: 14 }}>
            <a href="http://mindreport.com/mkm/wp-content/uploads/2019/02/MKM_beitritt.pdf">
              <div className="card" style={{ padding: 14, width: 400 }}>
                <div className="tile">
                  <div className="tile-icon">
                    <i className="far fa-file-pdf fa-4x fa-fw" />
                  </div>
                  <div className="tile-container">
                    <p className="tile-title no-margin">
                      <b>MKM_beitritt.pdf</b>
                    </p>
                    <p className="tile-subtitle no-margin">
                      Beitritterklärung für die Musikkapelle Markelsheim
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Page

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
