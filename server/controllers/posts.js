import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
    try {
        // Fetch all the post messages from the database
        const postMessage = await PostMessage.find();
        console.log(postMessage);

        // Send the post messages as a response
        res.status(200).json(postMessage);
    } catch (error) {
        res.status(404).json({ message: error.message });   
    }
}

export const createPost = async (req, res) => {
    // Get the post message from the request body
    const post = req.body;
    // Create a new post message using the PostMessage model
    const newPost = new PostMessage(post);
     try {
        // Save the new post message to the database
        await newPost.save();
        // Send the new post message as a response
        res.status(201).json(newPost);
        
     } catch (error) {
        // Send an error response if the post message could not be saved.
        res.status(409).json({ message: error.message });
     }
}