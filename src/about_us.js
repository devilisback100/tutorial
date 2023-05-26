import email_icon from './email_icon.png'
import React, { useState } from "react";

function About_us(props) {
    const[style,style1]=useState({
        width:'36px',
        height:'36px',
        margin:'10px',
        cursor:'pointer'
       })
    return (

        <>
            <strong>This is the website for analyzing text or manipulating text,if There is any problem with this or you stuck you can contact us freely</strong>
            <br></br>
            <img src={email_icon} alt="image" style={style} />
            <strong>1469@gmail.com</strong>
            <br></br>
            <img src="https://th.bing.com/th/id/OIP.ZV7eXLzm4jwILeSDeZOb_AHaHa?pid=ImgDet&rs=1" alt="img" style={style} />
            <strong>9158967412,8146983675</strong>
            <br></br>
            <img src="https://th.bing.com/th/id/OIP.A_QLZ7Y9nBwaWnkhCbvGmQHaHZ?pid=ImgDet&rs=1" alt="img" style={style}/>
            <strong>username@135</strong>
            <br></br>
            <img src="https://logos-download.com/wp-content/uploads/2016/02/Twitter_Logo_new.png" alt="img" style={style}/>
            <strong>asked$singh</strong>
            <br></br>
            <img src="https://th.bing.com/th/id/R.68859d1a014a1bd67e3fa063d41148a3?rik=dWWdh73VjLk2lQ&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fyoutube-transparent-png%2fyoutube-transparent-png-15.png&ehk=rZ%2fw10rk3IJdEPBB8ZqssrEApBJLMz%2bJig5nsYs9BqE%3d&risl=&pid=ImgRaw&r=0" alt="img" style={style}/>
            <strong>text_analizer</strong>
        </>
    );
}
export default About_us;