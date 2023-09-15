import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-10 mt-8">
      <div className="flex gap-6">
        <FaFacebookSquare />
        <FaInstagram />
        <FaTwitter />
        <FaYoutube />
      </div>
      <div className="text-sm flex gap-4">
        <p>Conditions of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
      </div>
      <div className="text-sm">
        <p>© 2023 MovieBox by Abiero Alvin </p>
      </div>
    </div>
  );
};

export default Footer;
