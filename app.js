// ========== SUBSCRIPTION ICON CATALOG ==========
const SUBSCRIPTION_CATALOG = {
    // Streaming
    'netflix': { icon: '🎬', color: '#e50914', name: 'Netflix', category: 'streaming', img: 'https://img.icons8.com/color/96/netflix.png' },
    'youtube': { icon: '▶️', color: '#ff0000', name: 'YouTube', category: 'streaming', img: 'https://img.icons8.com/color/96/youtube.png' },
    'youtube premium': { icon: '▶️', color: '#ff0000', name: 'YouTube Premium', category: 'streaming', img: 'https://img.icons8.com/color/96/youtube.png' },
    'youtube music': { icon: '🎵', color: '#ff0000', name: 'YouTube Music', category: 'music', img: 'https://img.icons8.com/color/96/youtube-music.png' },
    'spotify': { icon: '🎵', color: '#1db954', name: 'Spotify', category: 'music', img: 'https://img.icons8.com/color/96/spotify.png' },
    'apple music': { icon: '🎵', color: '#fc3c44', name: 'Apple Music', category: 'music', img: 'https://img.icons8.com/color/96/apple-music.png' },
    'disney': { icon: '🏰', color: '#113ccf', name: 'Disney+', category: 'streaming', img: 'https://img.icons8.com/color/96/disney-plus.png' },
    'disney+': { icon: '🏰', color: '#113ccf', name: 'Disney+', category: 'streaming', img: 'https://img.icons8.com/color/96/disney-plus.png' },
    'hbo': { icon: '🎬', color: '#b08d57', name: 'HBO Max', category: 'streaming', img: 'https://img.icons8.com/color/96/hbo.png' },
    'hbo max': { icon: '🎬', color: '#b08d57', name: 'HBO Max', category: 'streaming', img: 'https://img.icons8.com/color/96/hbo.png' },
    'twitch': { icon: '🎮', color: '#9146ff', name: 'Twitch', category: 'streaming', img: 'https://img.icons8.com/color/96/twitch.png' },
    'crunchyroll': { icon: '🍊', color: '#f47521', name: 'Crunchyroll', category: 'streaming', img: 'https://img.icons8.com/color/96/crunchyroll.png' },
    'paramount': { icon: '⛰️', color: '#0064d2', name: 'Paramount+', category: 'streaming', img: 'https://img.icons8.com/color/96/paramount-plus.png' },
    'peacock': { icon: '🦚', color: '#000000', name: 'Peacock', category: 'streaming', img: 'https://img.icons8.com/color/96/peacock.png' },
    'hulu': { icon: '📺', color: '#1ce783', name: 'Hulu', category: 'streaming', img: 'https://img.icons8.com/color/96/hulu.png' },

    // Productivity
    'notion': { icon: '📝', color: '#000000', name: 'Notion', category: 'productivity', img: 'https://img.icons8.com/color/96/notion.png' },
    'figma': { icon: '🎨', color: '#f24e1e', name: 'Figma', category: 'design', img: 'https://img.icons8.com/color/96/figma.png' },
    'canva': { icon: '🎨', color: '#00c4cc', name: 'Canva', category: 'design', img: 'https://img.icons8.com/color/96/canva.png' },
    'adobe': { icon: '🅰️', color: '#ff0000', name: 'Adobe', category: 'design', img: 'https://img.icons8.com/color/96/adobe-creative-cloud.png' },
    'adobe creative cloud': { icon: '🅰️', color: '#ff0000', name: 'Adobe CC', category: 'design', img: 'https://img.icons8.com/color/96/adobe-creative-cloud.png' },
    'photoshop': { icon: '🖼️', color: '#31a8ff', name: 'Photoshop', category: 'design', img: 'https://img.icons8.com/color/96/adobe-photoshop.png' },
    'illustrator': { icon: '🎨', color: '#ff9a00', name: 'Illustrator', category: 'design', img: 'https://img.icons8.com/color/96/adobe-illustrator.png' },
    'premiere': { icon: '🎬', color: '#9999ff', name: 'Premiere Pro', category: 'design', img: 'https://img.icons8.com/color/96/adobe-premiere-pro.png' },
    'after effects': { icon: '✨', color: '#9999ff', name: 'After Effects', category: 'design', img: 'https://img.icons8.com/color/96/adobe-after-effects.png' },
    'lightroom': { icon: '📷', color: '#31a8ff', name: 'Lightroom', category: 'design', img: 'https://img.icons8.com/color/96/adobe-lightroom.png' },

    // Cloud & Storage
    'icloud': { icon: '☁️', color: '#3693f5', name: 'iCloud+', category: 'cloud', img: 'https://img.icons8.com/color/96/icloud.png' },
    'icloud+': { icon: '☁️', color: '#3693f5', name: 'iCloud+', category: 'cloud', img: 'https://img.icons8.com/color/96/icloud.png' },
    'google one': { icon: '☁️', color: '#4285f4', name: 'Google One', category: 'cloud', img: 'https://img.icons8.com/color/96/google.png' },
    'google drive': { icon: '📁', color: '#4285f4', name: 'Google Drive', category: 'cloud', img: 'https://img.icons8.com/color/96/google-drive.png' },
    'dropbox': { icon: '📦', color: '#0061ff', name: 'Dropbox', category: 'cloud', img: 'https://img.icons8.com/color/96/dropbox.png' },
    'onedrive': { icon: '☁️', color: '#0078d4', name: 'OneDrive', category: 'cloud', img: 'https://img.icons8.com/color/96/microsoft-onedrive.png' },
    'mega': { icon: '☁️', color: '#d9272e', name: 'MEGA', category: 'cloud', img: 'https://img.icons8.com/color/96/mega.png' },

    // AI & Tools
    'chatgpt': { icon: '🤖', color: '#10a37f', name: 'ChatGPT', category: 'ai', img: 'https://img.icons8.com/color/96/chatgpt.png' },
    'openai': { icon: '🤖', color: '#10a37f', name: 'OpenAI', category: 'ai', img: 'https://img.icons8.com/color/96/chatgpt.png' },
    'claude': { icon: '🤖', color: '#d97757', name: 'Claude', category: 'ai', img: 'https://img.icons8.com/color/96/claude-ai.png' },
    'midjourney': { icon: '🎨', color: '#000000', name: 'Midjourney', category: 'ai', img: 'https://img.icons8.com/color/96/midjourney.png' },
    'copilot': { icon: '🤖', color: '#6264a7', name: 'Copilot', category: 'ai', img: 'https://img.icons8.com/color/96/github.png' },
    'github copilot': { icon: '🤖', color: '#6264a7', name: 'GitHub Copilot', category: 'ai', img: 'https://img.icons8.com/color/96/github.png' },
    'perplexity': { icon: '🔍', color: '#20b8cd', name: 'Perplexity', category: 'ai', img: 'https://img.icons8.com/color/96/perplexity-ai.png' },

    // Video & Design
    'capcut': { icon: '✂️', color: '#000000', name: 'CapCut', category: 'design', img: 'https://img.icons8.com/color/96/capcut.png' },
    'capcut pro': { icon: '✂️', color: '#000000', name: 'CapCut Pro', category: 'design', img: 'https://img.icons8.com/color/96/capcut.png' },
    'final cut': { icon: '🎬', color: '#555555', name: 'Final Cut Pro', category: 'design', img: 'https://img.icons8.com/color/96/final-cut-pro.png' },
    'davinci': { icon: '🎬', color: '#e52020', name: 'DaVinci Resolve', category: 'design', img: 'https://img.icons8.com/color/96/davinci-resolve.png' },

    // Gaming
    'xbox': { icon: '🎮', color: '#107c10', name: 'Xbox Game Pass', category: 'gaming', img: 'https://img.icons8.com/color/96/xbox.png' },
    'xbox game pass': { icon: '🎮', color: '#107c10', name: 'Xbox Game Pass', category: 'gaming', img: 'https://img.icons8.com/color/96/xbox.png' },
    'playstation': { icon: '🎮', color: '#003087', name: 'PlayStation Plus', category: 'gaming', img: 'https://img.icons8.com/color/96/playstation.png' },
    'playstation plus': { icon: '🎮', color: '#003087', name: 'PlayStation Plus', category: 'gaming', img: 'https://img.icons8.com/color/96/playstation.png' },
    'nintendo': { icon: '🎮', color: '#e60012', name: 'Nintendo Switch Online', category: 'gaming', img: 'https://img.icons8.com/color/96/nintendo-switch.png' },
    'nintendo switch online': { icon: '🎮', color: '#e60012', name: 'Nintendo Switch Online', category: 'gaming', img: 'https://img.icons8.com/color/96/nintendo-switch.png' },

    // VPN & Security
    'nordvpn': { icon: '🔒', color: '#4687ff', name: 'NordVPN', category: 'vpn', img: 'https://img.icons8.com/color/96/nordvpn.png' },
    'expressvpn': { icon: '🔒', color: '#da3940', name: 'ExpressVPN', category: 'vpn', img: 'https://img.icons8.com/color/96/expressvpn.png' },
    'surfshark': { icon: '🦈', color: '#1eb8a6', name: 'Surfshark', category: 'vpn', img: 'https://img.icons8.com/color/96/surfshark.png' },
    '1password': { icon: '🔑', color: '#0094f5', name: '1Password', category: 'vpn', img: 'https://img.icons8.com/color/96/1password.png' },
    'lastpass': { icon: '🔑', color: '#d32d27', name: 'LastPass', category: 'vpn', img: 'https://img.icons8.com/color/96/lastpass.png' },

    // Education
    'skillshare': { icon: '📚', color: '#00ff84', name: 'Skillshare', category: 'education', img: 'https://img.icons8.com/color/96/skillshare.png' },
    'coursera': { icon: '🎓', color: '#0056d2', name: 'Coursera', category: 'education', img: 'https://img.icons8.com/color/96/coursera.png' },
    'udemy': { icon: '🎓', color: '#a435f0', name: 'Udemy', category: 'education', img: 'https://img.icons8.com/color/96/udemy.png' },
    'linkedin learning': { icon: '💼', color: '#0a66c2', name: 'LinkedIn Learning', category: 'education', img: 'https://img.icons8.com/color/96/linkedin.png' },
    'duolingo': { icon: '🦉', color: '#58cc02', name: 'Duolingo', category: 'education', img: 'https://img.icons8.com/color/96/duolingo.png' },
    'duolingo plus': { icon: '🦉', color: '#58cc02', name: 'Duolingo Plus', category: 'education', img: 'https://img.icons8.com/color/96/duolingo.png' },

    // Dev Tools
    'github': { icon: '🐙', color: '#6e40c9', name: 'GitHub', category: 'productivity', img: 'https://img.icons8.com/color/96/github.png' },
    'gitlab': { icon: '🦊', color: '#fc6d26', name: 'GitLab', category: 'productivity', img: 'https://img.icons8.com/color/96/gitlab.png' },
    'vercel': { icon: '▲', color: '#000000', name: 'Vercel', category: 'productivity', img: 'https://img.icons8.com/color/96/vercel.png' },
    'jetbrains': { icon: '💻', color: '#000000', name: 'JetBrains', category: 'productivity', img: 'https://img.icons8.com/color/96/jetbrains.png' },

    // Messaging & Social
    'telegram': { icon: '✈️', color: '#26a5e4', name: 'Telegram Premium', category: 'other', img: 'https://img.icons8.com/color/96/telegram.png' },
    'telegram premium': { icon: '✈️', color: '#26a5e4', name: 'Telegram Premium', category: 'other', img: 'https://img.icons8.com/color/96/telegram.png' },
    'discord': { icon: '💬', color: '#5865f2', name: 'Discord Nitro', category: 'gaming', img: 'https://img.icons8.com/color/96/discord.png' },
    'discord nitro': { icon: '💬', color: '#5865f2', name: 'Discord Nitro', category: 'gaming', img: 'https://img.icons8.com/color/96/discord.png' },
    'x': { icon: '𝕏', color: '#000000', name: 'X Premium', category: 'other', img: 'https://img.icons8.com/color/96/x.png' },
    'twitter': { icon: '🐦', color: '#1da1f2', name: 'X Premium', category: 'other', img: 'https://img.icons8.com/color/96/x.png' },
    'snapchat': { icon: '👻', color: '#fffc00', name: 'Snapchat+', category: 'other', img: 'https://img.icons8.com/color/96/snapchat.png' },
    'snapchat+': { icon: '👻', color: '#fffc00', name: 'Snapchat+', category: 'other', img: 'https://img.icons8.com/color/96/snapchat.png' },

    // Other popular
    'patreon': { icon: '🎨', color: '#ff424d', name: 'Patreon', category: 'other', img: 'https://img.icons8.com/color/96/patreon.png' },
    'medium': { icon: '✍️', color: '#000000', name: 'Medium', category: 'education', img: 'https://img.icons8.com/color/96/medium.png' },
    'substack': { icon: '📰', color: '#ff6719', name: 'Substack', category: 'other', img: 'https://img.icons8.com/color/96/substack.png' },
    'amazon prime': { icon: '📦', color: '#ff9900', name: 'Amazon Prime', category: 'streaming', img: 'https://img.icons8.com/color/96/amazon.png' },
    'apple tv': { icon: '📺', color: '#000000', name: 'Apple TV+', category: 'streaming', img: 'https://img.icons8.com/color/96/apple-tv.png' },
    'apple arcade': { icon: '🎮', color: '#000000', name: 'Apple Arcade', category: 'gaming', img: 'https://img.icons8.com/color/96/apple-arcade.png' },
    'apple one': { icon: '🍎', color: '#000000', name: 'Apple One', category: 'other', img: 'https://img.icons8.com/color/96/apple.png' },
    'microsoft 365': { icon: '📊', color: '#d83b01', name: 'Microsoft 365', category: 'productivity', img: 'https://img.icons8.com/color/96/microsoft-office.png' },
    'office 365': { icon: '📊', color: '#d83b01', name: 'Microsoft 365', category: 'productivity', img: 'https://img.icons8.com/color/96/microsoft-office.png' },
    'chatgpt plus': { icon: '🤖', color: '#10a37f', name: 'ChatGPT Plus', category: 'ai', img: 'https://img.icons8.com/color/96/chatgpt.png' },
    'chatgpt pro': { icon: '🤖', color: '#10a37f', name: 'ChatGPT Pro', category: 'ai', img: 'https://img.icons8.com/color/96/chatgpt.png' },
    'chatgpt team': { icon: '🤖', color: '#10a37f', name: 'ChatGPT Team', category: 'ai', img: 'https://img.icons8.com/color/96/chatgpt.png' },
    'grammarly': { icon: '✍️', color: '#15c39a', name: 'Grammarly', category: 'productivity', img: 'https://img.icons8.com/color/96/grammarly.png' },
    'grammarly premium': { icon: '✍️', color: '#15c39a', name: 'Grammarly Premium', category: 'productivity', img: 'https://img.icons8.com/color/96/grammarly.png' },
    'tinder': { icon: '🔥', color: '#fe3c72', name: 'Tinder', category: 'other', img: 'https://img.icons8.com/color/96/tinder.png' },
    'tinder gold': { icon: '🔥', color: '#fe3c72', name: 'Tinder Gold', category: 'other', img: 'https://img.icons8.com/color/96/tinder.png' },
    'tinder plus': { icon: '🔥', color: '#fe3c72', name: 'Tinder Plus', category: 'other', img: 'https://img.icons8.com/color/96/tinder.png' },
    'spotify premium': { icon: '🎵', color: '#1db954', name: 'Spotify Premium', category: 'music', img: 'https://img.icons8.com/color/96/spotify.png' },
    'soundcloud': { icon: '☁️', color: '#ff5500', name: 'SoundCloud', category: 'music', img: 'https://img.icons8.com/color/96/soundcloud.png' },
    'soundcloud go': { icon: '☁️', color: '#ff5500', name: 'SoundCloud Go+', category: 'music', img: 'https://img.icons8.com/color/96/soundcloud.png' },
    'kaspersky': { icon: '🛡️', color: '#006d5c', name: 'Kaspersky', category: 'vpn', img: 'https://img.icons8.com/color/96/kaspersky.png' },
    'avast': { icon: '🛡️', color: '#ff7800', name: 'Avast', category: 'vpn', img: 'https://img.icons8.com/color/96/avast.png' },
    'norton': { icon: '🛡️', color: '#ffe600', name: 'Norton', category: 'vpn', img: 'https://img.icons8.com/color/96/norton.png' },
    'mullvad': { icon: '🔒', color: '#2d556e', name: 'Mullvad VPN', category: 'vpn', img: 'https://img.icons8.com/color/96/mullvad.png' },
    'proton': { icon: '🔒', color: '#6d4aff', name: 'Proton', category: 'vpn', img: 'https://img.icons8.com/color/96/protonmail.png' },
    'protonvpn': { icon: '🔒', color: '#6d4aff', name: 'ProtonVPN', category: 'vpn', img: 'https://img.icons8.com/color/96/protonvpn.png' },
    'proton mail': { icon: '📧', color: '#6d4aff', name: 'Proton Mail', category: 'vpn', img: 'https://img.icons8.com/color/96/protonmail.png' },
    'roblox': { icon: '🎮', color: '#e2231a', name: 'Roblox Premium', category: 'gaming', img: 'https://img.icons8.com/color/96/roblox.png' },
    'roblox premium': { icon: '🎮', color: '#e2231a', name: 'Roblox Premium', category: 'gaming', img: 'https://img.icons8.com/color/96/roblox.png' },
    'onlyfans': { icon: '👤', color: '#00aff0', name: 'OnlyFans', category: 'other', img: 'https://img.icons8.com/color/96/onlyfans.png' },
    'yandex plus': { icon: '🟡', color: '#ffcc00', name: 'Яндекс Плюс', category: 'streaming', img: 'https://img.icons8.com/color/96/yandex.png' },
    'yandex': { icon: '🟡', color: '#ffcc00', name: 'Яндекс Плюс', category: 'streaming', img: 'https://img.icons8.com/color/96/yandex.png' },
    'vk music': { icon: '🎵', color: '#0077ff', name: 'VK Музыка', category: 'music', img: 'https://img.icons8.com/color/96/vk.png' },
    'vk': { icon: '💬', color: '#0077ff', name: 'VK', category: 'other', img: 'https://img.icons8.com/color/96/vk.png' },
    'tinkoff pro': { icon: '🏦', color: '#ffdd2d', name: 'Тинькофф Про', category: 'other', img: 'https://img.icons8.com/color/96/tinkoff.png' },
    'tinkoff': { icon: '🏦', color: '#ffdd2d', name: 'Тинькофф', category: 'other', img: 'https://img.icons8.com/color/96/tinkoff.png' },
    'whatsapp': { icon: '💬', color: '#25d366', name: 'WhatsApp', category: 'other', img: 'https://img.icons8.com/color/96/whatsapp.png' },
    'zoom': { icon: '📹', color: '#2d8cff', name: 'Zoom', category: 'productivity', img: 'https://img.icons8.com/color/96/zoom.png' },
    'slack': { icon: '💬', color: '#4a154b', name: 'Slack', category: 'productivity', img: 'https://img.icons8.com/color/96/slack.png' },
    'trello': { icon: '📋', color: '#0079bf', name: 'Trello', category: 'productivity', img: 'https://img.icons8.com/color/96/trello.png' },
    'asana': { icon: '✅', color: '#f06a6a', name: 'Asana', category: 'productivity', img: 'https://img.icons8.com/color/96/asana.png' },
    'todoist': { icon: '✅', color: '#e44232', name: 'Todoist', category: 'productivity', img: 'https://img.icons8.com/color/96/todoist.png' },
    'evernote': { icon: '📝', color: '#00a82d', name: 'Evernote', category: 'productivity', img: 'https://img.icons8.com/color/96/evernote.png' },
    'airtable': { icon: '📊', color: '#18bfff', name: 'Airtable', category: 'productivity', img: 'https://img.icons8.com/color/96/airtable.png' },
    'loom': { icon: '📹', color: '#625df5', name: 'Loom', category: 'productivity', img: 'https://img.icons8.com/color/96/loom.png' },
    'miro': { icon: '📋', color: '#ffd02f', name: 'Miro', category: 'productivity', img: 'https://img.icons8.com/color/96/miro.png' },
    'linear': { icon: '📐', color: '#5e6ad2', name: 'Linear', category: 'productivity', img: 'https://img.icons8.com/color/96/linear.png' },
    'stripe': { icon: '💳', color: '#635bff', name: 'Stripe', category: 'other', img: 'https://img.icons8.com/color/96/stripe.png' },
    'shopify': { icon: '🛒', color: '#96bf48', name: 'Shopify', category: 'other', img: 'https://img.icons8.com/color/96/shopify.png' },
    'wordpress': { icon: '📝', color: '#21759b', name: 'WordPress', category: 'other', img: 'https://img.icons8.com/color/96/wordpress.png' },
    'namecheap': { icon: '🌐', color: '#de5833', name: 'Namecheap', category: 'other', img: 'https://img.icons8.com/color/96/namecheap.png' },
    'cloudflare': { icon: '☁️', color: '#f38020', name: 'Cloudflare', category: 'cloud', img: 'https://img.icons8.com/color/96/cloudflare.png' },
    'digitalocean': { icon: '🌊', color: '#0080ff', name: 'DigitalOcean', category: 'cloud', img: 'https://img.icons8.com/color/96/digitalocean.png' },
    'aws': { icon: '☁️', color: '#ff9900', name: 'AWS', category: 'cloud', img: 'https://img.icons8.com/color/96/amazon-web-services.png' },
    'heroku': { icon: '💜', color: '#430098', name: 'Heroku', category: 'cloud', img: 'https://img.icons8.com/color/96/heroku.png' },
    'postman': { icon: '📬', color: '#ff6c37', name: 'Postman', category: 'productivity', img: 'https://img.icons8.com/color/96/postman.png' },
    'docker': { icon: '🐳', color: '#2496ed', name: 'Docker', category: 'productivity', img: 'https://img.icons8.com/color/96/docker.png' },
};

