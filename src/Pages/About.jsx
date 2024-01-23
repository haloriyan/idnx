import React, { useEffect } from "react";
import Header from "../components/Header";
import Jumbo from "../components/Jumbo";
import styles from "./styles/Home.module.css";
import Footer from "../components/Footer";
import Separator from "../components/Separator";
import Clients from "../Partials/Clients";

const About = () => {
    useEffect(() => {
        document.title = "Tentang Perusahaan - IDN Express";
    }, []);

    const clients = [
        {logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Honda_Logo.svg/1276px-Honda_Logo.svg.png"},
        {logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Logo_Siantar_Top.svg/2560px-Logo_Siantar_Top.svg.png"},
        {logo: "https://seeklogo.com/images/K/kapal-api-logo-BDA931D774-seeklogo.com.png"},
        {logo: "https://down-id.img.susercontent.com/file/3849ff2d104b6f3ab18cda4b735f59cb"},
        {logo: "https://vidakita.com/app/uploads/2018/03/Logo-Wardah.jpeg"},
        {logo: "https://ingredio.id/wp-content/uploads/2022/06/Logo-MS-Glow.png"},
        {logo: "https://seeklogo.com/images/K/kyt-helmet-logo-D92F894FA9-seeklogo.com.png"},
        {logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Cheetos_logo.svg/1024px-Cheetos_logo.svg.png"},
        {logo: "https://img.freepik.com/premium-vector/rooster-logo-gives-thumbs-up-with-words-ayam-geprek-fried-chicken_2987-139.jpg"}
    ];

    return (
        <>
            <Header active="about" child={'about'} />
            <div className="content">
                <Jumbo
                    withNavigation={true} breadcrumb={'Tentang'}
                    background="/shipping.jpg"
                    title={
                        <>
                            <div>Tentang IDN Express</div>
                        </>
                    }
                />

                <div className={`${styles.Section} ${styles.About}`}>
                    <img src="/logo.jpg" alt="About Illustration" className={styles.AboutIllustration} />
                    <div className={styles.AboutContent}>
                        <div className={styles.SectionTitle}>Tentang Perusahaan</div>
                        <Separator color="#e40045" height={4} style={{borderRadius: 99}} width="15%" margin="20px 0px 40px 0px" />
                        <div className={styles.AboutDescription}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur ab eligendi maxime placeat, optio debitis necessitatibus nisi assumenda provident doloremque dolore recusandae iure repellat ad ipsa odit dolorem voluptatem velit.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur ab eligendi maxime placeat, optio debitis necessitatibus nisi assumenda provident doloremque dolore recusandae iure repellat ad ipsa odit dolorem voluptatem velit.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur ab eligendi maxime placeat, optio debitis necessitatibus nisi assumenda provident doloremque dolore recusandae iure repellat ad ipsa odit dolorem voluptatem velit.
                        </div>
                    </div>
                </div>

                <div className={styles.Section}>
                    <div className={styles.SectionTitle}>Visi dan Misi</div>
                    <div className="inline" style={{marginTop: 10,alignItems: 'flex-start'}}>
                        <div style={{display: 'flex',flexDirection: 'column',flexGrow: 1}}>
                            <div className={styles.SectionTitle} style={{fontSize: 18,marginBottom: 20}}>Visi</div>
                            <div style={{lineHeight: '28px'}}>
                                Menjadi perusahaan Nasional yang terdepan, terbesar, dan bertaraf Internasional untuk jasa pengiriman internasional, dengan memberikan layanan prima kepada pelanggan dan dukungan teknologi informasi terkini. 
                            </div>
                        </div>
                        <div style={{display: 'flex',flexDirection: 'column',flexGrow: 1}}>
                            <div className={styles.SectionTitle} style={{fontSize: 18,marginBottom: 20}}>Misi</div>
                            <div style={{display: 'flex',flexDirection: 'column',gap: 20}}>
                                <li>Menghasilkan layanan jasa pengiriman berkualitas dan mampu memberikan solusi inovatif berbasis teknologi informasi terkini.</li>
                                <li>Memudahkan setiap orang untuk mengirim paket ke Luar Negeri dengan cepat dan harga terjangkau.</li>
                                <li>Meningkatkan nilai ekspor nasional</li>
                                <li>Mengembangkan kompetensi keahlian Sumber Daya Manusia agar unggul, dan profesional di bidangnya.</li>
                                <li>Mengembangkan jaringan mitra kerja sama dii berbagai negara di dunia.</li>
                                <li>Berperan aktif menunjang kebijakan dan program pemerintah dalam ekosistem logistik </li>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.Section}>
                    <div className={styles.SectionTitle} style={{textAlign: 'center',marginBottom: -20}}>Pelanggan Kami</div>
                    <div style={{fontSize: 14,color: '#8492a6',textAlign: 'center'}}>Telah dipercaya oleh puluhan brand di Indonesia</div>
                    <Clients clients={clients} />
                </div>

                <Footer />
            </div>
        </>
    )
}

export default About;