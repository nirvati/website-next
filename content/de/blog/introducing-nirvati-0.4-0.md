---
title: Nirvati 0.4.0
description: Apps klonen, Berechtigungs-Benachrichtigungen und mehr
date: 2025-09-04
authors:
    - name: Aaron Dewes
badge: Release
sitemap:
  loc: /blog/introducing-nirvati-0-4-0
  lastmod: 2025-09-04
  changefreq: monthly
  priority: 0.8
ogImage:
  component: NirvatiOgImage
  props:
    title: Nirvati 0.4.0
    description: Apps klonen, Berechtigungs-Benachrichtigungen und mehr
---

Heute kündige ich **Nirvati 0.4.0** an. Dieses Release bringt einige neue Funktionen und behebt mehrere Probleme aus Nirvati 0.3.0.

## Neue Funktionen

### Apps klonen

![Apps klonen](/blog/0-4-0/en/clone.png)

Bestimmte Apps, wie zum Beispiel WordPress, können nun geklont werden. So kannst du mehrere Instanzen derselben App mit unterschiedlichen Konfigurationen erstellen. Das ist z. B. praktisch, wenn du mehrere Websites betreiben möchtest.

### Berechtigungs-Benachrichtigungen bei Updates

![Berechtigungs-Benachrichtigungen bei Updates](/blog/0-4-0/en/update-perms.png)

Manchmal benötigt eine aktualisierte Version einer App neue Berechtigungen. Ab sofort wirst du beim Aktualisieren einer App darauf hingewiesen und kannst die neuen Berechtigungen prüfen, bevor du das Update fortsetzt.

## Fehlerbehebungen

Außerdem wurden verschiedene Bugs behoben. Ich gehe nicht auf alle im Detail ein, aber hier ist die vollständige Liste:

- Problem behoben, bei dem einige Apps nicht aktualisiert werden konnten  
- Problem behoben, das manchmal dazu führte, dass das Dashboard nicht richtig geladen wurde, wenn der Status einer App nicht abrufbar war  
- Verschiedene Fehlermeldungen verbessert  
- Citadel: Beim Abrufen von Blöcken über die API wird jetzt auch der letzte Block mitgeliefert, der versehentlich übersprungen wurde  
- Citadel: Kein Fehler mehr, wenn Blöcke keine BIP34-Informationen enthalten  

## Wie geht es weiter?

Ich arbeite derzeit an Nirvati 0.5.0, das die Einrichtungserfahrung verbessern wird.

- **Verbessertes Onboarding:** Wir überarbeiten den Einrichtungsprozess, damit neue Nutzer:innen leichter mit Nirvati starten können.  
- **Verbesserter App Store:** Wir möchten ein neues Erlebnis für den App Store bieten, mit empfohlenen Apps und einer einfachen Möglichkeit, gängige Apps gemeinsam zu installieren.  

Generell strebe ich jetzt kleinere, häufigere Releases an, um dir neue Funktionen und Fehlerbehebungen schneller bereitzustellen.  

Außerdem arbeite ich weiterhin am kommenden „My Nirvati“-Dienst.
