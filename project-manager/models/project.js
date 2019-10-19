const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    description : {
        type : String,
        required : true,
        trim : true
    },
    
    completed : {
        type : Boolean,
        default : false,
    },

    owner : {
        type : mongoose.Schema.Types.ObjectId,
        require : true,
        ref : "User"
    }
},{
    timestamps : true   
})

const Project = mongoose.Model('Project', projectSchema)

module.exports = Project