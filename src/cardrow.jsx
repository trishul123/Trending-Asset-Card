import Cardbody from './Cardbody';
import info_obj from './Cardinfo';
function insertvalues(info) {
  return <Cardbody 
            key={info.id} 
            name={info.name}
            dailychange={info.dailychange}
            plusorminus={info.plusorminus}
            price={info.price}
            pricetitle={info.pricetitle}
            TVL={info.TVL}
            TVLtitle={info.TVLtitle}
            img1={info.img1}
            img2={info.img2}
            img3={info.img3}
            populartitle={info.populartitle}
            coinclass={info.coinclass}
            coinclasslogo={info.coinclasslogo}
            >
  </Cardbody>;
}
function Cardrow() {
    return (
        <div class="row">
        {info_obj.map(insertvalues)}
        </div>
    );
}
export default Cardrow;