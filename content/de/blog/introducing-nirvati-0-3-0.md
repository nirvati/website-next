---
title: Nirvati 0.3.0
description: Apps neu starten, Logs einsehen, und mehr
date: 2025-08-23
authors:
    - name: Aaron Dewes
badge: Release
sitemap:
  loc: /blog/introducing-nirvati-0-3-0
  lastmod: 2025-08-23
  changefreq: monthly
  priority: 0.8
ogImage:
  component: NirvatiOgImage
  props:
    title: Nirvati 0.3.0
    description: Apps neu starten, Logs einsehen, und mehr
---

Heute kündige ich **Nirvati 0.3.0** an. Dieses Release behebt verschiedene Fehler aus Nirvati 0.2.0, bringt aber auch ein paar neue Funktionen mit sich.  

## Neue Funktionen  

### App-Status  

Du kannst jetzt direkt im Dashboard sehen, ob Apps laufen oder Probleme haben. Jede App bekommt dafür einen grünen Punkt, wenn sie läuft, oder einen orangefarbenen Punkt, wenn es Probleme gibt. In einem zukünftigen Update wollen wir mehr Details zum App-Status anbieten und das Ganze barrierefreier machen – etwa für Menschen mit Farbsehschwäche oder Screenreader-Nutzer.  

![Dashboard](/blog/0-3-0/en/dashboard.png)  

### Apps neu starten  

Nirvati 0.3.0 ermöglicht es, Apps direkt vom Dashboard aus neu zu starten. Du kannst also schnell eine App neu starten, falls sie hängt. Über das Neustart-Menü kannst du außerdem die Speicherschicht neu starten, falls eine App Probleme macht.  

![Apps neu starten](/blog/0-3-0/en/context-menu.png)  

### App-Logs ansehen  

Mit Nirvati 0.3.0 gibt es einen neuen Log-Viewer, mit dem du die Logs jeder App direkt im Dashboard einsehen kannst. Damit wird es einfacher, Probleme zu diagnostizieren und zu verstehen, was innerhalb deiner Apps passiert.  

![App-Logs ansehen](/blog/0-3-0/en/logs.png)  

### Markdown-Beschreibungen in Apps  

App-Entwickler können jetzt Beschreibungen für ihre Apps in Markdown verfassen, was es erleichtert, ansprechende Dokumentation zu schreiben.  

## Fehlerbehebungen  

Zusätzlich wurden verschiedene Fehler behoben. Ich gehe hier nicht auf alle Details ein, aber hier ist die vollständige Liste:  

- Problem behoben, bei dem DNS über TCP fälschlicherweise blockiert wurde, was in vielen Apps zu Netzwerkproblemen führte  
- Sicherheitsproblem behoben, bei dem jeder Benutzer System-Apps anhalten konnte  
- Problem behoben, bei dem Repository-Metadaten während App-Downloads nicht aktualisiert wurden, was zu leeren Repository-Namen oder -Beschreibungen führte  
- Problem behoben, bei dem App-Downloads aus Git-Repositories fälschlicherweise von der Distributionsversion statt der n5i-Version abhingen  
- Problem behoben, bei dem Custom-Resource-Plugins nicht gefunden wurden, weil nach einem ungültigen Namen gesucht wurde  
- Problem behoben, bei dem Berechtigungen, die auf virtuellen Apps beruhen, nicht aufgelöst werden konnten  
- Problem behoben, bei dem das Preloading von App-Daten nach dem falschen Verzeichnis suchte  
- Fehlermeldungen verbessert, wenn eine `app.yml` nicht geladen werden konnte  

## Wie geht’s weiter  

Ich arbeite derzeit an **Nirvati 0.4.0**, das ein paar spannende neue Funktionen bringen wird:  

- **App-Bundles:** Entwickler können damit Bundles erstellen, die mehrere Apps zusammenfassen, um zusammengehörige Apps einfacher verwalten und deployen zu können.  
- **Mehrere Instanzen von Apps:** Damit kannst du bestimmte Apps mehrfach installieren, jeweils mit eigener Konfiguration und eigenen Daten.  

Außerdem arbeite ich am **„My Nirvati“**-Service sowie an einer neuen Setup-Erfahrung, um es Nutzer:innen leichter zu machen, mit Nirvati loszulegen.  
