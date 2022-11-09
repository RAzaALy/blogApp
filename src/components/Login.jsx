import React from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { login } from "../app/loginSlice";

const validationSchema = yup.object({
  username: yup.string().required("Required"),
  email: yup.string().email("Not a proper email").required("Required"),
  password: yup.string().required("Required"),
});
const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });
  const onLogin = ({ username, email, password }) => {
    dispatch(login({ username, email, password, logedin: true }));
    reset();
    history.push('/home')
  };
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 class="title-font font-medium text-3xl text-gray-900">
            Slow-carb next level shoindcgoitch ethical authentic, poko scenester
          </h1>
          <p class="leading-relaxed mt-4">
            Poke slow-carb mixtape knausgaard, typewriter street art gentrify
            hammock starladder roathse. Craies vegan tousled etsy austin.
          </p>
        </div>
        <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
            Sign In
          </h2>
          <form onSubmit={handleSubmit(onLogin)}>
            <div class="relative mb-4">
              <label for="full-name" class="leading-7 text-sm text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                ref={register}
                id="full-name"
                name="username"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                ref={register}
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="password" class="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                ref={register}
                name="password"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              type="submit"
              class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
