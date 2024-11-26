import Product from "./Product";
function ProductTab(){
    let milkBenefits = ["calcium" , "vitaminD" , "energy"];
    let paneerBenefits = ["Protien" , "fat" , "tasty"];
    let eggsBenefits = ["allVitamins" , "omega" , "energy"];
    return <>
    <Product title = "Milk"   price = {40}  benifits=   {milkBenefits} />
    <Product title = "Paneer" price = {340}  benifits = {paneerBenefits}/>
    <Product title = "Eggs"   price = {150}  benifits = {eggsBenefits}/>

    </>
}

export default ProductTab;