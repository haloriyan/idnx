import React, { useState } from "react";
import styles from "./styles/Header.module.css";
import { BiChevronDown, BiHome, BiMenu } from "react-icons/bi";

const Header = ({active = 'home', sub}) => {
    const [menuActive, setMenuActive] = useState(false);
    return (
        <div className={styles.Header}>
            <div className={styles.LogoArea}>
                <img src="/logo.png" alt="Logo IDN Express" className={styles.Logo} />
            </div>
            <div className={styles.MenuToggler} onClick={() => setMenuActive(!menuActive)}>
                <BiMenu />
            </div>
            <div className={`${styles.Menu} ${menuActive ? styles.MenuActive : null}`}>
                <a href="/" className={`${styles.MenuItem} ${active === 'home' ? styles.MenuItemActive : null}`}>
                    Home
                </a>
                <a href="#" className={`${styles.MenuItem} ${active === 'about' ? styles.MenuItemActive : null}`}>
                    Tentang <BiChevronDown />
                    <ul className={styles.SubMenu}>
                        <a href="/about" className={`${styles.MenuItem} ${sub === 'about' ? styles.SubMenuItemActive : null}`}>
                            Tentang Perusahaan
                        </a>
                        <a href="/services" className={`${styles.MenuItem} ${sub === 'services' ? styles.SubMenuItemActive : null}`}>
                            Layanan Kami
                        </a>
                    </ul>
                </a>
                <a href="#" className={`${styles.MenuItem} ${active === 'info' ? styles.MenuItemActive : null}`}>
                    Informasi <BiChevronDown />
                    <ul className={styles.SubMenu}>
                        <a href="/faq" className={`${styles.MenuItem} ${sub === 'faq' ? styles.SubMenuItemActive : null}`}>
                            FAQ
                        </a>
                        <a href="/news" className={`${styles.MenuItem} ${sub === 'news' ? styles.SubMenuItemActive : null}`}>
                            Artikel
                        </a>
                        <a href="/privacy" className={`${styles.MenuItem} ${sub === 'privacy' ? styles.SubMenuItemActive : null}`}>
                            Kebijakan Privasi
                        </a>
                        <a href="/return-policy" className={`${styles.MenuItem} ${sub === 'return-policy' ? styles.SubMenuItemActive : null}`}>
                            Kebijakan Pengembalian
                        </a>
                        <a href="/terms" className={`${styles.MenuItem} ${sub === 'terms' ? styles.SubMenuItemActive : null}`}>
                            Syarat & Ketentuan
                        </a>
                    </ul>
                </a>
                <a href="/contact" className={`${styles.MenuItem} ${active === 'contact' ? styles.MenuItemActive : null}`}>
                    Kontak
                </a>
            </div>
        </div>
    )
}

export default Header;