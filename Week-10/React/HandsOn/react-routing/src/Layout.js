import { Link, Outlet } from 'react-router-dom'
function Layout() {
    return (
        <>
            <nav>
                <ul style={{ display: 'inline' }}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />{/* Outlet is a placeholder to render the child components  */}
        </>
    )
}
export default Layout;