import axios from 'axios';
import https from 'https';

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Received body:", body); 

    const { user_message, session_id, userid } = body;

    if (!user_message || !session_id || !userid) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: user_message, session_id, or userid" }),
        { status: 400 }
      );
    }

    // Bypass self-signed HTTPS issues (development only!)
    const httpsAgent = new https.Agent({
      rejectUnauthorized: false, // ⚠️ Only use for dev/testing
    });

    const response = await axios.post(
      "https://192.168.141.115:8000/chat",
      { user_message, session_id, userid },
      { httpsAgent }
    );

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Error in chat request:", error.message);

    return new Response(
      JSON.stringify({
        error: "Something went wrong on the server",
        details: error.message,
      }),
      { status: 500 }
    );
  }
}
