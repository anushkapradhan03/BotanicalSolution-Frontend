/* eslint-disable react-hooks/rules-of-hooks */
import { useLocation, Link } from 'react-router-dom'

export default function breadcrumb({ children }) {
    const location = useLocation();
    // console.log(location)

    let currentLink = '';

    const crumbs = location.pathname.split('/')
        .filter((crumb) => crumb !== '')
        .map((crumb, index) => {
            currentLink += `/${crumb}`
            return (
                <li key={index + 1 + crumb}><Link to={currentLink}>{crumb}</Link></li>
            )
        })



    return (
        <div className="breadcrumbs">
            {children}
            <nav>
                <div className="container">
                    <ol>
                        <li key={0 + "home"}><Link to={'/'}>home</Link></li>
                        {crumbs}
                    </ol>
                </div>
            </nav>
        </div>
    )
}