// ========== STATE ==========
let subscriptions = JSON.parse(localStorage.getItem('subs') || '[]');
let editingId = null;
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

// ========== ICON MATCHING ==========
function findMatch(name) {
    const lower = name.toLowerCase().trim();

    // Exact match first
    if (SUBSCRIPTION_CATALOG[lower]) {
        return SUBSCRIPTION_CATALOG[lower];
    }

    // Partial match: check if any catalog key is contained in the input
    let bestMatch = null;
    let bestScore = 0;

    for (const [key, val] of Object.entries(SUBSCRIPTION_CATALOG)) {
        // Check if the key is part of the input name
        if (lower.includes(key)) {
            const score = key.length;
            if (score > bestScore) {
                bestScore = score;
                bestMatch = val;
            }
        }
        // Check if the input name is part of the key
        if (key.includes(lower) && lower.length >= 3) {
            const score = lower.length;
            if (score > bestScore) {
                bestScore = score;
                bestMatch = val;
            }
        }
    }

    return bestMatch;
}

function getSuggestions(input) {
    const lower = input.toLowerCase().trim();
    if (lower.length < 2) return [];

    const results = [];
    for (const [key, val] of Object.entries(SUBSCRIPTION_CATALOG)) {
        if (key.includes(lower) || lower.includes(key)) {
            results.push({ key, ...val });
        }
    }
    // Sort by relevance (longer key match first)
    results.sort((a, b) => b.key.length - a.key.length);
    return results.slice(0, 6);
}

