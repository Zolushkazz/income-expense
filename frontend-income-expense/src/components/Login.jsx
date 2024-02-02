import Image from "next/image";

export const Login = () => {
  return (
    <div className="w-full h-full flex ">
      <div className="flex flex-col gap-[60px] items-center w-1/2 h-full justify-center  ">
        <div className="flex items-center gap-4">
          <Image src="/geldLogo.png" width={23} height={23} />
          <h2 className="text-2xl font-bold">Geld</h2>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-[24px] font-bold">Welcome Back</h3>
          <p className="text-slate-700 text-2xl">
            Welcome back, Please enter your details
          </p>
        </div>
        <div className="flex flex-col w-[30%] gap-4">
          <input
            className="w-full p-5 border-2 rounded-md bg-gray-100 text-2xl"
            type="text"
            placeholder="Email"
          />
          <input
            className="w-full p-5 border-2 rounded-md bg-gray-100 text-2xl"
            type="text"
            placeholder="Password"
          />
        </div>
        <button className="bg-[#0166FF] w-[30%] p-5 rounded-3xl text-white text-2xl">
          Log in
        </button>

        <div className="flex gap-4">
          <p className="text-xl">Don't have account</p>
          <p className="text-[#0166FF] text-xl">Sign up?</p>
        </div>
      </div>
      <div className="bg-[#0166FF] w-1/2 h-full"></div>
    </div>
  );
};
