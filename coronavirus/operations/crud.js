const user = require ('../model/user');
const product = require ('../model/product');

const default_admin = new user({
    email: 'jtaylor@student.neumont.edu',
    first_name: 'James',
    middle_name: 'Thabiso',
    last_name: 'Taylor',
    member: true,
    password: 'thebe4art',
    admin: true
}); 

const default_product = new product({
    sanitizer: 'Germ-X',
    toiletpaper: 'Huggies',
    facialmask: 'Surgical',
    disinfectant: 'Lysol',
    themometer: 'iProven'
});

module.exports = {
    create_operation () {
        console.log('Create');
        
        //promises the executing function returns a special object to you (the promise) and then you tell the promise what to do
        let save_promise = default_product.save();
        // True or False if we are getting a promise back
        console.log('Is Promise' + (save_promise instanceof Promise));
        save_promise.then ((save_user) => {
            console.log('ID: ' + save_user._id);
            console.log(save_user);
        }).catch((err) => {
            console.log('Error: ', err);
        });

        return save_promise;
    },

    update_operation(){
    },
    delete_operation(){
    
    }
}
