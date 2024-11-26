import AmazonDescription from "./AmazonDescription";
import AmazonPrice from "./AmazonPrice";
import  "./AmazonCard.css"

const AmazonCard = ( {idx}) => {
    return (
        <>

        <div className="AmazonCard">

            <AmazonDescription idx = {idx} />
            <AmazonPrice  idx = {idx}/>


        </div>

        
        </>
    )
}

export default AmazonCard;