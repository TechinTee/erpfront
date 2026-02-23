import { useEffect, useState, useRef } from "react";
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
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
                    <NavLink onClick={() => setOpen(false)} to="/" className={styles.logo_full}>
                        Shopping carts
                    </NavLink>
                    <NavLink onClick={() => setOpen(false)} to="/" className={styles.logo_mobile}>
                        Logo
                    </NavLink>
                </div>

                <div className={styles.navbar_center}>
                    <NavLink onClick={() => setOpen(false)} to="/products">
                        Products
                    </NavLink>
                    <NavLink onClick={() => setOpen(false)} to="/status">
                        Status
                    </NavLink>
                    <NavLink onClick={() => setOpen(false)} to="/admin/login">
                        Admin
                    </NavLink>
                </div>

                <div className={styles.navbar_right}>
                    <div className={styles.search_box}>
                        <Search />
                        <input type="text" placeholder="Search products..." />
                    </div>

                    <NavLink onClick={() => setOpen(false)} to="/Cart">
                        <ShoppingCart />
                    </NavLink>

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
                    <li className={styles.search_box_mb} >
                        <Search />
                        <input type="text" placeholder="Search products..." />
                    </li>
                    <li>
                        <NavLink onClick={() => setOpen(false)} to="/products">
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setOpen(false)} to="/status">
                            Status
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setOpen(false)} to="/admin/login">
                            Admin
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav >
    );
}


export default Navbar;