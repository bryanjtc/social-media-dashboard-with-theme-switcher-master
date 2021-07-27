import "./App.css";
import BigCard from "./components/BigCard";
import SmallCard from "./components/SmallCard";
import Switch from "./components/Switch";
import TwitterLogo from "./images/icon-twitter.svg";
import YoutubeLogo from "./images/icon-youtube.svg";
import FacebookLogo from "./images/icon-facebook.svg";
import InstagramLogo from "./images/icon-instagram.svg";
function App() {
  return (
    <div className="App">
      <div className="top-background"></div>
      <div className="content">
        <div className="header">
          <div className="header-titles">
            <p className="header-title">Social Media Dashboard</p>
            <p className="header-subtitle">Total Followers: 23,004</p>
          </div>
          <div className="toggle">
            <p className="toggle-text">Dark Mode</p>
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
          />
        </div>
        <p className="small-cards-title">Overview - Today</p>
        <div className="small-cards">
          <SmallCard
            title="Page Views"
            numbers="87"
            smallText="3%"
            smallTextColor="green"
            icon={FacebookLogo}
            iconText="Facebook"
          />
          <SmallCard
            title="Likes"
            numbers="52"
            smallText="2%"
            smallTextColor="red"
            icon={FacebookLogo}
            iconText="Facebook"
          />
          <SmallCard
            title="Likes"
            numbers="5462"
            smallText="2257%"
            smallTextColor="green"
            icon={InstagramLogo}
            iconText="Instagram"
          />
          <SmallCard
            title="Profile Views"
            numbers="52k"
            smallText="1375%"
            smallTextColor="green"
            icon={InstagramLogo}
            iconText="Instagram"
          />
          <SmallCard
            title="Retweets"
            numbers="117"
            smallText="303%"
            smallTextColor="green"
            icon={TwitterLogo}
            iconText="Twitter"
          />
          <SmallCard
            title="Likes"
            numbers="507"
            smallText="553%"
            smallTextColor="green"
            icon={TwitterLogo}
            iconText="Twitter"
          />
          <SmallCard
            title="Likes"
            numbers="107"
            smallText="19%"
            smallTextColor="red"
            icon={YoutubeLogo}
            iconText="Youtube"
          />
          <SmallCard
            title="Total Views"
            numbers="1407"
            smallText="12%"
            smallTextColor="red"
            icon={YoutubeLogo}
            iconText="Youtube"
          />
        </div>
        <div className="attribution">
          Challenge by Frontend Mentor. Coded by Bryan Thomas.
        </div>
      </div>
    </div>
  );
}

export default App;
