const appStore: {
  name: Record<string, string>;
  tagline: Record<string, string>;
  icon: string;
}[] = [
  {
    name: {
      en: "Speedtest Tracker",
    },
    tagline: {
      en: "Internet performance tracking application.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/speedtest-tracker/metadata/logo.jpg",
  },
  {
    name: {
      en: "Readarr",
    },
    tagline: {
      en: "Book Manager and Automation (Sonarr for Ebooks)",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/readarr/metadata/logo.jpg",
  },
  {
    name: {
      en: "Moodist",
    },
    tagline: {
      en: "Ambient sounds for focus and calm.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/moodist/metadata/logo.jpg",
  },
  {
    name: {
      en: "Heimdall",
    },
    tagline: {
      en: "Application Dashboard",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/heimdall/metadata/logo.jpg",
  },
  {
    name: {
      en: "Homepage",
    },
    tagline: {
      en: "A highly customizable homepage",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/homepage/metadata/logo.jpg",
  },
  {
    name: {
      en: "Flowise AI",
    },
    tagline: {
      en: "Build LLM Apps Easily",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/flowise/metadata/logo.jpg",
  },
  {
    name: {
      en: "DokuWiki",
    },
    tagline: {
      en: "DokuWiki is a simple to use and highly versatile Open Source wiki software ",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/dokuwiki/metadata/logo.jpg",
  },
  {
    name: {
      en: "Syncthing",
    },
    tagline: {
      en: "Continuous File Synchronization",
    },
    icon: "https://official-app-icons.nirvati.org/syncthing/icon.svg",
  },
  {
    name: {
      en: "autobrr",
    },
    tagline: {
      en: "Automation for downloads.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/autobrr/metadata/logo.jpg",
  },
  {
    name: {
      en: "mStream Music",
    },
    tagline: {
      en: "The easiest music streaming server available",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/mstream/metadata/logo.jpg",
  },
  {
    name: {
      en: "Kometa",
    },
    tagline: {
      en: "Overlays, Collections & Playlists for Plex.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/kometa/metadata/logo.jpg",
  },
  {
    name: {
      en: "Nextcloud",
    },
    tagline: {
      de: "Deine eigene Cloud",
      en: "Your personal cloud",
    },
    icon: "https://official-app-icons.nirvati.org/nextcloud/icon.svg",
  },
  {
    name: {
      en: "MQTTX",
    },
    tagline: {
      en: "MQTT websocket browser client tool",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/mqttx/metadata/logo.jpg",
  },
  {
    name: {
      en: "Eclipse Mosquitto",
    },
    tagline: {
      en: "The MQTT protocol provides a lightweight method of carrying out messaging using a publish/subscribe model.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/eclipse-mosquitto/metadata/logo.jpg",
  },
  {
    name: {
      en: "Flightlog",
    },
    tagline: {
      en: "Flightlog, a web application that keeps track of your personal flight history",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/flightlog/metadata/logo.jpg",
  },
  {
    name: {
      en: "Emby",
    },
    tagline: {
      en: "A media server for your home collection",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/emby/metadata/logo.jpg",
  },
  {
    name: {
      en: "Semaphore",
    },
    tagline: {
      en: "Modern UI for Ansible, Terraform, OpenTofu, Bash, Pulumi.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/semaphore/metadata/logo.jpg",
  },
  {
    name: {
      en: "SimpleX SMP",
    },
    tagline: {
      en: "A reference implementation of the SimpleX Messaging Protocol for simplex queues over public networks.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/simplex-smp/metadata/logo.jpg",
  },
  {
    name: {
      en: "Draw.io",
    },
    tagline: {
      en: "Diagramming and whiteboarding app.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/drawio/metadata/logo.jpg",
  },
  {
    name: {
      en: "Kanboard",
    },
    tagline: {
      en: "Open Source Kanban Board",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/kanboard/metadata/logo.jpg",
  },
  {
    name: {
      en: "Authentik",
    },
    tagline: {
      en: "Identity & access management",
    },
    icon: "https://official-app-icons.nirvati.org/authentik/icon.svg",
  },
  {
    name: {
      en: "PrivateBin",
    },
    tagline: {
      en: "A minimalist, open source online pastebin where the server has zero knowledge of pasted data. Data is encrypted/decrypted in the browser using 256 bits AES.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/privatebin/metadata/logo.jpg",
  },
  {
    name: {
      en: "Deluge",
    },
    tagline: {
      en: "Deluge is a lightweight, Free Software, cross-platform BitTorrent client.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/deluge/metadata/logo.jpg",
  },
  {
    name: {
      en: "Flaresolverr",
    },
    tagline: {
      en: "Bypass Cloudflare and DDoS-GuARD.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/flaresolverr/metadata/logo.jpg",
  },
  {
    name: {
      en: "Zipline",
    },
    tagline: {
      en: "A ShareX/file upload server that is easy to use, packed with features, and with an easy setup!  ",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/zipline/metadata/logo.jpg",
  },
  {
    name: {
      en: "FreshRSS",
    },
    tagline: {
      en: "Your lightweight, fast, and customizable feed aggregator",
    },
    icon: "https://official-app-icons.nirvati.org/freshrss/icon.svg",
  },
  {
    name: {
      en: "LNbits",
    },
    tagline: {
      en: "Multi-user wallet management system",
    },
    icon: "https://official-app-icons.nirvati.org/lnbits/icon.svg",
  },
  {
    name: {
      en: "Home Bridge",
    },
    tagline: {
      en: "HomeKit support for the impatient.  ",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/homebridge/metadata/logo.jpg",
  },
  {
    name: {
      en: "Gotify",
    },
    tagline: {
      en: "Gotify, a simple server for sending and receiving notification messages.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/gotify/metadata/logo.jpg",
  },
  {
    name: {
      en: "Firefly III Data Importer",
    },
    tagline: {
      en: "The Firefly III Data Importer can import data into Firefly III",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/firefly-iii-data-importer/metadata/logo.jpg",
  },
  {
    name: {
      en: "Filestash",
    },
    tagline: {
      en: "A modern web client for SFTP, S3, FTP, WebDAV, Git, Minio, LDAP, CalDAV, CardDAV, Mysql, Backblaze",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/filestash/metadata/logo.jpg",
  },
  {
    name: {
      en: "MongoDB",
    },
    tagline: {
      en: "MongoDB is an open-source NoSQL database",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/mongo/metadata/logo.jpg",
  },
  {
    name: {
      en: "Keycloak",
    },
    tagline: {
      en: "Open Source Identity and Access Management",
    },
    icon: "https://official-app-icons.nirvati.org/keycloak/icon.svg",
  },
  {
    name: {
      en: "Cloudflared",
    },
    tagline: {
      en: "Cloudflare Tunnels in a Web UI",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/cloudflared/metadata/logo.jpg",
  },
  {
    name: {
      en: "Databag",
    },
    tagline: {
      en: "Messenger for the Decentralized Web",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/databag/metadata/logo.jpg",
  },
  {
    name: {
      en: "WordPress",
    },
    tagline: {
      en: "Publish your passion",
    },
    icon: "https://official-app-icons.nirvati.org/wordpress/icon.svg",
  },
  {
    name: {
      en: "Barrage",
    },
    tagline: {
      en: "Minimal Deluge WebUI with full mobile support",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/barrage/metadata/logo.jpg",
  },
  {
    name: {
      en: "Stirling-PDF",
    },
    tagline: {
      en: "Powerful locally hosted web based PDF manipulation tool.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/stirling-pdf/metadata/logo.jpg",
  },
  {
    name: {
      en: "WikiJS",
    },
    tagline: {
      en: "A modern and powerful wiki app built on Node.js",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/wikijs/metadata/logo.jpg",
  },
  {
    name: {
      en: "Tube Archivist",
    },
    tagline: {
      en: "Your self-hosted YouTube media server",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/tubearchivist/metadata/logo.jpg",
  },
  {
    name: {
      en: "Whoami",
    },
    tagline: {
      en: "Tiny Go server that prints os information and HTTP request to output.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/whoami/metadata/logo.jpg",
  },
  {
    name: {
      en: "Halo",
    },
    tagline: {
      en: "Halo - Open source website building tool.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/halo/metadata/logo.jpg",
  },
  {
    name: {
      en: "Umami",
    },
    tagline: {
      en: "Umami is a simple, fast, privacy-focused alternative to Google Analytics.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/umami/metadata/logo.jpg",
  },
  {
    name: {
      en: "Owncast",
    },
    tagline: {
      en: " Take control over your live stream video by running it yourself. Streaming + chat out of the box. ",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/owncast/metadata/logo.jpg",
  },
  {
    name: {
      en: "ViewTube",
    },
    tagline: {
      en: "The open source, privacy-conscious way to enjoy your favorite YouTube content.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/viewtube/metadata/logo.jpg",
  },
  {
    name: {
      en: "Notemark",
    },
    tagline: {
      en: "Lighting fast web-based Markdown notes app.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/notemark/metadata/logo.jpg",
  },
  {
    name: {
      en: "Ghost Development",
    },
    tagline: {
      en: "Ghost - Turn your audience into a business.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/ghost-dev/metadata/logo.jpg",
  },
  {
    name: {
      en: "Scrypted",
    },
    tagline: {
      en: "High performance home video integration and automation platform",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/scrypted/metadata/logo.jpg",
  },
  {
    name: {
      en: "Bitmagnet",
    },
    tagline: {
      en: "A self-hosted BitTorrent indexer.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/bitmagnet/metadata/logo.jpg",
  },
  {
    name: {
      en: "Budibase",
    },
    tagline: {
      en: "Internal tools made easy.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/budibase/metadata/logo.jpg",
  },
  {
    name: {
      en: "PodFetch",
    },
    tagline: {
      en: "A sleek and efficient podcast downloader.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/podfetch/metadata/logo.jpg",
  },
  {
    name: {
      en: "RSS",
    },
    tagline: {
      en: "A simple, opinionated, RSS feed aggregator.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/rss/metadata/logo.jpg",
  },
  {
    name: {
      en: "Kiwix Server",
    },
    tagline: {
      en: "Kiwix Server is a web server for hosting .zim files",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/kiwix-serve/metadata/logo.jpg",
  },
  {
    name: {
      en: "Nginx",
    },
    tagline: {
      en: "Open-source simple and fast web server.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/nginx/metadata/logo.jpg",
  },
  {
    name: {
      en: "Grafana",
    },
    tagline: {
      en: "The open and composable observability and data visualization platform.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/grafana/metadata/logo.jpg",
  },
  {
    name: {
      en: "Hammond",
    },
    tagline: {
      en: "Self hosted vehicle and expense management system. Like Clarkson, but better",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/hammond/metadata/logo.jpg",
  },
  {
    name: {
      en: "Actual Budget",
    },
    tagline: {
      en: "Local-first OpenSource Budget tool",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/actual-budget/metadata/logo.jpg",
  },
  {
    name: {
      en: "Ryot",
    },
    tagline: {
      en: "Roll your own tracker!",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/ryot/metadata/logo.jpg",
  },
  {
    name: {
      en: "Uptime Kuma",
    },
    tagline: {
      en: "Self-hosted uptime monitoring tool",
    },
    icon: "https://official-app-icons.nirvati.org/uptime-kuma/icon.svg",
  },
  {
    name: {
      en: "Send",
    },
    tagline: {
      en: "Simple, private file sharing. https://send.vis.ee/",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/send/metadata/logo.jpg",
  },
  {
    name: {
      en: "Mind",
    },
    tagline: {
      en: "A simple self hosted reminder platform that uses push to send notifications to your device.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/mind/metadata/logo.jpg",
  },
  {
    name: {
      en: "Hello World",
    },
    tagline: {
      en: "Hello World web server in under 2 MB",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/hello-world/metadata/logo.jpg",
  },
  {
    name: {
      en: "Peppermint",
    },
    tagline: {
      en: "An open source ticket management & help desk solution.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/peppermint/metadata/logo.jpg",
  },
  {
    name: {
      en: "Anse",
    },
    tagline: {
      en: "Fully optimized UI for AI Chats.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/anse/metadata/logo.jpg",
  },
  {
    name: {
      en: "DDNS Updater",
    },
    tagline: {
      en: "Program to keep DNS A and/or AAAA records updated for multiple DNS providers.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/ddns-updater/metadata/logo.jpg",
  },
  {
    name: {
      en: "Pi-hole",
    },
    tagline: {
      en: "A black hole for Internet advertisements",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/pihole/metadata/logo.jpg",
  },
  {
    name: {
      en: "Tailscale",
    },
    tagline: {
      en: "The easiest, most secure way to use WireGuard and 2FA.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/tailscale/metadata/logo.jpg",
  },
  {
    name: {
      en: "Monica",
    },
    tagline: {
      en: "A Personal Relationship Management tool to help you document your social life.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/monica/metadata/logo.jpg",
  },
  {
    name: {
      en: "Ollama",
    },
    tagline: {
      en: "LLMs inference server with OpenAI compatible API",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/ollama-cpu/metadata/logo.jpg",
  },
  {
    name: {
      en: "Whoogle Search",
    },
    tagline: {
      en: "A self-hosted, ad-free, privacy-respecting metasearch engine.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/whoogle/metadata/logo.jpg",
  },
  {
    name: {
      en: "Umami Analytics",
    },
    tagline: {
      en: "Umami is a simple, fast, privacy-focused alternative to Google Analytics.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/umami-analytics/metadata/logo.jpg",
  },
  {
    name: {
      en: "Spacedrive",
    },
    tagline: {
      en: "Cross-platform file explorer",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/spacedrive/metadata/logo.jpg",
  },
  {
    name: {
      en: "CyberChef",
    },
    tagline: {
      en: "The Cyber Swiss Army Knife",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/cyberchef/metadata/logo.jpg",
  },
  {
    name: {
      en: "GoToSocial",
    },
    tagline: {
      en: "Fast, fun, ActivityPub server, powered by Go.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/gotosocial/metadata/logo.jpg",
  },
  {
    name: {
      en: "Octobot",
    },
    tagline: {
      en: "Octobot is a powerful open-source cryptocurrency trading robot.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/octobot/metadata/logo.jpg",
  },
  {
    name: {
      en: "Monero Daemon",
    },
    tagline: {
      en: "Monero is a private, decentralized cryptocurrency that keeps your finances confidential and secure.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/monerod/metadata/logo.jpg",
  },
  {
    name: {
      en: "Matter Server",
    },
    tagline: {
      en: "Interact with Matter. Works with HA !",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/matter-server/metadata/logo.jpg",
  },
  {
    name: {
      en: "Transmission",
    },
    tagline: {
      en: "Fast, easy, and free BitTorrent client",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/transmission/metadata/logo.jpg",
  },
  {
    name: {
      en: "Roundcube",
    },
    tagline: {
      en: "Web mail interface",
    },
    icon: "https://official-app-icons.nirvati.org/roundcube/icon.svg",
  },
  {
    name: {
      en: "Olivetin",
    },
    tagline: {
      en: "Give safe and simple access to predefined shell commands from a web interface.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/olivetin/metadata/logo.jpg",
  },
  {
    name: {
      en: "Ghost Production",
    },
    tagline: {
      en: "Ghost - Turn your audience into a business.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/ghost/metadata/logo.jpg",
  },
  {
    name: {
      en: "VaultWarden",
    },
    tagline: {
      en: "All your passwords in your control!",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/vaultwarden/metadata/logo.jpg",
  },
  {
    name: {
      en: "SABnzbd",
    },
    tagline: {
      en: "Sabnzbd makes Usenet as simple and streamlined as possible by automating everything we can",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/sabnzbd/metadata/logo.jpg",
  },
  {
    name: {
      en: "Atuin Server",
    },
    tagline: {
      en: "Magical Shell History",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/atuin/metadata/logo.jpg",
  },
  {
    name: {
      en: "Forgejo",
    },
    tagline: {
      en: "Beyond coding. We forge. · Lightweight and performant · Guaranteed 100% Free Software",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/forgejo/metadata/logo.jpg",
  },
  {
    name: {
      en: "Immich",
    },
    tagline: {
      en: "Photo and video backup solution directly from your mobile phone.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/immich/metadata/logo.jpg",
  },
  {
    name: {
      en: "Kimai",
    },
    tagline: {
      en: "Open source time-tracker",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/kimai/metadata/logo.jpg",
  },
  {
    name: {
      en: "Serge",
    },
    tagline: {
      en: "LLaMA made easy",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/serge/metadata/logo.jpg",
  },
  {
    name: {
      en: "PhotoPrism",
    },
    tagline: {
      en: "AI-Powered Photos App for the Decentralized Web. We are on a mission to protect your freedom and privacy.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/photoprism/metadata/logo.jpg",
  },
  {
    name: {
      en: "Ghostfolio",
    },
    tagline: {
      en: "Open Source Wealth Management Software.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/ghostfolio/metadata/logo.jpg",
  },
  {
    name: {
      en: "FreshRSS",
    },
    tagline: {
      en: "A free, self-hostable aggregator… ",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/freshrss/metadata/logo.jpg",
  },
  {
    name: {
      en: "Obsidian LiveSync",
    },
    tagline: {
      en: "LiveSync couchdb backend for Obsidian",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/obsidian-livesync/metadata/logo.jpg",
  },
  {
    name: {
      en: "Activepieces",
    },
    tagline: {
      en: "True zapier alternative.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/activepieces/metadata/logo.jpg",
  },
  {
    name: {
      en: "Joplin Server",
    },
    tagline: {
      en: "Note taking and to-do application with synchronisation",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/joplin/metadata/logo.jpg",
  },
  {
    name: {
      en: "Outline",
    },
    tagline: {
      en: "A home for all your docs",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/outline/metadata/logo.jpg",
  },
  {
    name: {
      en: "Prowlarr",
    },
    tagline: {
      en: "A torrent/usenet indexer manager/proxy",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/prowlarr/metadata/logo.jpg",
  },
  {
    name: {
      en: "Adguard",
    },
    tagline: {
      en: "World's most advanced adblocker!",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/adguard/metadata/logo.jpg",
  },
  {
    name: {
      en: "Glance",
    },
    tagline: {
      en: "Super configurable dashboard",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/glance/metadata/logo.jpg",
  },
  {
    name: {
      en: "Moneroblock",
    },
    tagline: {
      en: "Decentralized and trustless Monero block explorer",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/moneroblock/metadata/logo.jpg",
  },
  {
    name: {
      en: "Synapse",
    },
    tagline: {
      en: "A self-hosted Matrix server",
    },
    icon: "https://official-app-icons.nirvati.org/synapse/icon.svg",
  },
  {
    name: {
      en: "Sonarr",
    },
    tagline: {
      en: "TV show manager for Usenet and BitTorrent",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/sonarr/metadata/logo.jpg",
  },
  {
    name: {
      en: "Wizarr",
    },
    tagline: {
      en: "Wizarr is an automatic user invitation system for Plex and Jellyfin.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/wizarr/metadata/logo.jpg",
  },
  {
    name: {
      en: "Resilio",
    },
    tagline: {
      en: "Fast, reliable, and simple file sync and share solution.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/resilio-sync/metadata/logo.jpg",
  },
  {
    name: {
      en: "Postfix Mail Relay",
    },
    tagline: {
      en: "Simple SMTP relay for environments where you may have private servers with no Internet connection.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/postfix-relay/metadata/logo.jpg",
  },
  {
    name: {
      en: "DailyTxT",
    },
    tagline: {
      en: "Encrypted Diary Web-App",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/dailytxt/metadata/logo.jpg",
  },
  {
    name: {
      en: "Netboot.xyz",
    },
    tagline: {
      en: "Your favorite operating systems in one place.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/netbootxyz/metadata/logo.jpg",
  },
  {
    name: {
      en: "LibReddit",
    },
    tagline: {
      en: "Browse reddit without problems!",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/libreddit/metadata/logo.jpg",
  },
  {
    name: {
      en: "Synapse Admin",
    },
    tagline: {
      en: "Manage your Synapse server",
    },
    icon: "https://official-app-icons.nirvati.org/synapse-admin/icon.svg",
  },
  {
    name: {
      en: "Planka",
    },
    tagline: {
      en: "Free open source kanban board for workgroups.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/planka/metadata/logo.jpg",
  },
  {
    name: {
      en: "Jellyseerr",
    },
    tagline: {
      en: "Fork of overseerr for Jellyfin support",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/jellyseerr/metadata/logo.jpg",
  },
  {
    name: {
      en: "Tinyauth",
    },
    tagline: {
      en: "The simplest way to protect your apps with a login screen.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/tinyauth/metadata/logo.jpg",
  },
  {
    name: {
      en: "openbooks",
    },
    tagline: {
      en: "Search and Download eBooks",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/openbooks/metadata/logo.jpg",
  },
  {
    name: {
      en: "Gitea",
    },
    tagline: {
      en: "Gitea - Git with a cup of tea · A painless self-hosted Git service. · Cross-platform · Easy to install · Lightweight · Open Source.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/gitea/metadata/logo.jpg",
  },
  {
    name: {
      en: "Dashy",
    },
    tagline: {
      en: "A self-hostable personal dashboard built for you.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/dashy/metadata/logo.jpg",
  },
  {
    name: {
      en: "RomM",
    },
    tagline: {
      en: "Your beautiful, powerful, self-hosted rom manager.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/romm/metadata/logo.jpg",
  },
  {
    name: {
      en: "flatnotes",
    },
    tagline: {
      en: "A self-hosted, database-less note taking web app",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/flatnotes/metadata/logo.jpg",
  },
  {
    name: {
      en: "NocoDB",
    },
    tagline: {
      en: "Open Source Airtable Alternative",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/nocodb/metadata/logo.jpg",
  },
  {
    name: {
      en: "Discourse",
    },
    tagline: {
      de: "Die Online-Heimat für deine Community",
      en: "The online home for your community",
    },
    icon: "https://official-app-icons.nirvati.org/discourse/icon.svg",
  },
  {
    name: {
      en: "EMQX Open Source",
    },
    tagline: {
      en: "Scalable open-source MQTT broker.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/emqx/metadata/logo.jpg",
  },
  {
    name: {
      en: "Citadel",
    },
    tagline: {
      en: "Nirvati, for Bitcoiners",
    },
    icon: "https://official-app-icons.nirvati.org/citadel/icon.svg",
  },
  {
    name: {
      en: "Tor support",
    },
    tagline: {
      en: "Tor support for Nirvati",
    },
    icon: "https://official-app-icons.nirvati.org/tor/icon.svg",
  },
  {
    name: {
      en: "Pinchflat",
    },
    tagline: {
      en: "Your next YouTube media manager",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/pinchflat/metadata/logo.jpg",
  },
  {
    name: {
      en: "teddit",
    },
    tagline: {
      en: "Alternative Reddit front-end focused on privacy https://teddit.net",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/teddit/metadata/logo.jpg",
  },
  {
    name: {
      en: "Nitter",
    },
    tagline: {
      en: "Twitter without annoyances!",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/nitter/metadata/logo.jpg",
  },
  {
    name: {
      en: "Sshwifty",
    },
    tagline: {
      en: "Web SSH & Telnet (WebSSH & WebTelnet client)",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/sshwifty/metadata/logo.jpg",
  },
  {
    name: {
      en: "Alby Hub",
    },
    tagline: {
      en: "Your Own Center for Internet Money",
    },
    icon: "https://official-app-icons.nirvati.org/alby-hub/icon.svg",
  },
  {
    name: {
      en: "Movary",
    },
    tagline: {
      en: "Movary is a self-hosted web application to track and rate your watched movies. ",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/movary/metadata/logo.jpg",
  },
  {
    name: {
      en: "Baïkal",
    },
    tagline: {
      en: "Baïkal is a Calendar+Contacts server",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/baikal/metadata/logo.jpg",
  },
  {
    name: {
      en: "Recyclarr",
    },
    tagline: {
      en: "Sync TRaSH Guides.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/recyclarr/metadata/logo.jpg",
  },
  {
    name: {
      en: "Invoice Ninja",
    },
    tagline: {
      en: "Invoices, Expenses and Tasks built with Laravel, Flutter and React.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/invoice-ninja/metadata/logo.jpg",
  },
  {
    name: {
      en: "LinkStack",
    },
    tagline: {
      en: "LinkStack is a highly customizable link sharing platform with an intuitive, easy to use user interface",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/linkstack/metadata/logo.jpg",
  },
  {
    name: {
      en: "Audiobookshelf",
    },
    tagline: {
      en: "Audiobookshelf is a self-hosted audiobook and podcast server.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/audiobookshelf/metadata/logo.jpg",
  },
  {
    name: {
      en: "SeedSync",
    },
    tagline: {
      en: "SeedSync is a tool to sync the files on a remote Linux server.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/seedsync/metadata/logo.jpg",
  },
  {
    name: {
      en: "Mealie",
    },
    tagline: {
      en: "Mealie is a self-hosted recipe manager and meal planner.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/mealie-1/metadata/logo.jpg",
  },
  {
    name: {
      en: "Metabase",
    },
    tagline: {
      en: "The simplest, fastest way to get business intelligence and analytics to everyone in your company",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/metabase/metadata/logo.jpg",
  },
  {
    name: {
      en: "Bazarr",
    },
    tagline: {
      en: "A companion application to Sonarr and Radarr that manages and downloads subtitles",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/bazarr/metadata/logo.jpg",
  },
  {
    name: {
      en: "LubeLogger",
    },
    tagline: {
      en: "Vehicle Maintenance and Fuel Mileage Tracker.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/lubelogger/metadata/logo.jpg",
  },
  {
    name: {
      en: "2FAuth",
    },
    tagline: {
      en: "Manage your Two-Factor Authentication codes.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/2fauth/metadata/logo.jpg",
  },
  {
    name: {
      en: "Trilium",
    },
    tagline: {
      en: "An open-source, self-hosted Notion alterative",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/trilium/metadata/logo.jpg",
  },
  {
    name: {
      en: "Owncloud",
    },
    tagline: {
      en: "A personal cloud which runs on your own server. ",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/owncloud/metadata/logo.jpg",
  },
  {
    name: {
      en: "ESP Home",
    },
    tagline: {
      en: "Control your ESP8266/ESP32.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/esphome/metadata/logo.jpg",
  },
  {
    name: {
      en: "Suwayomi",
    },
    tagline: {
      en: "An open-source manga reader server with bundled Web UI",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/suwayomi/metadata/logo.jpg",
  },
  {
    name: {
      en: "MeTube",
    },
    tagline: {
      en: "Self-hosted YouTube downloader.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/metube/metadata/logo.jpg",
  },
  {
    name: {
      en: "ChangeDetection",
    },
    tagline: {
      en: "Website change detection.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/changedetection/metadata/logo.jpg",
  },
  {
    name: {
      en: "Node-RED",
    },
    tagline: {
      en: "Low-code programming for event-driven applications",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/nodered/metadata/logo.jpg",
  },
  {
    name: {
      en: "Lidarr",
    },
    tagline: {
      en: " Looks and smells like Sonarr but made for music.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/lidarr/metadata/logo.jpg",
  },
  {
    name: {
      en: "Tandoor",
    },
    tagline: {
      en: "Recipe collection manager.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/tandoor/metadata/logo.jpg",
  },
  {
    name: {
      en: "Deemix",
    },
    tagline: {
      en: "deemix is a barebone deezer downloader library built from the ashes of Deezloader Remix.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/deemix/metadata/logo.jpg",
  },
  {
    name: {
      en: "Maintainerr",
    },
    tagline: {
      en: "Maintainerr will manage the storage space on your plex server, launching automated actions to delete your files.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/maintainerr/metadata/logo.jpg",
  },
  {
    name: {
      en: "Chatpad AI",
    },
    tagline: {
      en: "Not just another ChatGPT user-interface!",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/chatpad/metadata/logo.jpg",
  },
  {
    name: {
      en: "SoGo",
    },
    tagline: {
      en: "Web mail interface",
    },
    icon: "https://official-app-icons.nirvati.org/sogo/icon.svg",
  },
  {
    name: {
      en: "Navidrome",
    },
    tagline: {
      en: "A selfhosted music server",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/navidrome/metadata/logo.jpg",
  },
  {
    name: {
      en: "Shlink",
    },
    tagline: {
      en: "Shlink is a self-hosted URL shortener",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/shlink/metadata/logo.jpg",
  },
  {
    name: {
      en: "Plausible CE",
    },
    tagline: {
      en: "Simple, open-source, lightweight (< 1 KB) and privacy-friendly web analytics alternative to Google Analytics.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/plausible-ce/metadata/logo.jpg",
  },
  {
    name: {
      en: "Email OAuth2 Proxy",
    },
    tagline: {
      en: "OAuth Proxy for IMAP/POP/SMTP.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/email-oauth2-proxy/metadata/logo.jpg",
  },
  {
    name: {
      en: "SearXNG",
    },
    tagline: {
      en: "Privacy-respecting, hackable metasearch engine",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/searxng/metadata/logo.jpg",
  },
  {
    name: {
      en: "Tautulli",
    },
    tagline: {
      en: "Monitoring and tracking tool for Plex Media Server.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/tautulli/metadata/logo.jpg",
  },
  {
    name: {
      en: "Bookstack",
    },
    tagline: {
      en: "BookStack is a self-hosted platform for organising and storing information.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/bookstack/metadata/logo.jpg",
  },
  {
    name: {
      en: "RSSHub",
    },
    tagline: {
      en: "Everything is RSSible with RSSHub",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/rsshub/metadata/logo.jpg",
  },
  {
    name: {
      en: "Wekan",
    },
    tagline: {
      en: "Open-Source, customizable, and privacy-focused kanban",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/wekan/metadata/logo.jpg",
  },
  {
    name: {
      en: "SLSKD",
    },
    tagline: {
      en: "P2P downloads",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/slskd/metadata/logo.jpg",
  },
  {
    name: {
      en: "Jackett",
    },
    tagline: {
      en: "API Support for your favorite torrent trackers ",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/jackett/metadata/logo.jpg",
  },
  {
    name: {
      en: "Spoolman",
    },
    tagline: {
      en: "Keep track of your inventory of 3D-printer filament spools",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/spoolman/metadata/logo.jpg",
  },
  {
    name: {
      en: "Plex",
    },
    tagline: {
      en: "Stream Movies & TV Shows",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/plex/metadata/logo.jpg",
  },
  {
    name: {
      en: "Pingvin Share",
    },
    tagline: {
      en: "Self-hosted file sharing platform",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/pingvin-share/metadata/logo.jpg",
  },
  {
    name: {
      en: "Homer",
    },
    tagline: {
      en: "A very simple static homepage for your server",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/homer/metadata/logo.jpg",
  },
  {
    name: {
      en: "Lidarr on Steroids",
    },
    tagline: {
      en: "Lidarr with some muscles thanks to deemix",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/lidarr-deemix/metadata/logo.jpg",
  },
  {
    name: {
      en: "ThunderHub",
    },
    tagline: {
      en: "Take full control of your Lightning node",
    },
    icon: "https://official-app-icons.nirvati.org/thunderhub/icon.svg",
  },
  {
    name: {
      en: "Cheshire Cat AI",
    },
    tagline: {
      en: "A production-ready AI framework to develop AI agents.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/cheshire-cat-ai/metadata/logo.jpg",
  },
  {
    name: {
      en: "CodeX.docs",
    },
    tagline: {
      en: "Free Docs app powered by Editor.js ecosystem.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/codex-docs/metadata/logo.jpg",
  },
  {
    name: {
      en: "Mixpost",
    },
    tagline: {
      en: "Self-hosted social media management. Schedule and organize your social content. ",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/mixpost/metadata/logo.jpg",
  },
  {
    name: {
      en: "SFTPGo",
    },
    tagline: {
      en: "Fully featured and highly configurable SFTP server",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/sftpgo/metadata/logo.jpg",
  },
  {
    name: {
      en: "Tooljet",
    },
    tagline: {
      en: "Alternative to retool to construct CRM dashboard",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/tooljet/metadata/logo.jpg",
  },
  {
    name: {
      en: "Grocy",
    },
    tagline: {
      en: "ERP beyond your fridge",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/grocy/metadata/logo.jpg",
  },
  {
    name: {
      en: "Bitcoin Core",
    },
    tagline: {
      en: "Run a Bitcoin node",
    },
    icon: "https://official-app-icons.nirvati.org/bitcoin-core/icon.svg",
  },
  {
    name: {
      en: "Mylar3",
    },
    tagline: {
      en: "Mylar3 is an automated Comic Book downloader (cbr/cbz) for use with NZB and torrents written in python.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/mylar3/metadata/logo.jpg",
  },
  {
    name: {
      en: "Vikunja",
    },
    tagline: {
      en: "The Todo-app to organize your life.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/vikunja/metadata/logo.jpg",
  },
  {
    name: {
      en: "Write-Freely",
    },
    tagline: {
      en: "Markdown-based publishing platform.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/write-freely/metadata/logo.jpg",
  },
  {
    name: {
      en: "Overseerr",
    },
    tagline: {
      en: "Request management and media discovery tool for the Plex ecosystem",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/overseerr/metadata/logo.jpg",
  },
  {
    name: {
      en: "NextGBA",
    },
    tagline: {
      en: "Gameboy in your browser",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/nextgba/metadata/logo.jpg",
  },
  {
    name: {
      en: "Jellyfin Vue (Beta)",
    },
    tagline: {
      en: "A modern web client for Jellyfin based on Vue",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/jellyfin-vue/metadata/logo.jpg",
  },
  {
    name: {
      en: "Whisparr",
    },
    tagline: {
      en: "Adult movie collection manager.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/whisparr/metadata/logo.jpg",
  },
  {
    name: {
      en: "Hoarder",
    },
    tagline: {
      en: "Self-hostable bookmark-everything app",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/hoarder/metadata/logo.jpg",
  },
  {
    name: {
      en: "Fireshare",
    },
    tagline: {
      en: "Self host your media and share with unique links",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/fireshare/metadata/logo.jpg",
  },
  {
    name: {
      en: "Memos",
    },
    tagline: {
      en: "Memo hub for knowledge management and collaboration.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/memos/metadata/logo.jpg",
  },
  {
    name: {
      en: "Inspircd",
    },
    tagline: {
      en: "A modular C++ IRC server.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/inspircd/metadata/logo.jpg",
  },
  {
    name: {
      en: "Duck DNS",
    },
    tagline: {
      en: "Duck DNS is a free Dynamic DNS service",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/duckdns/metadata/logo.jpg",
  },
  {
    name: {
      en: "Open WebUI",
    },
    tagline: {
      en: "User-friendly WebUI for LLMs",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/open-webui/metadata/logo.jpg",
  },
  {
    name: {
      en: "Kapowarr",
    },
    tagline: {
      en: "Kapowarr is a software to build and manage a comic book library, fitting in the *arr suite of software.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/kapowarr/metadata/logo.jpg",
  },
  {
    name: {
      en: "qDirStat",
    },
    tagline: {
      en: "A graphical disk usage analyzer",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/qdirstat/metadata/logo.jpg",
  },
  {
    name: {
      en: "Docmost",
    },
    tagline: {
      en: "An open-source collaborative wiki and documentation software",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/docmost/metadata/logo.jpg",
  },
  {
    name: {
      en: "HomeBox",
    },
    tagline: {
      en: "Inventory and organization system.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/homebox/metadata/logo.jpg",
  },
  {
    name: {
      en: "Mixpost Pro",
    },
    tagline: {
      en: "Self-hosted social media management. Schedule and organize your social content. ",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/mixpost-pro/metadata/logo.jpg",
  },
  {
    name: {
      en: "Rallly",
    },
    tagline: {
      en: "Scheduling and collaboration tool",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/rallly/metadata/logo.jpg",
  },
  {
    name: {
      en: "Mongo Express",
    },
    tagline: {
      en: "Web-based MongoDB admin interface, written with Node.js and Express",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/mongo-express/metadata/logo.jpg",
  },
  {
    name: {
      en: "Penpot",
    },
    tagline: {
      en: "Open-Source design & prototyping platform.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/penpot/metadata/logo.jpg",
  },
  {
    name: {
      en: "Pi-hole®",
    },
    tagline: {
      en: "Your personal DNS and DHCP Server for ad-blocking",
    },
    icon: "https://official-app-icons.nirvati.org/pi-hole/icon.svg",
  },
  {
    name: {
      en: "Calibre-Web - EBook Reader",
    },
    tagline: {
      en: "Calibre-web is a web app providing a clean interface for browsing, reading and downloading eBooks using an existing Calibre database.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/calibre-web/metadata/logo.jpg",
  },
  {
    name: {
      en: "Jellyfin",
    },
    tagline: {
      en: "A media server for your home collection",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/jellyfin/metadata/logo.jpg",
  },
  {
    name: {
      de: "Sync-Server für Firefox",
      en: "Sync server for Firefox",
    },
    tagline: {
      de: "Synchronisiere Daten in Firefox",
      en: "Sync your Firefox data across devices",
    },
    icon: "https://official-app-icons.nirvati.org/ff-sync/icon.svg",
  },
  {
    name: {
      en: "IT-Tools",
    },
    tagline: {
      en: "Collection of handy online tools for developers, with great UX.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/it-tools/metadata/logo.jpg",
  },
  {
    name: {
      en: "Odoo",
    },
    tagline: {
      en: "Open-source business management software with modular applications for streamlined operations.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/odoo/metadata/logo.jpg",
  },
  {
    name: {
      en: "Silverbullet",
    },
    tagline: {
      en: "SilverBullet is a creative space where you collect, create and expand your personal knowledge, while also letting you constantly evolve the tools you use to do so.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/silverbullet/metadata/logo.jpg",
  },
  {
    name: {
      en: "LibreTranslate",
    },
    tagline: {
      en: "Free and Open Source Machine Translation API. 100% self-hosted, offline capable and easy to setup.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/libretranslate/metadata/logo.jpg",
  },
  {
    name: {
      en: "Home assistant",
    },
    tagline: {
      en: "Awaken your home",
    },
    icon: "https://official-app-icons.nirvati.org/home-assistant/icon.svg",
  },
  {
    name: {
      en: "Wallos",
    },
    tagline: {
      en: "Open-Source Personal Subscription Tracker",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/wallos/metadata/logo.jpg",
  },
  {
    name: {
      en: "Komga",
    },
    tagline: {
      en: "A media server for your comics, mangas, BDs, magazines and eBooks.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/komga/metadata/logo.jpg",
  },
  {
    name: {
      en: "Beszel",
    },
    tagline: {
      en: "Lightweight server monitoring.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/beszel/metadata/logo.jpg",
  },
  {
    name: {
      en: "Minecraft Server",
    },
    tagline: {
      en: "Run a minecraft server",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/minecraft-server/metadata/logo.jpg",
  },
  {
    name: {
      en: "HedgeDoc",
    },
    tagline: {
      en: "A Collaborative Markdown and Note Taking App",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/hedgedoc/metadata/logo.jpg",
  },
  {
    name: {
      en: "Planning Poker",
    },
    tagline: {
      en: "Online planning poker for scrum master.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/planning-poker/metadata/logo.jpg",
  },
  {
    name: {
      en: "Emulatorjs",
    },
    tagline: {
      en: "Self-hosted Javascript emulation for various system.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/emulatorjs/metadata/logo.jpg",
  },
  {
    name: {
      en: "Booksonic",
    },
    tagline: {
      en: "The selfhosted audiobook server",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/booksonic/metadata/logo.jpg",
  },
  {
    name: {
      en: "Plausible",
    },
    tagline: {
      en: "Simple, open-source, lightweight (< 1 KB) and privacy-friendly web analytics alternative to Google Analytics.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/plausible/metadata/logo.jpg",
  },
  {
    name: {
      en: "Linkwarden",
    },
    tagline: {
      en: "A self-hosted, open-source collaborative bookmark manager",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/linkwarden/metadata/logo.jpg",
  },
  {
    name: {
      en: "Gramps Web",
    },
    tagline: {
      en: "Web app for collaborative genealogy.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/grampsweb/metadata/logo.jpg",
  },
  {
    name: {
      en: "Grist",
    },
    tagline: {
      en: "Grist is the evolution of spreadsheets.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/grist/metadata/logo.jpg",
  },
  {
    name: {
      en: "LibreSpeed",
    },
    tagline: {
      en: "No Flash, No Java, No Websocket, No Garbage",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/librespeed/metadata/logo.jpg",
  },
  {
    name: {
      en: "Tasks.md",
    },
    tagline: {
      en: "A self-hosted, file based task management board.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/tasks-md/metadata/logo.jpg",
  },
  {
    name: {
      en: "WatchYourLAN",
    },
    tagline: {
      en: "Lightweight network IP scanner",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/watchyourlan/metadata/logo.jpg",
  },
  {
    name: {
      en: "Radarr",
    },
    tagline: {
      en: "Movie collection manager for Usenet and BitTorrent users.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/radarr/metadata/logo.jpg",
  },
  {
    name: {
      en: "CTFd",
    },
    tagline: {
      en: "Cyber Security Training made simple.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/ctfd/metadata/logo.jpg",
  },
  {
    name: {
      en: "Kavita",
    },
    tagline: {
      en: "Kavita is a fast, feature rich, cross platform reading server",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/kavita/metadata/logo.jpg",
  },
  {
    name: {
      en: "Guacamole",
    },
    tagline: {
      en: "Clientless remote desktop gateway",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/guacamole/metadata/logo.jpg",
  },
  {
    name: {
      en: "Stalwart",
    },
    tagline: {
      en: "Your personal e mail server",
    },
    icon: "https://official-app-icons.nirvati.org/stalwart/icon.svg",
  },
  {
    name: {
      en: "Koillection",
    },
    tagline: {
      en: "Koillection allow you to manage any kind of collections.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/koillection/metadata/logo.jpg",
  },
  {
    name: {
      en: "MDNS Repeater",
    },
    tagline: {
      en: "Re-broadcast mDNS packets.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/mdns-repeater/metadata/logo.jpg",
  },
  {
    name: {
      en: "Excalidraw",
    },
    tagline: {
      en: "Online whiteboard collaboration made easy",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/excalidraw/metadata/logo.jpg",
  },
  {
    name: {
      en: "SiYuan",
    },
    tagline: {
      en: "SiYuan is a privacy-first personal knowledge management system.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/siyuan/metadata/logo.jpg",
  },
  {
    name: {
      en: "Dash.",
    },
    tagline: {
      en: "A simple, modern server dashboard, primarily used by smaller private server",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/dashdot/metadata/logo.jpg",
  },
  {
    name: {
      en: "Adguard Home Sync",
    },
    tagline: {
      en: "Synchronize AdGuard Home config to replicas",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/adguardhome-sync/metadata/logo.jpg",
  },
  {
    name: {
      en: "AFFiNE",
    },
    tagline: {
      en: "AFFiNE is a workspace with fully merged docs, whiteboards and databases.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/affine/metadata/logo.jpg",
  },
  {
    name: {
      en: "Haven",
    },
    tagline: {
      en: "Self-hostable private blogging.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/haven/metadata/logo.jpg",
  },
  {
    name: {
      en: "Ntfy",
    },
    tagline: {
      en: "Ntfy, a simple server for sending and receiving notification messages.",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/ntfy/metadata/logo.jpg",
  },
  {
    name: {
      en: "gandi-livedns",
    },
    tagline: {
      en: "Update your Gandi DNS zone records with your WAN IP",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/gandi-livedns/metadata/logo.jpg",
  },
  {
    name: {
      en: "Grav",
    },
    tagline: {
      en: "Grav is a Fast, Simple, and Flexible, file-based Web-platform. ",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/grav/metadata/logo.jpg",
  },
  {
    name: {
      en: "PairDrop",
    },
    tagline: {
      en: "Local file sharing in your browser. Inspired by Apple's AirDrop",
    },
    icon: "https://raw.githubusercontent.com/runtipi/runtipi-appstore/master/apps/pairdrop/metadata/logo.jpg",
  },
];

export default appStore;
