const AmazonDescription = ({idx}) => {

    let productTitle = ["Vcare", "S24 Ultra" , "Watch 7 Ultra" , "Buds 2 Pro"]
    let description = [
                        ["hair growth " , "natural Organic"],
                        ["Ultra Performance" , "Smmothesth Framerate"],
                        ["Rigid" , "WaterProof"],
                        ["Active Noice Cancellation" , "24bit audio"]
                      ]
    return (
        <>

            <div className="AmazonDescription">

                <h3>{productTitle[idx]}</h3>
                <h5>{description[idx][0]}</h5>
                <h5>{description[idx][1]}</h5>
               
            </div>

        </>
    )
}

export default AmazonDescription;



