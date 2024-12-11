import Link from "next/link";
import styles from "../styles/menu.module.css";
import DropdownMenu from "./dropdownmenu";

export default function Menu() {
  var menuitems = [
    <Link href="/">Home</Link>,
    <Link href="/people">People</Link>,
    <Link href="/research">Research</Link>,
    <Link href="/publications">Publications</Link>,
    <Link href="/demos">Demos</Link>,
    <Link href="/#contact">Teaching</Link>,
    <Link href="/#contact">Community</Link>,
  ];

  return (
    <div>
      <div className={styles.menu}>
        {menuitems.map((e) => (
          <span className={styles.menuitem}>{e}</span>
        ))}
      </div>

      <div className={styles.dropdown}>
        <DropdownMenu>
        {menuitems.map((e) => (
          <div className={styles.dropdownitem}>{e}</div>
        ))}
        </DropdownMenu>
      </div>
    </div>
  );
}
