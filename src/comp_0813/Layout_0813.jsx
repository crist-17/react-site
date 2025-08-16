import { Outlet, useLocation, Link } from 'react-router-dom';

export default function Layout() {
    const { pathname } = useLocation();
    const showNav = pathname.startsWith('/Home_0813'); // 0813 하위에서 항상 메뉴 보이기
    return (
        <div>
            {showNav && (
                <nav style={{ display: 'flex', gap: 12 }}>
                    <Link to="/Home_0813/Comp_memo">Memo</Link>
                    <Link to="/Home_0813/Comp_effect">Effect</Link>
                </nav>
            )}
            <Outlet />
        </div>
    );
}