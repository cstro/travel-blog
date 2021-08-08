import * as React from 'react'
import styled from 'styled-components'
import Layout from '../layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const BlogTitle = styled.h1`
  font-size: 6rem;
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 2rem;
`

const BlogSubtitle = styled.h2`
  font-size: 4rem;
  text-align: center;
  margin-top: 0;
  margin-bottom: 4rem;
`

const BlogDate = styled.div`
  font-size: 0.8rem;
  text-transform: uppercase;
  margin-top: 5rem;
  margin-bottom: 3rem;
  font-weight: 900;
`

const Container = styled.div`
  max-width: 900px;
  width: 100%;
  margin: auto;
  padding: 0 2.5rem;
`

const HomeLink = styled(Link)`
  color: red;
  text-decoration: none;
`

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;

  img {
    border-radius: 5px;
  }
`

const ImageInfo = styled.div`
  color: #666;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  text-align: center;
`

const LlandudnoBrynGoleuPage = () => {
  return (
    <Layout>
      <main>
        <title>Llandudno - Bryn Goleu </title>

        <Container>
          <HomeLink href="/">Home</HomeLink>

          <BlogTitle>Llandudno</BlogTitle>
          <BlogSubtitle>Bryn Goleu</BlogSubtitle>

        </Container>

        <StaticImage
          src="../images/llandudno-bryn-goleu/main.jpg"
          alt="Bryn"
          placeholder="blurred"
        />

        <Container>
          <h2>Thursday 29th July</h2>
          <ul>
            <li>Drive from Swansea to Llandudno</li>
            <li>Came across this really cool dam on the drive LLyn Clywedog</li>
            <li>Checked in at B&B</li>
            <li>Walked along the seafront to the pier</li>
            <li>Had italian food at Carlo's</li>
            <li>Had a bottle of wine while watching the Olympics</li>
          </ul>

          <h2>Friday 30th July</h2>
          <ul>
            <li>Welsh Mountain Zoo</li>
            <li>Soggy Jeans</li>
            <li>Drove around The Great Orme</li>
            <li>Indian Takeaway with Cider</li>
          </ul>

          <h2>Saturday 31st July</h2>

          <h3>Lunch a vegan pub - The Blue Bell</h3>

          <ImageContainer>
            <div>
              <StaticImage
                src="../images/llandudno-bryn-goleu/food1.jpg"
                alt="Food 1"
                placeholder="blurred"
              />
              <ImageInfo>Vegan burger, hot dog & truffle oil chips</ImageInfo>
            </div>

            <div>
              <StaticImage
                src="../images/llandudno-bryn-goleu/food2.jpg"
                alt="Food 2"
                placeholder="blurred"
              />
              <ImageInfo>Vegan brownie and banoffee pancakes</ImageInfo>
            </div>
          </ImageContainer>

          <ul>
            <li>Conwy Castle</li>
            <li>The Blue Bell</li>
            <li>Plas Mawr House</li>
            <li>Coffee in Llandudno</li>
          </ul>

          <h2>Sunday 1st August</h2>
          <ul>
            <li>Travelled Home</li>
            <li>Stopped for a bite at Costa in Carmarthen</li>
          </ul>
        </Container>
      </main>
    </Layout>
  )
}

export default LlandudnoBrynGoleuPage
