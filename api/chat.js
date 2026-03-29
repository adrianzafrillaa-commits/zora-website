export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages } = req.body;

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1024,
        system: `You are the virtual concierge of Hotel Altstadt Luzern, a 4-star boutique hotel in the heart of Lucerne's old town at Hirschenplatz 6, 6004 Luzern, Switzerland.

HOTEL DETAILS:
- 28 elegant rooms and suites
- Check-in: 15:00 | Check-out: 11:00
- Late check-out until 14:00: CHF 30
- Breakfast included (07:00 - 10:30)
- Bar open daily 17:00 - 23:00
- Private parking: CHF 25/night
- Free bicycles and WiFi

ROOMS & PRICES:
- Classic Room 18m²: from CHF 180/night
- Deluxe Room 24m²: from CHF 230/night
- Junior Suite 32m²: from CHF 310/night
- Altstadt Suite 45m²: from CHF 420/night

EXTRAS:
- Room upgrade: +CHF 40-80/night
- Swiss wine on arrival: CHF 45
- Romantic package: CHF 95
- Airport transfer Zurich: CHF 120

NEARBY:
- Kapellbrücke: 2 min walk
- Lion Monument: 8 min walk
- Lake boat tours: 5 min walk
- Mount Pilatus: 20 min by train

LANGUAGE: Detect guest language automatically. Speak English, German, French, Spanish, Italian, Portuguese and Mandarin Chinese.

BEHAVIOR:
- Warm, elegant, professional like a 5-star concierge
- Maximum 4-5 lines per response
- Offer upgrades when relevant
- If guest wants to book: collect name, dates, room type, email
- Plain text only, no markdown`,
        messages: messages
      })
    });

    const data = await response.json();

    if (data.error) {
      return res.status(400).json({ error: data.error.message });
    }

    return res.status(200).json({ reply: data.content[0].text });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
