Game.levelA = function(game){};
//variables que contiene el grupo de burbujas
		   var burbujasBuenas,burbujasMalas, plataformas, jugador, controles, textoScore;
		   var score = 0;
		   var btnPlay;
		   var inicioGame = false;

Game.levelA.prototype = {
	create:function(){

					



			this.game.physics.startSystem(Phaser.Physics.ARCADE);
			

			//se agrega el fondo
			this.game.add.sprite(0,0, 'espacio');

			//se agrega el btnPlay
			btnPlay = this.game.add.button(this.game.width/2, this.game.height/2,'buttons',this.clickMe,this,6,7,0);
			btnPlay.anchor.setTo(0.5, 0.5);
			if(!inicioGame){
				console.log("Si se puede..!!");
				//stop();

			}
			//boton = mundo.add.sprite(mundo.width/2,
			//	mundo.height/2,'btnInicio');
			//boton.anchor.setTo(0.5,0.5);

			//se agregan las plataformas
			plataformas = this.game.add.group();
			plataformas.enableBody = true;

			//agregar audio
			var fondo = this.game.add.audio('fondo');
			var boom = this.game.add.audio('boom');

			//fondo.play('', 0,0.05, true);


			//crear piso
			var piso = plataformas.create(0, this.game.world.height - 64,'barra');
			piso.scale.setTo(2,2);
			piso.body.immovable =true;
			//crear barras
			var barra = plataformas.create(-100, 350,'barra');
			barra.body.immovable =true;

			barra = plataformas.create(-180, 200,'barra');
			barra.body.immovable =true;

			barra = plataformas.create(500, 300,'barra');
			barra.body.immovable =true;

			barra = plataformas.create(600, 150,'barra');
			barra.body.immovable =true;





			//Agregar Jugador
			jugador = this.game.add.sprite(32, this.game.world.height -160, 'jugador');
			this.game.physics.arcade.enable(jugador);
			jugador.body.bounce.y = 0.3;
			jugador.body.gravity.y = 300;
			jugador.body.collideWorldBounds = true;
			//Agregar animacion al jugador
			jugador.animations.add('izquierda',[0,1,2,3],10 ,true);
			jugador.animations.add('derecha',[5,6,7,8],10 ,true);


			//Agregar burbujas buenass
			burbujasBuenas = this.game.add.group();
			burbujasBuenas.enableBody=true;
			burbujasBuenas.physicsBodyType = Phaser.Physics.ARCADE;

			var AbejaBur = burbujasBuenas.create(100 , 50, 'AbejaBur'); //la segunda le sumo algo

			//Agregar fisica a cada burbuja
			AbejaBur.body.collideWorldBounds = true;
			//burbujaBuena.body.gravity.y=100;
			AbejaBur.body.gravity.x = this.game.rnd.integerInRange(-50, 50);
			AbejaBur.body.gravity.y = 100 + Math.random() *100;

			AbejaBur.body.bounce.setTo(0.8);

			var ArdillaBur = burbujasBuenas.create(250 , 50, 'ArdillaBur'); //la segunda le sumo algo

			//Agregar fisica a cada burbuja
			ArdillaBur.body.collideWorldBounds = true;
			//burbujaBuena.body.gravity.y=100;
			ArdillaBur.body.gravity.x = this.game.rnd.integerInRange(-50, 50);
			ArdillaBur.body.gravity.y = 100 + Math.random() *100;

			ArdillaBur.body.bounce.setTo(0.8);


			var ArcoirisBur = burbujasBuenas.create(350 , 50, 'ArcoirisBur'); //la segunda le sumo algo

			//Agregar fisica a cada burbuja
			ArcoirisBur.body.collideWorldBounds = true;
			//burbujaBuena.body.gravity.y=100;
			ArcoirisBur.body.gravity.x = this.game.rnd.integerInRange(-50, 50);
			ArcoirisBur.body.gravity.y = 100 + Math.random() *100;

			ArcoirisBur.body.bounce.setTo(0.8);


			//Agregar burbujas malas
			burbujasMalas = this.game.add.group();
			burbujasMalas.enableBody=true;
			burbujasMalas.physicsBodyType = Phaser.Physics.ARCADE;

			var PerroBur = burbujasMalas.create(450, 50, 'PerroBur'); 

			//Agregar fisica a cada burbuja
			PerroBur.body.collideWorldBounds = true;
			//burbujaBuena.body.gravity.y=100;
			PerroBur.body.gravity.x = this.game.rnd.integerInRange(-50, 50);
			PerroBur.body.gravity.y = 100 + Math.random() *100;

			PerroBur.body.bounce.setTo(0.8);


			var EstrellaBur = burbujasMalas.create(550, 50, 'EstrellaBur'); 

			//Agregar fisica a cada burbuja
			EstrellaBur.body.collideWorldBounds = true;
			//burbujaBuena.body.gravity.y=100;
			EstrellaBur.body.gravity.x = this.game.rnd.integerInRange(-50, 50);
			EstrellaBur.body.gravity.y = 100 + Math.random() *100;

			EstrellaBur.body.bounce.setTo(0.8);


			var ElefanteBur = burbujasMalas.create(650, 50, 'ElefanteBur'); 

			//Agregar fisica a cada burbuja
			ElefanteBur.body.collideWorldBounds = true;
			//burbujaBuena.body.gravity.y=100;
			ElefanteBur.body.gravity.x = this.game.rnd.integerInRange(-50, 50);
			ElefanteBur.body.gravity.y = 100 + Math.random() *100;

			ElefanteBur.body.bounce.setTo(0.8);



			/*
			for (var i = 0; i < 6; i++) {
				if (i<=2) {

					var burbujaMala = burbujasMalas.create(100 + i* 110, 50, 'burbujaMala'); 

					//Agregar fisica a cada burbuja
					burbujaMala.body.collideWorldBounds = true;
					//burbujaBuena.body.gravity.y=100;
					burbujaMala.body.gravity.x = this.game.rnd.integerInRange(-50, 50);
					burbujaMala.body.gravity.y = 100 + Math.random() *100;

					burbujaMala.body.bounce.setTo(0.8);

					
				}else{
					var burbujaBuena = burbujasBuenas.create(100 + i* 110, 50, 'burbujaBuena'); 

					//Agregar fisica a cada burbuja
					burbujaBuena.body.collideWorldBounds = true;
					//burbujaBuena.body.gravity.y=100;
					burbujaBuena.body.gravity.x = this.game.rnd.integerInRange(-50, 50);
					burbujaBuena.body.gravity.y = 100 + Math.random() *100;

					burbujaBuena.body.bounce.setTo(0.8);
				}
				

			}
			*/
			//agregar el marcador
			
			this.textoScore = this.game.add.text(20, 20 , 'Aciertos: 0 de 3 ', {fontSize:'36px', fill:'#fff'});
			
			//agregar controles, en este caso para el jugador
			
			controles = this.game.input.keyboard.createCursorKeys();

			//agregar el timer

			//total time until trigger
	        this.timeInSeconds = 30;
	        //make a text field
	        //this.timeText = mundo.add.text(mundo.world.centerX, mundo.world.centerY, "0:00");
	        this.timeText = this.game.add.text(700, 45, "0:00");
	        //fontSize
	        this.timeText.fontSize = '30px';
	        //turn the text white
	        this.timeText.fill = "#ffffff";
	        //center the text
	        this.timeText.anchor.set(0.5, 0.5);
	        //set up a loop timer
	        this.timer = this.game.time.events.loop(Phaser.Timer.SECOND, this.tick, this);
			
			


	},
	update:function(){
		   this.game.physics.arcade.collide(jugador, plataformas);
			this.game.physics.arcade.collide(burbujasBuenas, plataformas);
			this.game.physics.arcade.collide(burbujasMalas, plataformas);

			this.game.physics.arcade.overlap(jugador, burbujasBuenas, this.recolectar,null, this);


			jugador.body.velocity.x=0;

			if (controles.left.isDown) {
				jugador.body.velocity.x = -150;
				jugador.animations.play('izquierda');
			}
			else if (controles.right.isDown) {
				jugador.body.velocity.x = 150;
				jugador.animations.play('derecha');
			}else{
				jugador.animations.stop();
				jugador.frame = 4;
			}

			if (controles.up.isDown && jugador.body.touching.down) {
				jugador.body.velocity.y = -350;
			}

	},

	recolectar:function(jugad, burbu){
			
			

				burbu.kill();

				console.log(score);
				score++;
				//textoScore.text = ' Felicidades..!! ';
				this.textoScore.text = 'Aciertos = ' + score + ' de 3 ';
				//boom.play();
			//score +=10;
			if(score==3) {
				//remove the timer from the game
	            this.textoScore.text = ' Felicidades..!! ';
				//apagar audio
	           /// this.fondo.stop();
			}
			

		},
	
		tick:function(){
			//subtract a second
        this.timeInSeconds--;
        //find how many complete minutes are left
        var minutes = Math.floor(this.timeInSeconds / 60);
        //find the number of seconds left
        //not counting the minutes
        var seconds = this.timeInSeconds - (minutes * 60);
        //make a string showing the time
        var timeString = this.addZeros(minutes) + ":" + this.addZeros(seconds);
        //display the string in the text field
        this.timeText.text = timeString;
        //check if the time is up
        if (this.timeInSeconds == 0) {
            //remove the timer from the game
            this.game.time.events.remove(this.timer);
            //call your game over or other code here!
            this.timeText.text="Time Over";
            //fondo.stop();


		}
	},

		clickMe:function(){
			console.log("si funciona");
			inicioGame = true;
		},

		addZeros:function(num){
			if (num < 10) {
            num = "0" + num;

        }
        return num;
		}
		


}