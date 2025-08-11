#!/bin/bash
echo "🚀 Starting Super Chat Agent..."

# Start n8n if not running
if ! pgrep -f "n8n" > /dev/null; then
    echo "Starting n8n..."
    nohup n8n start > n8n.log 2>&1 &
    sleep 10
fi

# Check if n8n is ready
echo "Checking n8n status..."
curl -s http://localhost:5678/healthz && echo "✅ n8n is running!" || echo "❌ n8n not ready yet"

echo ""
echo "🎯 Next steps:"
echo "1. Open http://localhost:5678 in Safari"
echo "2. Import super_chat_agent.json"
echo "3. Add your API keys to credentials"
echo "4. Open simple_chat_interface.html to chat"
echo ""
echo "📱 Your super chat is ready!"