import styles from '../styles/Login.module.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMessage, faAward, faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default function Login() {
  return (
    <div className={styles.container}>
      <div className="flex justify-between">
        {/* Section 1 : Social Links */}
        {/* ----------------------------------------------------------------------- */}
        <div className={styles.social__link}>
          <div>
            <a href="#">
              <FontAwesomeIcon icon={faHeart} />
            </a>{' '}
          </div>
          <div>
            <a href="#">
              {' '}
              <FontAwesomeIcon icon={faMessage} />
            </a>
          </div>
          <div>
            <a href="#">
              {' '}
              <FontAwesomeIcon icon={faAward} />
            </a>
          </div>
        </div>
        <div className="translate flex">
          {' '}
          <p className="px-1">ENG</p>
          <FontAwesomeIcon icon={faCaretDown} className="text-pink-500" />
        </div>
      </div>

      {/* Section 2 : Header Navbar */}
      {/* --------------------------------------------------------------------- */}
      <div className={styles.header}>
        <div className="flex">
          <img src="logo.png" width="50" height="50" />
          <div className={styles.header__logo}>
            Templates <span>X</span>
          </div>
        </div>
        <div className="header__navitems flex-1 flex justify-between px-5">
          <a href="#">Home</a>
          <a href="#">FAQs</a>
          <a href="#">API Docs</a>
          <a href="#">Pricing</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
        <div className="header__actions">
          <button className={styles.primary__button}>GET STARTED</button>
        </div>
      </div>

      {/* Section 3 : Main Login Form Body */}
      {/* -------------------------------------------------------------------------- */}
      <div className={styles.main}>
        <div className={styles.login__form}>
          <div className="text-center">
            <h1 className={styles.login__heading}>Log In</h1>
            <p className="pb-2">
              Dont have a account?{' '}
              <a href="#" className="text-orange-500">
                Signup
              </a>
            </p>
          </div>
          <form>
            <div>
              <label className="py-1">Email</label>
              <input type="text" placeholder="Please enter your email" className={styles.primary__input} />
            </div>
            <div>
              <label className="py-1">Password</label>
              <input type="password" placeholder="Please enter your password" className={styles.primary__input} />
            </div>
            <div className="flex justify-between py-3">
              <div>
                <input type="checkbox" checked className="bg-pink-300 m-1" />
                <label className="px-1">Remember for 30 days</label>
              </div>
              <a href="#" className="text-orange-500 underline">
                Forgot password?
              </a>
            </div>
            <div className="flex justify-center pt-10">
              <button className={styles.primary__button}>LOG IN</button>
            </div>
          </form>
        </div>
        <div className={styles.color__circles__1}></div>
        <div className={styles.color__circles__2}></div>
        <div className={styles.color__circles__3}></div>
      </div>
      <div className={styles.color__circles__4}></div>
      <div className={styles.color__circles__5}></div>
      <div className={styles.color__circles__6}></div>
    </div>
  );
}
