import React from "react"

import {
  Layout,
  MiniBio,
  Social,
  Project,
  Technology,
  Footer,
  Contact,
  Experience,
} from "../components"

export default function Home() {
  return (
    <Layout>
      <Social />
      <MiniBio />
      <Experience />
      <Project />
      <Technology />
      <Contact />
      <Footer />
    </Layout>
  )
}
