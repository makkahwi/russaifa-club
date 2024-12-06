import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Fragment } from "react";

import { socialLinksList } from "../Tail/Contact";
import FooterNav from "./Nav";

const FooterSection = () => {
  return (
    <Fragment>
      <div
        className="row bg-warning py-5"
        style={{
          backgroundImage: `url('/images/Pattern.png')`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="col-xs-12 text-center pb-5">
          <Image
            src="/images/logo/logo-white.png"
            alt="Logo"
            width={543 * 0.25}
            height={771 * 0.25}
            priority
            role="button"
          />
        </div>

        <div className="col-xs-12 text-center">
          <FooterNav />
        </div>

        <div className="col-xs-12 text-center">
          <div className="btn-group">
            {socialLinksList.map(({ name, icon, link, label, color }, i) => (
              <div className="btn btn-link p-3 my-3 text-dark" key={i}>
                <a href={link} target="_blank" className="text-black">
                  <FontAwesomeIcon icon={icon} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row py-5 bg-white">
        <h6 className="text-center text-dark">
          جميع الحقوق محفوظة لـ <span className="text-dark">فاطمة محمد</span> ©{" "}
          {new Date().getFullYear()}
        </h6>

        <a
          href="https://www.alembicsoft.com/"
          target="_blank"
          className="text-center text-dark"
        >
          <small>تصميم وتنفيذ الانبيق للبرمجيات</small>
        </a>
      </div>
    </Fragment>
  );
};

export default FooterSection;
