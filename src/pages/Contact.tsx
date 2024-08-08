// import React from "react";

import { MdContactPage } from "react-icons/md";
import { MdEmail } from "react-icons/md";
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
  color: #4caf50;
  margin-bottom: 8px;
`;

const Line = styled.div`
  background: linear-gradient(to right, #2d2d2d, #4caf50);
  height: 4px;
  width: 150px;
  border-radius: 1px;
  margin-bottom: 30px;
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
  padding: 40px 30px;

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
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #388e3c;
  }
`;

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
  }

  span {
    color: #ccc;
  }
`;

const Contact = () => {
  return (
    <Container>
      <div className="flex justify-between mobile">
        <One>
          {/* <div className="flex">
            <div className="mr-md">
              <Heading>CONTACT ME</Heading>
              <Line />
            </div>
            <IconContainer className="flex center">
              <MdContactPage size={20} color="#ffffff" />
            </IconContainer>
          </div> */}
        </One>
        <Two>
          <div className="bg">
            <Heading>Get in Touch</Heading>
            <p className="small">You can reach me anytime</p>
            <FormContainer>
              <InputRow>
                <InputField type="text" placeholder="First Name" />
                <InputField type="text" placeholder="Last Name" />
              </InputRow>

              <IconInputContainer>
                <MdEmail size={20} />
                <InputWithIcon type="email" placeholder="Email" />
              </IconInputContainer>

              <InputAndSelectRow className="flex ai-center">
                <div>
                  <Select>
                    <option value="+1">+1 (US)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+91">+91 (India)</option>
                  </Select>
                </div>
                <Separator>|</Separator>
                <div className="flex flex-1">
                  <input placeholder="Phone number" />
                </div>
              </InputAndSelectRow>

              <TextArea rows={5} placeholder="Your Message"></TextArea>

              <p>How can I help?</p>
              <CheckboxContainer>
                <CheckboxLabel color="#4caf50">
                  <input type="checkbox" value="frontend" />
                  <span>Frontend</span>
                </CheckboxLabel>
                <CheckboxLabel color="#2196f3">
                  <input type="checkbox" value="backend" />
                  <span>Backend</span>
                </CheckboxLabel>
                <CheckboxLabel color="#ff5722">
                  <input type="checkbox" value="mobile" />
                  <span>Mobile Development</span>
                </CheckboxLabel>
                <CheckboxLabel color="#9c27b0">
                  <input type="checkbox" value="fullstack" />
                  <span>Fullstack</span>
                </CheckboxLabel>
              </CheckboxContainer>
              <Button>Let's get started!</Button>
            </FormContainer>
          </div>
        </Two>
      </div>
    </Container>
  );
};

export default Contact;
