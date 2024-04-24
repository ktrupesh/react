import React from 'react'
import { useNavigate } from 'react-router-dom';

function About() {

    const naviget = useNavigate();

    const goToContact = () => {
        naviget("/contact");
    }

    return (
        <>
            <section>
                <h1>About</h1>
                <button onClick={() => goToContact()}>Go to Contact Page</button>
            </section>
        </>
    )
}

export default About;