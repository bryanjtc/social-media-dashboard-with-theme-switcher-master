import React, { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import BigCard from "../components/BigCard/BigCard";
import SmallCard from "../components/SmallCard/SmallCard";
import Switch from "../components/Switch/Switch";
import TwitterLogo from "../public/images/icon-twitter.svg";
import YoutubeLogo from "../public/images/icon-youtube.svg";
import FacebookLogo from "../public/images/icon-facebook.svg";
import InstagramLogo from "../public/images/icon-instagram.svg";
import { ThemeContext } from "../context/ThemeContext";
export default function Home() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const red = "#DC414C";
  const green = "#1EB589";
  const darkgreen = "#115A3F";
  const darkred = "#9F1D26";
  return (
    <main className={`${styles.App} ${darkMode ? `${styles.dark}` : ""}`}>
      <Head>
        <title>Social media dashboard</title>
        <meta
          name="description"
          content="Social media dashboard with theme switcher"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.top_background} ${
          darkMode ? `${styles.dark}` : ""
        }`}
      ></div>
      <div className={styles.content}>
        <header className={styles.header}>
          <div className={styles.header_titles}>
            <p
              className={`${styles.header_title} ${
                darkMode ? `${styles.dark}` : ""
              }`}
            >
              Social Media Dashboard
            </p>
            <p
              className={`${styles.header_subtitle} ${
                darkMode ? `${styles.dark}` : ""
              }`}
            >
              Total Followers: 23,004
            </p>
          </div>
          <div className={styles.toggle}>
            <p
              className={`${styles.toggle_text} ${
                darkMode ? `${styles.dark}` : ""
              }`}
            >
              Dark Mode
            </p>
            <Switch />
          </div>
        </header>
        <section className={styles.big_cards}>
          <BigCard
            username="@nathanf"
            numbers="1987"
            mediumTitle="FOLLOWERS"
            smallText="12 Today"
            smallTextColor={darkMode ? "green" : "darkgreen"}
            type="facebook"
            icon={FacebookLogo}
            iconText="Facebook"
            iconColor={darkMode ? green : darkgreen}
          />
          <BigCard
            username="@nathanf"
            numbers="1044"
            mediumTitle="FOLLOWERS"
            smallText="99 Today"
            smallTextColor={darkMode ? "green" : "darkgreen"}
            type="twitter"
            icon={TwitterLogo}
            iconText="Twitter"
            iconColor={darkMode ? green : darkgreen}
          />
          <BigCard
            username="@nathanf"
            numbers="11k"
            mediumTitle="FOLLOWERS"
            smallText="1099 Today"
            smallTextColor={darkMode ? "green" : "darkgreen"}
            type="instagram"
            icon={InstagramLogo}
            iconText="Instagram"
            iconColor={darkMode ? green : darkgreen}
          />
          <BigCard
            username="@nathanf"
            numbers="8239"
            mediumTitle="SUBSCRIBERS"
            smallText="144 Today"
            smallTextColor={darkMode ? "red" : "darkred"}
            type="youtube"
            icon={YoutubeLogo}
            iconText="Youtube"
            iconColor={darkMode ? red : darkred}
          />
        </section>
        <p
          className={`${styles.small_cards_title} ${
            darkMode ? `${styles.dark}` : ""
          }`}
        >
          Overview - Today
        </p>
        <section className={styles.small_cards}>
          <SmallCard
            title="Page Views"
            numbers="87"
            smallText="3%"
            smallTextColor={darkMode ? "green" : "darkgreen"}
            icon={FacebookLogo}
            iconText="Facebook"
            iconColor={darkMode ? green : darkgreen}
          />
          <SmallCard
            title="Likes"
            numbers="52"
            smallText="2%"
            smallTextColor={darkMode ? "red" : "darkred"}
            icon={FacebookLogo}
            iconText="Facebook"
            iconColor={darkMode ? red : darkred}
          />
          <SmallCard
            title="Likes"
            numbers="5462"
            smallText="2257%"
            smallTextColor={darkMode ? "green" : "darkgreen"}
            icon={InstagramLogo}
            iconText="Instagram"
            iconColor={darkMode ? green : darkgreen}
          />
          <SmallCard
            title="Profile Views"
            numbers="52k"
            smallText="1375%"
            smallTextColor={darkMode ? "green" : "darkgreen"}
            icon={InstagramLogo}
            iconText="Instagram"
            iconColor={darkMode ? green : darkgreen}
          />
          <SmallCard
            title="Retweets"
            numbers="117"
            smallText="303%"
            smallTextColor={darkMode ? "green" : "darkgreen"}
            icon={TwitterLogo}
            iconText="Twitter"
            iconColor={darkMode ? green : darkgreen}
          />
          <SmallCard
            title="Likes"
            numbers="507"
            smallText="553%"
            smallTextColor={darkMode ? "green" : "darkgreen"}
            icon={TwitterLogo}
            iconText="Twitter"
            iconColor={darkMode ? green : darkgreen}
          />
          <SmallCard
            title="Likes"
            numbers="107"
            smallText="19%"
            smallTextColor={darkMode ? "red" : "darkred"}
            icon={YoutubeLogo}
            iconText="Youtube"
            iconColor={darkMode ? red : darkred}
          />
          <SmallCard
            title="Total Views"
            numbers="1407"
            smallText="12%"
            smallTextColor={darkMode ? "red" : "darkred"}
            icon={YoutubeLogo}
            iconText="Youtube"
            iconColor={darkMode ? red : darkred}
          />
        </section>
        <footer
          className={`${styles.attribution} ${
            darkMode ? `${styles.dark}` : ""
          }`}
        >
          Coded by{" "}
          <Link href="https://github.com/bryanjtc" prefetch={false}>
            Bryan Thomas
          </Link>
        </footer>
      </div>
    </main>
  );
}
