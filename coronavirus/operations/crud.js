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

const updated_product = new product({
    sanitizer: 'Germ-Y',
    toiletpaper: 'Huggies-Black',
    facemask: 'Surgical mask'
});

const default_admin02 = new user({
    email: 'katlee@student.neumont.edu',
    first_name: 'Kat',
    middle_name: 'Ninja',
    last_name: 'Lee',
    member: true,
    password: 'flowergirl',
    admin: true
});

const default_admin03 = new user({
    email: 'vweston@student.neumont.edu',
    first_name: 'Vance',
    middle_name: 'Superman',
    last_name: 'Weston',
    member: true,
    password: 'CoolMan',
    admin: true
});
const default_admin04 = new user({
    email: 'ctayor@student.neumont.edu',
    first_name: 'Coy',
    middle_name: 'Sr.',
    last_name: 'James',
    member: true,
    password: 'CoolSuperHero',
    admin: true
});

const default_product = new product({
    sanitizer: 'Germ-X',
    toiletpaper: 'Huggies',
    facemask: 'Surgical',
    disinfectant: 'Lysol',
    themometer: 'iProven'
});

module.exports = {
    create_operation () {
        console.log('Create');
        
        //promises the executing function returns a special object to you (the promise) and then you tell the promise what to do
        let save_promise = default_admin04.save();
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

    updated_user_operation(){
        console.log('Update User');

        user.find_and_update_user(

            {_id: updated_user._id},
            {first_name: updated_user.first_name},
            {last_name: updated_user.last_name},
            {middle_name: updated_user.middle_name},
            {email: updated_user.email},
            {member: updated_user.member},
            {password: updated_user.password},
            {admin: updated_user.admin},
            {new: true},

            (err, updated_user) => {
                if(err){
                    return console.log('Error: ', err);
                }else{
                    console.log('Update User', updated_user);
                }
            }
        );
    },

    update_product_operation(update){
        console.log('Update Product');

        product.findOneAndUpdate(

            {_id: '5f324d01fd40f91f5025662d'},
            {sanitizer: updated_product.sanitizer},
            {new: true},     
            //Two different id are being entered not the same product, null will return
            (err, update_product) => {
                if(err){
                    return console.log('Error: ', err);
                } else {
                    console.log(update_product);
                }
            })
        },

    delete_operation(delete_id) {
        console.log("Delete");
        
        user.findOneAndDelete(
        {_id: delete_user},
        (err, deleted_) => {
            if(err){
                return console.log('Error: ', err);
            } else {
                console.log(deleted_);
            }
        });
    }
}

