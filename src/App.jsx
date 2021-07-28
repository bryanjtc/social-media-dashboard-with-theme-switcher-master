import React, { useContext } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import BigCard from "./components/BigCard";
import SmallCard from "./components/SmallCard";
import Switch from "./components/Switch";
import TwitterLogo from "./images/icon-twitter.svg";
import YoutubeLogo from "./images/icon-youtube.svg";
import FacebookLogo from "./images/icon-facebook.svg";
import InstagramLogo from "./images/icon-instagram.svg";
import { ThemeContext } from "./ThemeContext";
function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const red = "#DC414C";
  const green = "#1EB589";
  return (
    <BrowserRouter>
      <div className={`App ${darkMode ? "dark" : ""}`}>
        <div className={`top-background ${darkMode ? "dark" : ""}`}></div>
        <div className="content">
          <div className="header">
            <div className="header-titles">
              <p className={`header-title ${darkMode ? "dark" : ""}`}>
                Social Media Dashboard
              </p>
              <p className={`header-subtitle ${darkMode ? "dark" : ""}`}>
                Total Followers: 23,004
              </p>
            </div>
            <div className="toggle">
              <p className={`toggle-text ${darkMode ? "dark" : ""}`}>
                Dark Mode
              </p>
              <Switch />
            </div>
          </div>
          <div className="big-cards">
            <BigCard
              username="@nathanf"
              numbers="1987"
              mediumTitle="FOLLOWERS"
              smallText="12 Today"
              smallTextColor="green"
              type="facebook"
              icon={FacebookLogo}
              iconText="Facebook"
              iconColor={green}
            />
            <BigCard
              username="@nathanf"
              numbers="1044"
              mediumTitle="FOLLOWERS"
              smallText="99 Today"
              smallTextColor="green"
              type="twitter"
              icon={TwitterLogo}
              iconText="Twitter"
              iconColor={green}
            />
            <BigCard
              username="@nathanf"
              numbers="11k"
              mediumTitle="FOLLOWERS"
              smallText="1099 Today"
              smallTextColor="green"
              type="instagram"
              icon={InstagramLogo}
              iconText="Instagram"
              iconColor={green}
            />
            <BigCard
              username="@nathanf"
              numbers="8239"
              mediumTitle="SUBSCRIBERS"
              smallText="144 Today"
              smallTextColor="red"
              type="youtube"
              icon={YoutubeLogo}
              iconText="Youtube"
              iconColor={red}
            />
          </div>
          <p className={`small-cards-title ${darkMode ? "dark" : ""}`}>
            Overview - Today
          </p>
          <div className="small-cards">
            <SmallCard
              title="Page Views"
              numbers="87"
              smallText="3%"
              smallTextColor="green"
              icon={FacebookLogo}
              iconText="Facebook"
              iconColor={green}
            />
            <SmallCard
              title="Likes"
              numbers="52"
              smallText="2%"
              smallTextColor="red"
              icon={FacebookLogo}
              iconText="Facebook"
              iconColor={red}
            />
            <SmallCard
              title="Likes"
              numbers="5462"
              smallText="2257%"
              smallTextColor="green"
              icon={InstagramLogo}
              iconText="Instagram"
              iconColor={green}
            />
            <SmallCard
              title="Profile Views"
              numbers="52k"
              smallText="1375%"
              smallTextColor="green"
              icon={InstagramLogo}
              iconText="Instagram"
              iconColor={green}
            />
            <SmallCard
              title="Retweets"
              numbers="117"
              smallText="303%"
              smallTextColor="green"
              icon={TwitterLogo}
              iconText="Twitter"
              iconColor={green}
            />
            <SmallCard
              title="Likes"
              numbers="507"
              smallText="553%"
              smallTextColor="green"
              icon={TwitterLogo}
              iconText="Twitter"
              iconColor={green}
            />
            <SmallCard
              title="Likes"
              numbers="107"
              smallText="19%"
              smallTextColor="red"
              icon={YoutubeLogo}
              iconText="Youtube"
              iconColor={red}
            />
            <SmallCard
              title="Total Views"
              numbers="1407"
              smallText="12%"
              smallTextColor="red"
              icon={YoutubeLogo}
              iconText="Youtube"
              iconColor={red}
            />
          </div>
          <div className={`attribution ${darkMode ? "dark" : ""}`}>
            Coded by{" "}
            <Link
              to={{ pathname: "https://github.com/bryan250000" }}
              target="_blank"
            >
              Bryan Thomas
            </Link>
            .
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
