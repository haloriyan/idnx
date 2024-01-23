import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Jumbo from "../components/Jumbo";
import styles from "./styles/Home.module.css";
import faqStyles from "./styles/FAQ.module.css";
import { BiPlus, BiX } from "react-icons/bi";

const FAQ = () => {
    const [index, setIndex] = useState(null);

    useEffect(() => {
        document.title = "FAQ - IDN Express";
    }, []);

    const faqs = [
        {
            question: "IDN Express bisa mengirim barang ke negara mana saja?",
            answer: "IDN Express dapat mengirimkan barang ke seluruh dunia dengan harga yang terjangkau. Kami paling sering mengirimkan ke negara Taiwan, Hongkong, Malaysia, Singapura, Timur Tengah, Korea Selatan, dan Jepang. Hal tersebut didukung dengan banyaknya mitra kami dari UMKM dan Tenaga Kerja / Pekerja Migran Indonesia di negara tersebut"
        },
        {
            question: "Bagaimana mengirim barang ke luar negeri melalui IDN Express?",
            answer: "Anda dapat konsultasikan tentang pengiriman melalui chat whatsapp ke nomor kami di 0811-1353-585. Admin kami akan membantu menjelaskan mengenai regulasi pengiriman, estimasi waktu, tarif, packing barang dan request pick up barang. Untuk pick up barang, saat ini kami baru bisa melayani penjemputan di wilayah Jakarta dan sekitarnya."
        },
        {
            question: "Barang apa saja yang tidak boleh dikirimkan ke luar negeri?",
            answer: "Obat-obatan, narkoba, rokok, senjata, barang yang bersifat pornografi, dan lain-lain."
        },
        {
            question: "Apa perbedaan dari berat aktual dan berat volume?",
            answer: "Berat aktual adalah berat asli dari barang dan berat volume merupakan berat dengan mengukur dimensi barang / kemasan barang dengan rumus: Panjang (cm) x Lebar (cm) x Tinggi (cm) / 5000."
        },
        {
            question: "Apa bentuk tanggung jawab dari IDN Express apabila barang saya hilang atau rusak?",
            answer: "Kami telah bekerja sama dengan asuransi terbaik sehingga kami dapat membantu klaim atas barang Anda"
        }
    ];

    return (
        <>
            <Header active="info" child={'faq'} />
            <div className="content">
                <Jumbo
                    withNavigation={true} breadcrumb={'FAQ'}
                    background="/shipping.jpg"
                    title={
                        <>
                            <div>Frequently Asked Questions</div>
                        </>
                    }
                />

                <div className={styles.Section}>
                    <div className={styles.SectionTitle} style={{textAlign: 'center',marginBottom: -20}}>Pertanyaan Umum</div>
                    <div style={{fontSize: 14,color: '#8492a6',textAlign: 'center'}}>Kami memiliki jawaban dari semua pertanyaan Anda</div>

                    <div className={faqStyles.Container}>
                        {
                            faqs.map((faq, f) => (
                                <div key={f} className={faqStyles.Item}>
                                    <div className={faqStyles.Question} onClick={() => setIndex(f === index ? null : f)}>
                                        <div style={{display: 'flex',flexGrow: 1,color: f === index ? '#e40045' : '#212121'}}>{faq.question}</div>
                                        {
                                            f === index ? <BiX size={20} /> : <BiPlus size={20} />
                                        }
                                    </div>
                                    {
                                        f === index &&
                                        <div className={faqStyles.Answer}>{faq.answer}</div>
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default FAQ;