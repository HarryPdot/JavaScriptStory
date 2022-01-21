const playerSkills = {
    'beginner': [
        {
            'name': 'Sharp Eyes',
            'image': './assets/images/skills/beginner-1.png',
            'isBuff': true,
            'skillEffect': function() {
                playerStats.critChance += 20
                setInterval(() => {
                    playerStats.critChance -= 20
                }, 3000)
            }
        },
        {
            'name': 'Weapon Booster',
            'image': './assets/images/skills/beginner-2.png',
            'isBuff': true,
            'skillEffect': function() {
                clearInterval(attacking)
                playerStats.attackSpeed = playerStats.attackSpeed * 2
                attacking = setInterval(attack, 300/playerStats.attackSpeed)
                setTimeout(() => {
                    clearInterval(attacking)
                    playerStats.attackSpeed = playerStats.attackSpeed / 2
                    attacking = setInterval(attack, 300/playerStats.attackSpeed)
                }, 3000)
            }
        },
        {
            'name': 'Holy Symbol',
            'image': './assets/images/skills/beginner-3.png',
            'isBuff': true,
            'skillEffect': function() {
                playerStats.expRate += 0.5
                setInterval(() => {
                    playerStats.expRate -= 0.5
                }, 3000)
            }
        }
    ],
    'mage': [
        {
            'name': 'Sharp Eyes',
            'image': './assets/images/skills/beginner-1.png',
            'isBuff': true,
            'skillEffect': function() {
                
            }
        },
        {
            'name': 'Weapon Booster',
            'image': './assets/images/skills/beginner-2.png',
            'isBuff': true,
            'skillEffect': function() {
                
            }
        },
        {
            'name': 'Holy Symbol',
            'image': './assets/images/skills/beginner-3.png',
            'isBuff': true,
            'skillEffect': function() {
                
            }
        }
    ],
}
 
