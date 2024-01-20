module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "Black": "#000000",
          "White": "#FFFFFF"
        },
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "SixUnits": "96px",
        "FiveUnits": "80px",
        "HalfUnit": "8px",
        "ThreeUnits": "48px",
        "FourUnits": "64px",
        "TwoUnits": "32px",
        "Unit": "16px",
        "OneAndHalfUnits": "24px"
      },
      "borderRadius": {
        "Radius2": "2px",
        "Radius4": "4px",
        "Round": "50%",
        "Radius8": "8px"
      },
      "scale": {
        "MaxWidth": "1400px",
        "XLarge": "192px",
        "Small": "48px",
        "XXLarge": "288px",
        "Medium": "96px",
        "XSmall": "16px",
        "Large": "144px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./*.html"
  ]
}