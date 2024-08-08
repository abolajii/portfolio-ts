import { MdContactPage, MdEmail } from "react-icons/md";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
// Home.tsx
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 40px 30px 70px;
  padding-bottom: 90px;
  background-color: #2d2d2d;
  color: rgb(204, 204, 204);
  /* height: 100vh; */
  background: linear-gradient(to bottom, #2d2d2d, #222222) !important;

  .small {
    color: rgb(204, 204, 204);
    font-size: 15px;
    margin-bottom: 30px;
  }

  .help {
    margin-bottom: -8px;
  }

  #email {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 768px) {
    padding: 120px 3px;
    .mobile {
      flex-direction: column;
    }
  }
`;

const Heading = styled.h2`
  font-size: 23px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Line = styled.div`
  background: linear-gradient(to left, #2d2d2d, #4caf50);
  height: 4px;
  width: 150px;
  border-radius: 1px;
  margin-bottom: 20px;
  margin-top: 5px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid rgba(0, 255, 0, 0.07); */
  height: 30px;
  width: 30px;
  background: linear-gradient(to left, #2d2d2d, #7e967f);
  /* border-radius: 50%; */
`;

const One = styled.div`
  flex: 1.7;

  @media screen and (max-width: 768px) {
    padding: 20px 30px;
  }
`;

