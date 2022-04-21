import React from "react";
import { useForm, useFormState, FormProvider } from "react-hook-form";

import css from "./Form.module.css";

interface FormValues {
  title: string;
}

const Form = () => {
  const methods = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      title: "Some title",
    },
  });
  const { handleSubmit, register, control } = methods;
  const { errors } = useFormState({ control });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit((values) => {
          console.log(values);
        })}
        className={css.form}
      >
        <label className={css.field}>
          Title
          <input
            type="text"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && <p>{errors.title.message}</p>}
        </label>
      </form>
    </FormProvider>
  );
};

export default Form;
