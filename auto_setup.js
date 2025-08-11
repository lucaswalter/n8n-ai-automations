const fs = require('fs');
const path = require('path');

// Auto-import all workflows
const workflows = [
  'super_chat_agent.json',
  'generate_image_tool.json',
  'write_newsletter_tool.json',
  'ai_scraping_pipeline.json',
  'firecrawl_scrape_url.json'
];

console.log('🚀 Auto-setting up n8n workflows...');

// Create credentials template
const credentials = {
  groq: {
    name: 'Groq API',
    type: 'httpHeaderAuth',
    data: {
      name: 'Authorization',
      value: 'Bearer YOUR_GROQ_KEY_HERE'
    }
  },
  huggingface: {
    name: 'Hugging Face API',
    type: 'httpHeaderAuth', 
    data: {
      name: 'Authorization',
      value: 'Bearer YOUR_HF_KEY_HERE'
    }
  },
  firecrawl: {
    name: 'Firecrawl API',
    type: 'httpHeaderAuth',
    data: {
      name: 'Authorization', 
      value: 'Bearer YOUR_FIRECRAWL_KEY_HERE'
    }
  }
};

fs.writeFileSync('credentials_template.json', JSON.stringify(credentials, null, 2));

console.log('✅ Setup complete!');
console.log('📝 Edit credentials_template.json with your API keys');
console.log('🌐 Open http://localhost:5678 to access n8n');
console.log('💬 Open simple_chat_interface.html for chat interface');