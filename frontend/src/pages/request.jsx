import React, { useState } from "react";

const Request = () => {
    const [request, setRequest] = useState({ description: "", amountNeeded: "" });

    const handleChange = (e) => {
        setRequest({ ...request, [e.target.name]: e.target.value });
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Ajukan Permintaan Bantuan</h2>
            <form>
                <input type="text" name="description" placeholder="Deskripsi Kebutuhan" onChange={handleChange} />
                <input type="number" name="amountNeeded" placeholder="Estimasi Dana yang Dibutuhkan" onChange={handleChange} />
                <button type="submit">Kirim Permintaan</button>
            </form>
        </div>
    );
};

export default Request;
