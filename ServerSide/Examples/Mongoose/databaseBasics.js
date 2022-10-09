const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser:
        true, useUnifiedTopology: true
});

let emailSchema = new mongoose.Schema({
    email: String
})

//We need to call the model constructor on the Mongoose instance and pass it the name of the collection and a reference to the schema definition.
module.exports = mongoose.model('Email', emailSchema);

//We can create an instance of the model we defined above and populate it using the following syntax:
// let EmailModel = require('./email_model_v1.js')
/*

let msg = new EmailModel({
 email: 'rockyjagtiani@gmail.com'
})

*/

// Create Record > To create an instance of the email model and save it to the database use .save method.

/*
let EmailModel = require('./email_model_v2.js')
let msg = new EmailModel({
 email: 'SREEJITnair@GMAIL.COM'
})
msg.save()
 .then(doc => {
 console.log(doc)
 })
 .catch(err => {
 console.error(err)
 })
*/

// Fetch Record

/*
EmailModel.find({
 email: 'rockyjagtiani@gmail.com'
 // search query
 })
 .then(doc => {
 console.log(doc)
 })
 .catch(err => {
 console.error(err)
 })

*/

// Update Record

/*
EmailModel.findOneAndUpdate({
 email: 'akshaykumar@gmail.com'
 // search query
 },
 {
 email: 'superhero@gmail.com'
 // field:values to update
 },
 {
 new: true, // return updated doc
 runValidators: true // validate before update
 }
)
*/

// Multiple Updates

/* 
StudentTestSchema.updateMany(
    {marks : {$gte:99}, 
    {remark : "excellent"} 
   ).then(doc => {
    console.log(doc)
    })
    .catch(err => {
    console.error(err)
    }) 
*/

// Delete

/* 
StudentTestSchema.findOneAndRemove({
 marks:{$lt:99}
})
.then(doc => {
 console.log(doc)
})
.catch(err => {
 console.error(err)
})
*/


// Instance Methods


let userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
})

userSchema.methods.getInitials = function () {
    return this.firstName[0] + this.lastName[0]
}

// making a Model from the Schema
let UserModel = mongoose.model('User', userSchema)
// Making objects of the Model

let userobject = new UserModel({
    firstName: 'Rocky',
    lastName: 'Jagtiani'
})

let initials = userobject.getInitials()
console.log(initials)


// Static Methods

userSchema.statics.findByName = function (value) {
    this.find({ firstName: value }, (err, document) => {
        console.log(document);
    })
}


// Middleware Methods > Ex. Generating Password Hash before saving to db and sending email after saved successfully to db.
// can be 'pre' or 'post'

userSchema.pre('save', function (next) {
    let now = Date.now()

    this.updatedAt = now
    // Set a value for createdAt only if it is null
    if (!this.createdAt) {
        this.createdAt = now
    }

    // Call the next function in the pre-save chain
    next()
})
