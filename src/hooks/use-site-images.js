import { useStaticQuery, graphql } from 'gatsby'

const useSiteImages = imageName => {
  const result = useStaticQuery(graphql`{
  allFile(filter: {sourceInstanceName: {eq: "images"}}) {
    edges {
      node {
        relativePath
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: FIXED)
          fluid {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
            presentationWidth
            presentationHeight
          }
        }
      }
    }
  }
}
`)
  const items = result.allFile.edges
  const image = items.find(edge => edge.node.relativePath === imageName)
  if (image === undefined) {
    throw new Error(`Unable to find image: ${imageName} (in content/images)`)
  }
  return image.node.childImageSharp
}

export default useSiteImages