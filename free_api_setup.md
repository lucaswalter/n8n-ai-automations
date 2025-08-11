# Free API Setup for Super Chat

## 100% Free APIs to Use:

### 1. **OpenAI Alternative - Groq (Free)**
- Sign up: https://console.groq.com
- Get API key
- 14,400 requests/day FREE
- Models: llama3-70b, mixtral-8x7b

### 2. **Image Generation - Hugging Face (Free)**
- Sign up: https://huggingface.co
- Get API token
- Use models: stable-diffusion-xl, flux
- Unlimited free tier

### 3. **Web Scraping - Firecrawl (Free)**
- Sign up: https://firecrawl.dev
- 500 scrapes/month free
- No credit card required

### 4. **Voice - ElevenLabs (Free)**
- Sign up: https://elevenlabs.io
- 10,000 characters/month free
- 3 custom voices

### 5. **Video - HeyGen Alternative**
- Use **D-ID** (free tier): https://studio.d-id.com
- 20 credits/month free

## Setup in n8n:

1. **Import super_chat_agent.json**
2. **Add credentials**:
   - Groq API (instead of OpenAI)
   - Hugging Face token
   - Firecrawl API key
3. **Test with**: "Generate an image of a cat"

## Chat Interface:
- Webhook URL: `http://localhost:5678/webhook/super-chat`
- Send POST: `{"message": "your request"}`