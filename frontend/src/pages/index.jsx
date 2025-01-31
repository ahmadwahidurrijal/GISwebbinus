import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h1>Selamat Datang di Donasi Sosial</h1>
            <p>Platform yang menghubungkan donatur dengan mereka yang membutuhkan.</p>
            <Link to="/donate"><button>Mulai Donasi</button></Link>
            <Link to="/request"><button>Ajukan Permintaan Bantuan</button></Link>
        </div>
    );
};

export default Index;
