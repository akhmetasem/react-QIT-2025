import React, {useState} from "react";
import "./App.css";



export default function Profile() {
    const [profiles, setProfiles] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [form, setForm] = useState ({
        name: "",
        lastname: "",
        age: "",
        date: "",
        email: "",
        number: "",
        adress: "",
        job: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const addProfile = () => {
        setProfiles([...profiles, form]);
        setForm({
            name: "",
            lastname: "",
            age: "",
            date: "",
            email: "",
            number: "",
            adress: "",
            job: "",
        });
    };


    return (
        <div className="form">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Name"/><br></br>
            <input name="lastname" value={form.lastname} onChange={handleChange} placeholder="Lastname"/><br></br>
            <input name="age" value={form.age} onChange={handleChange} placeholder="Age" type="number"/><br></br>
            <input name="date" value={form.date} onChange={handleChange} placeholder="Date of birth" type="date"/><br></br>
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email"/><br></br>
            <input name="number" value={form.number} onChange={handleChange} placeholder="Phone number" type="number"/><br></br>
            <input name="adress" value={form.adress} onChange={handleChange} placeholder="Adress"/><br></br>
            <input name="job" value={form.job} onChange={handleChange} placeholder="Job"/><br></br>
            <button onClick={addProfile}>Add</button>


            <h3>Search Profiles</h3>
            <input
                type="text"
                placeholder="Search by name or lastname"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}/><br></br>


            <div className="list">
            {profiles.map((profile, index) => (
                <div key={index} className="card">
                    Name: {profile.name}<br></br>
                    Lastname: {profile.lastname}<br></br> 
                    Age: {profile.age}<br></br>
                    Job: {profile.job}<br/>
                    Email: {profile.email}
                    Phone Number: {profile.number}<br/>
                    Adress: {profile.adress}<br></br>
                    Date of birth: {profile.date}
                </div>
            ))}
        </div>
    </div>
    )
}