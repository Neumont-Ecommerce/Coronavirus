const user = require ('../model/user');
const product = require ('../model/product');

export class crud_operations extends product, user{

    product_id =  "5f324d01fd40f91f5025662d"; 
    user_id = "5f323ec62f4fa00bf01cb65d";

    //constructor overloading
    constructor(product, user){
        this.product_id = product._id;
        this.user_id = user._id;
    }

    //constructor overloading product
    constructor(product, user){
        this.find_and_return(product, user);
    }

    //contructor overloading user
    constructor(){
        super();
    }

    //Promise
    find_and_return = function(_product, _user){
        let find_promise = products_query.exec();
        console.log('Promise: ' + (find_promise instanceof Promise));
        find_promise
            .then((product) => {
                product.map((product) => console.log(product.email));
            })
            .catch((err) => {
                console.log('Error: ', err);
            });
        
    }

    //Callback
    find_and_return = function(product){
        console.log('Find', product);

        product.findById(product._id, (err,product) => {
            if(err){
                return console.log('Error: ',err); 
            }
             console.log('Found', product);
        });
    }
}