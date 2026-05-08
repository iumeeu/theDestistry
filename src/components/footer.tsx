"use client";
import { FaFacebookF, FaInstagram, FaLine } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__contact">
          Contact us : info@thedentistrygroup.com
        </div>
        <div className="footer__social">
          <a
            className="footer__icon footer__icon--fb"
            aria-label="Facebook"
            href="https://www.facebook.com/Thedentistrygroup/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            className="footer__icon footer__icon--ig"
            aria-label="Instagram"
            href="https://www.instagram.com/thedentistrygroup/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            className="footer__icon footer__icon--line"
            aria-label="LINE"
            href="https://lin.ee/Nysc2Je"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLine />
          </a>
          <span>The Dentistry Clinic</span>
        </div>
      </div>
    </footer>
  );
}
