function Cardbody(props) {
    return (
              <div class="col span_1_of_5">
                  <div className="card">
                      <div className={`circle ${props.coinclass}`}>
                          <div className={`circle2 ${props.coinclasslogo}`}> 
                          </div>
                      </div>
                      <div className="box">
                          <div className='cointitle'>
                              {props.name}
                          </div>
                          
                          <div className='coinprice'>
                              {props.price}
                              <div className={`dailychange ${props.plusorminus}`}>
                              {props.dailychange}
                          </div>
                          </div>
                          <div className='pricetitle'>
                              {props.pricetitle}
                          </div>
                          <div className='cointvl'>
                              {props.TVL}
                          </div>
                          <div className='tvltitle'>
                              {props.TVLtitle}
                          </div>
                          <div className='popular'>
                          <img src={props.img1} className='logo2' alt='img'></img>
                          <img src={props.img2} className='logo2' alt='img'></img>
                          <img src={props.img3} className='logo2' alt='img'></img> 
                          </div>
                          <div className='populartitle'>
                              {props.populartitle}
                          </div>
                      </div> 
                  </div>
              </div>
           
    );
  }
  export default Cardbody;