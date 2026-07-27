// ========== SUBSCRIPTION CATALOG ==========
// Each entry: { domain, color, name, category, price?, period? }
// domain is used to fetch a favicon (Google's favicon service)
// If no match, we use ui-avatars.com to generate a colored letter icon
const CATALOG = {
    // Streaming
    'netflix':       { domain: 'netflix.com',       color: '#e50914', name: 'Netflix',        category: 'streaming' },
    'youtube':       { domain: 'youtube.com',       color: '#ff0000', name: 'YouTube',        category: 'streaming' },
    'youtube premium': { domain: 'youtube.com',     color: '#ff0000', name: 'YouTube Premium', category: 'streaming' },
    'youtube music': { domain: 'music.youtube.com', color: '#ff0000', name: 'YouTube Music',  category: 'music' },
    'disney+':       { domain: 'disneyplus.com',    color: '#113ccf', name: 'Disney+',        category: 'streaming' },
    'disney':        { domain: 'disneyplus.com',    color: '#113ccf', name: 'Disney+',        category: 'streaming' },
    'hbo max':       { domain: 'hbomax.com',        color: '#b08d57', name: 'HBO Max',        category: 'streaming' },
    'hbo':           { domain: 'hbomax.com',        color: '#b08d57', name: 'HBO Max',        category: 'streaming' },
    'hulu':          { domain: 'hulu.com',          color: '#1ce783', name: 'Hulu',           category: 'streaming' },
    'twitch':        { domain: 'twitch.tv',         color: '#9146ff', name: 'Twitch',         category: 'streaming' },
    'crunchyroll':   { domain: 'crunchyroll.com',   color: '#f47521', name: 'Crunchyroll',    category: 'streaming' },
    'paramount+':    { domain: 'paramountplus.com', color: '#0064d2', name: 'Paramount+',     category: 'streaming' },
    'peacock':       { domain: 'peacocktv.com',     color: '#000000', name: 'Peacock',        category: 'streaming' },
    'apple tv':      { domain: 'tv.apple.com',      color: '#555555', name: 'Apple TV+',      category: 'streaming' },
    'amazon prime':  { domain: 'amazon.com',        color: '#ff9900', name: 'Amazon Prime',   category: 'streaming' },
    'yandex plus':   { domain: 'plus.yandex.ru',    color: '#ffcc00', name: 'Яндекс Плюс',    category: 'streaming' },
    'yandex':        { domain: 'plus.yandex.ru',    color: '#ffcc00', name: 'Яндекс Плюс',    category: 'streaming' },

    // Music
    'spotify':           { domain: 'spotify.com',       color: '#1db954', name: 'Spotify',              category: 'music' },
    'spotify premium':   { domain: 'spotify.com',       color: '#1db954', name: 'Spotify Premium',      category: 'music' },
    'apple music':       { domain: 'music.apple.com',   color: '#fc3c44', name: 'Apple Music',          category: 'music' },
    'soundcloud':        { domain: 'soundcloud.com',    color: '#ff5500', name: 'SoundCloud',           category: 'music' },
    'soundcloud go':     { domain: 'soundcloud.com',    color: '#ff5500', name: 'SoundCloud Go+',       category: 'music' },
    'vk music':          { domain: 'vk.com',            color: '#0077ff', name: 'VK Музыка',            category: 'music' },
    'deezer':            { domain: 'deezer.com',        color: '#a238ff', name: 'Deezer',               category: 'music' },
    'tidal':             { domain: 'tidal.com',         color: '#000000', name: 'Tidal',                category: 'music' },

    // Productivity
    'notion':        { domain: 'notion.so',       color: '#000000', name: 'Notion',         category: 'productivity' },
    'slack':         { domain: 'slack.com',       color: '#4a154b', name: 'Slack',          category: 'productivity' },
    'trello':        { domain: 'trello.com',      color: '#0079bf', name: 'Trello',         category: 'productivity' },
    'todoist':       { domain: 'todoist.com',     color: '#e44232', name: 'Todoist',        category: 'productivity' },
    'evernote':      { domain: 'evernote.com',    color: '#00a82d', name: 'Evernote',       category: 'productivity' },
    'zoom':          { domain: 'zoom.us',         color: '#2d8cff', name: 'Zoom',           category: 'productivity' },
    'asana':         { domain: 'asana.com',       color: '#f06a6a', name: 'Asana',          category: 'productivity' },
    'grammarly':     { domain: 'grammarly.com',   color: '#15c39a', name: 'Grammarly',      category: 'productivity' },
    'grammarly premium': { domain: 'grammarly.com', color: '#15c39a', name: 'Grammarly Premium', category: 'productivity' },
    'airtable':      { domain: 'airtable.com',    color: '#18bfff', name: 'Airtable',       category: 'productivity' },
    'miro':          { domain: 'miro.com',        color: '#ffd02f', name: 'Miro',           category: 'productivity' },
    'linear':        { domain: 'linear.app',      color: '#5e6ad2', name: 'Linear',         category: 'productivity' },
    'loom':          { domain: 'loom.com',        color: '#625df5', name: 'Loom',           category: 'productivity' },
    'microsoft 365': { domain: 'microsoft.com',   color: '#d83b01', name: 'Microsoft 365',  category: 'productivity' },
    'office 365':    { domain: 'microsoft.com',   color: '#d83b01', name: 'Microsoft 365',  category: 'productivity' },
    'postman':       { domain: 'postman.com',     color: '#ff6c37', name: 'Postman',        category: 'productivity' },

    // Design / Video
    'figma':             { domain: 'figma.com',           color: '#f24e1e', name: 'Figma',              category: 'design' },
    'canva':             { domain: 'canva.com',           color: '#00c4cc', name: 'Canva',              category: 'design' },
    'canva pro':         { domain: 'canva.com',           color: '#00c4cc', name: 'Canva Pro',          category: 'design' },
    'adobe':             { domain: 'adobe.com',           color: '#ff0000', name: 'Adobe CC',           category: 'design' },
    'adobe creative cloud': { domain: 'adobe.com',       color: '#ff0000', name: 'Adobe CC',           category: 'design' },
    'photoshop':         { domain: 'adobe.com',           color: '#31a8ff', name: 'Photoshop',          category: 'design' },
    'illustrator':       { domain: 'adobe.com',           color: '#ff9a00', name: 'Illustrator',        category: 'design' },
    'premiere pro':      { domain: 'adobe.com',           color: '#9999ff', name: 'Premiere Pro',       category: 'design' },
    'after effects':     { domain: 'adobe.com',           color: '#9999ff', name: 'After Effects',      category: 'design' },
    'lightroom':         { domain: 'adobe.com',           color: '#31a8ff', name: 'Lightroom',          category: 'design' },
    'capcut':            { domain: 'capcut.com',          color: '#000000', name: 'CapCut',             category: 'design' },
    'capcut pro':        { domain: 'capcut.com',          color: '#000000', name: 'CapCut Pro',         category: 'design' },
    'davinci resolve':   { domain: 'blackmagicdesign.com', color: '#e52020', name: 'DaVinci Resolve',  category: 'design' },
    'final cut pro':     { domain: 'apple.com',           color: '#555555', name: 'Final Cut Pro',      category: 'design' },

    // AI
    'chatgpt':       { domain: 'chatgpt.com',      color: '#10a37f', name: 'ChatGPT',        category: 'ai' },
    'chatgpt plus':  { domain: 'chatgpt.com',      color: '#10a37f', name: 'ChatGPT Plus',   category: 'ai' },
    'chatgpt pro':   { domain: 'chatgpt.com',      color: '#10a37f', name: 'ChatGPT Pro',    category: 'ai' },
    'chatgpt team':  { domain: 'chatgpt.com',      color: '#10a37f', name: 'ChatGPT Team',   category: 'ai' },
    'openai':        { domain: 'openai.com',       color: '#10a37f', name: 'OpenAI',         category: 'ai' },
    'claude':        { domain: 'claude.ai',        color: '#d97757', name: 'Claude',         category: 'ai' },
    'claude pro':    { domain: 'claude.ai',        color: '#d97757', name: 'Claude Pro',     category: 'ai' },
    'claude max':    { domain: 'claude.ai',        color: '#d97757', name: 'Claude Max',     category: 'ai' },
    'gemini':        { domain: 'gemini.google.com', color: '#4285f4', name: 'Gemini',        category: 'ai' },
    'gemini advanced': { domain: 'gemini.google.com', color: '#4285f4', name: 'Gemini Advanced', category: 'ai' },
    'google ai pro': { domain: 'gemini.google.com', color: '#4285f4', name: 'Google AI Pro', category: 'ai' },
    'google ai ultra': { domain: 'gemini.google.com', color: '#4285f4', name: 'Google AI Ultra', category: 'ai' },
    'kimi':          { domain: 'kimi.com',         color: '#000000', name: 'Kimi',           category: 'ai' },
    'kimi+':         { domain: 'kimi.com',         color: '#000000', name: 'Kimi+',          category: 'ai' },
    'moonshot ai':   { domain: 'moonshot.ai',      color: '#000000', name: 'Moonshot AI',    category: 'ai' },
    'deepseek':      { domain: 'deepseek.com',     color: '#4d6bfe', name: 'DeepSeek',       category: 'ai' },
    'grok':          { domain: 'grok.com',         color: '#000000', name: 'Grok',           category: 'ai' },
    'grok premium':  { domain: 'grok.com',         color: '#000000', name: 'Grok Premium',   category: 'ai' },
    'grok premium+': { domain: 'grok.com',         color: '#000000', name: 'Grok Premium+',  category: 'ai' },
    'x premium+':    { domain: 'x.com',            color: '#000000', name: 'X Premium+',     category: 'ai' },
    'mistral':       { domain: 'mistral.ai',       color: '#fa520f', name: 'Mistral (Le Chat)', category: 'ai' },
    'le chat':       { domain: 'mistral.ai',       color: '#fa520f', name: 'Le Chat Pro',    category: 'ai' },
    'qwen':          { domain: 'qwen.ai',          color: '#615ced', name: 'Qwen',           category: 'ai' },
    'poe':           { domain: 'poe.com',          color: '#5b57d1', name: 'Poe',            category: 'ai' },
    'character.ai':  { domain: 'character.ai',     color: '#000000', name: 'Character.AI',   category: 'ai' },
    'character ai':  { domain: 'character.ai',     color: '#000000', name: 'Character.AI',   category: 'ai' },
    'c.ai+':         { domain: 'character.ai',     color: '#000000', name: 'Character.AI+',  category: 'ai' },
    'perplexity':    { domain: 'perplexity.ai',    color: '#20b8cd', name: 'Perplexity',     category: 'ai' },
    'perplexity pro':{ domain: 'perplexity.ai',    color: '#20b8cd', name: 'Perplexity Pro', category: 'ai' },
    'midjourney':    { domain: 'midjourney.com',   color: '#000000', name: 'Midjourney',     category: 'ai' },
    'midjourney basic': { domain: 'midjourney.com', color: '#000000', name: 'Midjourney Basic', category: 'ai' },
    'midjourney standard': { domain: 'midjourney.com', color: '#000000', name: 'Midjourney Standard', category: 'ai' },
    'midjourney pro': { domain: 'midjourney.com',  color: '#000000', name: 'Midjourney Pro', category: 'ai' },
    'copilot':       { domain: 'github.com',       color: '#6e40c9', name: 'Copilot',        category: 'ai' },
    'github copilot':{ domain: 'github.com',       color: '#6e40c9', name: 'GitHub Copilot', category: 'ai' },
    'github copilot pro': { domain: 'github.com',  color: '#6e40c9', name: 'GitHub Copilot Pro', category: 'ai' },
    'cursor':        { domain: 'cursor.com',       color: '#000000', name: 'Cursor',         category: 'ai' },
    'cursor pro':    { domain: 'cursor.com',       color: '#000000', name: 'Cursor Pro',     category: 'ai' },
    'windsurf':      { domain: 'windsurf.com',     color: '#58e5c1', name: 'Windsurf',       category: 'ai' },
    'windsurf pro':  { domain: 'windsurf.com',     color: '#58e5c1', name: 'Windsurf Pro',   category: 'ai' },
    'replit':        { domain: 'replit.com',       color: '#f26207', name: 'Replit',         category: 'ai' },
    'replit core':   { domain: 'replit.com',       color: '#f26207', name: 'Replit Core',    category: 'ai' },
    'v0':            { domain: 'v0.app',           color: '#000000', name: 'v0',             category: 'ai' },
    'v0 premium':    { domain: 'v0.app',           color: '#000000', name: 'v0 Premium',     category: 'ai' },
    'manus':         { domain: 'manus.im',         color: '#6c5ce7', name: 'Manus',          category: 'ai' },
    'suno':          { domain: 'suno.com',         color: '#000000', name: 'Suno',           category: 'ai' },
    'suno pro':      { domain: 'suno.com',         color: '#000000', name: 'Suno Pro',       category: 'ai' },
    'elevenlabs':    { domain: 'elevenlabs.io',    color: '#000000', name: 'ElevenLabs',     category: 'ai' },
    'elevenlabs starter': { domain: 'elevenlabs.io', color: '#000000', name: 'ElevenLabs Starter', category: 'ai' },
    'elevenlabs creator': { domain: 'elevenlabs.io', color: '#000000', name: 'ElevenLabs Creator', category: 'ai' },
    'runway':        { domain: 'runwayml.com',     color: '#000000', name: 'Runway',         category: 'ai' },
    'runway standard': { domain: 'runwayml.com',   color: '#000000', name: 'Runway Standard', category: 'ai' },
    'runway pro':    { domain: 'runwayml.com',     color: '#000000', name: 'Runway Pro',     category: 'ai' },
    'leonardo ai':   { domain: 'leonardo.ai',      color: '#0d1117', name: 'Leonardo AI',    category: 'ai' },
    'leonardo pro':  { domain: 'leonardo.ai',      color: '#0d1117', name: 'Leonardo Pro',   category: 'ai' },
    'ideogram':      { domain: 'ideogram.ai',      color: '#000000', name: 'Ideogram',       category: 'ai' },
    'ideogram plus': { domain: 'ideogram.ai',      color: '#000000', name: 'Ideogram Plus',  category: 'ai' },
    'notion ai':     { domain: 'notion.so',        color: '#000000', name: 'Notion AI',      category: 'ai' },

    // AI video / image / creators
    'kling':          { domain: 'klingai.com',      color: '#2454ff', name: 'Kling AI',          category: 'ai' },
    'kling ai':       { domain: 'klingai.com',      color: '#2454ff', name: 'Kling AI',          category: 'ai' },
    'kling standard': { domain: 'klingai.com',      color: '#2454ff', name: 'Kling AI Standard', category: 'ai' },
    'kling ai standard': { domain: 'klingai.com',   color: '#2454ff', name: 'Kling AI Standard', category: 'ai' },
    'kling pro':      { domain: 'klingai.com',      color: '#2454ff', name: 'Kling AI Pro',      category: 'ai' },
    'kling ai pro':   { domain: 'klingai.com',      color: '#2454ff', name: 'Kling AI Pro',      category: 'ai' },
    'kling premier':  { domain: 'klingai.com',      color: '#2454ff', name: 'Kling AI Premier',  category: 'ai' },
    'kling ai premier': { domain: 'klingai.com',    color: '#2454ff', name: 'Kling AI Premier',  category: 'ai' },
    'pika':           { domain: 'pika.art',         color: '#7c3aed', name: 'Pika',              category: 'ai' },
    'pika art':       { domain: 'pika.art',         color: '#7c3aed', name: 'Pika',              category: 'ai' },
    'pika standard':  { domain: 'pika.art',         color: '#7c3aed', name: 'Pika Standard',     category: 'ai' },
    'pika pro':       { domain: 'pika.art',         color: '#7c3aed', name: 'Pika Pro',          category: 'ai' },
    'luma':           { domain: 'lumalabs.ai',      color: '#111827', name: 'Luma AI',           category: 'ai' },
    'luma ai':        { domain: 'lumalabs.ai',      color: '#111827', name: 'Luma AI',           category: 'ai' },
    'dream machine':  { domain: 'lumalabs.ai',      color: '#111827', name: 'Luma Dream Machine', category: 'ai' },
    'luma dream machine': { domain: 'lumalabs.ai', color: '#111827', name: 'Luma Dream Machine', category: 'ai' },
    'pixverse':       { domain: 'pixverse.ai',      color: '#6d28d9', name: 'PixVerse',          category: 'ai' },
    'pixverse pro':   { domain: 'pixverse.ai',      color: '#6d28d9', name: 'PixVerse Pro',      category: 'ai' },
    'hailuo':         { domain: 'hailuoai.video',   color: '#0ea5e9', name: 'Hailuo AI',         category: 'ai' },
    'hailuo ai':      { domain: 'hailuoai.video',   color: '#0ea5e9', name: 'Hailuo AI',         category: 'ai' },
    'minimax':        { domain: 'minimax.io',       color: '#0ea5e9', name: 'MiniMax',           category: 'ai' },
    'higgsfield':     { domain: 'higgsfield.ai',    color: '#111111', name: 'Higgsfield',        category: 'ai' },
    'haiper':         { domain: 'haiper.ai',        color: '#ff4d6d', name: 'Haiper AI',         category: 'ai' },
    'veo':            { domain: 'deepmind.google',  color: '#4285f4', name: 'Google Veo',        category: 'ai' },
    'google veo':     { domain: 'deepmind.google',  color: '#4285f4', name: 'Google Veo',        category: 'ai' },
    'sora':           { domain: 'openai.com',       color: '#10a37f', name: 'Sora',              category: 'ai' },
    'wan ai':         { domain: 'tongyi.aliyun.com', color: '#ff6a00', name: 'Wan AI',           category: 'ai' },
    'hunyuan video':  { domain: 'hunyuan.tencent.com', color: '#0052d9', name: 'Hunyuan Video',  category: 'ai' },
    'dreamina':       { domain: 'dreamina.capcut.com', color: '#000000', name: 'Dreamina',       category: 'ai' },
    'jimeng':         { domain: 'jimeng.jianying.com', color: '#000000', name: 'Jimeng AI',      category: 'ai' },
    'krea':           { domain: 'krea.ai',          color: '#111111', name: 'Krea AI',           category: 'ai' },
    'krea ai':        { domain: 'krea.ai',          color: '#111111', name: 'Krea AI',           category: 'ai' },
    'krea pro':       { domain: 'krea.ai',          color: '#111111', name: 'Krea Pro',          category: 'ai' },
    'freepik':        { domain: 'freepik.com',      color: '#1273eb', name: 'Freepik',           category: 'ai' },
    'freepik premium':{ domain: 'freepik.com',      color: '#1273eb', name: 'Freepik Premium',   category: 'ai' },
    'magnific':       { domain: 'magnific.ai',      color: '#000000', name: 'Magnific AI',       category: 'ai' },
    'topaz':          { domain: 'topazlabs.com',    color: '#1b75bb', name: 'Topaz Labs',        category: 'ai' },
    'topaz labs':     { domain: 'topazlabs.com',    color: '#1b75bb', name: 'Topaz Labs',        category: 'ai' },
    'recraft':        { domain: 'recraft.ai',       color: '#ff5b3a', name: 'Recraft',           category: 'ai' },
    'stability ai':   { domain: 'stability.ai',     color: '#000000', name: 'Stability AI',      category: 'ai' },
    'clipdrop':       { domain: 'clipdrop.co',      color: '#111827', name: 'Clipdrop',          category: 'ai' },
    'fal ai':         { domain: 'fal.ai',           color: '#000000', name: 'fal.ai',            category: 'ai' },
    'replicate':      { domain: 'replicate.com',    color: '#000000', name: 'Replicate',         category: 'ai' },
    'heygen':         { domain: 'heygen.com',       color: '#2563eb', name: 'HeyGen',            category: 'ai' },
    'heygen creator': { domain: 'heygen.com',       color: '#2563eb', name: 'HeyGen Creator',    category: 'ai' },
    'synthesia':      { domain: 'synthesia.io',     color: '#6d28d9', name: 'Synthesia',         category: 'ai' },
    'd-id':           { domain: 'd-id.com',         color: '#0ea5e9', name: 'D-ID',              category: 'ai' },
    'descript':       { domain: 'descript.com',     color: '#22c55e', name: 'Descript',          category: 'ai' },
    'opus clip':      { domain: 'opus.pro',         color: '#7c3aed', name: 'OpusClip',          category: 'ai' },
    'opusclip':       { domain: 'opus.pro',         color: '#7c3aed', name: 'OpusClip',          category: 'ai' },
    'invideo':        { domain: 'invideo.io',       color: '#7c3aed', name: 'InVideo AI',        category: 'ai' },
    'invideo ai':     { domain: 'invideo.io',       color: '#7c3aed', name: 'InVideo AI',        category: 'ai' },
    'kaiber':         { domain: 'kaiber.ai',        color: '#f97316', name: 'Kaiber',            category: 'ai' },
    'vidyo ai':       { domain: 'vidyo.ai',         color: '#06b6d4', name: 'vidyo.ai',          category: 'ai' },
    'akool':          { domain: 'akool.com',        color: '#f97316', name: 'Akool',             category: 'ai' },
    'gamma':          { domain: 'gamma.app',        color: '#7c3aed', name: 'Gamma',             category: 'ai' },
    'beautiful ai':   { domain: 'beautiful.ai',     color: '#111827', name: 'Beautiful.ai',      category: 'ai' },
    'lovable':        { domain: 'lovable.dev',      color: '#ff6b81', name: 'Lovable',           category: 'ai' },
    'lovable pro':    { domain: 'lovable.dev',      color: '#ff6b81', name: 'Lovable Pro',       category: 'ai' },
    'bolt':           { domain: 'bolt.new',         color: '#facc15', name: 'Bolt',              category: 'ai' },
    'bolt.new':       { domain: 'bolt.new',         color: '#facc15', name: 'Bolt.new',          category: 'ai' },
    'bolt pro':       { domain: 'bolt.new',         color: '#facc15', name: 'Bolt Pro',          category: 'ai' },
    'warp':           { domain: 'warp.dev',         color: '#01a4ff', name: 'Warp',              category: 'ai' },
    'tabnine':        { domain: 'tabnine.com',      color: '#6d28d9', name: 'Tabnine',           category: 'ai' },
    'codeium':        { domain: 'codeium.com',      color: '#22c55e', name: 'Codeium',           category: 'ai' },
    'supermaven':     { domain: 'supermaven.com',   color: '#111827', name: 'Supermaven',        category: 'ai' },

    // Cloud
    'icloud+':     { domain: 'icloud.com',       color: '#3693f5', name: 'iCloud+',      category: 'cloud' },
    'icloud':      { domain: 'icloud.com',       color: '#3693f5', name: 'iCloud+',      category: 'cloud' },
    'google one':  { domain: 'one.google.com',   color: '#4285f4', name: 'Google One',   category: 'cloud' },
    'google drive':{ domain: 'drive.google.com', color: '#4285f4', name: 'Google Drive', category: 'cloud' },
    'dropbox':     { domain: 'dropbox.com',      color: '#0061ff', name: 'Dropbox',      category: 'cloud' },
    'onedrive':    { domain: 'onedrive.com',     color: '#0078d4', name: 'OneDrive',     category: 'cloud' },
    'mega':        { domain: 'mega.nz',          color: '#d9272e', name: 'MEGA',         category: 'cloud' },
    'cloudflare':  { domain: 'cloudflare.com',   color: '#f38020', name: 'Cloudflare',  category: 'cloud' },
    'digitalocean':{ domain: 'digitalocean.com', color: '#0080ff', name: 'DigitalOcean', category: 'cloud' },
    'aws':         { domain: 'aws.amazon.com',   color: '#ff9900', name: 'AWS',          category: 'cloud' },
    'vercel':      { domain: 'vercel.com',       color: '#000000', name: 'Vercel',       category: 'cloud' },
    'namecheap':   { domain: 'namecheap.com',    color: '#de5833', name: 'Namecheap',    category: 'cloud' },

    // Gaming
    'xbox game pass':     { domain: 'xbox.com',       color: '#107c10', name: 'Xbox Game Pass',     category: 'gaming' },
    'xbox':               { domain: 'xbox.com',       color: '#107c10', name: 'Xbox Game Pass',     category: 'gaming' },
    'playstation plus':   { domain: 'playstation.com', color: '#003087', name: 'PlayStation Plus',  category: 'gaming' },
    'playstation':        { domain: 'playstation.com', color: '#003087', name: 'PlayStation Plus',  category: 'gaming' },
    'nintendo switch online': { domain: 'nintendo.com', color: '#e60012', name: 'Nintendo Switch Online', category: 'gaming' },
    'nintendo':           { domain: 'nintendo.com',   color: '#e60012', name: 'Nintendo Switch Online', category: 'gaming' },
    'discord nitro':      { domain: 'discord.com',    color: '#5865f2', name: 'Discord Nitro',      category: 'gaming' },
    'discord':            { domain: 'discord.com',    color: '#5865f2', name: 'Discord Nitro',      category: 'gaming' },
    'roblox premium':     { domain: 'roblox.com',     color: '#e2231a', name: 'Roblox Plus',        category: 'gaming' },
    'roblox plus':        { domain: 'roblox.com',     color: '#e2231a', name: 'Roblox Plus',        category: 'gaming' },
    'roblox plus 500':    { domain: 'roblox.com',     color: '#e2231a', name: 'Roblox Plus 500',    category: 'gaming' },
    'roblox plus 1000':   { domain: 'roblox.com',     color: '#e2231a', name: 'Roblox Plus 1000',   category: 'gaming' },
    'roblox plus 2000':   { domain: 'roblox.com',     color: '#e2231a', name: 'Roblox Plus 2000',   category: 'gaming' },
    'roblox 500':         { domain: 'roblox.com',     color: '#e2231a', name: 'Roblox Plus 500',    category: 'gaming' },
    'roblox 1000':        { domain: 'roblox.com',     color: '#e2231a', name: 'Roblox Plus 1000',   category: 'gaming' },
    'roblox 2000':        { domain: 'roblox.com',     color: '#e2231a', name: 'Roblox Plus 2000',   category: 'gaming' },
    'robux 500':          { domain: 'roblox.com',     color: '#e2231a', name: 'Roblox Plus 500',    category: 'gaming' },
    'robux 1000':         { domain: 'roblox.com',     color: '#e2231a', name: 'Roblox Plus 1000',   category: 'gaming' },
    'robux 2000':         { domain: 'roblox.com',     color: '#e2231a', name: 'Roblox Plus 2000',   category: 'gaming' },
    'roblox':             { domain: 'roblox.com',     color: '#e2231a', name: 'Roblox Plus',        category: 'gaming' },
    'apple arcade':       { domain: 'apple.com',      color: '#555555', name: 'Apple Arcade',      category: 'gaming' },
    'steam':              { domain: 'store.steampowered.com', color: '#1b2838', name: 'Steam', category: 'gaming' },
    'ea play':            { domain: 'ea.com',         color: '#000000', name: 'EA Play',            category: 'gaming' },
    'epic games':         { domain: 'epicgames.com',  color: '#313131', name: 'Epic Games',          category: 'gaming' },
    'battle.net':         { domain: 'battle.net',     color: '#00aeff', name: 'Battle.net',          category: 'gaming' },

    // VPN / Security
    'nordvpn':      { domain: 'nordvpn.com',       color: '#4687ff', name: 'NordVPN',       category: 'vpn' },
    'expressvpn':   { domain: 'expressvpn.com',    color: '#da3940', name: 'ExpressVPN',    category: 'vpn' },
    'surfshark':    { domain: 'surfshark.com',     color: '#1eb8a6', name: 'Surfshark',     category: 'vpn' },
    '1password':    { domain: '1password.com',     color: '#0094f5', name: '1Password',     category: 'vpn' },
    'lastpass':     { domain: 'lastpass.com',      color: '#d32d27', name: 'LastPass',      category: 'vpn' },
    'mullvad':      { domain: 'mullvad.net',       color: '#2d556e', name: 'Mullvad VPN',   category: 'vpn' },
    'protonvpn':    { domain: 'protonvpn.com',     color: '#6d4aff', name: 'ProtonVPN',     category: 'vpn' },
    'proton':       { domain: 'proton.me',         color: '#6d4aff', name: 'Proton',        category: 'vpn' },
    'proton mail':  { domain: 'proton.me',         color: '#6d4aff', name: 'Proton Mail',   category: 'vpn' },
    'kaspersky':    { domain: 'kaspersky.com',     color: '#006d5c', name: 'Kaspersky',     category: 'vpn' },

    // Education
    'skillshare':          { domain: 'skillshare.com',       color: '#00ff84', name: 'Skillshare',          category: 'education' },
    'coursera':            { domain: 'coursera.org',         color: '#0056d2', name: 'Coursera',            category: 'education' },
    'udemy':               { domain: 'udemy.com',            color: '#a435f0', name: 'Udemy',               category: 'education' },
    'linkedin learning':   { domain: 'linkedin.com',         color: '#0a66c2', name: 'LinkedIn Learning',   category: 'education' },
    'duolingo':            { domain: 'duolingo.com',         color: '#58cc02', name: 'Duolingo',            category: 'education' },
    'duolingo plus':       { domain: 'duolingo.com',         color: '#58cc02', name: 'Duolingo Plus',       category: 'education' },
    'medium':              { domain: 'medium.com',           color: '#000000', name: 'Medium',              category: 'education' },
    'masterclass':         { domain: 'masterclass.com',      color: '#000000', name: 'MasterClass',         category: 'education' },
    'brilliant':           { domain: 'brilliant.org',        color: '#0c8599', name: 'Brilliant',           category: 'education' },
    'audible':             { domain: 'audible.com',          color: '#f8991c', name: 'Audible',             category: 'streaming' },
    'kindle unlimited':    { domain: 'amazon.com',           color: '#ff9900', name: 'Kindle Unlimited',    category: 'streaming' },

    // Social / Messaging
    'telegram premium': { domain: 'telegram.org',    color: '#26a5e4', name: 'Telegram Premium', category: 'other' },
    'telegram':         { domain: 'telegram.org',    color: '#26a5e4', name: 'Telegram Premium', category: 'other' },
    'x premium':        { domain: 'x.com',           color: '#000000', name: 'X Premium',        category: 'other' },
    'x':                { domain: 'x.com',           color: '#000000', name: 'X Premium',        category: 'other' },
    'twitter':          { domain: 'x.com',           color: '#000000', name: 'X Premium',        category: 'other' },
    'snapchat+':        { domain: 'snapchat.com',    color: '#fffc00', name: 'Snapchat+',        category: 'other' },
    'snapchat':         { domain: 'snapchat.com',    color: '#fffc00', name: 'Snapchat+',        category: 'other' },
    'tinder gold':      { domain: 'tinder.com',      color: '#fe3c72', name: 'Tinder Gold',      category: 'other' },
    'tinder plus':      { domain: 'tinder.com',      color: '#fe3c72', name: 'Tinder Plus',      category: 'other' },
    'tinder':           { domain: 'tinder.com',      color: '#fe3c72', name: 'Tinder',           category: 'other' },
    'onlyfans':         { domain: 'onlyfans.com',    color: '#00aff0', name: 'OnlyFans',         category: 'other' },
    'patreon':          { domain: 'patreon.com',     color: '#ff424d', name: 'Patreon',          category: 'other' },
    'vk':               { domain: 'vk.com',          color: '#0077ff', name: 'VK',               category: 'other' },

    // Dev tools
    'github':       { domain: 'github.com',     color: '#6e40c9', name: 'GitHub',        category: 'productivity' },
    'gitlab':       { domain: 'gitlab.com',     color: '#fc6d26', name: 'GitLab',        category: 'productivity' },
    'jetbrains':    { domain: 'jetbrains.com',  color: '#000000', name: 'JetBrains',     category: 'productivity' },
    'docker':       { domain: 'docker.com',     color: '#2496ed', name: 'Docker',        category: 'productivity' },
    'wordpress':    { domain: 'wordpress.com',  color: '#21759b', name: 'WordPress',     category: 'productivity' },
    'shopify':      { domain: 'shopify.com',    color: '#96bf48', name: 'Shopify',       category: 'productivity' },
    'stripe':       { domain: 'stripe.com',     color: '#635bff', name: 'Stripe',        category: 'productivity' },
    'heroku':       { domain: 'heroku.com',     color: '#430098', name: 'Heroku',        category: 'cloud' },

    // Other popular
    'whatsapp':     { domain: 'whatsapp.com',   color: '#25d366', name: 'WhatsApp',      category: 'other' },
    'tinkoff pro':  { domain: 'tinkoff.ru',     color: '#ffdd2d', name: 'Тинькофф Про',  category: 'other' },
    'tinkoff':      { domain: 'tinkoff.ru',     color: '#ffdd2d', name: 'Тинькофф Про',  category: 'other' },
    'apple one':    { domain: 'apple.com',      color: '#555555', name: 'Apple One',     category: 'other' },
};


