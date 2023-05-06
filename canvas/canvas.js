window.addEventListener('load', () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    // Resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;


    // Obdélník - Style vždy první!
    // ctx.strokeStyle = "red";
    // ctx.strokeRect(100, 100, 200, 500);
    // ctx.strokeStyle = "blue";
    // ctx.strokeRect(200, 200, 200, 500);

    // line
    // ctx.beginPath();
    // ctx.moveTo(100, 100); ....bod z kterého začínám kreslit x,y
    // ctx.lineTo(200, 100);     koncový bod
    // ctx.lineTo(200, 150);     další linka z koncového bodu
    // ctx.closePath()
    // ctx.stroke();

    // variables
    let painting = false;

    function startPosition(e){
        painting = true;
        draw(e);            //aby se po kliknuti objevovaly i tečky, (e) - k názvu funkce!
    }
    function finishedPosition(){
        painting = false;
        ctx.beginPath();    //abychom mohli kreslit další a nespojovalo se
    }
    function draw(e){
        if(!painting) return;     // podmínka když nekreslíme, vrati se a nic neděla
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        ctx.strokeStyle = "white"

        ctx.lineTo(e.clientX, e.clientY);  // tam kde klikne myš
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);

    }

    // EventListeners
    canvas.addEventListener('mousedown', startPosition)
    canvas.addEventListener('mouseup', finishedPosition)
    canvas.addEventListener('mousemove', draw)

})