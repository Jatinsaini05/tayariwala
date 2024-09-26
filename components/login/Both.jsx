import React, { useEffect, useState } from "react";
import LoginPassword from "./LoginPassword";
import Register from "./Register";
import Otp from "./Otp";
import { Button, ButtonGroup } from "@nextui-org/react"; // Import from @nextui-org/react
import ForgetPassword from "./ForgetPassword";

export default function Both({ initialScreen }) {
  const options = ["Password", "Otp"];
  const [formName, setFormName] = useState(options[0]); // Initial state for form selection
  const [screen, setScreen] = useState("LOGIN"); // Initial state for screen

  useEffect(() => {
    setScreen(initialScreen);
  }, [initialScreen]);

  let content;
  if (screen === "LOGIN") {
    content = (
      <>
        <div>
          <div className="bg-[#071e63] rounded-t-lg font-semobold flex items-center justify-start  pt-[5px] pb-[5px]">
            <ButtonGroup className="ml-[6px]">
              {options.map((option, index) => (
                <Button
                  key={index}
                  size="sm" // equivalent to your text-xs sm:text-sm
                  className={`${
                    formName === option
                      ? "bg-[#ea580c] text-white"
                      : "bg-white text-[#071e63]"
                  } font-bold pt-[3px] pb-[5px]`} // Conditional styling for selected option
                  onPress={() => setFormName(option)} // Update formName on click
                >
                  {option}
                </Button>
              ))}
            </ButtonGroup>
          </div>
        </div>
      </>
    );
  } else {
    content = "";
  }

  return (
    <>
      {content}

      {screen === "FORGOT_PASSWORD" ? (
        <ForgetPassword changeScreen={(e) => setScreen(e)} />
      ) : screen === "REGISTER" ? (
        <Register changeScreen={(e) => setScreen(e)} />
      ) : formName === options[0] && screen === "LOGIN" ? (
        <LoginPassword changeScreen={(e) => setScreen(e)} />
      ) : formName === options[1] && screen === "LOGIN" ? (
        <Otp changeScreen={(e) => setScreen(e)} />
      ) : (
        <p>Unknown status.</p>
      )}
    </>
  );
}