// ========== UTILITIES ==========
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short', year: 'numeric' });
}

function getNextRenewal(startDate, period) {
    const start = new Date(startDate);
    const now = new Date();
    let next = new Date(start);

    const addPeriod = (date) => {
        switch (period) {
            case 'weekly':
                date.setDate(date.getDate() + 7);
                break;
            case 'monthly':
                date.setMonth(date.getMonth() + 1);
                break;
            case 'quarterly':
                date.setMonth(date.getMonth() + 3);
                break;
            case 'yearly':
                date.setFullYear(date.getFullYear() + 1);
                break;
        }
    };

    while (next <= now) {
        addPeriod(next);
    }

    return next;
}

function getDaysUntil(date) {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const target = new Date(date);
    target.setHours(0, 0, 0, 0);
    return Math.ceil((target - now) / (1000 * 60 * 60 * 24));
}

function getMonthlyEquivalent(price, period) {
    switch (period) {
        case 'weekly': return price * 4.33;
        case 'monthly': return price;
        case 'quarterly': return price / 3;
        case 'yearly': return price / 12;
        default: return price;
    }
}

function getPeriodLabel(period) {
    switch (period) {
        case 'weekly': return '/ нед.';
        case 'monthly': return '/ мес.';
        case 'quarterly': return '/ 3 мес.';
        case 'yearly': return '/ год';
        default: return '';
    }
}

