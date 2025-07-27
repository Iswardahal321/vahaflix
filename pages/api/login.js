export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, password } = req.body;

  try {
    const response = await fetch('https://h5.vahaflix.com/api/v2/email/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': req.headers['user-agent'] || 'Mozilla/5.0',
      },
      body: JSON.stringify({ email, password })
    });

    const result = await response.json();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch: ' + error.message });
  }
}
