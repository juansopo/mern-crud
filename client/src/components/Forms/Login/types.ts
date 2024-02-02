import { ReactEventHandler } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export interface LoginFormProps {
  register: UseFormRegister<FieldValues>;
  onsubmit: ReactEventHandler;
  errors: FieldErrors<FieldValues>;
  signinError: string[];
}
