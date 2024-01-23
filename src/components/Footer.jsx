import React from "react";
import styles from "./styles/Footer.module.css";
import { BiChevronRight, BiCopyright, BiLogoFacebook, BiLogoInstagram, BiLogoWhatsapp, BiLogoYoutube, BiMailSend, BiMap, BiMessage } from "react-icons/bi";
import { FaPlaneArrival, FaPlaneDeparture, FaShoppingBag, FaShopware, FaStore, FaWarehouse } from "react-icons/fa";

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.Section}>
                <div className={styles.Title}>IDN Express</div>
                <a href="/about" className={styles.Item}>
                    <BiChevronRight />
                    Tentang Perusahaan
                </a>
                <a href="/news" className={styles.Item}>
                    <BiChevronRight />
                    Artikel
                </a>
                <a href="/faq" className={styles.Item}>
                    <BiChevronRight />
                    FAQ
                </a>
            </div>
            <div className={styles.Section}>
                <div className={styles.Title}>Layanan</div>
                <a href="/services" className={styles.Item}>
                    <FaPlaneArrival />
                    Impor
                </a>
                <a href="/services" className={styles.Item}>
                    <FaPlaneDeparture />
                    Ekspor
                </a>
                <a href="/services" className={styles.Item}>
                    <FaStore />
                    Jastip
                </a>
                <a href="/services" className={styles.Item}>
                    <FaWarehouse />
                    Dropship
                </a>
            </div>
            <div className={styles.Section}>
                <div className={styles.Title}>Kontak</div>
                <a href="https://wa.me/628123456789" className={styles.Item} target="_blank">
                    <BiLogoWhatsapp />
                    Whatsapp
                </a>
                <a href="mailto:halo@idnexpress.co.id" className={styles.Item}>
                    <BiMailSend />
                    Email
                </a>
                <a href="https://maps.app.goo.gl/PboDBPnW5Fope6KQA" className={styles.Item} style={{alignItems: 'flex-start'}} target="_blank">
                    <BiMap />
                    Koridor Coworking Space, Jalan Tunjungan, Surabaya
                </a>
            </div>

            <div className={styles.SectionFullWidth}>
                <div className={styles.Copyright}>
                    <BiCopyright /> 2024 IDN EXPRESS.
                </div>
                <div className={styles.SocialArea}>
                    <a href="#" className={styles.SocialItem}>
                        <BiLogoFacebook />
                    </a>
                    <a href="#" className={styles.SocialItem}>
                        <BiLogoInstagram />
                    </a>
                    <a href="#" className={styles.SocialItem}>
                        <BiLogoYoutube />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;