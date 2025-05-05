exports.handler = async function(event, context) {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  
  try {
    // Parse the incoming request body
    const data = JSON.parse(event.body);
    const prompt = data.prompt;
    
    // Log the prompt (you'll see this in Netlify function logs)
    console.log("Received prompt:", prompt);
    
    // In a real application, you might store this in a database
    // For this example, we're just logging it
    
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*" // For local testing
      },
      body: JSON.stringify({ 
        message: "Prompt received successfully",
        timestamp: new Date().toISOString()
      })
    };
  } catch (error) {
    console.error("Error processing prompt:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        message: "Error processing your submission" 
      })
    };
  }
};
