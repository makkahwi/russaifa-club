"use client";

import { sendContacts } from "@/api";
import {
  Button,
  Col,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";

const ContactForm = () => {
  const inputs = [
    { name: "name", title: "الاسم", type: "text", required: true },
    {
      name: "email",
      title: "البريد الإلكتروني",
      type: "email",
      required: false,
    },
    { name: "phone", title: "رقم الهاتف", type: "text", required: true },
    {
      name: "subject",
      title: "عنوان الرسالة",
      type: "text",
      required: false,
    },
    {
      name: "message",
      title: "محتوى الرسالة",
      type: "textarea",
      required: true,
      fullWidth: true,
    },
  ];

  const onSubmit = (e: any) => {
    e.preventDefault();

    const values = inputs.reduce(
      (final, current) => ({
        ...final,
        [current.name]: e.target[current.name].value,
      }),
      {}
    );

    sendContacts({ ...values, timestamp: new Date() })
      .then(() => alert("Your message has been sent. TQ :)"))
      .catch(() => alert("Something went wrong, plz try again. Sorry :("));

    alert("You're message has been sent. TQ :)");
  };

  return (
    <form onSubmit={onSubmit}>
      <Row>
        {inputs.map(({ name, title, required, type, fullWidth }, i) => (
          <Col lg={fullWidth ? 12 : 6} className="mb-2" key={i}>
            <FormGroup>
              <FormLabel className="text-dark">
                {title}
                {required ? <span className="text-danger">{" *"}</span> : ""}
              </FormLabel>
              <FormControl
                id={name}
                name={name}
                placeholder={title}
                className="py-3"
                as={type === "textarea" ? type : undefined}
                type={type}
                required={required}
              />
            </FormGroup>
          </Col>
        ))}

        <Col md={3} lg={2} className="float-end">
          <Button variant="danger" className="p-3" type="submit">
            <h6 className="text-center p-0 m-0">تواصل الآن</h6>
          </Button>
        </Col>
      </Row>
    </form>
  );
};

export default ContactForm;
