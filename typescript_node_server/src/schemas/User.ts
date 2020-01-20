import { Schema, model, Document } from 'mongoose'
// this is to be able to access properties of the user
interface UserInterface extends Document {
  email ? : string
  firstName?:string
  lastName?: string
}

const UserSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String
}, {
  timestamps: true
})

export default model<UserInterface>('User', UserSchema)
