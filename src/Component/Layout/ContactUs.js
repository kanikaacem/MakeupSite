import { bounceInLeft } from "react-animations";
import Radium ,{StyleRoot} from "radium";
import { Parallax,Background } from "react-parallax";

//customize button
import CustomizeButton from "../Common/CustomizeButton";
function ContactUs(){
    const myStyle={
        ContactUs:{
            // backgroundImage: 
            // "url('./assets/ContactUs.png')",
            minHeight:'800px',
            backgroundRepeat :'no-repeat',
            backgroundSize:'cover',
            // filter:'blur(2px)'
        },
        h1:{
            textAlign: 'center',
            fontFamily: 'Great Vibes',
            fontSize:'100px',
            color:'hsl(342, 74%, 62%)',
            margin:'20px 0px'
        },
        bounceInLeft: {
            animation: 'x 10s',
            animationName: Radium.keyframes(bounceInLeft, 'bounceInLeft')
        },
        insideStyles: {
            // background: "white",
            // position: "absolute",
            // top: "50%",
            // left: "50%",
            // transform: "translate(-50%,-50%)"
            padding: 20,
            width:'40%',
            textAlign: 'center',
            margin:'0 auto',
            height:'inherit'
        },
        form:{
            display: 'flex',
            flexDirection : 'column',
            gap:'20px',
            width:'100%'
        },
        input:{
            padding: '20px',
            textAlign: 'center',
            fontSize: '20px',
            border: 'none',
            outline: 'none',
        }
       
    };
    return (<> 
    <div className="contactUs" style={myStyle.ContactUs}>
       <Parallax bgImage={'./assets/ContactUs.png'} strength={500}>
        <div style={{ height: 800 }}>
            <div style={myStyle.insideStyles}>
                <StyleRoot>
                <div style={myStyle.bounceInLeft}>
                    <h1 style={myStyle.h1}> Get In touch</h1>
                </div>
                </StyleRoot>
                <form style={myStyle.form}>
                    <label for="name"></label>
                    <input type="text" id="name" name="name"placeholder="xyz sername" style={myStyle.input}></input>
                    <label for="email"></label>
                    <input type="email" id="email" name="email" placeholder="xyz@gmail.com" style={myStyle.input}></input>
                    <label for="mobile_number"></label>
                    <input type="text" id="mobile_number" name="mobile_number" placeholder="1234567891" style={myStyle.input}></input>
                    <label for="message"></label>
                    <textarea id="message" name="message" placeholder="message..." style={myStyle.input}></textarea>
                    <CustomizeButton button_text="Submit" ></CustomizeButton>
                </form>
            </div>
        </div>
        </Parallax>
    </div>
    </>)
}

export default ContactUs;