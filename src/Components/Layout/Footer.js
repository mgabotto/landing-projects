import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 5%;
  padding: 30px;

  img {
    width: 5vh;
    cursor: pointer;
  }
`

export default function Footer() {
  return (
    <Container>
      <a href="/">
        <img src="./images/cv.png" alt="cv" />
      </a>
      <a href="/">
        <img src="./images/github.png" alt="github" />
      </a>
      <a href="/">
        <img src="./images/linkedin.png" alt="linkedin" />
      </a>
    </Container>
  )
}
