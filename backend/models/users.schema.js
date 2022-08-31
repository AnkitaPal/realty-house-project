import mongoose from "mongoose";
const Schema = mongoose.Schema;
import bcrypt from "bcrypt";

const UserSchema = new Schema({
	firstName: {
		type: String,
	},
	lastName: {
		type: String,
	},
	email: {
		type: String,
	},
	password: {
		type: String,
		required: true,
	},
	phoneNumber: {
		type: String,
	},
	createdAt: { type: Date, default: Date.now() },
	updatedAt: { type: Date, default: Date.now() },
});

UserSchema.pre("save", async function (next) {
	try {
		/* 
    Here first checking if the document is new by using a helper of mongoose .isNew, therefore, this.isNew is true if document is new else false, and we only want to hash the password if its a new document, else  it will again hash the password if you save the document again by making some changes in other fields incase your document contains other fields.
    */
		if (this.isNew || this.isModified("password")) {
			const salt = await bcrypt.genSalt(10);
			const hashedPassword = await bcrypt.hash(this.password, salt);
			this.password = hashedPassword;
		}
		next();
	} catch (error) {
		next(error);
	}
});

// UserSchema.methods.isValidPassword = async function (password) {
// 	try {
// 		return await bcrypt.compare(password, this.password);
// 	} catch (error) {
// 		throw error;
// 	}
// };

export const User = mongoose.model("User", UserSchema);
