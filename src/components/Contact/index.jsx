import {
  ContactSection,
  ContactSectionTitle,
  ConatactSectionText,
  ContactSectionWrapper,
  ContactSectionLabel,
  ContactSectionInput,
  ContactSectionSelect,
  ContactSectionDesc,
} from "./contact";
import { Container, BussinesButton } from "../main.js";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import {  toast } from 'react-toastify';




const Contact = () => {

  const form = useRef();

  const sendEmail = (evt) => {
    evt.preventDefault();

    emailjs.sendForm('service_rf7l50x', 'template_3yv2cvf', form.current, 'wFhUno1PKxyIBugR_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          toast(error.text);
      });
  };

  return (
    <>
      <ContactSection>
        <Container>
          <ContactSectionTitle>
            Leave your number and we'll call you back
          </ContactSectionTitle>
          <ConatactSectionText>
            Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
            facilisis lacinia ex, eget sollicitudin massa pellentesque in.
            Vivamus mattis eros at sem pulvinar
          </ConatactSectionText>
          <ContactSectionWrapper>
            <form ref={form} onSubmit={sendEmail}>
              <ContactSectionLabel name>
                Name
                <ContactSectionInput type="text" />
              </ContactSectionLabel>
              <ContactSectionLabel>
                Phone number
                <ContactSectionInput type="tel" />
              </ContactSectionLabel>
              <ContactSectionLabel>
                Description
                <ContactSectionSelect>
                  <option></option>
                  <option value="smm">SMM</option>
                  <option value="developer">Developer</option>
                </ContactSectionSelect>
              </ContactSectionLabel>
              <BussinesButton send>Send</BussinesButton>
            </form>
            <ContactSectionDesc>
              We call back in 10-30 minutes, guaranteed!
            </ContactSectionDesc>
          </ContactSectionWrapper>
        </Container>
      </ContactSection>
    </>
  );
};

export default Contact;
