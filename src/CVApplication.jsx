import { useState } from "react";

export default function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        school: "",
        title: "",
        date: "",
        company: "",
        position: "",
        responsibilities: "",
    });
    const [submitted, setSubmitted] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    function submitResume(e) {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <div>
            <h1>Resume</h1>
            {submitted ? (
                <div>
                    <h2>General Information</h2>
                    <p>Name: {formData.name}</p>
                    <p>Email: {formData.email}</p>
                    <p>Phone: {formData.phone}</p>
                    <h2>Educational Experience</h2>
                    <p>School: {formData.school}</p>
                    <p>Title: {formData.title}</p>
                    <p>Date: {formData.date}</p>
                    <h2>Practical Experience</h2>
                    <p>Company: {formData.company}</p>
                    <p>Position: {formData.position}</p>
                    <p>Responsibilities: {formData.responsibilities}</p>
                    <button onClick={() => setSubmitted(false)}>Edit</button>
                </div>
            ) : (
                <form onSubmit={submitResume}>
                    <h2>General Information</h2>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />

                    <h2>Educational Experience</h2>
                    <label htmlFor="school">School Name</label>
                    <input type="text" id="school" name="school" value={formData.school} onChange={handleChange} />
                    <label htmlFor="title">Title of Study</label>
                    <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
                    <label htmlFor="date">Date of Study</label>
                    <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} />

                    <h2>Practical Experience</h2>
                    <label htmlFor="company">Company Name</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} />
                    <label htmlFor="position">Position Title</label>
                    <input type="text" id="position" name="position" value={formData.position} onChange={handleChange} />
                    <label htmlFor="responsibilities">Main Responsibilities</label>
                    <input type="text" id="responsibilities" name="responsibilities" value={formData.responsibilities} onChange={handleChange} />

                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
}


/*
import { useState } from "react";

export default function Form(){

    function submitResume(e){
        e.preventDefault()
        console.log(name)
        console.log(email)
        console.log(phone)
        console.log(school)
        console.log(title)
        console.log(date)
        console.log(company)
        console.log(position)
        console.log(responsibilities)

    }
    
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        school: "",
        title: "",
        date: "",
        company: "",
        position: "",
        responsibilities: ""
    })

    function handleChange(e){
        const {name, value} = e.target
        setData((prev) => ({...prev, [name]: value}))
    }

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [school, setSchool] = useState("")
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [company, setCompany] = useState("")
    const [position, setPosition] = useState("")
    const [responsibilities, setResponsibilities] = useState("")


    return(
        <div>
            <h1>Resume</h1>
            <form onSubmit={submitResume}>
                <div>
                    <div>
                        <h2>General Information</h2>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Digite seu nome" 
                        onChange={(e) => setName(e.target.value)}/>
                    
                        <label htmlFor="email">Email</label>
                        <input type="email"  id="email" name="email" placeholder="example@.com"
                        onChange={(e) => setEmail(e.target.value)}/>
                        
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone number"  placeholder="12345"
                        onChange={(e) => setPhone(e.target.value)}/>
                    </div>

                    <div>
                        <h2> Educational experience</h2>
                        <label htmlFor="educational">School Name</label>
                        <input type="text" id="educational" name="educational" 
                        onChange={(e) => setSchool(e.target.value)} />

                        <label htmlFor="title">Title of Study</label>
                        <input type="text" id="title" name="title of study" 
                        onChange={(e) => setTitle(e.target.value)}/>

                        <label htmlFor="date">Date of study</label>
                        <input type="date" id="date" name="date of study"
                        onChange={(e) => setDate(e.target.value)}/>
                    </div>

                    <div>
                        <h2>Practical Experience</h2>
                        <label htmlFor="company">Company Name</label>
                        <input type="text" id="company" name="company name"
                        onChange={(e) => setCompany(e.target.value)} />

                        <label htmlFor="position"> Position Title</label>
                        <input type="text" id="position" name=" position title"
                        onChange={(e) => setPosition(e.target.value)}/>

                        <label htmlFor="responsibilities">Main Responsibilities</label>
                        <input type="text" id="responsibilities" name="main responsibilities"
                        onChange={(e) => setResponsibilities(e.target.value)} />
                    </div>
                        <input type="submit" id="btn" name="submit" />
                </div>
                
            </form>
        </div>

    )
}
*/