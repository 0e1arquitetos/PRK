var APP_DATA = {
  "scenes": [
    {
      "id": "0-sala",
      "name": "SALA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.550066494377969,
        "pitch": -0.03401385689540071,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 1.1960885829474996,
          "pitch": 0.10325009430797394,
          "rotation": 0,
          "target": "1-cozinha"
        },
        {
          "yaw": 2.4333443648987583,
          "pitch": 0.04653901876677935,
          "rotation": 0,
          "target": "3-lavabo"
        },
        {
          "yaw": 0.346972969398891,
          "pitch": 0.06423732364108758,
          "rotation": 0,
          "target": "2-corredor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cozinha",
      "name": "COZINHA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.022342756332474067,
        "pitch": 0.02885729902149059,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -1.1155492260785493,
          "pitch": 0.1242014432138916,
          "rotation": 0,
          "target": "0-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-corredor",
      "name": "CORREDOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9417746698806235,
          "pitch": 0.28950352173297134,
          "rotation": 0,
          "target": "0-sala"
        },
        {
          "yaw": 2.454335331127603,
          "pitch": 0.26560327510854975,
          "rotation": 0,
          "target": "6-office"
        },
        {
          "yaw": 0.1844094559987859,
          "pitch": 0.19609366025390074,
          "rotation": 0,
          "target": "7-quarto-casal"
        },
        {
          "yaw": -0.5642973493273011,
          "pitch": 0.34341953884170806,
          "rotation": 0,
          "target": "8-quarto-sofia"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-lavabo",
      "name": "LAVABO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8779636626176952,
          "pitch": 0.5046107399247717,
          "rotation": 0,
          "target": "0-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-banho-sofia",
      "name": "BANHO SOFIA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9988294043574015,
          "pitch": 0.5205303103706935,
          "rotation": 0,
          "target": "8-quarto-sofia"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-banho-casal",
      "name": "BANHO CASAL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9013728682106557,
          "pitch": 0.5781937087658306,
          "rotation": 0,
          "target": "7-quarto-casal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-office",
      "name": "OFFICE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8978703939569428,
          "pitch": 0.28549976257911247,
          "rotation": 0,
          "target": "2-corredor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-quarto-casal",
      "name": "QUARTO CASAL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2466804922599097,
          "pitch": 0.11721793393431135,
          "rotation": 0,
          "target": "5-banho-casal"
        },
        {
          "yaw": 3.059567173693843,
          "pitch": 0.09029928006374988,
          "rotation": 0,
          "target": "2-corredor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-quarto-sofia",
      "name": "QUARTO SOFIA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.23537730265999457,
          "pitch": 0.2535453595095696,
          "rotation": 0,
          "target": "4-banho-sofia"
        },
        {
          "yaw": 1.018245395781335,
          "pitch": 0.22232826976545894,
          "rotation": 0,
          "target": "2-corredor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "PRK - V05",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
