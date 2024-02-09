import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  return (
    <div className="bg-[#fff] w-full flex justify-center gap-[50%] p-4 py-8">
      <div className="flex gap-6 items-center">
        <Image src="/geldLogo.png" width={48} height={48} alt="" />
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
              <p className=" text-xl" key={item.title}>
                {item.title}
              </p>
            </Link>
          );
        })}
      </div>
      <div className="flex gap-6">
        <button className="bg-[#0166FF] text-2xl text-[#fff] rounded-[25px] px-4 py-2">
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
  );
};