// ========== PRESET PRICES ==========
// Known subscriptions use these embedded prices immediately and are NOT searched online.
// Internet lookup is only used for an unknown service that is not in CATALOG.
const PRESET_PRICES = {
    'netflix': { price: 15.49, period: 'monthly' },
    'youtube premium': { price: 13.99, period: 'monthly' },
    'youtube music': { price: 10.99, period: 'monthly' },
    'disney+': { price: 9.99, period: 'monthly' },
    'hbo max': { price: 9.99, period: 'monthly' },
    'hulu': { price: 9.99, period: 'monthly' },
    'crunchyroll': { price: 7.99, period: 'monthly' },
    'apple tv': { price: 9.99, period: 'monthly' },
    'amazon prime': { price: 14.99, period: 'monthly' },
    'spotify premium': { price: 11.99, period: 'monthly' },
    'apple music': { price: 10.99, period: 'monthly' },
    'soundcloud go': { price: 9.99, period: 'monthly' },
    'deezer': { price: 11.99, period: 'monthly' },
    'tidal': { price: 10.99, period: 'monthly' },
    'notion ai': { price: 10, period: 'monthly' },
    'grammarly premium': { price: 12, period: 'monthly' },
    'microsoft 365': { price: 9.99, period: 'monthly' },
    'office 365': { price: 9.99, period: 'monthly' },
    'canva pro': { price: 15, period: 'monthly' },
    'capcut pro': { price: 9.99, period: 'monthly' },
    'adobe creative cloud': { price: 59.99, period: 'monthly' },
    'photoshop': { price: 22.99, period: 'monthly' },
    'icloud+': { price: 0.99, period: 'monthly' },
    'google one': { price: 1.99, period: 'monthly' },
    'dropbox': { price: 11.99, period: 'monthly' },
    'xbox game pass': { price: 19.99, period: 'monthly' },
    'playstation plus': { price: 9.99, period: 'monthly' },
    'nintendo switch online': { price: 19.99, period: 'yearly' },
    'discord nitro': { price: 9.99, period: 'monthly' },
    'apple arcade': { price: 6.99, period: 'monthly' },
    'ea play': { price: 5.99, period: 'monthly' },
    'nordvpn': { price: 12.99, period: 'monthly' },
    'expressvpn': { price: 12.95, period: 'monthly' },
    'surfshark': { price: 15.45, period: 'monthly' },
    '1password': { price: 2.99, period: 'monthly' },
    'duolingo plus': { price: 12.99, period: 'monthly' },
    'coursera': { price: 59, period: 'monthly' },
    'telegram premium': { price: 4.99, period: 'monthly' },
    'x premium': { price: 8, period: 'monthly' },
    'snapchat+': { price: 3.99, period: 'monthly' },
    'tinder gold': { price: 24.99, period: 'monthly' },
    'chatgpt plus': { price: 20, period: 'monthly' },
    'chatgpt pro': { price: 200, period: 'monthly' },
    'chatgpt team': { price: 30, period: 'monthly' },
    'claude pro': { price: 20, period: 'monthly' },
    'claude max': { price: 100, period: 'monthly' },
    'gemini advanced': { price: 19.99, period: 'monthly' },
    'google ai pro': { price: 19.99, period: 'monthly' },
    'google ai ultra': { price: 249.99, period: 'monthly' },
    'kimi+': { price: 19.99, period: 'monthly' },
    'grok premium': { price: 8, period: 'monthly' },
    'grok premium+': { price: 40, period: 'monthly' },
    'x premium+': { price: 40, period: 'monthly' },
    'le chat': { price: 14.99, period: 'monthly' },
    'poe': { price: 19.99, period: 'monthly' },
    'c.ai+': { price: 9.99, period: 'monthly' },
    'perplexity pro': { price: 20, period: 'monthly' },
    'midjourney basic': { price: 10, period: 'monthly' },
    'midjourney standard': { price: 30, period: 'monthly' },
    'midjourney pro': { price: 60, period: 'monthly' },
    'copilot': { price: 10, period: 'monthly' },
    'github copilot': { price: 10, period: 'monthly' },
    'github copilot pro': { price: 10, period: 'monthly' },
    'cursor pro': { price: 20, period: 'monthly' },
    'windsurf pro': { price: 15, period: 'monthly' },
    'replit core': { price: 20, period: 'monthly' },
    'v0 premium': { price: 20, period: 'monthly' },
    'suno pro': { price: 10, period: 'monthly' },
    'elevenlabs starter': { price: 5, period: 'monthly' },
    'elevenlabs creator': { price: 22, period: 'monthly' },
    'runway standard': { price: 15, period: 'monthly' },
    'runway pro': { price: 35, period: 'monthly' },
    'leonardo pro': { price: 12, period: 'monthly' },
    'ideogram plus': { price: 8, period: 'monthly' },
    'kling standard': { price: 10, period: 'monthly' },
    'kling ai standard': { price: 10, period: 'monthly' },
    'kling pro': { price: 35, period: 'monthly' },
    'kling ai pro': { price: 35, period: 'monthly' },
    'kling premier': { price: 92, period: 'monthly' },
    'kling ai premier': { price: 92, period: 'monthly' },
    'pika standard': { price: 10, period: 'monthly' },
    'pika pro': { price: 35, period: 'monthly' },
    'dream machine': { price: 9.99, period: 'monthly' },
    'luma dream machine': { price: 9.99, period: 'monthly' },
    'pixverse pro': { price: 10, period: 'monthly' },
    'krea pro': { price: 10, period: 'monthly' },
    'freepik premium': { price: 12, period: 'monthly' },
    'heygen creator': { price: 29, period: 'monthly' },
    'gamma': { price: 10, period: 'monthly' },
    'lovable pro': { price: 20, period: 'monthly' },
    'bolt pro': { price: 20, period: 'monthly' },
    'roblox plus 500': { price: 4.99, period: 'monthly' },
    'roblox plus 1000': { price: 9.99, period: 'monthly' },
    'roblox plus 2000': { price: 19.99, period: 'monthly' },
    'roblox 500': { price: 4.99, period: 'monthly' },
    'roblox 1000': { price: 9.99, period: 'monthly' },
    'roblox 2000': { price: 19.99, period: 'monthly' },
    'robux 500': { price: 4.99, period: 'monthly' },
    'robux 1000': { price: 9.99, period: 'monthly' },
    'robux 2000': { price: 19.99, period: 'monthly' },
};

