import Listing from  '../models/listings.js'
import customError from '../utils/customError.js';


let allListings = async (req,res,next)=>{

    let allListings = await Listing.find({})
    console.log("req reciedved");
    
    res.render("./listings/allListings",{allListings})

}

let  getNewListting = async(req,res)=>{
    res.render("./listings/addListForm")
    }

let getSingleListing = async (req,res)=>{
    let  id     = req.params.id ;
    console.log(id);
    
    let  singleListing  =  await Listing.findById(id).populate({ path:'reviews', populate: { path: "author"}}).populate("owner");
    console.log(singleListing);
    if(!singleListing){
        req.flash("listingError","The listing you are searching is deleted or does not exists");
        res.redirect("/listings");
    }
    
    res.render('listings/singleListing' , {singleListing})
    }

let postaddnewListing = async (req, res, next) => {
    let imageObj = req.file;
    console.log("new post request ");
    console.log(req.body);
    // Create a new listing object
    let addList = new Listing({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image: {
            url : imageObj.path,
            fileName : imageObj.filaname
        },
        country: req.body.country,
        location: req.body.location
    });
    addList.owner = req.user._id;
    await addList.save();
    req.flash("listingSuccess","new listing added successfully")
    res.redirect("/listings"); // Redirect after successful save

    console.log("added");
};

let getEditListing = async(req,res)=>{
    console.log(req.params.id);
    let id = req.params.id;
    let editListing = await Listing.findById(id);
    if(!editListing){
        req.flash("listingError","The listing you are searching is deleted or does not exists");
        res.redirect("/listings");
    }
    res.render("./listings/editListForm",{editListing})
    
    };

let putEditNewListing = async(req,res)=>{
    let id = req.params.id;
    if(!req.body.listing){
        throw new customError(400,"please provide information")
    } 
    let updateJSONBody = req.body.listing;
    let editListing = await Listing.findByIdAndUpdate(id,{...updateJSONBody})
    
    console.log('id in put is ',id);
    console.log('body in put is ',updateJSONBody);
    req.flash("listingSuccess","new listing edited successfully")
    res.redirect(`/listings/${id}`)
    
    };

let destroyListing = async(req,res)=>{
    let id = req.params.id;
    await Listing.findByIdAndDelete(id);
    req.flash("listingSuccess","listing deleted successfully")
    res.redirect("/listings");
    };

let destroyAllListing = async(req,res)=>{
    await Listing.deleteMany({});
    req.flash("listingSuccess","all listing deleted successfully")
    res.redirect("/listings");
};

export default  {allListings , getSingleListing , getNewListting,postaddnewListing , getEditListing , putEditNewListing , destroyListing , destroyAllListing};