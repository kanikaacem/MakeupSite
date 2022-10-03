function Footer(){
 const footerImage= [
    {'id':1,
     'alt':'No image',
     'url':
     'https://preview.colorlib.com/theme/makeupartist/img/instagram/xinsta-1.jpg.pagespeed.ic.ekjsTTJXPU.webp'
    },
    {'id':2,
    'alt':'No image',
    'url':
    'https://preview.colorlib.com/theme/makeupartist/img/instagram/xinsta-2.jpg.pagespeed.ic.qNKoymqjLZ.webp'
   },
   {'id':3,
   'alt':'No image',
   'url':
   'https://preview.colorlib.com/theme/makeupartist/img/instagram/xinsta-3.jpg.pagespeed.ic.6xUkjr2cwj.webp'
  },
  {'id':4,
  'alt':'No image',
  'url':
  'https://preview.colorlib.com/theme/makeupartist/img/instagram/xinsta-4.jpg.pagespeed.ic.kCfgrv_Of9.webp'
 },
 {'id':5,
 'alt':'No image',
 'url':
 'https://preview.colorlib.com/theme/makeupartist/img/instagram/xinsta-5.jpg.pagespeed.ic.g7FU5wbPEY.webp'
}
 ]
 return (<>
 <footer>
    <div className="Image">
        <img src={'./assets/websiteLogo.png'} alt="websiteLogo"></img>
    </div>
    <div>Follow us on @makeupartist</div>
    <div className="footerImage">
        {footerImage.map((item) => {
            return (<div key={item.id} className="Image"> 
                <img src={item.url} alt={item.alt}></img>
            </div>)
        })}
    </div>
    <div className="copyRightText">Copyright ©2022 All rights reserved | This template is made with 
        <span className="heartLogo">&hearts;</span>by Colorlib</div>
</footer></>)
}
export default Footer;