import "./Product.css"
// import {title,price} from ProductTab 

function Product({title , price , benifits  } ){
    const list = benifits.map((el)=> (
        <li>{el}</li>
    ));
    let isDiscount = price > 300 ;

    let styles = {backgroundColor: isDiscount ? "yellow"  : ""}

    // let isDiscount = price > 300  ? "Discount of 5%" : "" ; 
    
    return (
                <>
                <div className="Product" style = {styles}>
                    <h1>Hi I am {title}  </h1>
                    <h3>Hi I am {price} </h3>
                    {/* <p>{price > 300  ? "Discount of 5%" : "" }</p> */}
                    {isDiscount  ? <p>"Discount of 5%"</p>  :  null }
                    {/* <h5>Benifits</h5> */}
                    {/* <ul>{array.forEach(element => { 
                        <li>{element}</li>
                    })}</ul> */}
                    {/* <ul>{list}</ul> */}
                </div>
            
                </>
                )
    
    // if(price > 300){
    //     return (
    //         <>
    //         <div className="Product">
    //             <h1>Hi I am {title}  </h1>
    //             <h3>Hi I am {price} </h3>
    //             <p>DIscount 5%</p>
    //             {/* <h5>Benifits</h5> */}
    //             {/* <ul>{array.forEach(element => { 
    //                 <li>{element}</li>
    //             })}</ul> */}
    //             {/* <ul>{list}</ul> */}
    //         </div>
        
    //         </>
    //         )
    // }else {
    //     return (
    //         <>
    //         <div className="Product">
    //             <h1>Hi I am {title}  </h1>
    //             <h3>Hi I am {price} </h3>
    //             <h5>Benifits</h5>
    //             {/* <ul>{array.forEach(element => { 
    //                 <li>{element}</li>
    //             })}</ul> */}
    //             <ul>{list}</ul>
    //         </div>
        
    //         </>
    //         )
    // }
   
}

export default Product;


