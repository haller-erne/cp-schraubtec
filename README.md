# SchraubTec OGS Setup

Aktuelle Informationen zu den Messen (Bilder, etc.) finden sich im Sharepoint: [https://hallererne.sharepoint.com/sites/SchraubTec/](https://hallererne.sharepoint.com/sites/SchraubTec/).

Dieses Verzeichnis enthält die SchraubTec Demo-Setups für 4 Stationen:

- Station 1: PTS/FMT
- Station 2: GWK
- Station 3: Jäger Handling
- Station 4: ART

Es gibt pro Station ein zugehöriges Unterverzeichnis (hauptsächlich für
config.lua, station.ini und die station.fds). Zusätzlich gibt es die folgenden,
gemeinsam verwendeten Verzeichnisse:

- `./shared`: In diesem Verzeichnis leigen gemeinsam verwendete LUA-scripte und die
  Dateien für die Webpages (Sidepanel).
- `./doc`: In diesem Verzeichnis ligt die IP-Adressliste sowie Fotos der Bauteile.
  Zudem liegt hier weitere Doku (`*.md`-Dateien)
- `./configuration`: Hier liegt eine Beispiel-Datenbank mit Arbeitsabläufen und
  Bildern

Da die Stationen immer wieder umgebaut werden, gibt es ggf. auch weitere Verzeichnisse
mit angepasster Konfiguration, aktuell sind dies:

- `./ST03-2xEIP+ART`: Jäger-Station mit zwei kabelgebundenen Schraubsystemen am
  Handling und nexo/GWK. Positionierung über IO-Link-Geber für beide Handlings
  (1 x CarboArm (3.5D mit Länge, Winkel, 2D-Neigung), 1 x HandyFlex (2D Länge/Winkel))
  und für GWK/Nexo über die AR-Tracking Kamera
- `./ST03-GWK`: Der umgebaute GWK-Wagen mit CarboArm und AR-Tracking
- `./ST03-HandyTrack`: Einfaches Setup, nur mit digital-IO (über Modbus) für die
  Positionserkennung (HandyTrack gibt InPos und Positionsnummer digital aus)

## Allgemeines und ID-Code-Struktur

Für alle Stationen gibt es dieselbe ID-Code-Struktur, bestehend aus den folgenden
Feldern:

- Modell: 4-stelligem Modellcode
- Seriennummer: 10-stellige Produkt-Seriennummer

Wird ein Barcodescanner verwendet, dann wird ein 14-stelliger Barcode bestehend aus
dem Modellcode gefolgt von der Seriennummer wie folgt erwartet:

    <Modell><Seriennummer>

Um einfach mit einer gemeinsamen Konfigurationsdatenbank (`config.fdc`) und
verschiedenen Stationen zu arbeiten, wird für den Modell-Code der folgende
Aufbau verwendet:

    <1-stellige Variante>-<2-stellige Stationsnummer>

Hierbei gilt:

- `<1-stellige Variante>`: Varianten-Code, z. B. `A` und `B`, ...
- `<2-stellige Stationsnummer>`: Stationsnummer, z. B. `01` für Station 1, `02`
   für Station 2, etc.

Gültige Modellnummern sind dann z. B. `A-01`, `A-02`, `B-01`, ...

Beispiel-QR-Codes wären z. B.:

| Beispiel 1| Beispiel 2|
| ---- | ---- |
| Model A-01 | Model A-01 |
| Serial 0000000001 | Serial 0000000002 |
| ![A-010000000001](https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=A-010000000001) | ![A-010000000002](https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=A-010000000002) |


## Weitere Infos

Im Unterverzeichnis `.\doc` sind weitere Informationen zum Projektsetup und zur
Nutzung von GIT mit OGS-Projekten enthalten:

- [.\doc\OGS and GIT.md](./doc/OGS%20and%20GIT.md): Infos zur Nutzung der
  OGS-Projekte mit GIT.
- [.\doc\OGS Project switching hints.md](./doc/OGS%20and%20GIT.md): Infos zum
  Projektsetup und zum schnellen Wechsel zwischen verschiedenen Projekten.

