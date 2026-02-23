import { useEffect, useState, useRef } from "react";
import styles from '../styles/Navbar.module.css'
import { ShoppingCart, Search, Menu, X, Moon, Sun } from 'lucide-react';


function Navbar() {

    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const [moon, setMoon] = useState(false);
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
          if (
            open &&
            menuRef.current &&
            !menuRef.current.contains(event.target as Node)
          ) {
            setOpen(false);
          }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [open]);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <nav className={styles.navbar} ref={menuRef}>
            <div className={styles.navbar_top}>
                <div className={styles.navbar_left}>
                    <a className={styles.logo_full} href="/">Shopping carts</a>
                    <span className={styles.logo_mobile}>Logo</span>
                </div>

                <div className={styles.navbar_center}>
                    <a href="/Home">Home</a>
                    <a href="/Products">Products</a>
                    <a href="/Status">Status</a>
                </div>

                <div className={styles.navbar_right}>
                    <div className={styles.search_box}>
                        <Search />
                        <input type="text" placeholder="Search products..." />
                    </div>

                    <a href="/Cart">
                        <ShoppingCart />
                    </a>
                    <button
                        onClick={() =>
                            setTheme(theme === "dark" ? "light" : "dark")
                        }
                    >
                        <span onClick={() => setMoon(!moon)}>{moon ? (
                            <Moon />
                        ) : (
                            <Sun />
                        )}</span>
                    </button>
                    <button
                        className={styles.menu_button}
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <X />
                        ) : (
                            <Menu />
                        )}
                    </button>

                </div>
            </div>
            <div className={`${styles.mobile_menu} ${open ? styles.open : ""}`}>
                <ul>
                    <li>
                        <Search className={styles.search_box_mb} />
                        <input type="text" placeholder="Search products..." />
                    </li>
                    <li>
                        <a href="/Home">Home</a>
                    </li>
                    <li>
                        <a href="/Products">Products</a>
                    </li>
                    <li>
                        <a href="/Status">Status</a>
                    </li>
                </ul>
            </div>
        </nav >
    );
}


export default Navbar;