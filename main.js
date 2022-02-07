let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;


let dino = {
    x : 10,
    y : 200,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
dino.draw();

class Cactus{
    constructor(){
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

let timer = 0;
let cactuses = [];

function 프레임마다실행할거(){
    requestAnimationFrame(프레임마다실행할거)
    timer++;
    ctx.clearRect(0,0, canvas.width, canvas.height);
    // dino.x++;
    if (timer % 120 === 0){
        var cactus = new Cactus();
        cactuses.push(cactus);
    }
    cactuses.forEach((a) => {
        a.x--;
        a.draw();
    })
    dino.draw();
}

프레임마다실행할거();