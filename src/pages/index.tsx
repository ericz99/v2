import React from "react"

import {
  Layout,
  MiniBio,
  Social,
  Project,
  Technology,
  Footer,
  Contact,
} from "../components"

export default function Home() {
  return (
    <Layout>
      <Social />
      <MiniBio />
      <Project />
      <Technology />
      <Contact />
      <Footer />
    </Layout>
  )
}