// ========== STATE ==========
let subscriptions = JSON.parse(localStorage.getItem('subs_v2') || '[]');
let editingId = null;
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let currentSort = 'renewal';
let priceWasManuallyEdited = false;
let periodWasManuallyEdited = false;
let lastAutoPrice = null;
let isApplyingAutoPrice = false;
let priceLookupSeq = 0;
let priceLookupTimer = null;
const onlinePriceCache = new Map();

// ========== LOGO URL GENERATOR ==========
// Clearbit's free logo API was shut down in Dec 2025, so we pull icons
// straight from Google's favicon service instead — no key required.
function getLogoUrl(domain) {
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
}

function getFallbackIcon(name, color) {
    // Generate a colored letter icon via ui-avatars.com
    const letter = (name || '?').charAt(0).toUpperCase();
    const bgColor = (color || '#6c6cf5').replace('#', '');
    return `https://ui-avatars.com/api/?name=${letter}&size=128&background=${bgColor}&color=fff&font-size=0.45&bold=true`;
}

function getIconForSub(sub) {
    const match = findMatch(sub.name);
    if (match) {
        return {
            url: getLogoUrl(match.domain),
            fallback: getFallbackIcon(match.name, match.color || sub.color),
            name: match.name,
            matched: true
        };
    }
    return {
        url: getFallbackIcon(sub.name, sub.color),
        fallback: null,
        name: sub.name,
        matched: false
    };
}

