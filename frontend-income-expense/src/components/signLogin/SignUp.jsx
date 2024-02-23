import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export const SignUp = (props) => {
  const { button } = props;

  const [userData, setUserData] = useState({});
  const [confirmPass, setConfirmPass] = useState({});

  const { push } = useRouter();
  const url = "http://localhost:8000/users/signup";

  const jumpToPage = () => {
    push("/login");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserData({ ...userData, [name]: value });

    if (name === "password" || name === "rePassword") {
      setConfirmPass({ ...confirmPass, [name]: value });
    }
  };

  const { password, rePassword } = confirmPass;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== rePassword) return alert("Pass buruu");
    try {
      await axios.post(url, userData);
      button();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="w-full h-full flex items-center justify-center "
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-[60px] items-center w-1/2 h-full justify-center  ">
        <div className="flex items-center gap-4">
          <Image src="/geldLogo.png" width={23} height={23} alt="" />
          <h2 className="text-3xl font-bold">Geld</h2>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-3xl font-bold">Create Geld account</h3>
          <p className="text-[#334155] text-xl">
            Sign up below to create your Wallet account
          </p>
        </div>
        <div className="flex flex-col w-[45%] gap-6">
          <input
            onChange={handleChange}
            className="w-full px-5 py-3 border-2 rounded-md bg-gray-100 text-2xl"
            name="username"
            type="text"
            placeholder="Name"
            required
          />
          <input
            onChange={handleChange}
            className="w-full px-5 py-3 border-2 rounded-md bg-gray-100 text-2xl"
            name="email"
            type="email"
            placeholder="Email"
            required
          />
          <input
            onChange={handleChange}
            className="w-full px-5 py-3 border-2 rounded-md bg-gray-100 text-2xl"
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          <input
            onChange={handleChange}
            className="w-full px-5 py-3 border-2 rounded-md bg-gray-100 text-2xl"
            name="rePassword"
            type="password"
            placeholder="Re-password"
            required
          />
          <button
            type="submit"
            className="bg-[#0166FF] w-full px-5 py-3 rounded-3xl text-white text-2xl"
          >
            Sign Up
          </button>
        </div>
        <div className="flex gap-4">
          <p className="text-xl">Already have an account?</p>
          <p
            onClick={jumpToPage}
            className="text-[#0166FF] text-xl cursor-pointer"
          >
            Log in
          </p>
        </div>
      </div>
      <div className="bg-[#0166FF]  w-1/2 h-screen"></div>
    </form>
  );
};
