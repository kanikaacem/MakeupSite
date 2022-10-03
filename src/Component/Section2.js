import CustomizeButton from './Common/CustomizeButton';
function Section2(){
    return(<>
    <section className="secondSection">
        <div className="leftDiv">
            <h3>Make your Face</h3>
            <span> the center of <br></br>attention</span>
            <p>My love of makeup started young while often sneaking 
               into my mother’s makeup vanity and playing with various 
               shades of lipstick, eyeshadow and blush. Makeup became a 
               full blown obsession after four years of art school where
               I learned to master the airbrush technique.
            </p>
            <CustomizeButton button_text="Contact us"></CustomizeButton>
        </div>
        <div className="rightDiv">
            <img src="https://preview.colorlib.com/theme/makeupartist/img/about/xabout-pic.png.pagespeed.ic.PCDGDjqSZ_.webp" alt="No image"></img>
        </div>
    </section>
    </>)
}
export default Section2;