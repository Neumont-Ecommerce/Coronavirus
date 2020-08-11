const crud = require('./operations/crud');
const mongoose = require('mongoose');

let connection_string = "mongodb://127.0.0.1:27017/Coronavirus?retryWrites=true&w=majority";
//Server discovery and monitoring engine deprecated
//set to true, our app will use the latest and greatest
mongoose.set('useUnifiedTopology', true);
// False by default, when set to true, default index creation 
// will use createIndex() instead of ensureIndex()
mongoose.set('useCreateIndex', true);
// True by default, when false, the findOneAndUpdate()
// findOneandRemove(), use native instead of findAndModify()
mongoose.set('useFindAndModify', false);
// The underlying MongoDb driver that has been deprecated,
// the parsing of the URL
mongoose.set('useNewUrlParser', true);

mongoose.connect(connection_string).then(
    () => {
        console.log('Connected to MongoDb');
        //if statement if user wants to use crud operation
        crud.create_operation();
        /*crud.remove_operation();
        crud.update_operation();
        crud.delete_operation();*/
    }
).catch(
    (error) => {
        console.log("Error has occured", error);
    }
);
