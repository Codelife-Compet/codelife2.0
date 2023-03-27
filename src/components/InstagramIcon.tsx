import { FaInstagram } from "react-icons/fa";
import styles from "@/styles/Home.module.css";
interface InstagramIconProps {
  size?: string | number;
  id?: string
}

function InstagramIcon({ size = 24, id }: InstagramIconProps) {
  return (
    <div className={styles["instagram-icon-container"]}>
      <div className={styles["instagram-icon"]}>
        <svg width={size} height={size} className={styles["instagram-icon"]}>
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
          <FaInstagram className={`${styles["instagram-gradient"]} `} fontSize={size} />
        </svg>
        {id && <span className="hidden px-2 sm:block "> {id}</span>}
      </div>
    </div>
  );
}

export default InstagramIcon;