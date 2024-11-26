// This keyword is reference to an object which is executing  the current piece of code 

let  info = {
    name  : "sai",
    age   : 25,
    eg    : 36,
    bee   : 36,
    pps   : 80,
    findAvg(){
        console.log(this);
        let avg = ((this.eg + this.bee + this.pps) / 3 ) ;
        console.log(` ${this.name} got average marks of ${avg}`);
    }


}

function outsideAvg(){
    console.log("outside object this ", this);
}


console.log(info.findAvg());


console.log(outsideAvg());
