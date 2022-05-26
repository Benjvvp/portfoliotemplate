import Link from "next/link";
import React, { useState } from "react";
import styles from "../../styles/components/navBar.module.css";

export default function NavBar() {
  const [status, setStatus] = useState("close");

  const contactButtonClicked = (e: any) => {
    const lastText = e.currentTarget.innerHTML;
    const sucessMessageCopy = "Copied!";

    if (lastText === sucessMessageCopy) return;

    navigator.clipboard.writeText(lastText);

    e.currentTarget.innerHTML = sucessMessageCopy;

    setTimeout(() => {
      e.target.innerHTML = lastText;
    }, 2000);
  };

  return (
    <>
      <div className={`${styles.navBar}`}>
        <div className={`${styles.navBar__logo}`}>
          <img src="/svg/logo.svg" alt="logo" />
        </div>
        <div className={`${styles.navBar__menu}`}>
          <ul>
            <li className={`${styles.navBar_menu__link}`}>
              <Link href="/">
                <a
                  onClick={() => {
                    setStatus("close");
                  }}
                >
                  Home
                </a>
              </Link>
            </li>
            <li className={`${styles.navBar_menu__link}`}>
              <Link href="/#projects">
                <a
                  onClick={() => {
                    setStatus("close");
                  }}
                >
                  Projects
                </a>
              </Link>
            </li>
            <li className={`${styles.navBar_menu__link}`}>
              <Link href="/contact">
                <a
                  onClick={() => {
                    setStatus("close");
                  }}
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={`${styles.navBar__button}`}
          onClick={contactButtonClicked}
        >
          Walter#3255
        </div>
        <div
          className={`${styles.BurguerMenu__container}`}
          role="button"
          onClick={() => setStatus(status === "open" ? "close" : "open")}
        >
          {status === "open" ? (
            <>
              <i className={`${styles.open}`}></i>
              <i className={`${styles.open}`}></i>
              <i className={`${styles.open}`}></i>
            </>
          ) : (
            <>
              <i className={`${styles.close}`}></i>
              <i className={`${styles.close}`}></i>
              <i className={`${styles.close}`}></i>
            </>
          )}
        </div>
      </div>
      <div
        className={`${styles.navBarAbsolute} ${
          status === "open" ? styles.navBarAbsolute__Active : ""
        }`}
      >
        <div className={`${styles.navBarAbsolute__Top}`}>
          <div className={`${styles.navBarAbsolute__logo}`}>
            <img src="/svg/logo.svg" alt="logo" />
          </div>
          <div
            className={`${styles.BurguerMenu__container}`}
            role="button"
            onClick={() => setStatus(status === "open" ? "close" : "open")}
          >
            {status === "open" ? (
              <>
                <i className={`${styles.open}`}></i>
                <i className={`${styles.open}`}></i>
                <i className={`${styles.open}`}></i>
              </>
            ) : (
              <>
                <i className={`${styles.close}`}></i>
                <i className={`${styles.close}`}></i>
                <i className={`${styles.close}`}></i>
              </>
            )}
          </div>
        </div>
        <div className={`${styles.navBarAbsolute__menu}`}>
          <ul>
            <li className={`${styles.navBarAbsolute__link}`}>
              <Link href="/">
                <a
                  onClick={() => {
                    setStatus("close");
                  }}
                >
                  Home
                </a>
              </Link>
            </li>
            <li className={`${styles.navBarAbsolute__link}`}>
              <Link href="/#projects">
                <a
                  onClick={() => {
                    setStatus("close");
                  }}
                >
                  Projects
                </a>
              </Link>
            </li>
            <li className={`${styles.navBarAbsolute__link}`}>
              <Link href="/contact">
                <a
                  onClick={() => {
                    setStatus("close");
                  }}
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={`${styles.navBarAbsolute__button}`}
          onClick={contactButtonClicked}
        >
          Walter#3255
        </div>
      </div>
    </>
  );
}
