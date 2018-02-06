class Player {
	constructor(x,y,doc,srcPath){
		this.x = x
		this.y = y
		this.doc = doc
		this.img = new Image()
		this.img.src = srcPath
	}

	moveLeft() {
		if (this.x > PLAYER_PARAMS.X.MIN){ 
			this.x -= PLAYER_PARAMS.X.DECREMENT  
		}
	}

	moveRight() {
		if (this.x < PLAYER_PARAMS.X.MAX){ 
			this.x += PLAYER_PARAMS.X.INCREMENT 
		}
	}

	moveUp() {
		if (this.y > PLAYER_PARAMS.Y.MIN){ 
			this.y -= PLAYER_PARAMS.Y.DECREMENT 
		}
	}

	moveDown() {
		if (this.y < PLAYER_PARAMS.Y.MAX){ 
			this.y += PLAYER_PARAMS.Y.INCREMENT 
		}
	}

	left() {
		return this.x
	}

	right() {
		return this.x + 30
	}

	top() {
		return this.y
	}

	bottom() {
		return this.y + 60
	}
//si choca
	isCrash(obstacle) {
		const isBottom = this.bottom() < obstacle.top()
		const isTop = this.top() > obstacle.bottom()
		const isRight = this.right() < obstacle.left()
		const isLeft = this.left() > obstacle.right()
		return !(isBottom || isTop || isLeft || isRight)
		}
    
	createKeydownFn(e) {
		return (e) => {
			const leftAudio = new Audio(PLAYER_PARAMS.AUDIO.LEFT.FILE_PATH)
			leftAudio.volume = PLAYER_PARAMS.AUDIO.LEFT.VOLUME

			const rightAudio = new Audio(PLAYER_PARAMS.AUDIO.RIGHT.FILE_PATH)
            rightAudio.volume = PLAYER_PARAMS.AUDIO.RIGHT.VOLUME
            
			switch (e.keyCode){
			case 37:
				this.moveLeft()
				leftAudio.play()
				break
			case 39:
				this.moveRight()
				rightAudio.play()
				break
			case 38:
				this.moveUp()
				break
			case 40:
				this.moveDown()
				break
			} 
		}
	}
}