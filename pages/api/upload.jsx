// pages/api/upload.js

import clientPromise from '../../lib/mongodb';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb', // Set desired limit (e.g., 10mb)
    },
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, description, image, file } = req.body;

    try {
      const client = await clientPromise;
      const db = client.db();

      // Insert the comic data into the database
      await db.collection('comics').insertOne({
        title,
        description,
        image,
        file, // The comic file in Base64
        uploadedAt: new Date(),
      });

      res.status(201).json({ message: 'Comic uploaded successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
