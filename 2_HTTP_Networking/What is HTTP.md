# HTTP – Zusammenfassung

HTTP (Hypertext Transfer Protocol) ist ein Protokoll zur Kommunikation zwischen
Client (z. B. Webbrowser) und Server. Es bildet die Grundlage für die Datenübertragung
im World Wide Web.

## Client-Server-Prinzip
- Der Client sendet eine Anfrage (Request)
- Der Server verarbeitet diese Anfrage und sendet eine Antwort (Response)

## HTTP-Request
Ein HTTP-Request besteht aus:
- einer Methode (z. B. GET, POST)
- einer URL bzw. Ressource
- optionalen Headern
- optional einem Body (z. B. bei POST)

Beispiel:
GET /index.html HTTP/1.1

## HTTP-Response
Eine HTTP-Response enthält:
- einen Status Code (z. B. 200, 404, 500)
- Header-Informationen
- einen Body mit den angeforderten Daten

## Wichtige HTTP-Methoden
- GET: Daten vom Server anfordern
- POST: Neue Daten an den Server senden
- PUT: Vorhandene Daten aktualisieren
- DELETE: Daten löschen

## HTTP-Status Codes
- 200 OK – Anfrage erfolgreich
- 404 Not Found – Ressource nicht gefunden
- 500 Internal Server Error – Serverfehler

HTTP ist zustandslos (stateless), das bedeutet, jede Anfrage wird unabhängig von
vorherigen Anfragen behandelt.