// ========== MATCHING ==========
function withCatalogKey(key, val) {
    return val ? { key, ...val } : null;
}

function findMatch(name) {
    const lower = name.toLowerCase().trim();

    // Exact match
    if (CATALOG[lower]) return withCatalogKey(lower, CATALOG[lower]);

    // Partial match — longest key wins
    let bestMatch = null;
    let bestKey = null;
    let bestScore = 0;

    for (const [key, val] of Object.entries(CATALOG)) {
        if (lower.includes(key)) {
            const score = key.length;
            if (score > bestScore) { bestScore = score; bestKey = key; bestMatch = val; }
        }
        if (key.includes(lower) && lower.length >= 3) {
            const score = lower.length;
            if (score > bestScore) { bestScore = score; bestKey = key; bestMatch = val; }
        }
    }

    return withCatalogKey(bestKey, bestMatch);
}

function getSuggestions(input) {
    const lower = input.toLowerCase().trim();
    if (lower.length < 2) return [];

    const seen = new Set();
    const results = [];
    for (const [key, val] of Object.entries(CATALOG)) {
        if (key.includes(lower) || lower.includes(key)) {
            const dedupeKey = `${val.name}|${val.domain}`;
            if (seen.has(dedupeKey)) continue;
            seen.add(dedupeKey);
            results.push({ key, ...val });
        }
    }
    results.sort((a, b) => {
        const aExact = a.key === lower ? 1 : 0;
        const bExact = b.key === lower ? 1 : 0;
        if (aExact !== bExact) return bExact - aExact;
        return b.key.length - a.key.length;
    });
    return results.slice(0, 10);
}

