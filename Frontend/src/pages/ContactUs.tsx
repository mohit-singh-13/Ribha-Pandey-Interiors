import { FaPhoneAlt } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { TiMail } from "react-icons/ti";
import ContactForm from "../components/ContactForm";
import { address, emailId, phoneNumber } from "../utils/constants";

const ContactUs = () => {
  return (
    <div className="flex justify-between w-full 3xl:w-[80%] 2xxl:w-[90%] mx-auto libre-caslon-text-regular flex-col 2xxl:flex-row gap-[6rem]">
      <div className="text-white w-full text-center flex flex-col gap-[3rem] mt-[3rem] 2xxl:w-[40%]">
        <h2 className="text-[3rem] py-[2rem]">Contact Us</h2>

        <div>
          <div className="flex items-center justify-center gap-2 text-[1.8rem]">
            <IoMdHome />
            <p>Address</p>
          </div>
          <p className="text-[1.6rem]">{address}</p>
        </div>

        <div>
          <div className="flex items-center justify-center gap-2 text-[1.8rem]">
            <FaPhoneAlt />
            <p>Phone</p>
          </div>

          <p className="text-[1.6rem]">{phoneNumber}</p>
        </div>

        <div>
          <div className="flex items-center justify-center gap-2 text-[1.8rem]">
            <TiMail fontSize={"2rem"} />
            <p>Email</p>
          </div>

          <p className="text-[1.6rem]">{emailId}</p>
        </div>
      </div>

      <div className="w-[95%] mx-auto xl:w-[39.4rem] bg-[#0908087D] rounded-[1.75rem]" id="contact">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;

// background: #0908087D;
// box-shadow: -10px 10px 36.5px 1px #000000;
