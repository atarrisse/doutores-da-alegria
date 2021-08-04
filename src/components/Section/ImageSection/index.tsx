import * as React from "react"
import * as styles from "./styles.module.scss"

const ImageSection = (data) => {
  console.log(data)
  return (
    <>
      <div>Hello</div>
      <p>{JSON.stringify(data)}</p>
    </>
  )
}

export default ImageSection;