import mongoose from "mongoose"

const consultationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  company: String,
  phone: String,
  service: { type: String, required: true },
  budget: String,
  timeline: String,
  projectDetails: String,
  callTime: String,
  contactMethod: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
})

export default mongoose.model("Consultation", consultationSchema)
