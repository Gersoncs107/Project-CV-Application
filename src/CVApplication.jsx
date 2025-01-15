import { useState } from "react";

export default function Form(){

    function submitResume(e){
        e.preventDefault()
        console.log(name)
        console.log(email)
        console.log(phone)
        console.log(school)
        console.log(title)

    }
    
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [school, setSchool] = useState()
    const [title, setTitle] = useState()


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
                        <input type="date" id="date" name="date of study"/>
                    </div>

                    <div>
                        <h2>Practical Experience</h2>
                        <label htmlFor="company">Company Name</label>
                        <input type="text" id="company" name="company name" />

                        <label htmlFor="position"> Position Title</label>
                        <input type="text" id="position" name=" position title" />

                        <label htmlFor="responsibilities">Main Responsibilities</label>
                        <input type="text" id="responsibilities" name="main responsibilities" />
                    </div>
                        <input type="submit" id="btn" name="submit" />
                </div>
                
            </form>
        </div>

    )
}