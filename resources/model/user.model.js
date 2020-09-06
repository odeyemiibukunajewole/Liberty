const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        required: true
    },
    password:{
        type:String,
        require:true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    group: {
        type: String,
        require: true
    },
    contact:Number,
    birthDate: Date,
    About: {
        type: String,
        require: false
    },
    address: {
        other: Boolean,
        street: String,
        houseNumber: Number,
        zip: Number,
        city: String,
        State: String
    }
})



userSchema.pre('save', function(next) {
    if (!this.isModified('password')) {
      return next()
    }
  
    bcrypt.hash(this.password, 8, (err, hash) => {
      if (err) {
        return next(err)
      }
  
      this.password = hash
      next()
    })
  })
  
  userSchema.methods.checkPassword = function(password) {
    const passwordHash = this.password
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, passwordHash, (err, same) => {
        if (err) {
          return reject(err)
        }
  
        resolve(same)
      })
    })
  }

module.exports = mongoose.model('user',userSchema)