export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method Not Allowed' });
      console.log(1)
    }
    try {
      const { path } = req.body;
  
      if (!path) {
        return res.status(400).json({ message: 'Path is required' });
      }
  
  
      await res.revalidate(path); // Revalidate the specific page
  
      return res.json({ revalidated: true, path });
    } catch (err) {
      console.error('Revalidation error:', err);
      return res.status(500).json({ message: 'Error revalidating', error: err.message });
    }
  }