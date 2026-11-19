import mongoose, { Schema } from "mongoose";

const playlistSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
        default: "",
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true,
    },
}, { timestamps: true, collection: "playlists" });

playlistSchema.index({ owner: 1, createdAt: -1 });

export const Playlist = mongoose.model("Playlist", playlistSchema);
