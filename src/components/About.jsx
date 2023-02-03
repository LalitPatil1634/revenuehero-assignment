import React from "react";


const About = () => {
    return (
        <div className="container mx-auto" id="about">
            <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
                <div className="max-h-96 md:h-screen">
                    <img className="w-screen h-screen object-cover object-top" src="https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                </div>
                <div className="flex bg-gray-100 p-10">
                    <div className="mb-auto mt-auto max-w-lg">
                        <h1 className="text-3xl uppercase">Lalit Patil</h1>
                        <p className="font-semibold mb-5">Web Developer</p>
                        <p>Hi, My name is Lalit Patil. I am looking for a job role in
                            Front-End. I am a self-learner, curious, and enthusiastic about
                            learning new things. Curiosity is what makes a person think
                            differently. I think learning even a small thing as it seems can
                            make a difference. I passionately combine good design, technology,
                            and innovation in all my projects, which I like to accompany from
                            the first idea to release. Currently, I'm focused on backend
                            development.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;