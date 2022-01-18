/** How to get mobData
 * 1. Click on mob using https://maplestory.wiki/GMS/210.1.1/mob
 * 2. Copy mobID at the end of URL
 * 3. Hit API using mobID: https://maplestory.io/api/GMS/210.1.1/mob/{mobID}
 */

// Example API Structure using https://maplestory.io/api/GMS/210.1.1/mob/100000
/* SNAIL
  {
      "id": 100000,
      "linksTo": 100100,
      "meta": {
        "isBodyAttack": true,
        "level": 1,
        "maxHP": 15,
        "speed": -65,
        "physicalDamage": 2,
        "magicDamage": 1,
        "accuracy": 10,
        "exp": 3,
        "minimumPushDamage": 5,
        "summonType": 1,
        "revivesMonsterId": [],
        "linksToOtherMob": 100100,
        "physicalDefenseRate": 10,
        "magicDefenseRate": 10
      },
      "name": "Snail",
      "framebooks": {
        "die1": 9,
        "hit1": 1,
        "move": 5,
        "stand": 1
      },
      "foundAt": [
        20000,
        40000,
        50000,
        4000014,
        103050911
      ]
  }
*/

const mobsData = {
  'lith-harbor': {
    'normal': [
      {
          "id": 100000,
          "meta": {
            "maxHP": 15,
            "exp": 3,
          },
          "name": "Snail",
      },
      {
        "id": 100001,
        "meta": {
          "maxHP": 20,
          "exp": 4,
        },
        "name": "Blue Snail",
      },
      {
        "id": 100002,
        "meta": {
          "maxHP": 35,
          "exp": 6,
        },
        "name": "Red Snail",
      },
      {
        "id": 100003,
        "meta": {
          "maxHP": 20,
          "exp": 4,
        },
        "name": "Spore",
      },
    ],
    'bosses': [
      {
        "id": 2220000,
        "meta": {
          "maxHP": 1250,
          "exp": 170,
        },
        "name": "Mano",
      },
    ]
  },
  'henesys': {
    'normal': [
      {
          "id": 100004,
          "meta": {
            "maxHP": 65,
            "exp": 10,
          },
          "name": "Orange Mushroom",
      },
      {
        "id": 1110100,
        "meta": {
          "maxHP": 125,
          "exp": 17,
        },
        "name": "Green Mushroom",
      },
      {
        "id": 2110200,
        "meta": {
          "maxHP": 175,
          "exp": 21,
        },
        "name": "Horny Mushroom",
      },
      {
        "id": 2220100,
        "meta": {
          "maxHP": 225,
          "exp": 24,
        },
        "name": "Blue Mushroom",
      },
      {
        "id": 2220110,
        "meta": {
          "maxHP": 250,
          "exp": 26,
        },
        "name": "Crying Blue Mushroom",
      },
    ],
    'bosses': [
      {
        "id": 6130101,
        "meta": {
          "maxHP": 17500,
          "exp": 1650,
        },
        "name": "Mushmom",
      },
      {
        "id": 8220007,
        "meta": {
          "maxHP": 21750,
          "exp": 1950,
        },
        "name": "Blue Mushmom",
      }
    ]
  },
  'ellinia': {
    'normal': [
      {
          "id": 100006,
          "meta": {
            "maxHP": 80,
            "exp": 12,
          },
          "name": "Slime",
      },
      {
        "id": 1210103,
        "meta": {
          "maxHP": 125,
          "exp": 17,
        },
        "name": "Bubbling",
      },
      {
        "id": 2230100,
        "meta": {
          "maxHP": 580,
          "exp": 47,
        },
        "name": "Evil Eye",
      },
      {
        "id": 2230113,
        "meta": {
          "maxHP": 790,
          "exp": 56,
        },
        "name": "Surgeon Eye",
      },
      {
        "id": 3230100,
        "meta": {
          "maxHP": 650,
          "exp": 50,
        },
        "name": "Curse Eye",
      },
      {
        "id": 4230100,
        "meta": {
          "maxHP": 720,
          "exp": 53,
        },
        "name": "Cold Eye",
      },
      {
        "id": 3000001,
        "meta": {
          "maxHP": 200,
          "exp": 27,
        },
        "name": "Fairy",
      },
      {
        "id": 3000007,
        "meta": {
          "maxHP": 250,
          "exp": 31,
        },
        "name": "Royal Fairy",
      },
    ],
    'bosses': [
      {
        "id": 9410178,
        "meta": {
          "maxHP": 15750,
          "exp": 1225,
        },
        "name": "Grendel the Really Old",
      },
    ]
  },
  'kerning-city': {
    'normal': [
      {
          "id": 9001055,
          "meta": {
            "maxHP": 4400,
            "exp": 127,
          },
          "name": "Stirge",
      },
      {
        "id": 1120100,
        "meta": {
          "maxHP": 125,
          "exp": 17,
        },
        "name": "Octopus",
      },
      {
        "id": 3230101,
        "meta": {
          "maxHP": 4600,
          "exp": 131,
        },
        "name": "Jr. Wraith",
      },
      {
        "id": 4230102,
        "meta": {
          "maxHP": 4800,
          "exp": 134,
        },
        "name": "Wraith",
      },
      {
        "id": 5090000,
        "meta": {
          "maxHP": 4800,
          "exp": 134,
        },
        "name": "Shade",
      },
      {
        "id": 2130103,
        "meta": {
          "maxHP": 4800,
          "exp": 134,
        },
        "name": "Jr. Necki",
      },
      {
        "id": 3110100,
        "meta": {
          "maxHP": 5040,
          "exp": 139,
        },
        "name": "Ligator",
      },
      {
        "id": 5130103,
        "meta": {
          "maxHP": 5280,
          "exp": 143,
        },
        "name": "Croco",
      },
      {
        "id": 2230114,
        "meta": {
          "maxHP": 5760,
          "exp": 151,
        },
        "name": "Muddy Swamp Monster",
      }
    ],
    'bosses': [
      {
        "id": 9500311,
        "meta": {
          "maxHP": 31000,
          "exp": 810,
        },
        "name": "Dyle",
      },
    ]
  },
  'perion': {
    'normal': [
      {
          "id": 3230300,
          "meta": {
            "maxHP": 250,
            "exp": 26,
          },
          "name": "Jr. Boogie",
      },
      {
        "id": 100005,
        "meta": {
          "maxHP": 35,
          "exp": 6,
        },
        "name": "Stump",
      },
      {
        "id": 1110101,
        "meta": {
          "maxHP": 375,
          "exp": 35,
        },
        "name": "Dark Stump",
      },
      {
        "id": 1130100,
        "meta": {
          "maxHP": 405,
          "exp": 44,
        },
        "name": "Axe Stump",
      },
      {
        "id": 1140100,
        "meta": {
          "maxHP": 465,
          "exp": 48,
        },
        "name": "Ghost Stump",
      },
      {
        "id": 1140130,
        "meta": {
          "maxHP": 495,
          "exp": 50,
        },
        "name": "Smirking Ghost Stump",
      },
      {
        "id": 1130100,
        "meta": {
          "maxHP": 405,
          "exp": 44,
        },
        "name": "Axe Stump",
      },
      {
        "id": 2130100,
        "meta": {
          "maxHP": 435,
          "exp": 46,
        },
        "name": "Dark Axe Stump",
      },
      {
        "id": 2230102,
        "meta": {
          "maxHP": 8000,
          "exp": 187,
        },
        "name": "Wild Boar",
      },
      {
        "id": 2230112,
        "meta": {
          "maxHP": 8000,
          "exp": 187,
        },
        "name": "Terrified Wild Boar",
      },
      {
        "id": 4230103,
        "meta": {
          "maxHP": 8600,
          "exp": 197,
        },
        "name": "Iron Hog",
      },
      {
        "id": 4230400,
        "meta": {
          "maxHP": 9200,
          "exp": 206,
        },
        "name": "Iron Boar",
      },
      {
        "id": 3210100,
        "meta": {
          "maxHP": 9800,
          "exp": 215,
        },
        "name": "Fire Boar",
      },
    ],
    'bosses': [
      {
        "id": 3220000,
        "meta": {
          "maxHP": 7500,
          "exp": 880,
        },
        "name": "Stumpy",
      },
    ]
  },
  'sleepywood': {
    'normal': [
      {
          "id": 4130100,
          "meta": {
            "maxHP": 16000,
            "exp": 302,
          },
          "name": "Copper Drake",
      },
      {
        "id": 5130100,
        "meta": {
          "maxHP": 17000,
          "exp": 316,
        },
        "name": "Drake",
      },
      {
        "id": 6130100,
        "meta": {
          "maxHP": 18000,
          "exp": 329,
        },
        "name": "Red Drake",
      },
      {
        "id": 6230600,
        "meta": {
          "maxHP": 18000,
          "exp": 329,
        },
        "name": "Ice Drake",
      },
      {
        "id": 7130101,
        "meta": {
          "maxHP": 20000,
          "exp": 355,
        },
        "name": "Taurospear",
      },
      {
        "id": 6230601,
        "meta": {
          "maxHP": 19000,
          "exp": 342,
        },
        "name": "Dark Drake",
      },
      {
        "id": 100003,
        "meta": {
          "maxHP": 20,
          "exp": 4,
        },
        "name": "Wild Kargo",
      },
      {
        "id": 7130100,
        "meta": {
          "maxHP": 20000,
          "exp": 355,
        },
        "name": "Tauromacis",
      },
    ],
    'bosses': [
      {
        "id": 9500179,
        "meta": {
          "maxHP": 5810,
          "exp": 532,
        },
        "name": "Snack Bar",
      },
      {
        "id": 9300260,
        "meta": {
          "maxHP": 25000,
          "exp": 610,
        },
        "name": "Snack Bar",
      },
    ]
  },
}

