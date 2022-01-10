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
  'ellinia': {
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
  'kerning-city': {
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
  'perion': {
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
  'sleepywood': {
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
}
