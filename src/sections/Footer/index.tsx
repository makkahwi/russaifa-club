import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Fragment } from "react";

import { socialLinksList } from "../Tail/Contact";
import FooterNav from "./Nav";

const FooterSection = () => {
  return (
    <Fragment>
      <div className="row bg-primary py-2 align-items-center justify-content-center">
        <div className="col-4 text-center pb-2">
          <div className="col">
            <Image
              src="/images/logo/logo-w.png"
              alt="Logo"
              width={771 * 0.35}
              height={771 * 0.35}
              priority
              role="button"
            />
          </div>

          <div className="col mt-4">
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

        <div className="col-6 text-center pb-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1366.7033650484082!2d36.03849265562313!3d32.02257825777501!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b670050f3c9cd%3A0x8d28219d3b6b8070!2z2YbYp9iv2Yog2LTYqNin2Kgg2KfZhNix2LXZitmB2Kk!5e1!3m2!1sen!2sjo!4v1742818060351!5m2!1sen!2sjo"
            width="100%"
            height="450"
            // style="border:0;"
            // allowfullscreen=""
            className="my-5"
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* <div className="col-12 text-center">
          <FooterNav />
        </div> */}
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
