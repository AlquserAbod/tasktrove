const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const passwordresetTokenSchema = new Schema({
    userId: { 
        type: Schema.Types.ObjectId,
        required: true,
        ref: "user",
        unique: true
    },
    token : {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 3600 // 1 houre 
    }
},{versionKey: false });

const PasswordResetToken = mongoose.model('passwordresettoken',passwordresetTokenSchema)

module.exports  = PasswordResetToken;