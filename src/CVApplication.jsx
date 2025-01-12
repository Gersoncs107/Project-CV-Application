import { useState } from "react";

export default function Form(){
    
    return(
        <div>
            <h1>Resume</h1>
            <form>
                <div>
                    <section>
                        <h2>General Information</h2>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Digite seu nome"/>
                        <br />
                        <label htmlFor="email">Email</label>
                        <input type="text"  id="email" name="email" placeholder="example@.com"/>

                        <label htmlFor="phone">Phone Number</label>
                        <input type="number" id="phone" name="phone number" />
                    </section>
                   
                </div>
                
            </form>
        </div>

    )
}