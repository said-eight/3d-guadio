import '../css/styles.css'

import Header from '../components/Header'
import Footer from '../components/Footer'


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return (
        <div className="grid-container">
            <div className="left">
                <p className="vertical">© guadiostudio | <a href="/" id="terminos" >terminos y condiciones</a></p>
                
            </div>
             <div className="right"></div>
            <Header />
            
            <Component {...pageProps} />
            <Footer />
        </div>
        

    )
  }