import React from 'react';
const About = () => {
    const calculateExperience = () => {
       const startDate = new Date("2020-08-13");
       const today = new Date();
       let diff = (today.getFullYear() - startDate.getFullYear())*12;
       diff += today.getMonth() - startDate.getMonth();
       if(diff === 12){
           return 'One year';
       }else if(diff > 12 && diff < 24){
           return `One year and ${diff - 12 > 1 ? `${diff-12} months` : "one month"}`;
       }else if(diff > 24){
           let multi = Math.floor(diff / 12);
           return `${multi} years and ${diff - (12 *multi) > 1 ? `${diff-(12*multi)} months` : "one month"}`;
       }else{
           return diff > 1 ? `${diff} months` : "one month";
       }
    }
    return(
        <section className="About"> 
            <h2>Who am I...</h2>
            <div>
                <h3>Basic Information</h3>
                <ul>
                    <li>Name: Borzoo Moazami</li>
                    <li>Birthday: 25th July 1994</li>
                    <li>Experience: {calculateExperience()}</li>
                    <li>University education: null</li>
                </ul>
            </div>
            <div>
                <h3>Summery</h3>
                <p>Former photographer, future programmer…</p>

                <p>As far as I remember there were two things that kept me awake at night and brought me out of despair and anxiety. Art and problem solving.</p>

                <p>I love photography. The time and the detail you catch and encapsulate with a camera is a fantastic phenomenon in my idea.</p>

                <p>I started fine art and street photography on 2012 and I’ve gained delightful experiences through my path until 2018 when I started to work in the field of advertisement. Everything suddenly changed for me.</p>

                <p>There was no sense of meaning for me anymore and every day I became less motivated, because I wasn’t doing what I love with my camera.</p>

                <p>I was trying to find a web developer to create a website for me to put my portfolio on and hopefully find some clients…Then I decided to do it myself.</p>

                <p>So I started to solve the problem. I encountered tons of concepts that I didn’t know anything about. I asked my friends about the whole process of development. As I went further and further it became clear that I love to go deeper in the world of coding. I met new programmers and I joined related communities. It was amazing, how supportive the people working in the field were. At that point I was completely sure, it’s my future self, pulling me through the way.</p>

                <p>“I’m going to be a programmer” became my mantra and I started to follow my dream. I read books, take courses and communicate with professionals. I’ve practice every day at least 2 hours for about 7 months. </p>
                
            </div>
        </section>
    );
}

export default About;