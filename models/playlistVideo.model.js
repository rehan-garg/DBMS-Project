import mongoose, { Schema } from "mongoose";

const playlistVideoSchema = new Schema({
    playlistId: {
        type: Schema.Types.ObjectId,
        ref: "Playlist",
        required: true,
    },
    videoId: {
        type: Schema.Types.ObjectId,
        ref: "Video",
        required: true,
    },
    position: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: "Playlist position must be a whole number.",
        },
    },
    addedAt: {
        type: Date,
        default: Date.now,
    },
}, { collection: "playlistVideos" });

// These unique indexes implement the logical candidate keys from the ER model.
playlistVideoSchema.index({ playlistId: 1, videoId: 1 }, { unique: true });
playlistVideoSchema.index({ playlistId: 1, position: 1 }, { unique: true });

export const PlaylistVideo = mongoose.model("PlaylistVideo", playlistVideoSchema);
