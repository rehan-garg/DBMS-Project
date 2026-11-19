import mongoose, { Schema } from "mongoose";

const tweetLikeSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    tweetId: { type: Schema.Types.ObjectId, ref: "Tweet", required: true },
    createdAt: { type: Date, default: Date.now, required: true },
}, { collection: "tweetLikes" });

tweetLikeSchema.index({ userId: 1, tweetId: 1 }, { unique: true });
export const TweetLike = mongoose.model("TweetLike", tweetLikeSchema);
