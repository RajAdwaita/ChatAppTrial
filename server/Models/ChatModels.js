import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema(
    {
        // user: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: 'User',
        //     required: true
        // },
        // message: {
        //     type: String,
        //     required: true
        // }
        members: {
            type: Array,
        },
    },
    { timestamps: true }
);

const ChatModel = mongoose.model("Chat", ChatModel);
export default ChatModel;