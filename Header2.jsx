import { Link, Outlet } from 'react-router-dom';

export default function Header2() {
  return (
    <div>
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '30px',
          background: 'linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet)',
          backgroundSize: '400% 400%',
          animation: 'gradientAnimation 5s ease infinite',
        }}
      >

        <nav style={{
          display: 'flex',
          gap: '20px',
        }}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/page1" style={linkStyle}>Page1</Link>
          <Link to="/page2" style={linkStyle}>Page2</Link>
          <Link to="/page3" style={linkStyle}>Page3</Link>
          <Link to="/page3/page4" style={linkStyle}>Page4</Link>
        </nav>
      </header>

      <Outlet />
    </div>
  );
}


const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '18px',
  fontWeight: '500',
  transition: 'color 0.3s ease, transform 0.3s ease',
  fontFamily: 'Arial, sans-serif',
};


const style = document.createElement('style');
style.innerHTML = `
  @keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  a:hover {
    color: #ff6347;
    transform: scale(1.1);
  }
`;
document.head.appendChild(style);
