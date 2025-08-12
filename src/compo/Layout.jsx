import { Link, Outlet } from "react-router-dom";
import './Layout.css'

function Layout() {
    return (
        <div>
            <h2>홈 페이지</h2>
            <nav>
                <ul class="list">
                    <li>
                        <Link to="/react-site/" className="link">Home</Link>
                    </li>
                    <li>
                        <Link to="/react-site/login" className="link">Login</Link>
                    </li>
                    <li>
                          <Link to="/react-site/login2" className="link">Login2</Link>
                    </li>
                    <li>
                       <Link to="/react-site/Sclass" className="link">과제출석부</Link> 
                    </li>
                    <li>
                        <Link to="/react-site/Arr" className="link">0812</Link> 
                    </li>

                </ul>
            </nav>
            <Outlet></Outlet>
        </div>
    );
}
export default Layout;