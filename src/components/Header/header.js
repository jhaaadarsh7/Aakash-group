import logo from "../images/logo.jpg";
import fb from "../images/001-facebook.svg";
import twit from "../images/002-twitter.svg";
import "./Header.scss";
const navanchor = [
  {
    url: "/",
    name: "Home",
    status: "active",
  },
  {
    url: "/",
    name: "Features",
  },
  {
    url: "/",
    name: "Pages",
  },
  {
    url: "/",
    name: "Blog",
  },
  {
    url: "/",
    name: "Protfolio",
  },
  {
    url: "/",
    name: "elements",
  },
];
const follows = [
  {
    url: "/",
    name: "Facebook",
    image: fb,
  },
  {
    url: "/",
    name: "Twitter",
    image: twit,
  },
  {
    url: "/",
    name: "LinkedIn",
    image: fb,
  },
  {
    url: "/",
    name: "Instagram",
    image: fb,
  },
];

export default function Header() {
  return (
    <header>
      <div className="absolute">
        <div id="top-bar-inner" className="themesflat-container">
          <div className="top-bar-inner-wrap">
            <span className="address content">
              <a href="/">Laxmi Plaza, Putalisadak</a>
            </span>
            <span className="Phone content">
              <a href="/">Phone +1 (977) 234 324</a>
            </span>
          </div>
          <div className="top-bar-content-right">
            <div className="top-bar-socials">
              <div className="inner">
                <span className="texts">Follow Us:</span>
                <span className="icons">
                  {follows.map((follow, index) => (
                    <a href={follow.url} key={index}>
                      <img src={follow.image} alt={follow.name} />
                    </a>
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="navigations">
          <img src={logo} alt="logo" />
          <h1>Aakash Group</h1>
          <nav>
            <ul>
              {navanchor.map((navBar, index) => (
                <li key={index}>
                  <a href={navBar.url} className={navBar.status}>
                    {navBar.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
