import CustomizeButton from './Common/CustomizeButton';
import { bounceInLeft , bounceInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
 
const styles = {
    bounceInLeft: {
    animation: 'x 5s',
    animationName: Radium.keyframes(bounceInLeft, 'bounceInLeft')
    },
    bounceInRight:{
        animation: 'x 5s',
        animationName: Radium.keyframes(bounceInRight,'bounceInRight')
    }
}
function Section2(){
    
    return(<>
    <section className="secondSection">
        <div className="leftDiv">
            <StyleRoot>
                <div className="text" style={styles.bounceInLeft}>
                    <h3>Make your Face</h3>
                    <span> the center of attention</span>
                    <p>My love of makeup started young while often sneaking 
                    into my mother’s makeup vanity and playing with various 
                    shades of lipstick, eyeshadow and blush. Makeup became a 
                    full blown obsession after four years of art school where
                    I learned to master the airbrush technique.
                    </p>
                    <CustomizeButton button_text="Contact us"></CustomizeButton>
                </div>
            </StyleRoot>
        </div>

        <div className="rightDiv">
            <StyleRoot>
                <div style={styles.bounceInRight}>
                    <img src="https://preview.colorlib.com/theme/makeupartist/img/about/xabout-pic.png.pagespeed.ic.PCDGDjqSZ_.webp" alt="No image"></img>
                </div>
            </StyleRoot>
        </div>
    </section>
    </>)
}
export default Section2;