const Two = styled.div`
  flex: 1.3;
  /* height: 700px; */
  margin-right: 40px;
  /* background-color: #4caf50; */

  .bg {
    background: linear-gradient(to bottom, #2d2d2d, rgba(76, 175, 80, 0.06));
    border-radius: 20px;
    padding: 20px;
  }

  @media screen and (max-width: 768px) {
    border-radius: 10px;
    margin: 0;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputRow = styled.div`
  display: flex;
  gap: 10px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const InputField = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid rgba(0, 255, 0, 0.17);

  border-radius: 3px;
  background-color: #2d2d2d;
  color: #ccc;
  font-size: 14px;
  outline: none;
  &:focus {
    border-color: rgba(76, 175, 80, 0.5);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid rgba(0, 255, 0, 0.17);

  border-radius: 4px;
  background-color: #2d2d2d;
  color: #ccc;
  font-size: 14px;
  outline: none;
  resize: none;
  &:focus {
    border-color: rgba(76, 175, 80, 0.5);
  }

  &::placeholder {
    font-family: "Helvetica Neue";
  }
`;

const IconInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: 1px solid rgba(0, 255, 0, 0.17);
  border-radius: 4px;
  background-color: #2d2d2d;
  color: #ccc;
  font-size: 14px;
  outline: none;
  &:focus-within {
    border-color: rgba(76, 175, 80, 0.5);
  }

  &:focus-within {
    border-color: rgba(76, 175, 80, 0.5);
  }
`;

const InputWithIcon = styled.input`
  flex: 1;
  background: none;
  border: none;
  color: #ccc;
  outline: none;
`;

const Select = styled.select`
  background: none;
  border: none;
  color: #ccc;
  outline: none;
  appearance: none;
  margin-right: 5px;
  font-size: 14px;
  width: 60px;
`;

const Separator = styled.span`
  margin: 0 5px;

  color: rgba(76, 175, 80, 0.5);
`;

const InputAndSelectRow = styled.div`
  background-color: #2d2d2d;

  flex: 1;
  padding: 9px 10px;
  border: 1px solid rgba(0, 255, 0, 0.17);

  border-radius: 3px;
  background-color: #2d2d2d;
  color: #ccc;
  font-size: 14px;
  outline: none;
  &:focus {
    border-color: rgba(76, 175, 80, 0.5);
  }

  input {
    background-color: transparent;
    border: none;
    outline: none;
    color: #ccc;
    width: 100%;
    height: 100%;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin: 20px 0 40px;

  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #388e3c;
  }
`;

// Styled-components definitions...

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CheckboxLabel = styled.label<{ color: string }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;

  input {
    margin-right: 10px;
    appearance: none;
    width: 16px;
    height: 16px;
    border: 2px solid ${(props) => props.color};
    border-radius: 3px;
    background-color: transparent;
    cursor: pointer;

    &:checked {
      background-color: ${(props) => props.color};
    }
  }

  span {
    color: #ccc;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 40px;
  margin-bottom: 30px;

  a {
    color: #ccc;
    transition: color 0.3s ease;

    & {
      color: #bdbdbd; /* GitHub */
    }

    &:nth-child(2) {
      color: #0077b5; /* LinkedIn */
    }

    &:nth-child(3) {
      color: #1da1f2; /* Twitter */
    }
  }
`;

const Introduction = styled.p`
  margin: 15px 0;
  font-size: 16px;
  color: #ccc;
  line-height: 1.4;
`;

const Quote = styled.blockquote`
  margin: 20px 0;
  font-style: italic;
  color: #ccc;
  border-left: 2px solid #4caf50;
  padding-left: 15px;

  cite {
    display: block;
    margin-top: 5px;
    font-size: 14px;
    color: #888;
  }
`;

const Contact = () => {
  // State for the entire form
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    checkboxes: {
      frontend: false,
      backend: false,
      mobile: false,
      fullstack: false,
    },
  });

  // Handle input changes
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle checkbox changes
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFormData({
      ...formData,
      checkboxes: {
        ...formData.checkboxes,
        [name]: checked,
      },
    });
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form data submitted:", formData);
    // Add your form submission logic here (e.g., send the data to a server)
  };

  return (
    <Container>
      <div className="flex justify-between mobile">
        <One>
          <div className="flex">
            <div className="mr-md">
              <Heading>CONTACT ME</Heading>
              <Line />
            </div>
            <IconContainer className="flex center">
              <MdContactPage size={20} color="#ffffff" />
            </IconContainer>
          </div>
          <Introduction>
            I'm a full-stack developer with a passion for building responsive
            and dynamic web applications. Feel free to reach out for any
            inquiries or collaboration opportunities!
          </Introduction>
          <p id="email">Email: inquries@adeajayiabolaji.com</p>

          <Quote>
            "Abolaji is a remarkable developer with a deep understanding of both
            frontend and backend technologies. His solutions are always
            innovative and effective."
            <cite>— Adebayo Akande</cite>
          </Quote>
          <Quote>
            "Working with Abolaji was an absolute pleasure. His expertise and
            professionalism are top-notch!"
            <cite>— Yazid Musa</cite>
          </Quote>
          <Quote>
            "Collaborating with Abolaji has been one of the most rewarding
            experiences. His passion and skill set make him a valuable asset to
            any team."
            <cite>— Innocent Oko</cite>
          </Quote>
          <Quote>
            "Abolaji’s attention to detail and dedication to his work is
            unparalleled. He consistently delivers beyond expectations."
            <cite>— Kayode Adeyemi</cite>
          </Quote>

          <SocialIcons>
            <a
              href="https://github.com/abolajii"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/abolaji-ade-ajayi-063b051b9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="https://twitter.com/al_ameen_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={24} />
            </a>
          </SocialIcons>
        </One>
        <Two>
          <div className="bg">
            <Heading>Get in Touch</Heading>
            <p className="small">You can reach me anytime</p>
            <form onSubmit={handleSubmit}>
              <FormContainer>
                <InputRow>
                  <InputField
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  <InputField
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </InputRow>

                <IconInputContainer>
                  <MdEmail size={20} />
                  <InputWithIcon
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </IconInputContainer>

                <InputAndSelectRow className="flex ai-center">
                  <div>
                    <Select name="countryCode" defaultValue="+1">
                      <option value="+1">+1 (US)</option>
                      <option value="+44">+44 (UK)</option>
                      <option value="+91">+91 (India)</option>
                    </Select>
                  </div>
                  <Separator>|</Separator>
                  <div className="flex flex-1">
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone number"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                </InputAndSelectRow>

                <TextArea
                  rows={5}
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                ></TextArea>

                <p className="help">How can I help?</p>
                <CheckboxContainer>
                  <CheckboxLabel color="#4caf50">
                    <input
                      type="checkbox"
                      name="frontend"
                      checked={formData.checkboxes.frontend}
                      onChange={handleCheckboxChange}
                    />
                    <span>Frontend</span>
                  </CheckboxLabel>
                  <CheckboxLabel color="#2196f3">
                    <input
                      type="checkbox"
                      name="backend"
                      checked={formData.checkboxes.backend}
                      onChange={handleCheckboxChange}
                    />
                    <span>Backend</span>
                  </CheckboxLabel>
                  <CheckboxLabel color="#ff5722">
                    <input
                      type="checkbox"
                      name="mobile"
                      checked={formData.checkboxes.mobile}
                      onChange={handleCheckboxChange}
                    />
                    <span>Mobile Development</span>
                  </CheckboxLabel>
                  <CheckboxLabel color="#9c27b0">
                    <input
                      type="checkbox"
                      name="fullstack"
                      checked={formData.checkboxes.fullstack}
                      onChange={handleCheckboxChange}
                    />
                    <span>Fullstack</span>
                  </CheckboxLabel>
                </CheckboxContainer>

                <Button type="submit">Let's get started!</Button>
              </FormContainer>
            </form>
          </div>
        </Two>
      </div>
    </Container>
  );
};

export default Contact;
