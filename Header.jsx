
import { Link, Outlet } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/page1">Page1</Link>
          <Link to="/page2">Page2</Link>
          <Link to="/page3">Page3</Link>
          <Link to="/page3/page4">Page4</Link>
          <Link to="/ButtonName">name</Link> 
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
