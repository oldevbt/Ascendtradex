import Link from "next/link";
import Container from "./Container";
import Image from "next/image";
import Titan from "@/assets/titan.png";

const Header = () => {
  return (
    <Container>
      <div className="flex flex-row justify-between mt-5">
        <Image src={Titan} alt="" />
        <nav className=" font-poppins border rounded-full bg-gray">
          <ul className="flex text-[#98A2B3] font-semibold justify-center py-2 px-3 gap-x-5">
            <li>Home</li>
            <li>About Company</li>
            <li>Features</li>
            <li>Solutions</li>
            <li>Pricing</li>

            <li>Token </li>
          </ul>
        </nav>
        <div className="flex gap-x-2 items-center">
          <Link href="/Login" className="font-semibold">
            Login
          </Link>

          <Link
            href="/SignUp"
            className="bg-white font-semibold rounded-md  text-black py-2 px-4"
          >
            Sign up
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Header;
