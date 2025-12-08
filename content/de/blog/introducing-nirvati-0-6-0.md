---
title: Nirvati 0.6.0
description: Metriken, Leistungsverbesserungen und mehr
date: 2025-10-21
authors:
    - name: Aaron Dewes
badge: Release
sitemap:
  loc: /blog/introducing-nirvati-0-6-0
  lastmod: 2025-10-21
  changefreq: monthly
  priority: 0.8
ogImage:
  component: NirvatiOgImage
  props:
    title: Nirvati 0.6.0
    description: Metriken, Leistungsverbesserungen und mehr
---

Heute kündige ich **Nirvati 0.6.0** an. Dieses Release führt eine neue Metrik-Seite ein, reduziert den RAM-Verbrauch um etwa 200 MB und behebt einige Probleme, die wir in Nirvati 0.4.0 hatten.

Dir ist vielleicht aufgefallen, dass wir Nirvati 0.5.0 übersprungen haben. Das liegt einfach daran, dass Version 0.5.0 einige Probleme hatte, weshalb ich mich entschieden habe, den Release direkt auf 0.6.0 zu verschieben.

## Neue Funktionen

### Metriken

![Metriken](/blog/0-6-0/metrics.png)

Nirvati 0.6.0 führt eine neue Metrik-Seite ein, die über die Seitenleiste des Dashboards erreichbar ist. Diese Seite bietet Einblicke in die Ressourcennutzung der Apps auf deiner Nirvati-Instanz.

### Besseres Setup-Erlebnis

Das Setup-Erlebnis wurde in mehreren Punkten verbessert:

- Der Einrichtungsprozess ist jetzt schneller.
- Du kannst den Setup-Prozess nun fortsetzen, falls er unterbrochen wurde.
- Du siehst mehr Details darüber, was während der Einrichtung passiert.

Wir arbeiten bereits an weiteren Verbesserungen, um das Setup in Zukunft noch einfacher und schneller zu machen.

## Leistungsverbesserungen

Nirvati 0.6.0 enthält mehrere Optimierungen in Bezug auf die Performance. Besonders erwähnenswert ist, dass der RAM-Verbrauch um etwa 200 MB reduziert wurde. Wie du im Metrik-Screenshot oben sehen kannst, liegt der Basisverbrauch noch bei rund 1,8 GB – daran werden wir in zukünftigen Versionen weiterarbeiten.

## Weitere Änderungen

- Nirvati verwendet jetzt ein einzelnes ACME-Konto pro Benutzer statt pro Domain.  
- Das `tlsserver`-Profil wird nun für Let's Encrypt genutzt.  
- Interne Vorbereitungen für die Unterstützung von Drittanbieter-DNS-Providern.  

## Fehlerbehebungen

- Vermeidung doppelter Berechtigungen an verschiedenen Stellen.  
- Ingress-Plugins haben jetzt eigene Berechtigungen.  

## Wie geht es weiter

Ich arbeite derzeit an Nirvati 0.6.2, das Unterstützung für Drittanbieter-DNS-Provider hinzufügen wird. Hauptsächlich deshalb, weil ein Großteil der Nirvati-Infrastruktur auf Bunny.net gehostet ist – was Nirvati aktuell noch nicht unterstützt.  
Außerdem sind weitere spannende Features für Nirvati 0.7.0 geplant, über die ich zu einem späteren Zeitpunkt mehr berichten werde.
