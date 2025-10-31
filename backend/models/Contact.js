import mongoose from "mongoose"

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  company: String,
  services: [String],
  details: { type: String, required: true },
  contactMode: { type: String, required: true },
  phoneNumber: String,
  preferredEmail: String,
  meetingLink: String,
  createdAt: { type: Date, default: Date.now },
})

export default mongoose.model("Contact", contactSchema)
