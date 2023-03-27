import { FaInstagram } from "react-icons/fa";
interface InstagramIconProps {
  size?: string | number;
}

function InstagramIcon({ size = 24 }: InstagramIconProps) {
  return (
    <div className="inline-block">
      <div className="instagram-icon flex items-center cursor-pointer text-xl text-codelife-black-400 fill-codelife-black-400 hover:bg-gradient-to-r from-instagram-0 via-instagram-1 to-instagram-2 bg-clip-text hover:text-opacity-0">
        <svg width={size} height={size} className="instagram-icon">
          <defs>
            <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#596161" />
              <stop offset="100%" stopColor="#596161" />
            </linearGradient>
            <linearGradient id="instagram-gradient-hover" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#F43F5E" />
            </linearGradient>
          </defs>
          <FaInstagram className="instagram-gradient cursor-pointer" fontSize={size} />
        </svg>
        <span className="hidden px-2 sm:block "> @codelifebr</span>
      </div>
    </div>
  );
}

export default InstagramIcon;