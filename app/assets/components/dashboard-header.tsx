import WallectConnectButton from "@/app/components/WallectConnectButton";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex w-[100%] justify-between items-center h-[50px]">
      <Link href="/" className="text-white w-[100%] flex items-start text-[24px] ml-4 font-bold">
        ZENDIA
      </Link>
      <WallectConnectButton noAddressRedirect />
    </div>
  );
};

export default Header;
