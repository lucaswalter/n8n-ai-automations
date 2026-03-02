# The Recap AI + AI Automation Mastery n8n Workflows, Templates, and Agents


Collection of n8n agents, workflows, templates, and automations created and maintained by **The Recap AI** — Join our free [AI Automation Community](https://www.skool.com/ai-automation-mastery-group) to connect with AI builders learn how to build.

> 👋 **Hey!** I'm also building [**Calico AI**](https://heycalico.ai) — an AI ad generator that creates authentic AI avatar and UGC ads in seconds. If you're working on ad creative or need to scale your marketing, check it out. It's been a game-changer for generating lifelike AI actor videos and UGC-style content. [**Try it here →**](https://heycalico.ai)

## n8n AI Agents

### Marketing Team Voice Agent

[marketing_team_agent.json](https://youtu.be/_HOHQqjsy0U) - AI voice agent to replace your marketing team. Uses ElevenLabs and an n8n agent to handle daily marketing tasks such as writing newsletters, generating images, repurposing content, and creating videos.

- [write_newsletter_tool.json](https://youtu.be/_HOHQqjsy0U) - Automates the entire process of generating an AI-focused newsletter. It collects news, filters and selects top stories, writes engaging summaries and sections in a specific style, and formats the content for email delivery. The tool ensures each newsletter is unique, relevant, and ready for distribution, with built-in quality checks and Slack integration for team review.
- [generate_image_tool.json](https://youtu.be/_HOHQqjsy0U) - Generates custom images using OpenAI’s image generation API, following strict brand guidelines for newsletter and marketing content. The tool takes a prompt and context, applies Recap AI’s visual style rules, and posts the resulting image directly to a Slack channel for the marketing team.
- [generate_talking_avatar_tool.json](https://youtu.be/_HOHQqjsy0U) - Creates a talking avatar video from a provided script using the HeyGen API. The tool generates a video with a selected avatar and voice, waits for processing, checks the video status, and shares the final video link in Slack for the team to use in marketing or social content.
- [repurpose_to_short_form_script_tool.json](https://youtu.be/_HOHQqjsy0U) - Converts newsletter or long-form content into engaging short-form video scripts, optimized for platforms like TikTok, Instagram Reels, and YouTube Shorts. Helps the marketing team quickly generate viral-ready video scripts from existing content.
- [repurpose_to_twitter_thread_tool.json](https://youtu.be/_HOHQqjsy0U) - Transforms newsletter content into a compelling, multi-tweet Twitter/X thread. Automatically distills the most important news and insights into a format designed to drive engagement and discussion on social media.
- [email_research_report_tool.json](https://youtu.be/_HOHQqjsy0U) - Sends detailed research reports via email to team members or stakeholders. Converts markdown research content into formatted HTML and delivers it directly to the specified inbox, streamlining the sharing of deep-dive research and analysis.

### Dental Practice Voice Agent

[dental_practice_voice_agent.json](https://www.youtube.com/watch?v=vQ5Z8-f-xw4) - AI-powered voice agent for dental practices that handles appointment scheduling, checks Google Calendar availability, books appointments, and logs patient details to Google Sheets, all via natural language.

### WhatsApp AI Chatbot Agent

[whatsapp_ai_chatbot_agent.json](https://www.youtube.com/watch?v=IpWx1ubSnH4) - AI-powered WhatsApp chatbot specifically designed for the hospitality industry. This agent handles customer inquiries and provides personalized service recommendations through natural language conversations.

### AI Gmail Agent

[ai_gmail_agent.json](https://www.youtube.com/watch?v=Q1Ytc3VdS5o) - AI-powered Gmail automation agent that processes emails, categorizes messages, drafts responses, and manages email workflows using natural language processing and automation.

### Auto Repair Shop Gmail Agent

[auto_repair_shop_gmail_agent.json](https://www.youtube.com/watch?v=pACh3B9pK7M) - Specialized AI Gmail agent designed specifically for auto repair shops to streamline customer quote requests. The agent automatically analyzes incoming emails to determine if they contain complete vehicle repair information, sends professional follow-up emails when details are missing, notifies shop owners via SMS when complete quote requests are ready, and maintains detailed logs in Google Sheets.

### AI Web Developer Agent

[web_developer_agent.json](https://www.youtube.com/watch?v=ht0zdloIHfA) - AI-powered web developer agent that can scrape existing websites, analyze their content and structure, generate comprehensive Product Requirements Documents (PRDs), and automatically build modern, production-ready websites using Lovable.dev.

- [web_develop_agent_tool_scrape_website.json](https://www.youtube.com/watch?v=ht0zdloIHfA) - Scrapes any website using Firecrawl's map and scrape endpoints to extract all content, links, and structure. The tool maps the entire website to discover all pages, then scrapes each page to collect markdown content, making it ready to be analyzed by the agent.
- [web_develop_agent_tool_write_website_prd.json](https://www.youtube.com/watch?v=ht0zdloIHfA) - Analyzes scraped website content and generates comprehensive Product Requirements Documents (PRDs) optimized for AI website builders like Lovable.dev. The tool modernizes website structure, defines visual styles and branding, and creates detailed page-by-page specifications for a complete website redesign.

## n8n AI Workflows & Automations

- [meta_ad_audit_agency_sales_deck_generator.json](https://www.youtube.com/watch?v=Nj-6lBRRYww) - Turns any brand's Meta Ad Library into an automated sales deck. Takes a brand website URL and Meta Ads Library URL, scrapes active ad creatives using Apify, runs a full creative audit with Gemini 3.1 Pro (passing all ad images and videos as inline context), and automatically generates a polished PowerPoint sales presentation using the Gamma API. Built for ad creative agencies and freelancers who use the free audit to close new clients.
  - **Scrapes brand context** from the brand's homepage using Firecrawl (colors, fonts, OG image, brand tone, homepage content)
  - **Pulls active Meta Ads** using the Apify Facebook Ads Library Scraper, handles VIDEO, IMAGE, CAROUSEL, and DCO formats
  - **Uploads ad media to tmpfiles.org** for stable hosted URLs, aggregates with MD5 deduplication before passing to Gemini
  - **Runs an 8-section creative audit** with Gemini 3.1 Pro covering creative mix, visual design, messaging, strengths, gaps, competitive context, and a ranked action plan
  - **Generates a branded sales deck** via Gamma API exported as PowerPoint, with real ad creatives and brand identity embedded in the slides

- [ai_scraping_pipeline.json](https://www.youtube.com/watch?v=2uwV4aUyGIg) - Uses Google News, Firecrawl, and rss.app to scrape virtually any piece of web content and transform it into LLM-ready output.
- [twitter_reply_guy_agent.json](https://www.youtube.com/watch?v=Q_b5uPndsLY) - Uses a Mention.com Twitter / X keyword monitoring feed to monitor incoming Twitter posts for certain keywords then uses AI to evaluate and post a reply.
- [firecrawl_email_scraper.json](https://www.youtube.com/watch?v=zasYpLeMV9g) - Uses firecrawl `/map` and `/scrape` endpoints to scrape all email addresses from a given website.
- [write_seo_optimized_listicle_article.json](https://www.youtube.com/watch?v=uDrkgEuEOBA) - Uses Chat GPT Deep Research output to generate an SEO-optimized article and publish to your CMS.
- [ai_news_data_ingestion.json](https://www.youtube.com/watch?v=Nv5_LU0q1IY) - Automatically ingests and processes AI news content from multiple sources (Google News, AI Subreddits, Hacker News, and more sources) using RSS feeds and evaluates content relevance.
- [ai_newsletter_generator.json](https://www.youtube.com/watch?v=Nv5_LU0q1IY) - Generates AI-focused newsletters by selecting top stories, writing engaging content, and formatting with proper markdown structure.
- [firecrawl_scrape_url.json](https://www.youtube.com/watch?v=Nv5_LU0q1IY) - A reusable workflow that uses Firecrawl to extract the main text content and relevant images from any URL, optimized for content processing and LLM prompting.
- [cal_ai_clone_backend.json](https://www.youtube.com/watch?v=4c-kYOiksFg) - Analyzes meal images using AI to estimate calories and nutrition, then returns results as JSON for your app.
- [veo_3_viral_bigfoot_vlog_generator.json](https://www.youtube.com/watch?v=C65c8itWvf4) - Generates a multi-scene, AI-scripted Bigfoot vlog video from a user idea, gets human approval, and creates the final video using VEO 3.
- [short_form_video_script_generator.json](https://www.youtube.com/watch?v=7WsmUlbyjMM) - Generates a short-form video script using AI based on scraped news stories, optimized for virality and engagement.
- [twitter_x_scraping.json](https://youtu.be/otK0ILpn4GQ) - Multiple approaches to scrape tweets from Twitter/X using Apify, then saves tweet data (ID, URL, text, engagement metrics) to Google Sheets for further analysis or automation.
- [content_repurposing_factory.json](https://www.youtube.com/watch?v=u9gwOtjiYnI) - Repurposes any YouTube video into viral-ready Twitter/X threads and LinkedIn posts using Apify and Claude.
- [reverse_engineer_viral_ai_videos.json](https://youtu.be/qNSBLfb82wM) - Reverse-engineers any Instagram Reel or TikTok into a detailed, shot-by-shot prompt, using Apify and Google Gemini.
- [viral_youtube_video_clipper.json](https://www.youtube.com/watch?v=Yb-mZmvHh-I) - Automatically analyzes any YouTube video, generates up to 8 viral-ready short clips using Vizard AI, filters for the most viral (score greater than 9 out of 10), and shares the best clips with download links to Slack for review and sharing.
- [local_podcast_generator.json](https://www.youtube.com/watch?v=mXz-gOBg3uo) - AI-powered podcast generator that scrapes local event news from RSS feeds, processes the content using Firecrawl, and generates engaging podcast scripts with ElevenLabs v3 audio tags. The workflow creates production-ready audio files for local news briefs, perfect for community-focused content creators.
- [nano_banana_ad_creative_generator.json](https://www.youtube.com/watch?v=TZcn8nOJHH4) - Generates on-brand ad creative using Google's Nano Banana image model (Gemini 2.5 Flash Image)
- [nano_banana_facebook_ad_thief.json](https://youtu.be/QhDxPK2z5PQ) - Scrapes your competitor's best-performing Facebook and Instagram ads and generates new ad creative that features your own product or service (using Nano Banana).
- [nano_banana_static_ad_variation_generator.json](https://www.youtube.com/watch?v=eQsIHh_WDHU) - Automatically generates 10 strategically-optimized A/B test variations of any existing ad creative using Google's Nano Banana image model (Gemini 2.5 Flash Image Preview). The workflow first scrapes a brand website using Firecrawl and generates comprehensive brand guidelines as a Google Doc using Gemini 2.5 Pro. Then, it analyzes an existing ad image with AI to identify optimization opportunities, generates 10 distinct iterative variation prompts testing single variables (demographics, CTA colors, headlines, layouts, etc.), and creates edited versions of the ad using Nano Banana. Perfect for performance marketers who want to systematically test and optimize ad creative while maintaining design integrity. All variations are automatically uploaded to Google Drive.
- [sora_2_ugc_ecommerce_video_generator.json](https://www.youtube.com/watch?v=-HnyKkP2K2c) - Automatically generates authentic User-Generated Content (UGC) style marketing videos for eCommerce products using OpenAI's Sora 2. The workflow analyzes product images with GPT-4 Vision to create detailed influencer personas, generates multiple authentic 12-second video scripts with frame-by-frame breakdowns using Gemini 2.5 Pro, creates custom first frames adapted to UGC aesthetic, and produces multiple video variations using Sora 2 API. Videos are automatically uploaded to Google Drive.
- [sora2_ugc_consistent_character_ads_generator.json](https://www.youtube.com/watch?v=I87fCGIbgpg) - Automatically generates three distinct UGC-style video ads with consistent characters using OpenAI's Sora 2. The workflow accepts a Sora 2 character username (like @olipop.ashley), a product image, and a website URL, then scrapes the product homepage using Firecrawl and the official Sora 2 prompting guide. Using Gemini 2.5 Pro, it generates three authentic 15-second video ad prompts following specific UGC archetypes: The On-the-Go Testimonial (Walk-and-talk), The Driver's Seat Review, and The At-Home Demo. Each prompt is optimized for iPhone-shot, vertical 9:16 format with authentic UGC aesthetics. The workflow then generates videos using Kie AI's Sora 2 API and automatically uploads all three variations to Google Drive. Perfect for brands looking to create consistent, authentic UGC ad campaigns with the same character across multiple video formats.
- [facebook_ugc_video_ad_thief.json](https://www.youtube.com/watch?v=YOUR_VIDEO_ID) - The ultimate "ad thief" workflow that reverse-engineers competitor Facebook/Instagram UGC video ads and regenerates them for your brand. The workflow operates in two stages: First, it scrapes your brand's website using Firecrawl, aggregates content from multiple pages, and uses Gemini 2.5 Pro to generate comprehensive brand guidelines saved as a Google Doc. Second, it takes a competitor's UGC video ad, analyzes it with Gemini 2.5 Pro to create a detailed shot-by-shot breakdown, fetches the official Sora 2 prompting guide, retrieves your brand guidelines, and uses Claude Sonnet 4.5 to synthesize everything into a Sora 2-optimized video prompt. The prompt transposes the competitor's ad concept to your brand while maintaining the original's structure, pacing, and UGC aesthetic. Finally, it generates a 12-second vertical video using Sora 2 API with your product image as reference, polls for completion, and automatically uploads the final video to Google Drive.
- [veo_3.1_product_photo_animator.json](https://www.youtube.com/watch?v=NMl1pIfBE7I) - Automatically animates product photos from eCommerce catalogs using Google's Veo 3.1. The workflow scrapes product images from any catalog URL using Firecrawl, converts images to the required format, and generates animated product videos featuring the same person and clothing from the original photos. Perfect for creating engaging product showcase videos that help customers visualize how clothing looks and feels, with automatic upload to Google Drive for easy access and sharing.

## AI Automation Deal Breakdowns

### Insurance Lawyer Lead Generation Automation

[deal_breakdown_lawyer_lead_gen.json](https://www.youtube.com/watch?v=RtPUtfxQZYU) - An AI automation for insurance lawyer lead generation that scrapes law firm directories, identifies individual attorney profiles, evaluates their practice areas for insurance coverage disputes, and generates personalized outreach emails. The workflow uses Firecrawl for web scraping, AI evaluation for profile matching, and Google Sheets for lead management, creating a complete pipeline from directory scraping to personalized email generation for insurance mediation services.