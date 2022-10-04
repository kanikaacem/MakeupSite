import { bounceInDown } from "react-animations";
import Radium ,{StyleRoot} from "radium";

function Testimonial(){
   const myStyle={
        Testimonial:{
            // backgroundImage: 
            // "url('./assets/testimonialbackground.png')",
            minHeight:'800px',
            marginTop:'50px',
        },
        h1:{
            textAlign: 'center',
            fontFamily: 'Great Vibes',
            fontSize:'100px',
            color:'hsl(342, 74%, 62%)',
            padding:'50px',
        },
        bounceInDown: {
            animation: 'x 5s',
            animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
            },
       
    };
    return (
        <>
        <div className="TestimonialSection" style={myStyle.Testimonial}>
            <StyleRoot>
                <div style={myStyle.bounceInDown}>
                <h1 style={myStyle.h1}> Testimonial</h1>
                </div>
            </StyleRoot>
        </div>
        </>
    )
}

export default Testimonial;