import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { comicId } = req.body; // Changed to comicId

    // Check if comicId is provided
    if (!comicId) {
      return res.status(400).json({ error: 'Comic ID is required' });
    }

    // Check if comicId is a valid ObjectId
    if (!ObjectId.isValid(comicId)) {
      return res.status(400).json({ error: 'Invalid Comic ID' });
    }

    try {
      const client = await clientPromise;
      const db = client.db();
      const comicsCollection = db.collection('comics'); // Changed collection name to comics

      // Increment the likes count for the comic
      const result = await comicsCollection.updateOne(
        { _id: new ObjectId(comicId) },
        { $inc: { likes: 1 } }  // Increment the like count by 1
      );

      if (result.modifiedCount === 1) {
        return res.status(200).json({ message: 'Comic liked successfully' });
      } else {
        return res.status(404).json({ error: 'Comic not found' });
      }
    } catch (error) {
      console.error('Error liking comic:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    // If the method is not POST, respond with 405 Method Not Allowed
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} not allowed`);
  }
}
