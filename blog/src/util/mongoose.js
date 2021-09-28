module.exports = {
    mutipleMongooseToObject: function(mongoose){
        return mongoose = mongoose.map(mongoos => mongoos.toObject())
    },
    mongooseToObject: function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose
    }
}