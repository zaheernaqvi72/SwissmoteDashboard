/** @type {import('tailwindcss').Config} */
export default {
  "content": [
      "./src/**/*.{js,jsx,ts,tsx}"
  ],
  "theme": {
      "extend": {
          "colors": {
              "ghostwhite": {
                  "100": "#fafbff",
                  "200": "#f9fbff"
              },
              "whitesmoke": {
                  "100": "#f5f5f5",
                  "200": "#f0f0f0",
                  "300": "#eee"
              },
              "darkslategray": {
                  "100": "#404b52",
                  "200": "#3d3c42",
                  "300": "#333",
                  "400": "#292d32"
              },
              "darkgray": "#acacac",
              "crimson": "#d0004b",
              "forestgreen": "#00ac4f",
              "black": "#000",
              "gray": {
                  "100": "#838383",
                  "200": "#7e7e7e",
                  "300": "#757575"
              },
              "mediumblue": "#4925e9",
              "white": "#fff",
              "lightslategray": "#9197b3",
              "blueviolet": "#5932ea",
              "silver": "#b5b7c0",
              "pink": "#ffc5c5",
              "red": "#df0404",
              "mediumaquamarine": {
                  "100": "#16c098",
                  "200": "rgba(22, 192, 152, 0.38)"
              },
              "mediumseagreen": "#00b087",
              "seagreen": "#008767"
          },
          "spacing": {},
          "fontFamily": {
              "poppins": "Poppins"
          },
          "borderRadius": {
              "11xl": "30px",
              "xl": "20px",
              "3xs": "10px"
          }
      },
      "fontSize": {
          "13xl": "32px",
          "sm": "14px",
          "xs": "12px",
          "inherit": "inherit"
      }
  },
  "corePlugins": {
      "preflight": false
  }
}

