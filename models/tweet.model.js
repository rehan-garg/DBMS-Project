import mongoose, { Schema } from "mongoose";

const tweetSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true,
    },
    content: {
        type: String,
        required: true,
        trim: true,
    },
}, { timestamps: true, collection: "tweets" });

tweetSchema.index({ owner: 1, createdAt: -1 });

export const Tweet = mongoose.model("Tweet", tweetSchema);
