import * as React from "react"
import kebabCase from "lodash-es/kebabCase"

import Section, { CONTENT_SECTION } from "../components/Section"

import CONTENT from "../content"

const UsingTypescript: React.FC = () => {
  const SITE_CONTENT: Array<CONTENT_SECTION> = CONTENT
  return (
    <main>
      <h1>Balanço Geral</h1>
      {SITE_CONTENT.map(item => (
        <Section key={kebabCase(item.title)} {...item} />
      ))}
    </main>
  )
}

export default UsingTypescript
