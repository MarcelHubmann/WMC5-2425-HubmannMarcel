# Node.js & Express – Beispiel 1: POST API Test mit Postman

Diese README beschreibt die Installation, den Start des Express-Servers sowie das Testen eines POST-Requests mit Postman.

---

## 📁 Projektordner

1. Wechsle im Terminal in den Ordner, in dem sich die Datei `server.js` befindet:
2. npm init -y
3. npm install express
4. node server.js

## ▶️ Server starten

1. node server-post.js
2. Server läuft auf Port 3000 (http://localhost:3000/api/event)

## 🧪 Testen mit Postman

1. Postman starten
2. Klick auf New → HTTP Request
3. Methode: POST
4. URL: http://localhost:3000/api/event
5. Reiter Body auswählen
6. raw auswählen und rechts daneben JSON auswählen
7. Folgenden Inhalt eingeben:
```json
{
"name": "Test Event"
}
```
8. Im Reiter Headers muss folgender Eintrag vorhanden sein: **Key** = Content-Type und **Value** = application/json
9. Klick auf Send