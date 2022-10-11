import '../css/layout.css';
import '../css/mediaqueries.css';
import '../css/nav.css';

function MyNav() {
  return (
    <nav>
        <div className="nav_logo">
            <p>my logo</p>
        </div>
        <ul className="nav_menu">
            <li><a href="#s1">HTML</a></li>
            <li><a href="#s2">CSS</a></li>
            <li><a href="#s3">JavaScript</a></li>
            <li><a href="#s4">React</a></li>
        </ul>
        <ul className="nav_icon">
            <li><i className="fa-brands fa-facebook"></i></li>
            <li><i className="fa-brands fa-instagram"></i></li>
        </ul>
    </nav>
  );
}

export default MyNav;
