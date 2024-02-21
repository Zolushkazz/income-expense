import { ModalContext } from "@/context/RecordModal";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import { AddModal } from "../modal/AddModal";

const arr = [
  {
    title: "Dashboard",
    link: "/dashboard",
  },
  {
    title: "Records",
    link: "/records",
  },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);

  const handleModalShow = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="bg-[#fff] w-screen absolute top-0 inset-x-0 px-[23%]">
        <div className="flex justify-between py-2">
          <div className="flex gap-6 items-center">
            <Image src="/geldLogo.png" width={40} height={40} alt="" />
            {arr.map((item) => {
              return (
                <Link
                  style={{
                    color: pathname.includes(item.title.toLowerCase())
                      ? "blue"
                      : "black",
                  }}
                  className="text-black"
                  key={item.link}
                  href={item.link}
                >
                  <p className=" text-md" key={item.title}>
                    {item.title}
                  </p>
                </Link>
              );
            })}
          </div>
          <div className="flex gap-6">
            <button
              onClick={handleModalShow}
              className="bg-[#0166FF] text-md text-[#fff] rounded-[25px] px-4 py-1"
            >
              + Record
            </button>
            <Image
              src="/zoluush.jpeg"
              width={40}
              height={40}
              alt=""
              className="rounded-full object-fit"
            />
          </div>
        </div>
      </div>
      <div className="w-[600%] z-40 absolute inset-x-0 left-20 -top-20">
        {showModal && <AddModal setXbtn={setShowModal} />}
      </div>
    </>
  );
};
