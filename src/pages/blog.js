import React from "react"
import Layout from "../components/layout";
import { useStaticQuery, graphql, Link } from "gatsby";



const  Blog = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
        edges {
            node {
            frontmatter {
                title
                date
            }
            fields {
                slug
            }
           
            }
        }
    }
    }`);
    return (
        <div>
         <Layout>
            <h1>Blog Page</h1>
          
            <ol>
               {  data.allMarkdownRemark.edges.map ( post =>  <li>
                <Link to={ `/blog/${post.node.fields.slug}`}>
                   <h2> { post.node.frontmatter.title } </h2>
                   <p> { post.node.frontmatter.date} </p>
                   </Link>
               </li>) }
            </ol>
            </Layout>
        </div>  
    )
}

export default Blog