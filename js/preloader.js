Game.preloader = function(game){
	this.preloadBar = null;
};

Game.preloader.prototype ={
	preload:function(){
		this.preloadBar = this.add.sprite(this.world.centerX,
			this.world.centerY,'preloaderBar' );
		this.preloadBar.anchor.setTo(0.5,0.5);
		this.time.advancedTiming = true;
		this.load.setPreloadSprite(this.preloadBar);
		///load all assets
		//se cargan los sprites
			
			//sprite del objeto game, el que contiene los limites del juego
			this.game.load.image('espacio','assets/espacio1.png');

			//sprite del objeto plataforma del juego
			this.game.load.image('barra','assets/plataforma.png');

			//sprite del objeto boton del juego
			this.game.load.spritesheet('buttons','assets/buttons-green.png',265, 75);

		
			//sprites group, grupo de burbujas buenas
			//this.game.load.image('burbujaBuena','assets/burbuja1.png');
			this.game.load.image('AbejaBur','assets/nivelA/AbejaBur.png');
			this.game.load.image('ArcoirisBur','assets/nivelA/ArcoirisBur.png');
			this.game.load.image('ArdillaBur','assets/nivelA/ArdillaBur.png');
						

			//sprites group, grupo de burbujas malas
			//this.game.load.image('burbujaMala','assets/burbuja3.png');
			this.game.load.image('ElefanteBur','assets/nivelA/ElefanteBur.png');
			this.game.load.image('EstrellaBur','assets/nivelA/EstrellaBur.png');
			this.game.load.image('PerroBur','assets/nivelA/PerroBur.png');
			
			

			//sprite jugador
			this.game.load.spritesheet('jugador','assets/jugador.png', 32, 48);
			//sprite de audios
			this.game.load.audio('fondo', 'assets/audio/shampoo.mp3');
			this.game.load.audio('boom', 'assets/audio/numkey.wav');


	},

	create:function(){
		this.state.start('levelA');
	}
};