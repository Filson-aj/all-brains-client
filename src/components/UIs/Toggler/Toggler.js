import { HiMenu } from "react-icons/hi";

import { styles } from "../../../assets/constants/data";

const Toggler = ({ toggler }) =>(
    <button type="button" className={styles.btnToggler} onClick={toggler}>
        <HiMenu className="h-6 w-6" />
    </button>
);

export default Toggler;