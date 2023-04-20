module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start",
      numberOfRuns: 1,
      // Agregar todas las urls a las que se le aplicarán las pruebas
      url: [
        "https://portal.myallianz.com.mx/web/guest/myallianz",
        "http://azteslnxapexapp04.myallianz.com.mx:8080/ords/f?p=100:2"
      ],
      settings: {
        throttling: {
          requestLatencyMs: 0,
          downloadThroughputKbps: 0,
          uploadThroughputKbps: 0,
          cpuSlowdownMultiplier: 1,
          rttMs: 0,
          throughputKbps: 0,
        }, 
        
        extraHeaders: {
          Cookie: "COOKIE_SUPPORT=true; GUEST_LANGUAGE_ID=es_ES; _ga=GA1.3.1611921325.1679437976; visid_incap_1041061=wSn32eQ+S3u5bGPwPLJ+ISDxNmQAAAAAQUIPAAAAAAC0uWwL++Yxm02ubyDxrpuu; visid_incap_1224753=9n0MczqmRdarCBhFd5xVLV52OWQAAAAAQUIPAAAAAAC5P03vo2LYwPTfeQSuv7uM; _gid=GA1.3.363204119.1681751020; JSESSIONID=6BA4B388398018218010D593A40F02BD; nlbi_1041061=a2NDBUkO+FFtg9bW42FBRwAAAAAunSZRPLCM5IcRX1bFw3kT; incap_ses_978_1041061=8JsDMtIEMWyJbkllwY6SDY99QGQAAAAAmGuqd1+sjx4HQqgAZvUYBw==; _gat=1; LtpaToken=OWRh3wKf6R5Zygyk5pVh8V7p8CCOjNMoeLflgY2Z++7ad4FEkWLF+M2FRyPXgwPfM8cVHCaGLbIUU1FnlA3MJxIngdqehksKrMTY/1Hor5O35vRTIwtYBxlVjt+XTIqKWN/aX/Ot6wjfzc4b/PGL7OgjgCzur+KrGrn1jPKcD3jTWUQKJSgh/jHK7dc4JvOj7T8M+241g95YxtWnGBkRwtL1tk/LQA4rxpJs1wZOa9ApntAe2f4iPN3p+MjyTixh9HrnOCj9H9TdppoLk8ZV/xQv0FPuiKpC5lQfhWMsfc6H1FS0JUyK+g==; agente=OSCARG_PRUEBAS; claveAgente=00009009; LFR_SESSION_STATE_20105=1681948068397"
        },

        formFactor: 'desktop',      
        throttling: {
          rttMs: 40,
          throughputKbps: 10240,
          cpuSlowdownMultiplier: 1,
          requestLatencyMs: 0,
          downloadThroughputKbps: 0,
          uploadThroughputKbps: 0
        },
        screenEmulation: {
          mobile: false,
          width: 1350,
          height: 940,
          deviceScaleFactor: 1,
          disabled: false
        },
      }
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};