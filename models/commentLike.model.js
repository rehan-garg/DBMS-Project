import mongoose, { Schema } from "mongoose";

const commentLikeSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    commentId: { type: Schema.Types.ObjectId, ref: "Comment", required: true },
    createdAt: { type: Date, default: Date.now, required: true },
}, { collection: "commentLikes" });

commentLikeSchema.index({ userId: 1, commentId: 1 }, { unique: true });
export const CommentLike = mongoose.model("CommentLike", commentLikeSchema);
