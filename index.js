const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
    .then(() => {
        console.log("connection is success");
    }).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');

}
// schema defines
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});
// model collections 
const User = mongoose.model("User", userSchema);

// Delete i mongoose
User.deleteOne({ name: badagaju }).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
// find byIdAndDelete
User.findByIdAndDelete({ name: badagaju }).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
// 

// find and upadate
// new true value update and dissplay
// User.findOneAndUpadate({ name: "badagaju" }, { age: 55 }, { new: true }).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });


// update in  moongoose
// User.updateOne({ name: "badagaju" }, { age: 55 }).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// User.updateMany({ name: "badagaju" }, { age: 55 }).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// find

// User.find({ age: { $gt: 48 } }).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// User.findOne({ age: { $gt: 48 } }).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// User.findById("nfkjnansannoeeo52745f4").then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });


// insert in  mongo

// const user1 = new User({
//     name: "gaju",
//     email: "gaju@yahoo.in",
//     age: 52,
// });
// // save is asncronaous function
// user1.save().then(res => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// }); // asncronas fun

// User.insertMany([
//     { name: badaGaju, email: "bdg@hgmail.com", age: 40 },
//     { name: chotaGaju, email: "cdg@hgmail.com", age: 30 },
// ]).then((res) => {
//     console.log(res);
// });