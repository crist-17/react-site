import { Link, Outlet } from "react-router-dom";
import './Layout.css'

function Layout() {
    return (
        <div>
            <h2>홈 페이지</h2>
            <nav>
                <ul class="list">
                    <li>
                        <Link to="/react-site/" className="iink">Home</Link>
                    </li>
                    <li>
                        <Link to="/react-site/login" className="iink">Login</Link>
                    </li>
                    <li>
                          <Link to="/react-site/login2" className="iink">Login2</Link>
                    </li>
                    <li>
                       <Link to="/react-site/Sclass" className="iink">과제출석부</Link> 
                    </li>

                </ul>
            </nav>
            <Outlet></Outlet>
        </div>
    );
}
export default Layout;