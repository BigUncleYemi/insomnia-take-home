import Link from "next/link";
import WallectConnectButton from "./WallectConnectButton";

const Header = () => {
  return (
    <div className="w-[100%] flex items-center fixed top-0 backdrop-blur-lg py-4 px-5 sm:px-10 xl:px-40 bg-[#111314] z-10">
      <Link href="/" className="text-white w-[100%] flex items-start text-[20px] md:text-[32px] font-bold">
        ZENDIA
      </Link>
      <WallectConnectButton showAssetLink />
    </div>
  );
};

export default Header;
