import React, { useState } from "react";

const Donate = () => {
    const [donationType, setDonationType] = useState("uang");

    return (
        <div style={{ padding: "20px" }}>
            <h2>Halaman Donasi</h2>
            <label>
                <input type="radio" value="uang" checked={donationType === "uang"} onChange={() => setDonationType("uang")} />
                Donasi Uang
            </label>
            <label>
                <input type="radio" value="barang" checked={donationType === "barang"} onChange={() => setDonationType("barang")} />
                Donasi Barang
            </label>

            {donationType === "uang" ? (
                <form>
                    <input type="number" placeholder="Jumlah Donasi (IDR)" />
                    <button type="submit">Donasi Sekarang</button>
                </form>
            ) : (
                <form>
                    <input type="text" placeholder="Nama Barang" />
                    <button type="submit">Kirim Barang</button>
                </form>
            )}
        </div>
    );
};

export default Donate;
