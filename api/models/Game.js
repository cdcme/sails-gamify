/*---------------------
	:: Game 
	-> model
---------------------*/
module.exports = {
	
	attributes	: {

		// Per-game config
		name: {
			type: 'string',
			defaultValue: 'New Rad City: Clash of the Skatepunks'
		},
		description: {
			type: 'string',
			defaultValue: 'An isometric platformer set in a 1980s post-apocalyptic urban wasteland populated by skatepunk gangs riding neon deathboards.
				Use your rad skate skills and quick wits to battle punks, collect sweet upgrades, and gleam the cube right into history!'
		},
		achievements: {
			usesAchievements: {
				type: 'boolean',
				defaultValue: true
			},
			achievmentName: {
				type: 'string',
				defaultValue: 'achievement' // could be 'achievement', 'award', 'badge', 'medal', 'reward', etc.
			}
		},
		currency: {
			usesCurrency: {
				type: 'boolean',
				defaultValue: true
			},
			currencyName: {
				type: 'string',
				defaultValue: 'bucks' // could be 'bucks', 'chedda', dollars', 'gold', 'green', etc.
			}
		},
		item: {
			usesItem: {
				type: 'boolean',
				defaultValue: true
			},
			itemName: {
				type: 'string',
				defaultValue: 'item' // could be 'item', 'stuff', etc.
			}
		},
		leaderboard: {
			usesLeaderboard: {
				type: 'boolean',
				defaultValue: true
			},
			leaderboardName: {
				type: 'string',
				defaultValue: 'leaderboard'
			}
		},
		level: {
			usesLevel: {
				type: 'boolean',
				defaultValue: true
			},
			levelName: {
				type: 'string',
				defaultValue: 'board'
			}
		},
		player: {
			usesPlayer: {
				type: 'boolean',
				defaultValue: true
			},
			playerName: {
				type: 'string',
				defaultValue: 'player'
			}
		},
		point: {
			usesPoint: {
				type: 'boolean',
				defaultValue: true
			},
			pointName: {
				type: 'string',
				defaultValue: 'point'
			}
		}

		/*

			Other stuff could go in here, like an assets URL on S3 (or wherever), and any kind of game-wide configuration options

		*/

	}

};