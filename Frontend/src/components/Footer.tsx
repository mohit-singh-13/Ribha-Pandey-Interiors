// import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { address, emailId, phoneNumber } from "../utils/constants";

const Footer = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col text-[1.3rem] font-semibold gap-4 xl:flex-row xl:items-center xl:justify-evenly uppercase px-3">
        <div>
          <p>Ribha Pandey Interiors</p>
        </div>

        <div className="w-full xl:w-[25%]">
          <p>Address</p>
          <p>{address}</p>
        </div>

        <div>
          <p>Contact Number</p>
          <p>{phoneNumber}</p>
        </div>

        <div>
          <p>Email-ID</p>
          <p>{emailId}</p>
        </div>
      </div>

      <div className="w-[90%] mx-auto h-[1px] bg-black"></div>

      <div className="flex text-[4rem] justify-center gap-4">
        {/* <FaSquareXTwitter className="cursor-pointer" /> */}
        <SiGmail
          color="red"
          enableBackground={"true"}
          onClick={() => (window.location.href = `mailto:${emailId}`)}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Footer;
