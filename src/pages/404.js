import React from "react";
import theme from '../theme';
import { graphql } from "gatsby";
import "../theme/font-faces.css";
import MainSection from '../sections/NotFound/Main';
import SEO from "../components/seo";
const smoothscroll = typeof window !== `undefined` ? require("smoothscroll-polyfill") : null;


const NotFoundPage = ({ data, location }) => {
  if (typeof window !== 'undefined') {
    window.__forceSmoothScrollPolyfill__ = true;
    smoothscroll.polyfill();
  }
  return (
    <>
          <SEO title="404: Not found" url="404" />
          <MainSection data={data} fullscreen={true} vPadding="0px" bgColor="white" style={{paddingTop:theme.spacers[10],backgroundColor:"white"}}/>
    </>
  )
}

export const data = graphql`
  query notFound {
    notFound: file(relativePath: { eq: "not_found.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp,
          
        }
      }
   },
  }
`

export default NotFoundPage




