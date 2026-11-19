import mongoose, { Schema } from "mongoose";

const watchHistorySchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true,
    },
    videoId: {
        type: Schema.Types.ObjectId,
        ref: "Video",
        required: true,
        index: true,
    },
    watchedAt: {
        type: Date,
        default: Date.now,
        required: true,
    },
}, { collection: "watchHistory" });

watchHistorySchema.index({ userId: 1, watchedAt: -1 });

export const WatchHistory = mongoose.model("WatchHistory", watchHistorySchema);
