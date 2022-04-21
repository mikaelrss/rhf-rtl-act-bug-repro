import React from "react";
import { useForm, useFormState } from "react-hook-form";

interface FormValues {
  title: string;
}

const Form = () => {
  const methods = useForm<FormValues>({
    mode: "onChange",
    defaultValues: { title: "A title" },
  });
  const { handleSubmit, register, control } = methods;
  const { errors } = useFormState({ control });

  return (
    <form onSubmit={handleSubmit(() => {})}>
      <label>
        Title
        <input {...register("title", { required: "Title is required" })} />
        {errors.title && <p>{errors.title.message}</p>}
      </label>
    </form>
  );
};

export default Form;
