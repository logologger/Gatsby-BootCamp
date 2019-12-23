import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import headerStyleObj from './header.module.scss';

const Header = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    author
                            }
                }
            }
    `)
    return (
       <header className = { headerStyleObj.header}>
            <h1 >
                <Link className = { headerStyleObj.title} to="/">
                
                   { data.site.siteMetadata.title}
                </Link>
            </h1>
           <nav>
               <ul className = { headerStyleObj.navList}>
                   <li>
                       <Link className={headerStyleObj.navItem} 
                       activeClassName={headerStyleObj.activeNavItem} to="/"> Home </Link>
                   </li>
                   <li>
                       <Link activeClassName={headerStyleObj.activeNavItem}  className={headerStyleObj.navItem} to="/blog"> Blog </Link>
                   </li>
                   <li>
                       <Link activeClassName={headerStyleObj.activeNavItem} className={headerStyleObj.navItem} to="/about"> About </Link>
                   </li>
                   <li>
                       <Link activeClassName={headerStyleObj.activeNavItem} className={headerStyleObj.navItem} to="/contact"> Contact </Link>
                   </li>
               </ul>
           </nav>
       </header>
    )
}

export default Header