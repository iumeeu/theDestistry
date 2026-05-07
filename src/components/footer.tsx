"use client";
import { NextPage } from "next";
import { usePathname, useRouter } from "next/navigation";
import { FaFacebook, FaFacebookF, FaInstagram, FaLine } from "react-icons/fa";

interface Props {}

const Footer: NextPage<Props> = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLang = pathname.startsWith("/en") ? "en" : "th";
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__contact">
          Contact us : info@thedentistrygroup.com
        </div>
        <div className="footer__social">
          <div className="footer__lang">
            <select
              className="footer__lang-select"
              onChange={(e) => {
                const lang = e.target.value;
                router.push(`/${lang}`);
              }}
              value={currentLang}
            >
              <option value="th">ไทย (TH)</option>
              <option value="en">English (EN)</option>
            </select>
          </div>
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
};

export default Footer;
