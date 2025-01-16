import { useState } from "react";

export default function Form(){

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

    const [submitted, setSubmitted] = useState(false)

    function handleChange(e){
        const {name, value} = e.target
        setData((prev) => ({...prev, [name]: value}))
    }

    function submitResume(e){
        e.preventDefault()
        setSubmitted(true)
        // console.log(name)
        // console.log(email)
        // console.log(phone)
        // console.log(school)
        // console.log(title)
        // console.log(date)
        // console.log(company)
        // console.log(position)
        // console.log(responsibilities)

    }
     

    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    // const [phone, setPhone] = useState("")
    // const [school, setSchool] = useState("")
    // const [title, setTitle] = useState("")
    // const [date, setDate] = useState("")
    // const [company, setCompany] = useState("")
    // const [position, setPosition] = useState("")
    // const [responsibilities, setResponsibilities] = useState("")


    return(
        <div>
            <h1>Resume</h1>
            <form onSubmit={submitResume}>
                <div>
                    <div>
                        <h2>General Information</h2>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" value={setData.name}
                        onChange={handleChange}/>
                    
                        <label htmlFor="email">Email</label>
                        <input type="email"  id="email" name="email" value={setData.email}
                        onChange={handleChange}/>
                        
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone number"  value={setData.phone}
                        onChange={handleChange}/>
                    </div>

                    <div>
                        <h2> Educational experience</h2>
                        <label htmlFor="educational">School Name</label>
                        <input type="text" id="educational" name="educational" value={setData.school}
                        onChange={handleChange} />

                        <label htmlFor="title">Title of Study</label>
                        <input type="text" id="title" name="title of study" value={setData.title}
                        onChange={handleChange}/>

                        <label htmlFor="date">Date of study</label>
                        <input type="date" id="date" name="date of study" value={setData.date}
                        onChange={handleChange}/>
                    </div>

                    <div>
                        <h2>Practical Experience</h2>
                        <label htmlFor="company">Company Name</label>
                        <input type="text" id="company" name="company name" value={setData.company}
                        onChange={handleChange} />

                        <label htmlFor="position"> Position Title</label>
                        <input type="text" id="position" name=" position title" value={setData.position}
                        onChange={handleChange}/>

                        <label htmlFor="responsibilities">Main Responsibilities</label>
                        <input type="text" id="responsibilities" name="main responsibilities" value={setData.responsibilities}
                        onChange={handleChange} />
                    </div>
                        <input type="submit" id="btn" name="submit" />
                </div>
                
            </form>
        </div>

    )
}