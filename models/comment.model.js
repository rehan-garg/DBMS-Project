import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema({
    content: {
        type: String,
        required: true,
        trim: true,
    },
    videoId: {
        type: Schema.Types.ObjectId,
        ref: "Video",
        required: true,
        index: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true,
    },
}, { timestamps: true, collection: "comments" });

commentSchema.index({ videoId: 1, createdAt: -1 });

export const Comment = mongoose.model("Comment", commentSchema);
