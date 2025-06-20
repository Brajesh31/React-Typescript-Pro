// import { useForm, SubmitHandler } from "react-hook-form";

// type Inputs = {
//   example: string;
//   exampleRequired: string;
// };

// export default function Form2() {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm<Inputs>();

//   const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

//   console.log(watch("example")); // watch input value by passing the name of it

//   return (
//     /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* register your input into the hook by invoking the "register" function */}
//       <input defaultValue="test" {...register("example")} />

//       {/* include validation with required or other standard HTML validation rules */}
//       <input {...register("exampleRequired", { required: true })} />
//       {/* errors will return when field validation fails  */}
//       {errors.exampleRequired && <span>This field is required</span>}

//       <input type="submit" />
//     </form>
//   );
// }

// import ReactDOM from "react-dom";
// import { useForm, SubmitHandler } from "react-hook-form";

// enum GenderEnum {
//   female = "female",
//   male = "male",
//   other = "other",
// }

// interface IFormInput {
//   firstName: string;
//   gender: GenderEnum;
// }

// export default function From2() {
//   const { register, handleSubmit } = useForm<IFormInput>();
//   const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

//   return (
//     <>
//       <p>{}</p>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <label>First Name</label>
//         <input {...register("firstName")} />
//         <label>Gender Selection</label>
//         <select {...register("gender")}>
//           <option value="female">female</option>
//           <option value="male">male</option>
//           <option value="other">other</option>
//         </select>
//         <input type="submit" />
//       </form>
//     </>
//   );
// }

// import { useForm, SubmitHandler } from "react-hook-form";

// interface IFormInput {
//   firstName: string;
//   lastName: string;
//   age: number;
// }

// export default function Form2() {
//   const { register, handleSubmit } = useForm<IFormInput>();

//   const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("firstName", { required: true, maxLength: 20 })} />
//       <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
//       <input type="number" {...register("age", { min: 18, max: 99 })} />
//       <input type="submit" />
//     </form>
//   );
// }

// import { useForm } from "react-hook-form";

// export default function Form2() {
//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//   } = useForm();
//   const onSubmit = (data: any) => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input
//         {...register("firstName", { required: true })}
//         aria-invalid={errors.firstName ? "true" : "false"}
//       />
//       {errors.firstName?.type === "required" && (
//         <p role="alert">First name is required</p>
//       )}

//       <input
//         {...register("mail", { required: "Email Address is required" })}
//         aria-invalid={errors.mail ? "true" : "false"}
//       />
//       {errors.mail && <p role="alert">{errors.mail.message}</p>}

//       <input type="submit" />
//     </form>
//   );
// }

// import * as React from "react";
// import { useForm } from "react-hook-form";

// type FormData = {
//   firstName: string;
//   lastName: string;
// };

// export default function Form2() {
//   const {
//     register,
//     setValue,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormData>();
//   const onSubmit = handleSubmit((data) => console.log(data));
//   // firstName and lastName will have correct type

//   return (
//     <form onSubmit={onSubmit}>
//       <label>First Name</label>
//       <input {...register("firstName")} />
//       <label>Last Name</label>
//       <input {...register("lastName")} />
//       <button
//         type="button"
//         onClick={() => {
//           setValue("lastName", "luo"); // ✅
//           setValue("firstName", true); // ❌: true is not string
//           errors.bill; // ❌: property bill does not exist
//         }}
//       >
//         SetValue
//       </button>
//     </form>
//   );
// }
