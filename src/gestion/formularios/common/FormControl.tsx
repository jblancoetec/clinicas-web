import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { Form, FormGroup } from "react-bootstrap";
import { Path, UseFormRegister } from "react-hook-form";
import styles from "./FormControl.module.css";

interface Props<T> {
  label: string;
  placeholder: string;
  id: Path<T>;
  type: string;
  register: UseFormRegister<T>;
  errors: any;
}

const FormControl = <U,>({
  label,
  placeholder,
  id,
  type,
  register,
  errors,
}: Props<U>) => {
  return (
    <FormGroup style={{ marginBottom: "16px" }}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        placeholder={placeholder}
        id={id}
        type={type}
        {...register(id, { required: "Este campo es obligatorio" })}
      />
      <ErrorMessage
        errors={errors}
        name={id}
        render={({ message }) => <div className={styles.Error}>{message}</div>}
      />
    </FormGroup>
  );
};

export default FormControl;
