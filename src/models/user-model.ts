// export class UserModel {
//     private mongoose: any
//     private schema: any
//     private model: any

//     constructor() {
//         this.mongoose = require('mongoose');
//         this.schema = new this.mongoose.Schema({
//             id: String,
//             name: String,
//             email: String,
//             phone: String,
//             prof_img: String,
//             location: String
//         })
//         this.model = this.mongoose.model('user', this.schema)
//     }
// }

const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    phone: String,
    prof_img: String,
    location: String
})
const userModel = mongoose.model('user', userSchema)
module.exports = userModel