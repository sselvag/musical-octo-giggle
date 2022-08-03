const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema ({
    username: String,
    email: String,
    password: String,
    first_name: String, 
    last_name: String,
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Post"
        },
    ],
});

UserSchema.pre('save', async function (next) {
    const currentUser = this;

    if (!currentUsre.isModified('password')){
        return next();
    }

    currentUser.password = await bcrypt.hash(currentUser.password, 20)

    return next();
});

UserSchema.methods.checkPassword = async function (password) {
    return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', UserSchema);

module.exports = User;