function getCategoryLabel(category) {
    const labels = {
        streaming: 'Стриминг', music: 'Музыка', productivity: 'Продуктивность',
        gaming: 'Игры', cloud: 'Облако / Хостинг', design: 'Дизайн / Видео',
        education: 'Обучение', vpn: 'VPN / Безопасность', ai: 'AI / Нейросети', other: 'Другое'
    };
    return labels[category] || category || 'Другое';
}

function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, (ch) => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[ch]));
}

function getPresetPrice(match) {
    if (!match) return null;
    const keys = [match.key, match.name].filter(Boolean).map(v => String(v).toLowerCase().trim());
    for (const key of keys) {
        if (PRESET_PRICES[key]) return { ...PRESET_PRICES[key], sourceType: 'preset' };
    }
    return null;
}

function formatResolvedPrice(priceResult) {
    if (!priceResult) return null;
    return `$${priceResult.price.toFixed(2)} ${getPeriodLabel(priceResult.period || 'monthly')}`;
}

function applyResolvedPrice(priceResult, force = false) {
    if (!priceResult) return false;
    const priceEl = document.getElementById('subPrice');
    const periodEl = document.getElementById('subPeriod');
    if (!priceEl || !periodEl) return false;

    const priceIsEmpty = priceEl.value === '' || Number.isNaN(parseFloat(priceEl.value));
    const canReplacePrice = force || priceIsEmpty || !priceWasManuallyEdited || priceEl.value === String(lastAutoPrice);

    isApplyingAutoPrice = true;
    if (canReplacePrice) {
        priceEl.value = priceResult.price.toFixed(2);
        lastAutoPrice = priceEl.value;
        priceWasManuallyEdited = false;
    }
    if ((force || !periodWasManuallyEdited) && priceResult.period) {
        periodEl.value = priceResult.period;
        periodWasManuallyEdited = false;
    }
    isApplyingAutoPrice = false;
    return canReplacePrice;
}

function applyPresetPrice(match, force = false) {
    const autoPrice = document.getElementById('subAutoPrice');
    if (!autoPrice || !autoPrice.checked) return null;
    const preset = getPresetPrice(match);
    if (!preset) return null;
    applyResolvedPrice(preset, force);
    return preset;
}

// ========== ONLINE PRICE LOOKUP ==========
// Static GitHub Pages cannot scrape the web directly because most sites block CORS.
// We therefore try official pricing pages through public CORS proxies.
// Prices are NOT hardcoded: catalog values only identify the service and where to look.
const PRICE_LOOKUP_SOURCES = [
    { match: /chatgpt|openai|sora/, urls: ['https://openai.com/chatgpt/pricing/'] },
    { match: /claude/, urls: ['https://www.anthropic.com/pricing'] },
    { match: /gemini|google ai|veo/, urls: ['https://one.google.com/about/ai-premium/'] },
    { match: /kling/, urls: ['https://klingai.com/pricing', 'https://app.klingai.com/global/membership'] },
    { match: /runway/, urls: ['https://runwayml.com/pricing'] },
    { match: /pika/, urls: ['https://pika.art/pricing'] },
    { match: /luma|dream machine/, urls: ['https://lumalabs.ai/dream-machine/pricing'] },
    { match: /pixverse/, urls: ['https://pixverse.ai/pricing'] },
    { match: /midjourney/, urls: ['https://docs.midjourney.com/hc/en-us/articles/27870484040333-Comparing-Midjourney-Plans'] },
    { match: /perplexity/, urls: ['https://www.perplexity.ai/pro'] },
    { match: /cursor/, urls: ['https://cursor.com/pricing'] },
    { match: /windsurf/, urls: ['https://windsurf.com/pricing'] },
    { match: /github copilot|copilot/, urls: ['https://github.com/features/copilot/plans'] },
    { match: /suno/, urls: ['https://suno.com/pricing'] },
    { match: /elevenlabs/, urls: ['https://elevenlabs.io/pricing'] },
    { match: /heygen/, urls: ['https://www.heygen.com/pricing'] },
    { match: /synthesia/, urls: ['https://www.synthesia.io/pricing'] },
    { match: /lovable/, urls: ['https://lovable.dev/pricing'] },
    { match: /bolt|bolt.new/, urls: ['https://bolt.new/pricing'] },
    { match: /roblox|robux/, urls: ['https://www.roblox.com/premium/membership', 'https://www.roblox.com/upgrades/robux'] },
    { match: /netflix/, urls: ['https://www.netflix.com/signup/planform'] },
    { match: /spotify/, urls: ['https://www.spotify.com/premium/'] },
    { match: /youtube premium|youtube music/, urls: ['https://www.youtube.com/premium'] },
    { match: /discord/, urls: ['https://discord.com/nitro'] },
    { match: /telegram/, urls: ['https://telegram.org/premium'] },
    { match: /canva/, urls: ['https://www.canva.com/pricing/'] },
    { match: /capcut/, urls: ['https://www.capcut.com/pricing'] },
];

