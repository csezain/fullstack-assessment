import React from "react";
import {
  MultiStepFormProvider,
  useMultiStepFormContext,
} from "./useMultiStepFormContext";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import { Button } from "@/components/ui/button";

const MultiStepForm = () => {
  return (
    <MultiStepFormProvider>
      <div className="max-w-2xl p-10 mx-auto">
        <FormContainer />

        {/* <Footer /> */}
      </div>
    </MultiStepFormProvider>
  );
};

const FormContainer = () => {
  const { formData, setFormData, step, nextStep, prevStep } =
    useMultiStepFormContext();
  if (step === 1) {
    return <FormOne />;
  }

  if (step === 2) {
    return <FormTwo />;
  }
};

const Footer = () => {
  const { step, nextStep, prevStep } = useMultiStepFormContext();
  return (
    <div className="flex justify-between">
      <Button onClick={prevStep} variant="outline">
        Back
      </Button>
      <Button onClick={nextStep}>{step === 2 ? "Submit" : "Next"}</Button>
    </div>
  );
};

export default MultiStepForm;