function getRenewalClass(days) {
    if (days <= 3) return 'renewal-soon';
    if (days <= 7) return 'renewal-medium';
    return 'renewal-ok';
}

function getRenewalText(days) {
    if (days === 0) return '⏰ Сегодня!';
    if (days === 1) return '⏰ Завтра';
    if (days <= 3) return `⚠️ Через ${days} дн.`;
    if (days <= 7) return `Через ${days} дн.`;
    if (days <= 30) return `Через ${days} дн.`;
    return `Через ${Math.ceil(days / 30)} мес.`;
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
    const monthly = subscriptions.reduce((sum, s) => sum + getMonthlyEquivalent(s.price, s.period), 0);
    const yearly = monthly * 12;

    document.getElementById('monthlyTotal').textContent = `$${monthly.toFixed(2)}`;
    document.getElementById('yearlyTotal').textContent = `$${yearly.toFixed(2)}`;
    document.getElementById('totalSubs').textContent = subscriptions.length;

    const upcoming = subscriptions.filter(s => {
        const days = getDaysUntil(getNextRenewal(s.startDate, s.period));
        return days <= 7;
    }).length;
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

    const sorted = [...subscriptions].sort((a, b) => {
        const daysA = getDaysUntil(getNextRenewal(a.startDate, a.period));
        const daysB = getDaysUntil(getNextRenewal(b.startDate, b.period));
        return daysA - daysB;
    });

    list.innerHTML = sorted.map(sub => {
        const nextRenewal = getNextRenewal(sub.startDate, sub.period);
        const days = getDaysUntil(nextRenewal);
        const match = findMatch(sub.name);
        const iconHtml = match
            ? `<img src="${match.img}" alt="${sub.name}" onerror="this.parentElement.innerHTML='<span style=font-size:20px>${match.icon}</span>'">`
            : `<span style="font-size:20px">${sub.icon || '📋'}</span>`;

        return `
            <div class="upcoming-item">
                <div class="upcoming-item-icon" style="background:${sub.color}22">${iconHtml}</div>
                <div class="upcoming-item-info">
                    <div class="upcoming-item-name">${sub.name}</div>
                    <div class="upcoming-item-date">${formatDate(nextRenewal)}</div>
                </div>
                <div>
                    <div class="upcoming-item-price">$${sub.price.toFixed(2)}</div>
                    <div class="upcoming-item-days ${getRenewalClass(days)}">${getRenewalText(days)}</div>
                </div>
            </div>
        `;
    }).join('');
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

    grid.innerHTML = subscriptions.map(sub => {
        const nextRenewal = getNextRenewal(sub.startDate, sub.period);
        const days = getDaysUntil(nextRenewal);
        const match = findMatch(sub.name);
        const iconHtml = match
            ? `<img src="${match.img}" alt="${sub.name}" onerror="this.parentElement.innerHTML='<span style=font-size:24px>${match.icon}</span>'">`
            : `<span style="font-size:24px">${sub.icon || '📋'}</span>`;

        const isImminent = days <= 3;

        return `
            <div class="sub-card ${isImminent ? 'renewal-imminent' : ''}" style="--card-accent:${sub.color}">
                <div class="sub-card-icon" style="background:${sub.color}22">${iconHtml}</div>
                <div class="sub-card-info">
                    <div class="sub-card-name">${sub.name}</div>
                    <div class="sub-card-meta">
                        <span><i class="fas fa-calendar-alt"></i> ${formatDate(nextRenewal)}</span>
                        <span><i class="fas fa-sync-alt"></i> ${getPeriodLabel(sub.period).replace('/ ', '')}</span>
                    </div>
                    <div>
                        <span class="sub-card-price">$${sub.price.toFixed(2)}</span>
                        <span class="sub-card-period">${getPeriodLabel(sub.period)}</span>
                    </div>
                    <div class="sub-card-renewal ${getRenewalClass(days)}">
                        <i class="fas fa-clock"></i> ${getRenewalText(days)}
                    </div>
                </div>
                <div class="sub-card-actions">
                    <button class="btn" onclick="editSub('${sub.id}')" title="Редактировать"><i class="fas fa-pen"></i></button>
                    <button class="btn" onclick="deleteSub('${sub.id}')" title="Удалить"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        `;
    }).join('');
}

