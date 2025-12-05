var APP_DATA = {
  "scenes": [
    {
      "id": "0-foyer",
      "name": "Foyer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9966543302708946,
          "pitch": 0.6408799842234991,
          "rotation": 0,
          "target": "1-living"
        },
        {
          "yaw": -1.5672381945684108,
          "pitch": 0.47205861926345527,
          "rotation": 0,
          "target": "2-dining"
        },
        {
          "yaw": -1.3060491863101156,
          "pitch": 0.3939144058573678,
          "rotation": 0,
          "target": "3-dining2"
        },
        {
          "yaw": -1.6715895058130599,
          "pitch": 0.10351552610384296,
          "rotation": 0,
          "target": "4-dry-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5963819201844949,
          "pitch": 0.4089100910314478,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": 2.0529136574303886,
          "pitch": 0.8416081620121005,
          "rotation": 0,
          "target": "2-dining"
        },
        {
          "yaw": 2.6157518669128166,
          "pitch": 0.546525924284861,
          "rotation": 0,
          "target": "3-dining2"
        },
        {
          "yaw": 1.8880701921825898,
          "pitch": 0.12855765258413676,
          "rotation": 0,
          "target": "4-dry-kitchen"
        },
        {
          "yaw": 2.559226211160941,
          "pitch": 0.08459242757834673,
          "rotation": 0,
          "target": "6-bedroom-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining",
      "name": "Dining",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7674786486375353,
          "pitch": 0.2702122352320089,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": -2.3641032262594646,
          "pitch": 0.5545126049836107,
          "rotation": 0,
          "target": "1-living"
        },
        {
          "yaw": 1.774258845609081,
          "pitch": 0.5651150565158325,
          "rotation": 0,
          "target": "3-dining2"
        },
        {
          "yaw": 2.6921576204733118,
          "pitch": 0.11985930973360581,
          "rotation": 0,
          "target": "8-lv-2-corridor"
        },
        {
          "yaw": 1.3450498307110763,
          "pitch": 0.10513089520926755,
          "rotation": 0,
          "target": "6-bedroom-5"
        },
        {
          "yaw": 0.3621543572649273,
          "pitch": 0.20851584208587326,
          "rotation": 0,
          "target": "4-dry-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dining2",
      "name": "Dining2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.319318003914315,
          "pitch": 0.37586207708252495,
          "rotation": 0,
          "target": "1-living"
        },
        {
          "yaw": -0.8991861704694948,
          "pitch": 0.5540318186101345,
          "rotation": 0,
          "target": "3-dining2"
        },
        {
          "yaw": -2.0222341988966495,
          "pitch": 0.1643951363723133,
          "rotation": 0,
          "target": "8-lv-2-corridor"
        },
        {
          "yaw": 1.8879557699063012,
          "pitch": 0.14118921350207003,
          "rotation": 0,
          "target": "6-bedroom-5"
        },
        {
          "yaw": 2.0594735474602324,
          "pitch": 0.12300746977796884,
          "rotation": 0,
          "target": "7-bathroom-5"
        },
        {
          "yaw": 0.739512667133484,
          "pitch": 0.23764944662794818,
          "rotation": 0,
          "target": "4-dry-kitchen"
        },
        {
          "yaw": 1.1229209956373474,
          "pitch": 0.14550144848579727,
          "rotation": 0,
          "target": "5-wet-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dry-kitchen",
      "name": "Dry Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7015080571162535,
          "pitch": 0.3605840327267895,
          "rotation": 0,
          "target": "5-wet-kitchen"
        },
        {
          "yaw": 2.829237576139392,
          "pitch": -0.022815150256182193,
          "rotation": 0,
          "target": "8-lv-2-corridor"
        },
        {
          "yaw": 3.0315121491349952,
          "pitch": 0.26231130694537796,
          "rotation": 0,
          "target": "3-dining2"
        },
        {
          "yaw": -2.975602144532706,
          "pitch": 0.12480052851893753,
          "rotation": 0,
          "target": "1-living"
        },
        {
          "yaw": 2.0487588469536364,
          "pitch": 0.1740818355197007,
          "rotation": 0,
          "target": "6-bedroom-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-wet-kitchen",
      "name": "Wet Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.884407907459689,
          "pitch": 0.31649877978215457,
          "rotation": 0,
          "target": "5-wet-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bedroom-5",
      "name": "Bedroom 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3298105327158236,
          "pitch": 0.07051465074942342,
          "rotation": 0,
          "target": "7-bathroom-5"
        },
        {
          "yaw": 0.6382889809818231,
          "pitch": 0.13965736551464225,
          "rotation": 0,
          "target": "3-dining2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bathroom-5",
      "name": "Bathroom 5",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1152354931163746,
          "pitch": 0.34792828062911596,
          "rotation": 0,
          "target": "6-bedroom-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-lv-2-corridor",
      "name": "LV 2 Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6798087074375552,
          "pitch": 0.15180053336132815,
          "rotation": 0,
          "target": "9-bedroom-3"
        },
        {
          "yaw": 1.4991809657167217,
          "pitch": 0.18284128731292704,
          "rotation": 0,
          "target": "11-bedroom-4"
        },
        {
          "yaw": 2.0318296996031844,
          "pitch": 0.3106719948263592,
          "rotation": 0,
          "target": "3-dining2"
        },
        {
          "yaw": -2.861298222098389,
          "pitch": 0.056715496812238086,
          "rotation": 0,
          "target": "13-level-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bedroom-3",
      "name": "Bedroom 3",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.4080802182228815,
          "pitch": 0.528565770741185,
          "rotation": 0,
          "target": "10-bathroom-3"
        },
        {
          "yaw": 2.610366999707523,
          "pitch": 0.17818513110884027,
          "rotation": 0,
          "target": "8-lv-2-corridor"
        },
        {
          "yaw": 2.79998719289513,
          "pitch": 0.24357319391615206,
          "rotation": 0,
          "target": "11-bedroom-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bathroom-3",
      "name": "Bathroom 3",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0320151346975734,
          "pitch": 0.4378144947671707,
          "rotation": 0,
          "target": "9-bedroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-bedroom-4",
      "name": "Bedroom 4",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8960545992061117,
          "pitch": 0.3617702017034752,
          "rotation": 0,
          "target": "12-bathroom-4"
        },
        {
          "yaw": -1.2784435796518459,
          "pitch": 0.38889671791840286,
          "rotation": 0,
          "target": "8-lv-2-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-bathroom-4",
      "name": "Bathroom 4",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.421339481889488,
          "pitch": 0.3027001637987681,
          "rotation": 0,
          "target": "11-bedroom-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-level-3",
      "name": "Level 3",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.21965834873915568,
          "pitch": 0.421404683932753,
          "rotation": 0,
          "target": "8-lv-2-corridor"
        },
        {
          "yaw": 0.15846435825873684,
          "pitch": 0.2724038314963213,
          "rotation": 0,
          "target": "14-level-3-corridor"
        },
        {
          "yaw": 0.07401740524909783,
          "pitch": 0.11762835436109498,
          "rotation": 0,
          "target": "15-family-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-level-3-corridor",
      "name": "Level 3 Corridor",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.1373779032969189,
          "pitch": 0.18907984628224028,
          "rotation": 0,
          "target": "13-level-3"
        },
        {
          "yaw": 0.6414078116420256,
          "pitch": 0.47724417167735567,
          "rotation": 0,
          "target": "8-lv-2-corridor"
        },
        {
          "yaw": -2.465333543501613,
          "pitch": 0.45012765256076825,
          "rotation": 0,
          "target": "15-family-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-family-area",
      "name": "Family Area",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1735871672162794,
          "pitch": 0.26748701956173093,
          "rotation": 0,
          "target": "14-level-3-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9880154126624774,
          "pitch": 0.24485125715197498,
          "rotation": 0,
          "target": "14-level-3-corridor"
        },
        {
          "yaw": 1.5541171327978045,
          "pitch": 0.25103681944656486,
          "rotation": 0,
          "target": "17-bathroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-bathroom-2",
      "name": "Bathroom 2",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
