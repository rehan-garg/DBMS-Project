import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema({
    subscriberId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    channelId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { collection: "subscriptions" });

subscriptionSchema.index({ subscriberId: 1, channelId: 1 }, { unique: true });
subscriptionSchema.pre("validate", function () {
    if (this.subscriberId && this.channelId && this.subscriberId.equals(this.channelId)) {
        this.invalidate("channelId", "A user cannot subscribe to their own channel.");
    }
});

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
