import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Fragment } from "react";

import { socialLinksList } from "../Tail/Contact";
import FooterNav from "./Nav";

const FooterSection = () => {
  return (
    <Fragment>
      <div className="row bg-primary py-2">
        <div className="col-12 text-center pb-2">
          <Image
            src="/images/logo/logo-w.png"
            alt="Logo"
            width={771 * 0.35}
            height={771 * 0.35}
            priority
            role="button"
          />
        </div>

        {/* <div className="col-12 text-center">
          <FooterNav />
        </div> */}

        <div className="col-12 text-center">
          <div className="btn-group">
            {socialLinksList.map(({ name, icon, link, label, color }, i) => (
              <div className="btn btn-link p-3 my-2" key={i}>
                <a href={link} target="_blank" className="text-white">
                  <FontAwesomeIcon icon={icon} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row py-5 bg-white">
        <h6 className="text-center text-primary">
          جميع الحقوق محفوظة لـ{" "}
          <span className="text-primary">نادي شباب الرصيفة</span> ©{" "}
          {new Date().getFullYear()}
        </h6>

        <a
          href="https://www.alembicsoft.com/"
          target="_blank"
          className="text-center text-primary"
        >
          <small>تصميم وتنفيذ AlembicSoft</small>
        </a>
      </div>
    </Fragment>
  );
};

export default FooterSection;
