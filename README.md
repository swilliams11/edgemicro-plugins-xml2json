# edgemicro-plugins-xml2json

This repository contains the xml2json code from our [blog site.](https://apigee.com/about/blog/developer/tutorial-writing-custom-transform-plugin-apigee-edge-microgateway)

1. In order to install the plugin and make sure that you add the plugin to the plugin sequence as shown below.
```
plugins:
   dir: ../plugins
   sequence:
     - edgemicro-plugins-xml2json
     - accumulate-response
```

2. `cd edgemicro-plugins-xml2json`

3. Install the node modules
`npm install`

4. Copy the `edgemicro-plugins-xml2json` plugin folder to the `/usr/local/lib/node_modules/edgemicro/plugins` directory.

```
sudo mkdir /usr/local/lib/node_modules/edgemicro/plugins/edgemicro-plugins-xml2json
cp -r edgemicro-plugins-xml2json /usr/local/lib/node_modules/edgemicro/plugins/edgemicro-plugins-xml2json
```

### Send Request to Edge Microgateway with API Key

#### TLS enabled - Self-signed cert
```
curl -H "x-api-key: [apikey]" https://localhost:8000/edgemicro_weather/forecastrss -vi --insecure
```

#### HTTP request
```
curl -H "x-api-key: [apikey]" http://localhost:8000/edgemicro_weather/forecastrss -vi
```


### Send request to Edge Microgateway with access token
```
curl http://localhost:8000/edgemicro_weather/forecastrss -H "Authorization: Bearer token" -vi
```
