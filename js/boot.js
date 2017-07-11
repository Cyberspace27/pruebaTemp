var Game = [];

Game.boot = function(game){

};

Game.boot.prototype = {
	init:function(){
		this.input.maxPointer=1;
		this.stage.disableVisibilityChange = true;


	},
	preload:function(){
		this.load.image('preloaderBar', 'assets/espacio1.png');

	},
	create:function(){
		this.state.start('preloader');
	}
}