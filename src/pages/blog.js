import React from "react"
import Layout from "../components/layout";
import { useStaticQuery, graphql, Link } from "gatsby";
import BlogStyles from './blog.module.scss';
import Head from "../components/head";



const  Blog = () => {
    const data = useStaticQuery(graphql`
  query {
  allContentfulBlogPost(
    sort:{
      fields: publishDate,
      order:DESC
    }
  ) {
    edges {
      node {
        title
        slug
        publishDate(formatString: "MMM Do YYYY")
        
      }
    }
  }
}`);
    return (
        <div>
         <Layout>
           <Head title="Blog Page"/>
            <h1>Blog Page</h1>
          
            <ol className={BlogStyles.posts}>
               {  data.allContentfulBlogPost.edges.map ( post => 
            <li className={BlogStyles.post}>
                <Link to={ `/blog/${post.node.slug}`}>
                   <h2> { post.node.title } </h2>
                   <p> { post.node.publishDate} </p>
                   </Link>
               </li>) }
            </ol>
            </Layout>
        </div>  
    )
}

export default Blog