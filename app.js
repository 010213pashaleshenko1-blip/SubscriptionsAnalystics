// ========== SUBSCRIPTION CATALOG ==========
// Each entry: { domain, color, name, category }
// domain is used for logo.clearbit.com auto-detection
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
    'midjourney':    { domain: 'midjourney.com',   color: '#000000', name: 'Midjourney',     category: 'ai' },
    'copilot':       { domain: 'github.com',       color: '#6e40c9', name: 'Copilot',        category: 'ai' },
    'github copilot':{ domain: 'github.com',       color: '#6e40c9', name: 'GitHub Copilot', category: 'ai' },
    'perplexity':    { domain: 'perplexity.ai',    color: '#20b8cd', name: 'Perplexity',     category: 'ai' },
    'perplexity pro':{ domain: 'perplexity.ai',    color: '#20b8cd', name: 'Perplexity Pro', category: 'ai' },

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
    'roblox premium':     { domain: 'roblox.com',     color: '#e2231a', name: 'Roblox Premium',     category: 'gaming' },
    'roblox':             { domain: 'roblox.com',     color: '#e2231a', name: 'Roblox Premium',     category: 'gaming' },
    'apple arcade':       { domain: 'apple.com',      color: '#555555', name: 'Apple Arcade',      category: 'gaming' },
    'steam':              { domain: 'store.steampowered.com', color: '#1b2838', name: 'Steam', category: 'gaming' },

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
    'roblox':       { domain: 'roblox.com',     color: '#e2231a', name: 'Roblox',        category: 'gaming' },
};

// ========== STATE ==========
let subscriptions = JSON.parse(localStorage.getItem('subs_v2') || '[]');
let editingId = null;
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let currentSort = 'renewal';

// ========== LOGO URL GENERATOR ==========
function getLogoUrl(domain) {
    return `https://logo.clearbit.com/${domain}?size=128`;
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
function findMatch(name) {
    const lower = name.toLowerCase().trim();

    // Exact match
    if (CATALOG[lower]) return CATALOG[lower];

    // Partial match — longest key wins
    let bestMatch = null;
    let bestScore = 0;

    for (const [key, val] of Object.entries(CATALOG)) {
        if (lower.includes(key)) {
            const score = key.length;
            if (score > bestScore) { bestScore = score; bestMatch = val; }
        }
        if (key.includes(lower) && lower.length >= 3) {
            const score = lower.length;
            if (score > bestScore) { bestScore = score; bestMatch = val; }
        }
    }

    return bestMatch;
}

function getSuggestions(input) {
    const lower = input.toLowerCase().trim();
    if (lower.length < 2) return [];

    const results = [];
    for (const [key, val] of Object.entries(CATALOG)) {
        if (key.includes(lower) || lower.includes(key)) {
            results.push({ key, ...val });
        }
    }
    results.sort((a, b) => b.key.length - a.key.length);
    return results.slice(0, 8);
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

    document.querySelectorAll('input[name="subColor"]').forEach(inp => { if (inp.value === sub.color) inp.checked = true; });

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

    // Reset icon preview
    document.getElementById('iconPreview').innerHTML = `<span class="icon-placeholder-letter">?</span>`;
    document.getElementById('iconPreviewName').textContent = 'Название подписки';
    document.getElementById('iconPreviewHint').textContent = 'Иконка определится автоматически';
}

function updateIconPreview(name) {
    const match = findMatch(name);
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
    document.getElementById('subForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('subName').value.trim();
        const match = findMatch(name);

        const data = {
            name,
            price: parseFloat(document.getElementById('subPrice').value),
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
                        <div class="ac-item-name">${s.name}</div>
                    </div>
                `).join('');
                suggestionsEl.classList.add('active');

                suggestionsEl.querySelectorAll('.ac-item').forEach(item => {
                    item.addEventListener('click', () => {
                        nameInput.value = item.dataset.name;
                        updateIconPreview(item.dataset.name);

                        // Auto-fill category and color
                        document.getElementById('subCategory').value = item.dataset.category;
                        document.querySelectorAll('input[name="subColor"]').forEach(inp => {
                            if (inp.value === item.dataset.color) inp.checked = true;
                        });

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
