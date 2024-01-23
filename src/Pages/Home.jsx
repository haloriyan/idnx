import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import styles from "./styles/Home.module.css";
import Separator from "../components/Separator";
import { BiBadge, BiBadgeCheck, BiBox, BiComment, BiMobile, BiSearch, BiSolidTruck } from "react-icons/bi";
import config from "../config";
import Scroller from "../components/Scroller";
import Input from "../components/Input";
import Button from "../components/Button";
import Clients from "../Partials/Clients";

const Home = () => {
    const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];

    const features = [
        {
            icon: <BiBadgeCheck />,
            title: "Murah, Cepat dan Aman",
            description: "Hanya 3-5 hari kerja paket sudah sampai di tujuan"
        },
        {
            icon: <BiSolidTruck />,
            title: "Gratis Pickup",
            description: "Pelanggan tidak perlu repot mengantar paket karena kami pickup gratis"
        },
        {
            icon: <BiBox />,
            title: "Gratis Packing",
            description: "Agar barang lebih aman maka kami bisa bantu packing tanpa biaya tambahan"
        },
        {
            icon: <BiComment />,
            title: "Fast Respon",
            description: "Customer service kami siap melayani dan menjawab semua pertanyaan Anda dengan responsif"
        },
        {
            icon: <BiSearch />,
            title: "Lacak Kiriman Real Time",
            description: "Sistem pelacakan pengiriman yang mudah dan real time"
        },
        {
            icon: <BiMobile />,
            title: "Transaksi Melalui Aplikasi",
            description: "Transaksi pengiriman dapat dilakukan dari mana saja menggunakan smartphone Anda"
        },
    ]

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

    const testimonials = [
        {
            name: "Elizabeth Olsen",
            body: "Saya sangat puas dengan layanan IDN Express. Pengiriman paket saya sampai tujuan dengan cepat dan aman. Pelayanan pelanggan yang ramah dan responsif membuat pengalaman saya menggunakan jasa mereka sangat menyenangkan. Terima kasih IDN Express, saya akan menggunakan layanan Anda lagi di masa depan!",
            photo: "https://ew.com/thmb/gmAk1GjSMjEF2qIkOZoW6hR70Mg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Elizabeth-Olsen-01-052523-8882960a392540918236a35f7a5ead92.jpg"
        },
        {
            name: "Andre Onana",
            body: "IDN Express benar-benar layanan logistik yang handal. Paket saya tidak hanya sampai tepat waktu, tetapi juga dalam kondisi yang sangat baik. Sistem pelacakan mereka memberi saya kepercayaan bahwa paket saya selalu berada dalam perjalanan yang tepat. Saya sangat merekomendasikan IDN Express kepada semua orang yang membutuhkan layanan pengiriman terbaik.",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Andr%C3%A9_Onana.jpg/640px-Andr%C3%A9_Onana.jpg"
        },
        {
            name: "Kathrine Dennings",
            body: "Pelayanan IDN Express luar biasa! Pengiriman paket saya dari Bandung ke Medan berjalan sangat lancar. Harga yang kompetitif dan proses pengiriman yang efisien membuat saya sangat puas. Terima kasih IDN Express, Anda benar-benar memudahkan hidup saya!",
            photo: "https://ca-times.brightspotcdn.com/dims4/default/515e1d7/2147483647/strip/true/crop/600x399+0+0/resize/1200x798!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F03%2F70%2F94768fe13af7bab009cd6b20095a%2Fla-xpm-photo-2013-nov-05-la-et-mn-thor-kat-dennings-peoples-choice-20131105"
        },
        {
            name: "Robert Downey Jr",
            body: "Saya telah menggunakan jasa IDN Express untuk beberapa kali pengiriman bisnis, dan setiap kali mereka memberikan kinerja yang sangat baik. Keandalan dan ketepatan waktu pengiriman mereka membuat bisnis saya berjalan lebih efisien. IDN Express adalah mitra logistik yang sangat saya percayai.",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg/1200px-Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg"
        },
        {
            name: "Julius Robert Oppenheimer",
            body: "IDN Express adalah pilihan utama saya untuk layanan pengiriman. Mereka tidak hanya mengutamakan kecepatan pengiriman, tetapi juga keamanan paket. Saya merasa tenang mengetahui bahwa paket saya dalam perjalanan dengan IDN Express. Terima kasih atas layanan terbaik yang selalu diberikan!",
            photo: "https://asset.kompas.com/crops/dsoejvYrxS1IwAwQY8_uKLz4jco=/72x45:611x404/1200x800/data/photo/2021/10/19/616e6a37873b1.jpeg"
        },
    ]

    useEffect(() => {
        document.title = "Home - IDN Express";
    }, []);

    return (
        <>
            <Header />
            <div className="content">
                <Slide>
                    {
                        images.map((img, i) => (
                            <div key={i} className={`each-slide-effect`} style={{height: 450}}>
                                <img src={img} alt={`Image ${i}`} />
                            </div>
                        ))
                    }
                </Slide>

                <div className={`${styles.Section} ${styles.TopSection}`}>
                    <div className={styles.TopItem}>
                        <div>Lacak Nomor Resi</div>
                        <div className="inline">
                            <div style={{flexGrow: 1,display: 'flex'}}>
                                <Input label="" />
                            </div>
                            <Button>Cari</Button>
                        </div>
                    </div>
                    <div className={styles.TopItem}>
                        <div style={{marginBottom: 10}}>Simulasi Harga dan Regulasi Negara</div>
                        <Button>Cek Ongkir</Button>
                    </div>
                </div>

                <div className={`${styles.Section} ${styles.About}`}>
                    <img src="/logo.jpg" alt="About Illustration" className={styles.AboutIllustration} />
                    <div className={styles.AboutContent}>
                        <div className={styles.SectionTitle}>Tentang IDN Express</div>
                        <Separator color="#e40045" height={4} style={{borderRadius: 99}} width="15%" margin="20px 0px 40px 0px" />
                        <div className={styles.AboutDescription}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur ab eligendi maxime placeat, optio debitis necessitatibus nisi assumenda provident doloremque dolore recusandae iure repellat ad ipsa odit dolorem voluptatem velit.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur ab eligendi maxime placeat, optio debitis necessitatibus nisi assumenda provident doloremque dolore recusandae iure repellat ad ipsa odit dolorem voluptatem velit.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur ab eligendi maxime placeat, optio debitis necessitatibus nisi assumenda provident doloremque dolore recusandae iure repellat ad ipsa odit dolorem voluptatem velit.
                        </div>
                    </div>
                </div>
                <div className={`${styles.Section} ${styles.Features}`}>
                    <div className={styles.SectionTitle} style={{textAlign: 'center',marginBottom: -20}}>Kenapa Harus IDN Express</div>
                    <div style={{fontSize: 14,color: '#8492a6',textAlign: 'center'}}>Semakin berat paketnya, semakin murah harganya</div>
                    <div className={styles.FeatureContainer}>
                        {
                            features.map((feat, f) => (
                                <div className={styles.FeatureItem} key={f}>
                                    <div className={styles.FeatureIcon}>{feat.icon}</div>
                                    <div className={styles.FeatureTitle}>{feat.title}</div>
                                    <div className={styles.FeatureDescription}>{feat.description}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={`${styles.Section}`}>
                    <div className={styles.SectionTitle} style={{textAlign: 'center',marginBottom: -20}}>Apa Kata Mereka?</div>
                    <div style={{fontSize: 14,color: '#8492a6',textAlign: 'center'}}>Semakin berat paketnya, semakin murah harganya</div>
                    <Scroller events={testimonials} count={3} />
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

export default Home;