import "./AmazonPrice.css"

const AmazonPrice = ({idx}) => {
    let oldPrice = ["699" , "1,20,000" , "60,000" , "18,000"];
    let newPrice = ["399" , "1,00,000" , "40,000" , "9,000"];
    return (
        <>
        <div className="AmazonPrice">

            <div className="spanDiv">
                 <span className="oldPriceSpan"> {oldPrice[idx]}</span>
                     &nbsp;&nbsp;&nbsp;
                 <span className="newPriceSpan"> {newPrice[idx]}</span>
            </div>



        </div>
        </>
    )
}

export default AmazonPrice;