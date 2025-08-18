import { Link, Outlet, useLocation } from "react-router-dom";
import './Layout.css'

function Layout() {
    const { pathname } = useLocation();
    const isHome = pathname === "/";
    return (
        <div>
            {isHome && (
                <>
                    <h2>홈 페이지</h2>
                    <nav>
                        <ul className="list">
                            <li>
                                <Link to="/" className="link">Home</Link>
                            </li>
                            <li>
                                <Link to="login" className="link">Login</Link>
                            </li>
                            <li>
                                <Link to="login2" className="link">Login2</Link>
                            </li>
                            <li>
                                <Link to="Sclass" className="link">과제출석부</Link>
                            </li>
                            <li>
                                <Link to="Arr" className="link">0812</Link>
                            </li>
                            <li>
                                <Link to="Home_0813" className="link">0813</Link>
                            </li>
                            <li>
                                <Link to="Comp_0814" className="link">0814</Link>
                            </li>
                            <li>
                                <Link to="React_0818" className="link">0818블로그</Link>
                            </li>

                        </ul>
                    </nav>
                </>
            )}
            <Outlet></Outlet>
        </div>
    );
}
export default Layout;