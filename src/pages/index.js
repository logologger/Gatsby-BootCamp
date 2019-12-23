import React from "react"
import { Link } from 'gatsby';
import Layout from "../components/layout";

const ContactPage = () => {
    return (
        <div>
           
           <Layout>
            <h1> Hello </h1>
            <p> Welcome to  Index Page here</p>
            <p> Know About a Developer ? Go <Link to="/about">About Page</Link> </p>
            <p> Contact Developer? Go <Link to="/contact">Contact Me</Link> </p>
            </Layout>
        </div>
    )
}

export default ContactPage;