function getSearchSlugs(input) {
    const cleaned = String(input || '')
        .toLowerCase()
        .replace(/\b(plus|pro|premium|standard|basic|team|max|ultra|starter|creator|subscription|подписка|цена|price|plan|тариф|500|1000|2000)\b/g, ' ')
        .replace(/[^a-z0-9\s-]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    const joined = cleaned.replace(/\s+/g, '');
    const dashed = cleaned.replace(/\s+/g, '-');
    return [...new Set([joined, dashed].filter(slug => slug.length >= 3))].slice(0, 3);
}

function getPriceLookupSources(input, match = null) {
    const haystack = `${input || ''} ${match?.key || ''} ${match?.name || ''} ${match?.domain || ''}`.toLowerCase();
    const urls = [];

    // For unknown services we can still try common official pricing URLs and a search page.
    PRICE_LOOKUP_SOURCES.forEach(source => {
        if (source.match.test(haystack)) urls.push(...source.urls);
    });

    if (match?.domain) {
        const domain = match.domain.replace(/^www\./, '');
        urls.push(`https://${domain}/pricing`);
        urls.push(`https://${domain}/pricing/`);
        urls.push(`https://${domain}/plans`);
        urls.push(`https://${domain}/premium`);
    } else {
        getSearchSlugs(input).forEach(slug => {
            ['com', 'ai', 'app', 'io', 'co'].forEach(tld => {
                urls.push(`https://${slug}.${tld}/pricing`);
                urls.push(`https://${slug}.${tld}/pricing/`);
                urls.push(`https://www.${slug}.${tld}/pricing`);
            });
        });
        urls.push(`https://duckduckgo.com/html/?q=${encodeURIComponent(`${input} subscription pricing $ monthly`)}`);
    }

    return [...new Set(urls)].slice(0, match ? 5 : 14);
}

function getPlanKeywords(input, match) {
    const text = `${input || ''} ${match?.key || ''} ${match?.name || ''}`.toLowerCase();
    const keywords = new Set();
    text.split(/[^a-zа-яё0-9+]+/i).filter(Boolean).forEach(token => {
        if (token.length >= 3 || /^\d+$/.test(token)) keywords.add(token);
    });

    ['plus','pro','premium','standard','basic','team','max','ultra','starter','creator','500','1000','2000'].forEach(word => {
        if (text.includes(word)) keywords.add(word);
    });
    return [...keywords];
}

async function fetchInternetText(url) {
    const proxyUrls = [
        url,
        `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
        `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`,
    ];

    for (const target of proxyUrls) {
        try {
            const response = await fetch(target, { cache: 'no-store' });
            if (!response.ok) continue;
            const text = await response.text();
            if (text && text.length > 80) return text;
        } catch (_) {
            // Try the next proxy/source.
        }
    }
    return null;
}

function normalizePrice(raw) {
    const value = parseFloat(String(raw).replace(',', '.'));
    if (!Number.isFinite(value) || value <= 0 || value > 10000) return null;
    return Number(value.toFixed(2));
}

function extractPricesFromText(text, input, match) {
    const cleanText = text.replace(/\s+/g, ' ');
    const keywords = getPlanKeywords(input, match);
    const prices = [];
    const regex = /(?:US\$|USD\s*|\$)\s*(\d{1,5}(?:[.,]\d{1,2})?)/gi;
    let found;

    while ((found = regex.exec(cleanText)) !== null) {
        const price = normalizePrice(found[1]);
        if (price === null) continue;
        const index = found.index;
        const context = cleanText.slice(Math.max(0, index - 260), Math.min(cleanText.length, index + 260)).toLowerCase();

        let score = 0;
        keywords.forEach(keyword => { if (context.includes(keyword)) score += keyword.length >= 4 ? 3 : 2; });
        if (/month|monthly|\/mo|per month|месяц|мес/i.test(context)) score += 4;
        if (/year|yearly|annual|\/yr|год/i.test(context)) score -= 2;
        if (/free|trial|credit|api|token/i.test(context)) score -= 3;
        if (price === 19.99 && !context.includes('19.99')) score -= 10;

        prices.push({ price, period: 'monthly', score, sourceContext: context.slice(0, 140) });
    }

    prices.sort((a, b) => b.score - a.score || a.price - b.price);
    return prices;
}

async function findOnlinePrice(input, match = null) {
    const cacheKey = `${match?.key || match?.name || 'unknown'}|${input}`.toLowerCase();
    if (onlinePriceCache.has(cacheKey)) return onlinePriceCache.get(cacheKey);

    const sources = getPriceLookupSources(input, match);
    for (const sourceUrl of sources) {
        const text = await fetchInternetText(sourceUrl);
        if (!text) continue;
        const prices = extractPricesFromText(text, input, match);
        if (prices.length > 0 && prices[0].score >= 0) {
            const result = { ...prices[0], sourceUrl };
            onlinePriceCache.set(cacheKey, result);
            return result;
        }
    }

    onlinePriceCache.set(cacheKey, null);
    return null;
}

function applyOnlinePrice(result, force = false) {
    return applyResolvedPrice(result, force);
}

function updateSubscriptionCheck(name, status = 'idle', priceResult = null) {
    const check = document.getElementById('subscriptionCheck');
    if (!check) return;

    const trimmed = (name || '').trim();
    const safeTrimmed = escapeHtml(trimmed);
    const match = findMatch(trimmed);
    if (!trimmed) {
        check.className = 'subscription-check muted';
        check.innerHTML = `
            <div class="check-title">Тестовая проверка</div>
            <div class="check-row"><span>Что хотите посмотреть:</span><strong>—</strong></div>
            <div class="check-row"><span>Что за подписка:</span><strong>Введите название</strong></div>
        `;
        return;
    }

    if (!match) {
        const priceRow = priceResult
            ? `<div class="check-row"><span>Цена из интернета:</span><strong>${formatResolvedPrice(priceResult)}</strong></div>`
            : status === 'loading'
                ? `<div class="check-row"><span>Цена:</span><strong>Ищу в интернете...</strong></div>`
                : status === 'not-found'
                    ? `<div class="check-row"><span>Цена:</span><strong>Не найдена</strong></div>`
                    : `<div class="check-row"><span>Цена:</span><strong>только для неизвестных — поиск в интернете</strong></div>`;
        const hint = priceResult
            ? '<div class="check-hint">Сервис неизвестен каталогу, поэтому цена была найдена через интернет.</div>'
            : status === 'loading'
                ? '<div class="check-hint">Сервис не найден в каталоге — пробую найти цену в интернете.</div>'
                : '<div class="check-hint">Если сервис неизвестный, нажмите Enter/«Добавить» — приложение попробует найти цену онлайн.</div>';

        check.className = status === 'not-found' ? 'subscription-check warning' : 'subscription-check muted';
        check.innerHTML = `
            <div class="check-title">Тестовая проверка</div>
            <div class="check-row"><span>Что хотите посмотреть:</span><strong>${safeTrimmed}</strong></div>
            <div class="check-row"><span>Что за подписка:</span><strong>Неизвестный сервис</strong></div>
            ${priceRow}
            ${hint}
        `;
        return;
    }

    const preset = priceResult || getPresetPrice(match);
    const priceRow = preset
        ? `<div class="check-row"><span>Цена заложена:</span><strong>${formatResolvedPrice(preset)}</strong></div>`
        : `<div class="check-row"><span>Цена:</span><strong>нет в базе, введите вручную</strong></div>`;
    const hint = preset
        ? '<div class="check-hint">Подписка есть в каталоге — интернет не используется, цена подставляется сразу из базы.</div>'
        : '<div class="check-hint">Подписка есть в каталоге, поэтому интернет-поиск не запускается. Если цены нет в базе — введите её вручную.</div>';

    check.className = preset ? 'subscription-check success' : 'subscription-check warning';
    check.innerHTML = `
        <div class="check-title">Тестовая проверка</div>
        <div class="check-row"><span>Что хотите посмотреть:</span><strong>${safeTrimmed}</strong></div>
        <div class="check-row"><span>Что за подписка:</span><strong>${escapeHtml(match.name)}</strong></div>
        <div class="check-row"><span>Категория:</span><strong>${escapeHtml(getCategoryLabel(match.category))}</strong></div>
        ${priceRow}
        ${hint}
    `;
}

function scheduleOnlinePriceLookup(name, force = false) {
    clearTimeout(priceLookupTimer);
    priceLookupTimer = setTimeout(() => lookupAndApplyOnlinePrice(name, { force, silent: true }), 750);
}

async function lookupAndApplyOnlinePrice(name, options = {}) {
    const { force = false, silent = false } = options;
    const autoPrice = document.getElementById('subAutoPrice');
    if (!autoPrice || !autoPrice.checked) return null;

    const match = findMatch(name);
    if (match) {
        const preset = applyPresetPrice(match, force);
        updateSubscriptionCheck(name, 'preset', preset);
        if (preset && !silent) showToast(`Цена заложена в базе: ${formatResolvedPrice(preset)}`, 'success');
        return preset;
    }

    const seq = ++priceLookupSeq;
    updateSubscriptionCheck(name, 'loading');
    const result = await findOnlinePrice(name, null);
    if (seq !== priceLookupSeq) return null;

    if (result) {
        applyOnlinePrice(result, force);
        updateSubscriptionCheck(name, 'found', result);
        if (!silent) showToast(`Цена найдена в интернете: $${result.price.toFixed(2)}`, 'success');
    } else {
        updateSubscriptionCheck(name, 'not-found');
        if (!silent) showToast('Не удалось найти цену в интернете. Введите её вручную.', 'warning');
    }
    return result;
}

// ========== UTILITIES ==========

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });
}

function getNextRenewal(startDate, period) {
    const start = new Date(startDate);
    const now = new Date();
    let next = new Date(start);

    const add = (d) => {
        switch (period) {
            case 'weekly':    d.setDate(d.getDate() + 7); break;
            case 'monthly':   d.setMonth(d.getMonth() + 1); break;
            case 'quarterly': d.setMonth(d.getMonth() + 3); break;
            case 'yearly':    d.setFullYear(d.getFullYear() + 1); break;
        }
    };

    while (next <= now) add(next);
    return next;
}

function getDaysUntil(date) {
    const now = new Date(); now.setHours(0,0,0,0);
    const target = new Date(date); target.setHours(0,0,0,0);
    return Math.ceil((target - now) / (86400000));
}

function getMonthlyEquiv(price, period) {
    switch (period) {
        case 'weekly':    return price * 4.33;
        case 'monthly':   return price;
        case 'quarterly': return price / 3;
        case 'yearly':    return price / 12;
        default:          return price;
    }
}

function getPeriodLabel(period) {
    switch (period) {
        case 'weekly':    return '/ нед.';
        case 'monthly':   return '/ мес.';
        case 'quarterly': return '/ 3 мес.';
        case 'yearly':    return '/ год';
        default:          return '';
    }
}

function getRenewalClass(days) {
    if (days <= 3) return 'renewal-soon';
    if (days <= 7) return 'renewal-medium';
    return 'renewal-ok';
}

function getRenewalText(days) {
    if (days === 0) return 'Сегодня!';
    if (days === 1) return 'Завтра';
    if (days <= 7)  return `${days} дн.`;
    if (days <= 30) return `${days} дн.`;
    return `${Math.ceil(days/30)} мес.`;
}

// ========== IMAGE ERROR HANDLER ==========
function onImgError(imgEl, fallbackUrl) {
    if (fallbackUrl && imgEl.dataset.retries < 2) {
        imgEl.dataset.retries = (parseInt(imgEl.dataset.retries) || 0) + 1;
        imgEl.src = fallbackUrl;
    } else {
        // Replace img with letter
        const letter = imgEl.alt ? imgEl.alt.charAt(0).toUpperCase() : '?';
        const color = imgEl.dataset.color || '#6c6cf5';
        imgEl.parentElement.innerHTML = `<span class="sub-card-letter" style="color:${color}">${letter}</span>`;
    }
}

// ========== RENDER ==========
function render() {
    renderStats();
    renderUpcoming();
    renderSubsGrid('subsGrid', 'emptySubs');
    renderSubsGrid('allSubsGrid', 'emptyAllSubs');
    renderCalendar();
    renderAnalytics();
}

function renderStats() {
    const monthly = subscriptions.reduce((s, sub) => s + getMonthlyEquiv(sub.price, sub.period), 0);
    const yearly = monthly * 12;

    document.getElementById('monthlyTotal').textContent = `$${monthly.toFixed(2)}`;
    document.getElementById('yearlyTotal').textContent = `$${yearly.toFixed(2)}`;
    document.getElementById('totalSubs').textContent = subscriptions.length;

    const upcoming = subscriptions.filter(s => getDaysUntil(getNextRenewal(s.startDate, s.period)) <= 7).length;
    document.getElementById('upcomingCount').textContent = upcoming;
}

function renderUpcoming() {
    const list = document.getElementById('upcomingList');
    const empty = document.getElementById('emptyUpcoming');

    if (subscriptions.length === 0) {
        list.innerHTML = '';
        list.appendChild(empty);
        empty.style.display = 'block';
        return;
    }

    const sorted = [...subscriptions].sort((a, b) =>
        getDaysUntil(getNextRenewal(a.startDate, a.period)) - getDaysUntil(getNextRenewal(b.startDate, b.period))
    );

    list.innerHTML = sorted.map(sub => {
        const next = getNextRenewal(sub.startDate, sub.period);
        const days = getDaysUntil(next);
        const icon = getIconForSub(sub);
        const daysClass = days <= 3 ? 'days-soon' : days <= 7 ? 'days-medium' : 'days-ok';

        return `
            <div class="upcoming-item">
                <div class="upcoming-item-icon" style="background:${sub.color}15">
                    <img src="${icon.url}"
                         alt="${sub.name}"
                         data-retries="0"
                         data-color="${sub.color}"
                         onerror="onImgError(this, '${icon.fallback || ''}')">
                </div>
                <div class="upcoming-item-info">
                    <div class="upcoming-item-name">${sub.name}</div>
                    <div class="upcoming-item-date">${formatDate(next)}</div>
                </div>
                <div class="upcoming-item-right">
                    <div class="upcoming-item-price">$${sub.price.toFixed(2)}</div>
                    <div class="upcoming-item-days ${daysClass}">${getRenewalText(days)}</div>
                </div>
            </div>
        `;
    }).join('');
}

function getSortedSubs() {
    const subs = [...subscriptions];
    switch (currentSort) {
        case 'renewal':
            subs.sort((a, b) => getDaysUntil(getNextRenewal(a.startDate, a.period)) - getDaysUntil(getNextRenewal(b.startDate, b.period)));
            break;
        case 'price':
            subs.sort((a, b) => getMonthlyEquiv(b.price, b.period) - getMonthlyEquiv(a.price, a.period));
            break;
        case 'name':
            subs.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    return subs;
}

function renderSubsGrid(gridId, emptyId) {
    const grid = document.getElementById(gridId);
    const empty = document.getElementById(emptyId);

    if (subscriptions.length === 0) {
        grid.innerHTML = '';
        grid.appendChild(empty);
        empty.style.display = 'block';
        return;
    }

    const subs = getSortedSubs();

    grid.innerHTML = subs.map(sub => {
        const next = getNextRenewal(sub.startDate, sub.period);
        const days = getDaysUntil(next);
        const icon = getIconForSub(sub);

        return `
            <div class="sub-card" style="--card-color:${sub.color}">
                <div class="sub-card-icon" style="background:${sub.color}12">
                    <img src="${icon.url}"
                         alt="${sub.name}"
                         data-retries="0"
                         data-color="${sub.color}"
                         onerror="onImgError(this, '${icon.fallback || ''}')">
                </div>
                <div class="sub-card-body">
                    <div class="sub-card-name">${sub.name}</div>
                    <div class="sub-card-meta">
                        <span>${formatDate(next)}</span>
                        <span>${getPeriodLabel(sub.period).replace('/ ', '')}</span>
                    </div>
                    <div class="sub-card-price-row">
                        <span class="sub-card-price">$${sub.price.toFixed(2)}</span>
                        <span class="sub-card-period">${getPeriodLabel(sub.period)}</span>
                    </div>
                    <div class="sub-card-renewal ${getRenewalClass(days)}">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        ${getRenewalText(days)}
                    </div>
                </div>
                <div class="sub-card-actions">
                    <button onclick="editSub('${sub.id}')" title="Редактировать">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    </button>
                    <button class="delete-btn" onclick="deleteSub('${sub.id}')" title="Удалить">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function renderCalendar() {
    const container = document.getElementById('calendarContainer');
    const monthNames = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
    const dayNames = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];

    const renewalDates = {};
    subscriptions.forEach(sub => {
        const next = getNextRenewal(sub.startDate, sub.period);
        if (next.getMonth() === currentMonth && next.getFullYear() === currentYear) {
            const day = next.getDate();
            if (!renewalDates[day]) renewalDates[day] = [];
            renewalDates[day].push(sub);
        }
        // Weekly — multiple renewals
        if (sub.period === 'weekly') {
            let d = new Date(sub.startDate);
            while (d <= new Date(currentYear, currentMonth + 1, 0)) {
                if (d.getMonth() === currentMonth && d.getFullYear() === currentYear) {
                    const day = d.getDate();
                    if (!renewalDates[day]) renewalDates[day] = [];
                    if (!renewalDates[day].find(s => s.id === sub.id)) renewalDates[day].push(sub);
                }
                d.setDate(d.getDate() + 7);
            }
        }
    });

    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    let startDay = firstDay.getDay() - 1; if (startDay < 0) startDay = 6;

    const today = new Date();
    const isCurrentMonth = today.getMonth() === currentMonth && today.getFullYear() === currentYear;

    let html = `<div class="calendar-header"><h3>${monthNames[currentMonth]} ${currentYear}</h3>
        <div class="calendar-nav"><button onclick="changeMonth(-1)"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg></button>
        <button onclick="changeMonth(1)"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></button></div></div>`;
    html += '<div class="calendar-grid">';

    dayNames.forEach(d => html += `<div class="cal-day-label">${d}</div>`);

    for (let i = 0; i < startDay; i++) {
        const d = new Date(currentYear, currentMonth, -(startDay - i - 1));
        html += `<div class="cal-day other-month">${d.getDate()}</div>`;
    }

    for (let day = 1; day <= lastDay.getDate(); day++) {
        const isToday = isCurrentMonth && day === today.getDate();
        const has = renewalDates[day];
        let cls = 'cal-day';
        if (isToday) cls += ' today';
        if (has) cls += ' has-renewal';
        const tooltip = has ? has.map(s => `${s.name} — $${s.price.toFixed(2)}`).join('\\n') : '';
        const dot = has ? `<div class="renewal-dot"></div>` : '';
        html += `<div class="${cls}" title="${tooltip}">${day}${dot}</div>`;
    }

    const total = startDay + lastDay.getDate();
    const rem = total % 7 === 0 ? 0 : 7 - (total % 7);
    for (let i = 1; i <= rem; i++) html += `<div class="cal-day other-month">${i}</div>`;
    html += '</div>';
    container.innerHTML = html;
}

function changeMonth(delta) {
    currentMonth += delta;
    if (currentMonth > 11) { currentMonth = 0; currentYear++; }
    if (currentMonth < 0) { currentMonth = 11; currentYear--; }
    renderCalendar();
}

function renderAnalytics() {
    const catChart = document.getElementById('categoryChart');
    const perChart = document.getElementById('periodChart');

    const categories = {};
    const catNames = { streaming:'Стриминг', music:'Музыка', productivity:'Продуктивность', gaming:'Игры', cloud:'Облако', design:'Дизайн/Видео', education:'Обучение', vpn:'VPN/Безоп.', ai:'AI/Нейросети', other:'Другое' };
    const catColors = { streaming:'#f04060', music:'#1db954', productivity:'#6c6cf5', gaming:'#9146ff', cloud:'#4facfe', design:'#f24e1e', education:'#fccb90', vpn:'#6d4aff', ai:'#10a37f', other:'#a0a0b8' };

    subscriptions.forEach(s => {
        const cat = s.category || 'other';
        if (!categories[cat]) categories[cat] = 0;
        categories[cat] += getMonthlyEquiv(s.price, s.period);
    });

    const maxCat = Math.max(...Object.values(categories), 1);

    if (Object.keys(categories).length === 0) {
        catChart.innerHTML = '<div class="empty-state"><p>Нет данных</p></div>';
    } else {
        catChart.innerHTML = '<div class="bar-chart">' + Object.entries(categories).sort((a,b) => b[1]-a[1]).map(([cat, val]) => `
            <div class="bar-item">
                <div class="bar-label">${catNames[cat]||cat}</div>
                <div class="bar-track"><div class="bar-fill" style="width:${(val/maxCat*100).toFixed(0)}%;background:${catColors[cat]||'#6c6cf5'}">$${val.toFixed(2)}</div></div>
            </div>`).join('') + '</div>';
    }

    // Period pie
    const periods = { weekly:0, monthly:0, quarterly:0, yearly:0 };
    const perNames = { weekly:'Недельные', monthly:'Месячные', quarterly:'Квартальные', yearly:'Годовые' };
    const perColors = { weekly:'#f04060', monthly:'#6c6cf5', quarterly:'#30d880', yearly:'#fccb90' };

    subscriptions.forEach(s => { periods[s.period] += getMonthlyEquiv(s.price, s.period); });
    const totalP = Object.values(periods).reduce((a,b) => a+b, 0);

    if (totalP === 0) {
        perChart.innerHTML = '<div class="empty-state"><p>Нет данных</p></div>';
    } else {
        const active = Object.entries(periods).filter(([,v]) => v > 0);
        let conic = [], angle = 0;
        active.forEach(([p, v]) => { const pct = (v/totalP)*100; conic.push(`${perColors[p]} ${angle}deg ${angle+pct*3.6}deg`); angle += pct*3.6; });

        perChart.innerHTML = `<div class="pie-chart">
            <div class="pie-visual" style="background:conic-gradient(${conic.join(',')})">
                <div class="pie-center"><div class="pie-center-val">$${totalP.toFixed(2)}</div><div class="pie-center-lbl">в месяц</div></div>
            </div>
            <div class="pie-legend">${active.map(([p,v]) => `<div class="pie-legend-item"><div class="pie-dot" style="background:${perColors[p]}"></div><span>${perNames[p]} — $${v.toFixed(2)}</span></div>`).join('')}</div>
        </div>`;
    }
}

// ========== CRUD ==========
function saveSubs() { localStorage.setItem('subs_v2', JSON.stringify(subscriptions)); }

function addSubscription(data) {
    const sub = { id: generateId(), ...data, createdAt: new Date().toISOString() };
    subscriptions.push(sub);
    saveSubs(); render();
    showToast('Подписка добавлена!', 'success');
}

function updateSubscription(id, data) {
    const idx = subscriptions.findIndex(s => s.id === id);
    if (idx !== -1) { subscriptions[idx] = { ...subscriptions[idx], ...data }; saveSubs(); render(); showToast('Подписка обновлена!', 'success'); }
}

function deleteSub(id) {
    if (confirm('Удалить подписку?')) {
        subscriptions = subscriptions.filter(s => s.id !== id);
        saveSubs(); render();
        showToast('Подписка удалена', 'danger');
    }
}

function editSub(id) {
    const sub = subscriptions.find(s => s.id === id);
    if (!sub) return;

    editingId = id;
    document.getElementById('modalTitle').textContent = 'Редактировать подписку';
    document.getElementById('submitBtn').innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg> Сохранить`;
    document.getElementById('subId').value = id;
    document.getElementById('subName').value = sub.name;
    document.getElementById('subPrice').value = sub.price;
    document.getElementById('subPeriod').value = sub.period;
    document.getElementById('subStart').value = sub.startDate;
    document.getElementById('subCategory').value = sub.category;
    document.getElementById('subReminder').checked = sub.reminder;
    document.getElementById('subAutoPrice').checked = false;
    priceWasManuallyEdited = true;
    periodWasManuallyEdited = true;
    lastAutoPrice = null;

    document.querySelectorAll('input[name="subColor"]').forEach(inp => { if (inp.value === sub.color) inp.checked = true; });

    updateSubscriptionCheck(sub.name);
    updateIconPreview(sub.name);
    openModal();
}

// ========== MODAL ==========
function openModal() { document.getElementById('modalOverlay').classList.add('active'); }

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    resetForm();
}

function resetForm() {
    document.getElementById('subForm').reset();
    document.getElementById('subId').value = '';
    editingId = null;
    document.getElementById('modalTitle').textContent = 'Добавить подписку';
    document.getElementById('submitBtn').innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Добавить подписку`;
    document.getElementById('suggestions').classList.remove('active');
    document.getElementById('subStart').value = new Date().toISOString().split('T')[0];
    document.getElementById('subAutoPrice').checked = true;
    priceWasManuallyEdited = false;
    periodWasManuallyEdited = false;
    lastAutoPrice = null;
    updateSubscriptionCheck('');

    // Reset icon preview
    document.getElementById('iconPreview').innerHTML = `<span class="icon-placeholder-letter">?</span>`;
    document.getElementById('iconPreviewName').textContent = 'Название подписки';
    document.getElementById('iconPreviewHint').textContent = 'Иконка определится автоматически';
}

function updateIconPreview(name) {
    const match = findMatch(name);
    const preset = match ? applyPresetPrice(match) : null;
    updateSubscriptionCheck(name, preset ? 'preset' : 'idle', preset);
    if (!match && name.trim().length >= 3) scheduleOnlinePriceLookup(name);
    else clearTimeout(priceLookupTimer);
    const preview = document.getElementById('iconPreview');
    const nameEl = document.getElementById('iconPreviewName');
    const hintEl = document.getElementById('iconPreviewHint');

    if (match) {
        preview.innerHTML = `<img src="${getLogoUrl(match.domain)}" alt="${match.name}" data-retries="0" data-color="${match.color}" onerror="onImgError(this, '${getFallbackIcon(match.name, match.color)}')">`;
        nameEl.textContent = match.name;
        hintEl.textContent = `Логотип с ${match.domain}`;
    } else if (name) {
        preview.innerHTML = `<img src="${getFallbackIcon(name, '#6c6cf5')}" alt="${name}">`;
        nameEl.textContent = name;
        hintEl.textContent = 'Авто-иконка (буква)';
    } else {
        preview.innerHTML = `<span class="icon-placeholder-letter">?</span>`;
        nameEl.textContent = 'Название подписки';
        hintEl.textContent = 'Иконка определится автоматически';
    }
}

// ========== TOAST ==========
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    const icons = { success:'✓', warning:'⚠', danger:'✕' };
    toast.textContent = `${icons[type] || '•'} ${message}`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// ========== EVENT LISTENERS ==========
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('subStart').value = new Date().toISOString().split('T')[0];

    // Add button
    document.getElementById('addSubBtn').addEventListener('click', () => { resetForm(); openModal(); });

    // Modal close
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalOverlay').addEventListener('click', (e) => { if (e.target === e.currentTarget) closeModal(); });

    // Form submit
    document.getElementById('subForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = document.getElementById('submitBtn');
        const originalSubmitHtml = submitBtn.innerHTML;
        const name = document.getElementById('subName').value.trim();
        const match = findMatch(name);
        const priceEl = document.getElementById('subPrice');
        const autoPrice = document.getElementById('subAutoPrice');

        let price = parseFloat(priceEl.value);
        if (autoPrice.checked) {
            if (match) {
                const preset = applyPresetPrice(match, true);
                updateSubscriptionCheck(name, 'preset', preset);
                price = parseFloat(priceEl.value);

                if (!preset && (priceEl.value === '' || Number.isNaN(price))) {
                    showToast('Эта подписка есть в каталоге, но цена не заложена. Введите стоимость вручную.', 'warning');
                    priceEl.focus();
                    return;
                }
            } else {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Ищу цену в интернете...';
                const result = await lookupAndApplyOnlinePrice(name, { force: true, silent: false });
                price = parseFloat(priceEl.value);
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalSubmitHtml;

                if (!result && (priceEl.value === '' || Number.isNaN(price))) {
                    priceEl.focus();
                    return;
                }
            }
        }

        if (priceEl.value === '' || Number.isNaN(price)) {
            showToast(match ? 'Введите стоимость подписки.' : 'Цена в интернете не найдена — введите стоимость вручную.', 'warning');
            priceEl.focus();
            return;
        }

        const data = {
            name,
            price,
            period: document.getElementById('subPeriod').value,
            startDate: document.getElementById('subStart').value,
            category: match ? (match.category || document.getElementById('subCategory').value) : document.getElementById('subCategory').value,
            color: match ? (match.color || document.querySelector('input[name="subColor"]:checked').value) : document.querySelector('input[name="subColor"]:checked').value,
            reminder: document.getElementById('subReminder').checked,
            domain: match ? match.domain : null
        };

        if (editingId) updateSubscription(editingId, data);
        else addSubscription(data);
        closeModal();
    });

    // Name input — suggestions & icon preview
    const nameInput = document.getElementById('subName');
    const suggestionsEl = document.getElementById('suggestions');
    const priceInput = document.getElementById('subPrice');
    const periodInput = document.getElementById('subPeriod');
    const autoPriceInput = document.getElementById('subAutoPrice');

    priceInput.addEventListener('input', () => {
        if (!isApplyingAutoPrice) priceWasManuallyEdited = true;
    });
    periodInput.addEventListener('change', () => {
        if (!isApplyingAutoPrice) periodWasManuallyEdited = true;
    });
    autoPriceInput.addEventListener('change', () => {
        if (!autoPriceInput.checked) return;
        const val = nameInput.value.trim();
        const match = findMatch(val);
        if (match) {
            const preset = applyPresetPrice(match, true);
            updateSubscriptionCheck(val, 'preset', preset);
            if (preset) showToast(`Цена заложена в базе: ${formatResolvedPrice(preset)}`, 'success');
        } else {
            lookupAndApplyOnlinePrice(val, { force: true, silent: false });
        }
    });

    nameInput.addEventListener('input', () => {
        const val = nameInput.value.trim();
        updateIconPreview(val);

        if (val.length >= 2) {
            const suggestions = getSuggestions(val);
            if (suggestions.length > 0) {
                suggestionsEl.innerHTML = suggestions.map(s => `
                    <div class="ac-item" data-name="${s.name}" data-category="${s.category}" data-color="${s.color}" data-domain="${s.domain}">
                        <div class="ac-item-icon" style="background:${s.color}15">
                            <img src="${getLogoUrl(s.domain)}" alt="${s.name}" data-retries="0" data-color="${s.color}" onerror="onImgError(this, '${getFallbackIcon(s.name, s.color)}')">
                        </div>
                        <div class="ac-item-content">
                            <div class="ac-item-name">${s.name}</div>
                            <div class="ac-item-meta">${getPresetPrice(s) ? `${formatResolvedPrice(getPresetPrice(s))} · заложено` : `${getCategoryLabel(s.category)} · цена вручную`}</div>
                        </div>
                    </div>
                `).join('');
                suggestionsEl.classList.add('active');

                suggestionsEl.querySelectorAll('.ac-item').forEach(item => {
                    item.addEventListener('click', () => {
                        nameInput.value = item.dataset.name;
                        updateIconPreview(item.dataset.name);

                        // Auto-fill category and color, then apply the embedded price if we have it
                        document.getElementById('subCategory').value = item.dataset.category;
                        document.querySelectorAll('input[name="subColor"]').forEach(inp => {
                            if (inp.value === item.dataset.color) inp.checked = true;
                        });
                        const selectedMatch = findMatch(item.dataset.name);
                        const preset = applyPresetPrice(selectedMatch, true);
                        updateSubscriptionCheck(item.dataset.name, 'preset', preset);
                        if (preset) showToast(`Цена заложена в базе: ${formatResolvedPrice(preset)}`, 'success');

                        suggestionsEl.classList.remove('active');
                    });
                });
            } else {
                suggestionsEl.classList.remove('active');
            }
        } else {
            suggestionsEl.classList.remove('active');
        }
    });

    nameInput.addEventListener('blur', () => setTimeout(() => suggestionsEl.classList.remove('active'), 200));

    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const page = item.dataset.page;

            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            item.classList.add('active');

            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            document.getElementById(page + 'Page').classList.add('active');

            const titles = { dashboard:'Дашборд', subscriptions:'Подписки', calendar:'Календарь', analytics:'Аналитика' };
            const subs = { dashboard:'Управление вашими подписками', subscriptions:'Все ваши подписки', calendar:'Календарь обновлений', analytics:'Статистика расходов' };
            document.getElementById('pageTitle').textContent = titles[page];
            document.getElementById('pageSubtitle').textContent = subs[page];

            // Close mobile sidebar
            document.getElementById('sidebar').classList.remove('open');
            document.getElementById('sidebarOverlay').classList.remove('active');
        });
    });

    // Mobile toggle
    document.getElementById('mobileToggle').addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('open');
        document.getElementById('sidebarOverlay').classList.toggle('active');
    });

    document.getElementById('sidebarOverlay').addEventListener('click', () => {
        document.getElementById('sidebar').classList.remove('open');
        document.getElementById('sidebarOverlay').classList.remove('active');
    });

    // Sort buttons
    document.querySelectorAll('.sort-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentSort = btn.dataset.sort;
            renderSubsGrid('subsGrid', 'emptySubs');
        });
    });

    // Check reminders
    checkReminders();
    render();
});

function checkReminders() {
    subscriptions.forEach(sub => {
        if (!sub.reminder) return;
        const days = getDaysUntil(getNextRenewal(sub.startDate, sub.period));
        if (days <= 3 && days >= 0) {
            setTimeout(() => showToast(`${sub.name} — обновление ${getRenewalText(days).replace(/[⏰⚠️]/g,'')}`, 'warning'), 500);
        }
    });
}
