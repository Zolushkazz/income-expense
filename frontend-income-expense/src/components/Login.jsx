import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export const Login = () => {
  const [userData, setUserData] = useState({});

  const { push } = useRouter();
  const url = "http://localhost:8000/users/login";

  const jumpToPage = () => {
    push("/signupPage");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(url, userData).then((res) => {
     
        if (res.data !== "Email or password is incorrect") {
          push("/");
        } else {
          alert(res.data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <div className="w-full h-full flex ">
      <div className="flex flex-col gap-[60px] items-center w-1/2 h-full justify-center  ">
        <div className="flex items-center gap-4">
          <Image src="/geldLogo.png" width={23} height={23} alt="" />
          <h2 className="text-2xl font-bold">Geld</h2>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-[24px] font-bold">Welcome Back</h3>
          <p className="text-slate-700 text-2xl">
            Welcome back, Please enter your details
          </p>
        </div>
        <div className="flex flex-col w-[45%] gap-4">
          <input
            onChange={handleChange}
            className="w-full px-5 py-3 border-2 rounded-md bg-gray-100 text-2xl"
            name="email"
            type="text"
            placeholder="Email"
          />
          <input
            onChange={handleChange}
            className="w-full px-5 py-3 border-2 rounded-md bg-gray-100 text-2xl"
            name="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-[#0166FF] w-[45%] px-5 py-3 rounded-3xl text-white text-2xl"
        >
          Log in
        </button>

        <div className="flex gap-4">
          <p className="text-xl">Don't have account</p>
          <p
            onClick={jumpToPage}
            className="text-[#0166FF] text-xl cursor-pointer"
          >
            Sign up?
          </p>
        </div>
      </div>
      <div className="bg-[#0166FF] w-1/2 h-full"></div>
    </div>
  );
};
