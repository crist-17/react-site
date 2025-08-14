import { Link, Outlet, useLocation } from "react-router-dom";
import './Layout_0813.css'

function Layout() {
    const { pathname } = useLocation();
    const isHome = pathname === "/";
    return (
        <div>
            {isHome && (
                <>
                    <h2>0813</h2>
                    <nav>
                        <ul className="list">
                            <li>
                                <Link to="Comp_memo" className="link">Memo</Link>
                            </li>
                            <li>
                                <Link to="Comp_effect" className="link">Effect</Link>
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