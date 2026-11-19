import mongoose, { Schema } from "mongoose";

const videoLikeSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    videoId: { type: Schema.Types.ObjectId, ref: "Video", required: true },
    createdAt: { type: Date, default: Date.now, required: true },
}, { collection: "videoLikes" });

videoLikeSchema.index({ userId: 1, videoId: 1 }, { unique: true });
export const VideoLike = mongoose.model("VideoLike", videoLikeSchema);
