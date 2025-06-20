import { FieldValues, useForm } from "react-hook-form";

interface formData {
  name: string;
  age: number;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<formData>();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            {...register("name", { required: true, minLength: 3 })}
          />
          {errors.name?.type === "required" && (
            <p className="text-danger">The name field is required!</p>
          )}
          {errors.name?.type === "minLength" && (
            <p className="text-danger">
              The name must be at lest 3 charactors.
            </p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label"></label>
          <input
            id="age"
            type="number"
            className="form-control"
            {...register("age", { required: true, min: 18 })}
          />
          {errors.age?.type === "min" && (
            <p className="text-danger">The age must be at lest 18.</p>
          )}
          {errors.age?.type === "required" && (
            <p className="text-danger">The age field is required.</p>
          )}
        </div>
        <button disabled={!isValid} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
export default Form;
