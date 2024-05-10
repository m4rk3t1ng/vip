import { Router } from "@reach/router"
import { Link } from "gatsby"
import React from "react"
import Layout from "../components/subastas/layout"
import SubastasExperience from "../components/subastas/subastasExperience"

const Subastas = () => (
  <Layout>
    <Router>
      <SubastasExperience path="/es/subastas/:id" />
      <SubastasExperience path="/en/subastas/:id" />
    </Router>
  </Layout>
)

export default Subastas