function renderCalendar() {
    const container = document.getElementById('calendarContainer');
    const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    const dayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

    // Get renewal dates for this month
    const renewalDates = {};
    subscriptions.forEach(sub => {
        const next = getNextRenewal(sub.startDate, sub.period);
        // Check if next renewal is in current month
        if (next.getMonth() === currentMonth && next.getFullYear() === currentYear) {
            const day = next.getDate();
            if (!renewalDates[day]) renewalDates[day] = [];
            renewalDates[day].push(sub);
        }
        // Also check multiple renewals within the month
        if (sub.period === 'weekly') {
            let d = new Date(sub.startDate);
            while (d.getMonth() <= currentMonth && d.getFullYear() <= currentYear) {
                if (d.getMonth() === currentMonth && d.getFullYear() === currentYear) {
                    const day = d.getDate();
                    if (!renewalDates[day]) renewalDates[day] = [];
                    if (!renewalDates[day].find(s => s.id === sub.id)) {
                        renewalDates[day].push(sub);
                    }
                }
                d.setDate(d.getDate() + 7);
            }
        }
    });

    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    let startDay = firstDay.getDay() - 1;
    if (startDay < 0) startDay = 6;

    const today = new Date();
    const todayDate = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();

    let html = `
        <div class="calendar-header">
            <h3>${monthNames[currentMonth]} ${currentYear}</h3>
            <div class="calendar-nav">
                <button onclick="changeMonth(-1)"><i class="fas fa-chevron-left"></i></button>
                <button onclick="changeMonth(1)"><i class="fas fa-chevron-right"></i></button>
            </div>
        </div>
        <div class="calendar-grid">
    `;

    // Day labels
    dayNames.forEach(d => {
        html += `<div class="calendar-day-label">${d}</div>`;
    });

    // Empty cells before first day
    for (let i = 0; i < startDay; i++) {
        const prevMonthDate = new Date(currentYear, currentMonth, -(startDay - i - 1));
        html += `<div class="calendar-day other-month">${prevMonthDate.getDate()}</div>`;
    }

    // Days
    for (let day = 1; day <= lastDay.getDate(); day++) {
        const isToday = day === todayDate && currentMonth === todayMonth && currentYear === todayYear;
        const hasRenewal = renewalDates[day];

        let classes = 'calendar-day';
        if (isToday) classes += ' today';
        if (hasRenewal) classes += ' has-renewal';

        let tooltip = '';
        if (hasRenewal) {
            tooltip = hasRenewal.map(s => `${s.name} - $${s.price.toFixed(2)}`).join('\\n');
        }

        html += `<div class="${classes}" title="${tooltip}">${day}</div>`;
    }

    // Fill remaining cells
    const totalCells = startDay + lastDay.getDate();
    const remaining = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
    for (let i = 1; i <= remaining; i++) {
        html += `<div class="calendar-day other-month">${i}</div>`;
    }

    html += '</div>';
    container.innerHTML = html;
}

