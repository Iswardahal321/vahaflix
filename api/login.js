export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, password } = req.body;

  try {
    const loginRes = await fetch("https://h5.vahaflix.com/api/v2/email/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 12; Redmi Note 9 Pro Max Build/SKQ1.211019.001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.7204.157 Mobile Safari/537.36"
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await loginRes.json();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: "Network error", detail: error.message });
  }
}
