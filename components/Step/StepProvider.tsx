import React, { createContext, useState } from 'react';

export interface IStepContext {
  currentStep: number;
  setCurrentStep: (value: number) => void;
}

export const StepContext = createContext<IStepContext>({
  currentStep: 1,
  setCurrentStep: () => {},
});


function StepProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <StepContext.Provider value={{ currentStep, setCurrentStep }}>
      {children}
    </StepContext.Provider>
  );
}

export default StepProvider;


