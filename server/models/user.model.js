import moongoose from "mongoose";
const userSchema = new moongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["instructor", "student"],
    default: "student",
  },
  enrolledCourses: [{
    type: moongoose.Schema.Types.ObjectId,
    ref: "Course",
  },],
  photoUrl: {
    type: String,
    default: ""
  }
}, {
  timestamps: true,
});

export const User = moongoose.model("User", userSchema);