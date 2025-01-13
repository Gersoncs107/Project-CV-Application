import { useState } from "react";

export default function Form(){
    
    return(
        <div>
            <h1>Resume</h1>
            <form>
                <div>
                    <div>
                        <h2>General Information</h2>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Digite seu nome"/>
                    
                        <label htmlFor="email">Email</label>
                        <input type="email"  id="email" name="email" placeholder="example@.com"/>
                        
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone number"  placeholder="12345"/>
                    </div>

                    <div>
                        <h2> Educational experience</h2>
                        <label htmlFor="educational">School Name</label>
                        <input type="text" id="educational" name="educational" />

                        <label htmlFor="title">Title of Study</label>
                        <input type="text" id="title" name="title of study" />

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
                    </div>
                   
                </div>
                
            </form>
        </div>

    )
}