import { createContext, useContext, useState } from "react";

const Context = createContext();

export const MultiStepFormProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  function nextStep() {
    if (step < 2) {
      setStep((prev) => prev + 1);
    }
  }
  function prevStep() {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  }

  return (
    <Context.Provider
      value={{ formData, setFormData, step, nextStep, prevStep }}
    >
      {children}
    </Context.Provider>
  );
};

export const useMultiStepFormContext = () => {
  return useContext(Context);
};