function changeMonth(delta) {
    currentMonth += delta;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar();
}

function renderAnalytics() {
    // Category chart
    const categoryChart = document.getElementById('categoryChart');
    const categories = {};

    subscriptions.forEach(sub => {
        const cat = sub.category || 'other';
        if (!categories[cat]) categories[cat] = 0;
        categories[cat] += getMonthlyEquivalent(sub.price, sub.period);
    });

    const categoryNames = {
        streaming: 'Стриминг',
        music: 'Музыка',
        productivity: 'Продуктивность',
        gaming: 'Игры',
        cloud: 'Облако',
        design: 'Дизайн',
        education: 'Обучение',
        vpn: 'VPN / Безоп.',
        ai: 'AI / Нейросети',
        other: 'Другое'
    };

    const categoryColors = {
        streaming: '#f5576c',
        music: '#43e97b',
        productivity: '#4facfe',
        gaming: '#9b59b6',
        cloud: '#667eea',
        design: '#fa709a',
        education: '#fccb90',
        vpn: '#a18cd1',
        ai: '#38f9d7',
        other: '#8888a0'
    };

    const maxCat = Math.max(...Object.values(categories), 1);

    if (Object.keys(categories).length === 0) {
        categoryChart.innerHTML = '<div class="empty-state"><i class="fas fa-chart-bar"></i><p>Нет данных</p></div>';
    } else {
        categoryChart.innerHTML = '<div class="bar-chart">' + Object.entries(categories)
            .sort((a, b) => b[1] - a[1])
            .map(([cat, val]) => `
                <div class="bar-item">
                    <div class="bar-item-label">${categoryNames[cat] || cat}</div>
                    <div class="bar-item-track">
                        <div class="bar-item-fill" style="width:${(val / maxCat * 100).toFixed(0)}%;background:${categoryColors[cat] || '#667eea'}">$${val.toFixed(2)}</div>
                    </div>
                </div>
            `).join('') + '</div>';
    }

    // Period chart (pie)
    const periodChart = document.getElementById('periodChart');
    const periods = { weekly: 0, monthly: 0, quarterly: 0, yearly: 0 };
    const periodNames = { weekly: 'Недельные', monthly: 'Месячные', quarterly: 'Квартальные', yearly: 'Годовые' };
    const periodColors = { weekly: '#f5576c', monthly: '#667eea', quarterly: '#43e97b', yearly: '#fccb90' };

    subscriptions.forEach(sub => {
        periods[sub.period] += getMonthlyEquivalent(sub.price, sub.period);
    });

    const totalPeriod = Object.values(periods).reduce((a, b) => a + b, 0);

    if (totalPeriod === 0) {
        periodChart.innerHTML = '<div class="empty-state"><i class="fas fa-chart-pie"></i><p>Нет данных</p></div>';
    } else {
        let conicParts = [];
        let currentAngle = 0;
        const activePeriods = Object.entries(periods).filter(([, v]) => v > 0);

        activePeriods.forEach(([period, val]) => {
            const pct = (val / totalPeriod) * 100;
            conicParts.push(`${periodColors[period]} ${currentAngle}deg ${currentAngle + pct * 3.6}deg`);
            currentAngle += pct * 3.6;
        });

        periodChart.innerHTML = `
            <div class="pie-chart">
                <div class="pie-visual" style="background: conic-gradient(${conicParts.join(', ')})">
                    <div class="pie-center">
                        <div class="pie-center-value">$${totalPeriod.toFixed(2)}</div>
                        <div class="pie-center-label">в месяц</div>
                    </div>
                </div>
                <div class="pie-legend">
                    ${activePeriods.map(([period, val]) => `
                        <div class="pie-legend-item">
                            <div class="pie-legend-dot" style="background:${periodColors[period]}"></div>
                            <span>${periodNames[period]} — $${val.toFixed(2)}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
}

// ========== CRUD ==========
function saveSubs() {
    localStorage.setItem('subs', JSON.stringify(subscriptions));
}

function addSubscription(data) {
    const sub = {
        id: generateId(),
        ...data,
        createdAt: new Date().toISOString()
    };
    subscriptions.push(sub);
    saveSubs();
    render();
    showToast('Подписка добавлена!', 'success');
}

function updateSubscription(id, data) {
    const idx = subscriptions.findIndex(s => s.id === id);
    if (idx !== -1) {
        subscriptions[idx] = { ...subscriptions[idx], ...data };
        saveSubs();
        render();
        showToast('Подписка обновлена!', 'success');
    }
}

function deleteSub(id) {
    if (confirm('Удалить подписку?')) {
        subscriptions = subscriptions.filter(s => s.id !== id);
        saveSubs();
        render();
        showToast('Подписка удалена', 'danger');
    }
}

function editSub(id) {
    const sub = subscriptions.find(s => s.id === id);
    if (!sub) return;

    editingId = id;
    document.getElementById('modalTitle').textContent = 'Редактировать подписку';
    document.getElementById('submitBtn').innerHTML = '<i class="fas fa-save"></i> Сохранить';
    document.getElementById('subId').value = id;
    document.getElementById('subName').value = sub.name;
    document.getElementById('subPrice').value = sub.price;
    document.getElementById('subPeriod').value = sub.period;
    document.getElementById('subStart').value = sub.startDate;
    document.getElementById('subCategory').value = sub.category;
    document.getElementById('subReminder').checked = sub.reminder;

    // Set color
    const colorInputs = document.querySelectorAll('input[name="subColor"]');
    colorInputs.forEach(input => {
        if (input.value === sub.color) input.checked = true;
    });

    updateIconPreview(sub.name);
    openModal();
}

// ========== MODAL ==========
function openModal() {
    document.getElementById('modalOverlay').classList.add('active');
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    resetForm();
}

function resetForm() {
    document.getElementById('subForm').reset();
    document.getElementById('subId').value = '';
    editingId = null;
    document.getElementById('modalTitle').textContent = 'Добавить подписку';
    document.getElementById('submitBtn').innerHTML = '<i class="fas fa-plus"></i> Добавить';
    document.getElementById('suggestions').classList.remove('active');
    resetIconPreview();

    // Set default date to today
    document.getElementById('subStart').value = new Date().toISOString().split('T')[0];
}

function updateIconPreview(name) {
    const match = findMatch(name);
    const preview = document.getElementById('iconPreview');
    const label = document.getElementById('iconPreviewLabel');

    if (match) {
        preview.innerHTML = `<img src="${match.img}" alt="${name}" onerror="this.parentElement.innerHTML='<span style=font-size:28px>${match.icon}</span>'>`;
        preview.classList.add('has-icon');
        label.textContent = match.name;
    } else {
        resetIconPreview();
        label.textContent = name ? 'Иконка не найдена' : 'Иконка определится автоматически';
    }
}

function resetIconPreview() {
    const preview = document.getElementById('iconPreview');
    preview.innerHTML = '<i class="fas fa-globe"></i>';
    preview.classList.remove('has-icon');
}

// ========== TOAST ==========
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const icons = { success: 'check-circle', warning: 'exclamation-triangle', danger: 'trash' };
    toast.innerHTML = `<i class="fas fa-${icons[type] || 'info-circle'}"></i> ${message}`;

    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// ========== EVENT LISTENERS ==========
document.addEventListener('DOMContentLoaded', () => {
    // Set default date
    document.getElementById('subStart').value = new Date().toISOString().split('T')[0];

    // Add button
    document.getElementById('addSubBtn').addEventListener('click', () => {
        resetForm();
        openModal();
    });

    // Modal close
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('modalOverlay').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeModal();
    });

    // Form submit
    document.getElementById('subForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const data = {
            name: document.getElementById('subName').value.trim(),
            price: parseFloat(document.getElementById('subPrice').value),
            period: document.getElementById('subPeriod').value,
            startDate: document.getElementById('subStart').value,
            category: document.getElementById('subCategory').value,
            color: document.querySelector('input[name="subColor"]:checked').value,
            reminder: document.getElementById('subReminder').checked,
            icon: findMatch(document.getElementById('subName').value.trim())?.icon || '📋'
        };

        if (editingId) {
            updateSubscription(editingId, data);
        } else {
            addSubscription(data);
        }

        closeModal();
    });

    // Name input - suggestions & icon preview
    const nameInput = document.getElementById('subName');
    const suggestionsEl = document.getElementById('suggestions');

    nameInput.addEventListener('input', () => {
        const val = nameInput.value.trim();
        updateIconPreview(val);

        if (val.length >= 2) {
            const suggestions = getSuggestions(val);
            if (suggestions.length > 0) {
                suggestionsEl.innerHTML = suggestions.map(s => `
                    <div class="suggestion-item" data-name="${s.name}">
                        <div class="suggestion-item-icon" style="background:${s.color}22">
                            <img src="${s.img}" alt="${s.name}" onerror="this.parentElement.innerHTML='<span style=font-size:16px>${s.icon}</span>'">
                        </div>
                        <div class="suggestion-item-name">${s.name}</div>
                    </div>
                `).join('');
                suggestionsEl.classList.add('active');

                // Click on suggestion
                suggestionsEl.querySelectorAll('.suggestion-item').forEach(item => {
                    item.addEventListener('click', () => {
                        const name = item.dataset.name;
                        nameInput.value = name;
                        updateIconPreview(name);
                        suggestionsEl.classList.remove('active');

                        // Auto-set category
                        const match = findMatch(name);
                        if (match && match.category) {
                            document.getElementById('subCategory').value = match.category;
                        }
                    });
                });
            } else {
                suggestionsEl.classList.remove('active');
            }
        } else {
            suggestionsEl.classList.remove('active');
        }
    });

    nameInput.addEventListener('blur', () => {
        setTimeout(() => suggestionsEl.classList.remove('active'), 200);
    });

    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const page = item.dataset.page;

            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            item.classList.add('active');

            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            document.getElementById(page + 'Page').classList.add('active');

            const titles = {
                dashboard: 'Дашборд',
                subscriptions: 'Подписки',
                calendar: 'Календарь',
                analytics: 'Аналитика'
            };
            const subtitles = {
                dashboard: 'Управление вашими подписками',
                subscriptions: 'Все ваши подписки в одном месте',
                calendar: 'Календарь обновлений подписок',
                analytics: 'Статистика расходов на подписки'
            };
            document.getElementById('pageTitle').textContent = titles[page] || 'Дашборд';
            document.getElementById('pageSubtitle').textContent = subtitles[page] || '';
        });
    });

    // Mobile menu toggle
    const mobileToggle = document.createElement('button');
    mobileToggle.className = 'mobile-toggle';
    mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.body.appendChild(mobileToggle);
    mobileToggle.addEventListener('click', () => {
        document.querySelector('.sidebar').classList.toggle('open');
    });

    // Check for reminders on load
    checkReminders();

    // Initial render
    render();
});

// ========== REMINDERS ==========
function checkReminders() {
    subscriptions.forEach(sub => {
        if (!sub.reminder) return;
        const next = getNextRenewal(sub.startDate, sub.period);
        const days = getDaysUntil(next);

        if (days <= 3 && days >= 0) {
            setTimeout(() => {
                showToast(`${sub.name} — обновление ${getRenewalText(days).replace(/[⏰⚠️]/g, '').trim()}`, 'warning');
            }, 500);
        }
    });
}
