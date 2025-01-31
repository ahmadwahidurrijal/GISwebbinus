import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "donor" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User Terdaftar:", formData);
        navigate("/login");
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Daftar Akun</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Nama Lengkap" onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                <label>
                    Pilih Role:
                    <select name="role" onChange={handleChange}>
                        <option value="donor">Donatur</option>
                        <option value="requestor">Requestor</option>
                        <option value="admin">Admin</option>
                        <option value="vendor">Vendor</option>
                    </select>
                </label>
                <button type="submit">Daftar</button>
            </form>
        </div>
    );
};

export default Register;
