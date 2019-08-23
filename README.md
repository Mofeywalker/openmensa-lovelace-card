# OpenMensa Lovelace Card
This custom card diplays information from the [OpenMensa Sensor](https://github.com/Mofeywalker/openmensa-hass-component).


|Preview 1|Preview 2|
|-|-|
|![Preview 1](images/preview1.png) | ![Preview 2](images/preview2.png)|

This card requires `type: js`.
```yaml
resources:
  - url: /local/custom-lovelace/openmensa-lovelace-card/openmensa-lovelace-card.js
    type: module
```

## Configuration
Add a lovelace card with type ```custom:openmensa-card``` to your ```ui-lovelace.yaml```.
```yaml
type: custom:openmensa-card
entity: sensor.openmensa_sensor
```