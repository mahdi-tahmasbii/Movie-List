import { NavbarLinks } from "@/constants/Links/NavbarLinks";
import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavList = () => {
  const pathname = usePathname();

  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 md:h-[61px] md:w-[412px] md:justify-center lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {NavbarLinks.map(({ id, link, title }) => (
        <Typography
          placeholder={""}
          as="li"
          key={id}
          variant="small"
          color="blue-gray"
          className="p-1 font-medium text-[14]"
        >
          <Link
            href={link}
            className={`${pathname === link ? "rounded-[8px] md:h-[45px] md:bg-black12 md:px-2 md:text-white" : "font-regular text-grey75"} flex text-center md:items-center md:justify-center`}
          >
            {title}
          </Link>
        </Typography>
      ))}
    </ul>
  );
};

export default NavList;
