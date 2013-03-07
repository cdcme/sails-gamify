/*---------------------
	:: Player 
	-> model
---------------------*/
module.exports = {
	
	attributes: {
		name: 'string',
		email: 'string',
		screenname: 'string',
		stats: {
			highscore: 'integer',
			highestLevel: 'integer',
			currentScore: 'integer',
			currentLevel: 'integer',
			currency: 'integer',
			items: [],
			achievements: []
		}
	}

};