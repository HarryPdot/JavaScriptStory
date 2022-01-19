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
            "level": 1,
            "maxHP": 15,
            "exp": 3,
          },
          "name": "Snail",
      },
      {
        "id": 100001,
        "meta": {
          "level": 2,
          "maxHP": 20,
          "exp": 4,
        },
        "name": "Blue Snail",
      },
      {
        "id": 100002,
        "meta": {
          "level": 4,
          "maxHP": 35,
          "exp": 6,
        },
        "name": "Red Snail",
      },
      {
        "id": 100003,
        "meta": {
          "level": 2,
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
          // 2.5x lvl | 35.71x hp | 28.33x xp
          "level": 10,
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
            "level": 6,
            "maxHP": 65,
            "exp": 10,
          },
          "name": "Orange Mushroom",
      },
      {
        "id": 1110100,
        "meta": {
          "level": 10,
          "maxHP": 125,
          "exp": 17,
        },
        "name": "Green Mushroom",
      },
      {
        "id": 2110200,
        "meta": {
          "level": 12,
          "maxHP": 175,
          "exp": 21,
        },
        "name": "Horny Mushroom",
      },
      {
        "id": 2220100,
        "meta": {
          "level": 14,
          "maxHP": 225,
          "exp": 24,
        },
        "name": "Blue Mushroom",
      },
      {
        "id": 2220110,
        "meta": {
          "level": 15,
          "maxHP": 250,
          "exp": 26,
        },
        "name": "Crying Blue Mushroom",
      },
    ],
    'bosses': [
      {
        "id": 9400610,
        "meta": {
          // Custom following Mano calc
          // 2.5x lvl | 35.71x hp | 28.33x xp (of highest mob)
          "level": 38,
          "maxHP": 8930,
          "exp": 735,
        },
        "name": "Amdusias",
      }
    ]
  },
  'ellinia': {
    'normal': [
      {
          "id": 100006,
          "meta": {
            "level": 7,
            "maxHP": 80,
            "exp": 12,
          },
          "name": "Slime",
      },
      {
        "id": 1210103,
        "meta": {
          "level": 10,
          "maxHP": 125,
          "exp": 17,
        },
        "name": "Bubbling",
      },
      {
        "id": 3000001,
        "meta": {
          "level": 13,
          "maxHP": 200,
          "exp": 27,
        },
        "name": "Fairy",
      },
      {
        "id": 3000007,
        "meta": {
          "level": 15,
          "maxHP": 250,
          "exp": 31,
        },
        "name": "Royal Fairy",
      },
      {
        "id": 2230100,
        "meta": {
          "level": 26,
          "maxHP": 580,
          "exp": 47,
        },
        "name": "Evil Eye",
      },
      {
        "id": 3230100,
        "meta": {
          "level": 27,
          "maxHP": 650,
          "exp": 50,
        },
        "name": "Curse Eye",
      },
      {
        "id": 4230100,
        "meta": {
          "level": 28,
          "maxHP": 720,
          "exp": 53,
        },
        "name": "Cold Eye",
      },
      {
        "id": 2230113,
        "meta": {
          "level": 29,
          "maxHP": 790,
          "exp": 56,
        },
        "name": "Surgeon Eye",
      },
    ],
    'bosses': [
      {
        "id": 9400612,
        "meta": {
          // Custom following Mano calc
          // 2.5x lvl | 35.71x hp | 28.33x xp (of highest mob)
          "level": 73,
          "maxHP": 28210,
          "exp": 1585,
        },
        "name": "Marbas",
      },
    ]
  },
  'kerning-city': {
    'normal': [
      {
        "id": 1120100,
        "meta": {
          "level": 10,
          "maxHP": 125,
          "exp": 17,
        },
        "name": "Octopus",
      },
      {
        "id": 9001055,
        "meta": {
          "level": 43,
          "maxHP": 4400,
          "exp": 127,
        },
        "name": "Stirge",
      },
      {
        "id": 3230101,
        "meta": {
          "level": 44,
          "maxHP": 4600,
          "exp": 131,
        },
        "name": "Jr. Wraith",
      },
      {
        "id": 4230102,
        "meta": {
          "level": 45,
          "maxHP": 4800,
          "exp": 134,
        },
        "name": "Wraith",
      },
      {
        "id": 5090000,
        "meta": {
          "level": 45,
          "maxHP": 4800,
          "exp": 134,
        },
        "name": "Shade",
      },
      {
        "id": 2130103,
        "meta": {
          "level": 45,
          "maxHP": 4800,
          "exp": 134,
        },
        "name": "Jr. Necki",
      },
      {
        "id": 3110100,
        "meta": {
          "level": 46,
          "maxHP": 5040,
          "exp": 139,
        },
        "name": "Ligator",
      },
      {
        "id": 5130103,
        "meta": {
          "level": 47,
          "maxHP": 5280,
          "exp": 143,
        },
        "name": "Croco",
      },
      {
        "id": 2230114,
        "meta": {
          "level": 49,
          "maxHP": 5760,
          "exp": 151,
        },
        "name": "Muddy Swamp Monster",
      },
      {
        "id": 2230115,
        "meta": {
          "level": 50,
          "maxHP": 6000,
          "exp": 156,
        },
        "name": "Muddy Sprout Monster",
      }
    ],
    'bosses': [
      {
        "id": 9400613,
        "meta": {
          // Custom following Mano calc
          // 2.5x lvl | 35.71x hp | 28.33x xp (of highest mob)
          "level": 125,
          "maxHP": 214260,
          "exp": 4420,
        },
        "name": "Valefor",
      },
    ]
  },
  'perion': {
    'normal': [
      {
          "id": 3230300,
          "meta": {
            "level": 15,
            "maxHP": 250,
            "exp": 26,
          },
          "name": "Jr. Boogie",
      },
      {
        "id": 100005,
        "meta": {
          "level": 20,
          "maxHP": 35,
          "exp": 6,
        },
        "name": "Stump",
      },
      {
        "id": 1110101,
        "meta": {
          "level": 20,
          "maxHP": 375,
          "exp": 35,
        },
        "name": "Dark Stump",
      },
      {
        "id": 1130100,
        "meta": {
          "level": 21,
          "maxHP": 405,
          "exp": 44,
        },
        "name": "Axe Stump",
      },
      {
        "id": 2130100,
        "meta": {
          "level": 22,
          "maxHP": 435,
          "exp": 46,
        },
        "name": "Dark Axe Stump",
      },
      {
        "id": 1140100,
        "meta": {
          "level": 23,
          "maxHP": 465,
          "exp": 48,
        },
        "name": "Ghost Stump",
      },
      {
        "id": 1140130,
        "meta": {
          "level": 24,
          "maxHP": 495,
          "exp": 50,
        },
        "name": "Smirking Ghost Stump",
      },
      {
        "id": 2230102,
        "meta": {
          "level": 55,
          "maxHP": 8000,
          "exp": 187,
        },
        "name": "Wild Boar",
      },
      {
        "id": 2230112,
        "meta": {
          "level": 55,
          "maxHP": 8000,
          "exp": 187,
        },
        "name": "Terrified Wild Boar",
      },
      {
        "id": 4230103,
        "meta": {
          "level": 56,
          "maxHP": 8600,
          "exp": 197,
        },
        "name": "Iron Hog",
      },
      {
        "id": 4230400,
        "meta": {
          "level": 57,
          "maxHP": 9200,
          "exp": 206,
        },
        "name": "Iron Boar",
      },
      {
        "id": 3210100,
        "meta": {
          "level": 58,
          "maxHP": 9800,
          "exp": 215,
        },
        "name": "Fire Boar",
      },
    ],
    'bosses': [
      {
        "id": 9400609,
        "meta": {
          // Custom following Mano calc
          // 2.5x lvl | 35.71x hp | 28.33x xp (of highest mob)
          "level": 145,
          "maxHP": 350000,
          "exp": 24930,
        },
        "name": "Andras",
      },
    ]
  },
  'sleepywood': {
    'normal': [
      {
          "id": 4130100,
          "meta": {
            "level": 66,
            "maxHP": 16000,
            "exp": 302,
          },
          "name": "Copper Drake",
      },
      {
        "id": 5130100,
        "meta": {
          "level": 67,
          "maxHP": 17000,
          "exp": 316,
        },
        "name": "Drake",
      },
      {
        "id": 6130100,
        "meta": {
          "level": 68,
          "maxHP": 18000,
          "exp": 329,
        },
        "name": "Red Drake",
      },
      {
        "id": 6230600,
        "meta": {
          "level": 68,
          "maxHP": 18000,
          "exp": 329,
        },
        "name": "Ice Drake",
      },
      {
        "id": 6230601,
        "meta": {
          "level": 69,
          "maxHP": 19000,
          "exp": 342,
        },
        "name": "Dark Drake",
      },
      {
        "id": 100003,
        "meta": {
          "level": 69,
          "maxHP": 20,
          "exp": 4,
        },
        "name": "Wild Kargo",
      },
      {
        "id": 7130100,
        "meta": {
          "level": 70,
          "maxHP": 20000,
          "exp": 355,
        },
        "name": "Tauromacis",
      },
      {
        "id": 7130101,
        "meta": {
          "level": 70,
          "maxHP": 20000,
          "exp": 355,
        },
        "name": "Taurospear",
      },
    ],
    'bosses': [
      {
        "id": 2600231,
        "meta": {
          // Custom following Mano calc
          // 2.5x lvl | 35.71x hp | 28.33x xp (of highest mob)
          "level": 175,
          "maxHP": 714200,
          "exp": 10057,
        },
        "name": "Jr. Balrog",
      },
    ]
  },
}

