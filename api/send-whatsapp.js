export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get environment variables (Vercel: use VITE_ prefix or set without prefix in Vercel dashboard)
  const apiKey = process.env.VITE_EVOLUTION_KEY || process.env.EVOLUTION_KEY;
  const apiUrl = process.env.VITE_EVOLUTION_API_URL || process.env.EVOLUTION_API_URL || 'http://94.136.187.188:8084';

  try {
    const { number, text, instanceName = 'Maaz' } = req.body;

    if (!number || !text) {
      return res.status(400).json({ error: 'Number and text are required' });
    }

    // Make the API call from the server (no CORS or mixed content issues)
    const response = await fetch(
      `${apiUrl}/message/sendText/${instanceName}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': apiKey
        },
        body: JSON.stringify({
          number,
          text
        })
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API request failed: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('WhatsApp API Error:', error);
    return res.status(500).json({ 
      error: 'Failed to send WhatsApp message',
      message: error.message 
    });
  }
}
