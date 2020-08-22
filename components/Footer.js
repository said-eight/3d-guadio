import Link from 'next/link'

const Footer = () => (
    
    
        <div className="footer">
            <div className="box">
                <h2>CONTACT US</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis ab, quam impedit reiciendis, voluptatum pariatur est soluta illum voluptates quae neque dolor, cum cumque. Inventore, aliquid magnam. Eos, nulla inventore?</p>
            </div>
            <div className="rows">
                <div>
                   <h3>PHONE</h3>
                   <p>31232323213</p>
                   <p>33333333333</p>
                </div>
                <div>
                    <h3>EMAIL</h3>
                   <p>info@guastudio.com</p>
                   </div>
                <div>
                    <h3>ADDRESS</h3>
                   <p>Av lopez mateos</p>
                   </div>
            </div>

            <div className="social">
               <div>
            <img src="/facebook.png" alt="" className="imgsocial"/>
               </div>
               <div>
            <img src="/instagram.png" alt="" className="imgsocial"/>
               </div>
               <div>
            <img src="/pinterest.png" alt="" className="imgsocial"/>
               </div>
               <div>
            <img src="/twitter.png" alt="" className="imgsocial"/>
               </div>

            </div>
            <img src="/fondo casa.png" alt="" id="imgfooter"/>
        </div>
  
)

export default Footer