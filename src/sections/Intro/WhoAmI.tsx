import PageSection from "@/components/PageSection";
import dynamic from "next/dynamic";

const NumberCounters = dynamic(() => import("./Numbers"));

const WhoAmISection = async () => {
  const LinkComp = ({ link = "", text = "", image = "" }) => (
    <a href={link} target="_blank">
      <img src={image} style={{ height: 44 }} />{" "}
      <span className="text-decoration-underline">{text}</span>
    </a>
  );

  return (
    <PageSection title="عني" id="about">
      <div className="col-md-12">
        <NumberCounters />

        <h5 className="text-justify lh-lg text-dark">
          أخصائية تغذية سريرية وحميات، حاصلة على درجة البكالوريوس في التغذية
          السريرية والحميات من{" "}
          <LinkComp
            link="https://hu.edu.jo"
            text="الجامعة الهاشمية"
            image="https://hu.edu.jo/images/logo-wide.png"
          />
          ، ومعتمدة كأخصائية تغدية من{" "}
          <LinkComp
            link="https://moh.gov.jo"
            text="وزارة الصحة الأردنية"
            image="https://moh.gov.jo/ebv4.0/root_storage/ar/eb_homepage/logo.png"
          />
          . طوال رحلتي المهنية، كان شغفي دائمًا تقديم الدعم والإرشاد الغذائي
          للأفراد لمساعدتهم على تحقيق أهدافهم الصحية وتحسين جودة حياتهم. أفتخر
          بعضويتي في{" "}
          <LinkComp
            link="https://www.facebook.com/jmylgdhwltgdhy/"
            text="جمعية الغذاء والتغذية الأردنية"
            image="https://scontent.famm12-1.fna.fbcdn.net/v/t1.6435-9/85236037_2800812050017441_4769914881354760192_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGtQ7tlqqxn6MSbqz7jzmDYmadpQCb2_piZp2lAJvb-mD-hWNq2vzUvvlGW1TpWSmOgr-cFkTGtSd8ac-4uUan8&_nc_ohc=On6BUy215asQ7kNvgGDCr5L&_nc_zt=23&_nc_ht=scontent.famm12-1.fna&_nc_gid=AYGzAeBSpYvAqHcSrW-4x-2&oh=00_AYBRuBNLwUjaeFlHOyAl4R7117sM3YNSlk1rFTDQuggctA&oe=679F3C28"
          />{" "}
          و
          <LinkComp
            link="https://www.facebook.com/JordanianDietitiansAssociation"
            text="جمعية أخصائي التغذية العلاجية الأردنية"
            // image="https://scontent.famm12-1.fna.fbcdn.net/v/t39.30808-6/326388023_869560057830511_2436070686495291862_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHTPtFfs1FRgiFZseYMn4bMzEIW17rc41zMQhbXutzjXIHzaru51lGKQjOlS46SvzDxq_i7O0EW6uMBhbbrtiv2&_nc_ohc=tM19_h_qlbAQ7kNvgE15Sgo&_nc_zt=23&_nc_ht=scontent.famm12-1.fna&_nc_gid=A9L6zOx_L2WPbDtjMlXjMNw&oh=00_AYBmW3EXZdZVtU24CvyPM_soQg0G_ZEQQIMbFi6xULH05g&oe=677DB236"
          />
          ، حيث أعمل مع زملاء مهنيين لتعزيز الوعي الغذائي في مجتمعنا.
        </h5>

        <h5 className="text-justify lh-lg text-dark my-5">
          على مدار أكثر من 5 سنوات، قدمت استشارات التغذية الشخصية وساعدت المئات
          من العملاء في التغلب على التحديات الصحية والغذائية، سواء كان هدفهم
          خسارة الوزن، اكتساب الوزن الصحي، علاج الكثير من الأمراض والمشاكل
          الصحية، أو تحسين الأداء البدني والعقلي. رسالتي هي أن أساعد عملائي على
          تبني نظام غذائي صحي مستدام يناسب احتياجاتهم وأسلوب حياتهم، بدون الشعور
          بالحرمان أو الإجهاد.
        </h5>

        <h5 className="text-justify lh-lg text-dark fw-bold mt-4">
          أؤمن أن رحلة التغيير تبدأ بخطوة صغيرة، وأنا هنا لاساعدك في إطلاق هذه
          الرحلة.
        </h5>
      </div>
    </PageSection>
  );
};

export default WhoAmISection;
