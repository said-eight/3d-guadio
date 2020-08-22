
const Index = (props) => {

  return (
    <div>
    
   
    <div className="middle">
      <div id="slider">
        <div id="virtual">
          <h1 class="textslider">Virtual <br /> Reality</h1>
        </div>
        <div id="estate">
          <h1 class="textslider">Real Estate<br /> Video</h1>

        </div>
      </div>

      <div className="rendering">
        <div className="box">
          <div><p> <img src="/back.png" alt="" id="imgback" align="Absbottom"/> Regresar</p></div>
          <div><h1 className="title"> <img src="/cube.png" alt="" id="imgcube" align="Absbottom"/>  3D RENDERING</h1></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis delectus quaerat in quia excepturi? Suscipit quos error, repellat eius repellendus excepturi repudiandae veniam ea alias blanditiis harum ex libero temporibus?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est culpa, odit aperiam sequi magnam ullam necessitatibus dicta minus illum ipsum voluptates nisi illo deleniti, alias, eius beatae suscipit veniam cum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At velit dignissimos, blanditiis reprehenderit doloribus maxime qui fuga, odio enim quasi accusantium facilis temporibus nihil natus, quia perspiciatis possimus? Expedita, provident.
        </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla magni sequi rerum eaque modi deserunt aperiam explicabo dignissimos. Atque saepe dolore consectetur eveniet necessitatibus rem ut! Ipsa ipsum aperiam aut?
        </p>
          <div className="boxbutton"> <button className="button">HIRE US </button></div>

        </div>
      </div>
      <div className="carousel">
        <div className="nav">
          <ul>
            <li><a href="#home">ALL |</a></li>
            <li><a href="#news"> RESIDENTIAL |</a></li>
            <li><a href="#contact"> COMMERCIAL </a></li>
            <li><a href="#about">| PRODUCT DESIGN</a></li>
          </ul>
          <div className="container">
        <input type="radio" id="i1" name="images" defaultChecked />
        <input type="radio" id="i2" name="images" />
        <input type="radio" id="i3" name="images" />
      
        <div className="slide_img" id="one">			
          <img src="/img_gale.jpg" />
          <label className="prev" htmlFor="i3"><span>‹</span></label>
          <label className="next" htmlFor="i2"><span>›</span></label>	
           <h3>Project Name: Home </h3>
           <h3>Location: Cabo san lucas</h3>
           <h3>Software: 3D Max</h3>
        </div>
        <div className="slide_img" id="two">
          <img src="/img_slider.jpg" />
          <label className="prev" htmlFor="i1"><span>‹</span></label>
          <label className="next" htmlFor="i3"><span>›</span></label>
          <h3>Project Name: Home 2  </h3>
           <h3>Location: Miami</h3>
           <h3>Software: 3D Max</h3>
        </div>
        <div className="slide_img" id="three">
          <img src="/real estate video.jpg" />	
          <label className="prev" htmlFor="i2"><span>‹</span></label>
          <label className="next" htmlFor="i1"><span>›</span></label>
          <h3>Project Name: Home 3 </h3>
           <h3>Location: Califronia</h3>
           <h3>Software: 3D Max</h3>
        </div>
       
       
      </div>

        </div>


      </div>
    </div>

    </div>




  )
}



export default Index