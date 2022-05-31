import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg"

function About () {
    return (
        <section className='my-5'>
            <h1 id='about'>Who am I?</h1>
            <img src={coverImage} className='my-2' style ={{ width: "100%" }} alt="cover" />  
            <div className='my-2'>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quis nulla suscipit, error consequatur aperiam voluptatem illo optio, nemo unde, veniam autem nam nihil sint libero ipsum? Natus, quas excepturi? </p>
            </div> 
        </section>
    );
}

export default About;