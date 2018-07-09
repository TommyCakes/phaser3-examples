var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var scroller;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('neuro', 'assets/pics/neuromancer.jpg');
    this.load.bitmapFont('atari', 'assets/fonts/bitmap/atari-smooth.png', 'assets/fonts/bitmap/atari-smooth.xml');
    this.load.bitmapFont('desyrel', 'assets/fonts/bitmap/desyrel.png', 'assets/fonts/bitmap/desyrel.xml');
}

function create () 
{
    this.add.image(512, 0, 'neuro').setOrigin(0.5, 0);

    var content = [
        "",
        "",
        "The sky above the port was the color of television, tuned to a dead channel.",
        "`It's not like I'm using,' Case heard someone say, as he shouldered his way ",
        "through the crowd around the door of the Chat. `It's like my body's developed",
        "this massive drug deficiency.' It was a Sprawl voice and a Sprawl joke.",
        "The Chatsubo was a bar for professional expatriates; you could drink there for",
        "a week and never hear two words in Japanese.",
        "",
        "Ratz was tending bar, his prosthetic arm jerking monotonously as he filled a tray",
        "of glasses with draft Kirin. He saw Case and smiled, his teeth a webwork of",
        "East European steel and brown decay. Case found a place at the bar, between the",
        "unlikely tan on one of Lonny Zone's whores and the crisp naval uniform of a tall",
        "African whose cheekbones were ridged with precise rows of tribal scars. `Wage was",
        "in here early, with two joeboys,' Ratz said, shoving a draft across the bar with",
        "his good hand. `Maybe some business with you, Case?'",
        "",
        "Case shrugged. The girl to his right giggled and nudged him.",
        "The bartender's smile widened. His ugliness was the stuff of legend. In an age of",
        "affordable beauty, there was something heraldic about his lack of it. The antique",
        "arm whined as he reached for another mug.",
        "",
        "",
        "From Neuromancer by William Gibson"
    ];

    // scroller = this.add.dynamicBitmapText(0, 0, 'desyrel', content, 24);
    scroller = this.add.bitmapText(0, 0, 'desyrel', content, 24);

    // scroller.setSize(1024, 60);
}

function update (time, delta)
{
    // scroller.scrollY += 0.03 * delta;

    if (scroller.scrollY > 2100)
    {
        // scroller.scrollY = 0;
    }
}
