function eestiLipp() {
    const lipp = document.getElementById("lipp");
    if(lipp.getContext) {
        let l = lipp.getContext("2d");
        l.fillStyle = "#0073cf";
        l.fillRect(0, 0, 330, 70)
        l.fillStyle = "#000000";
        l.fillRect(0, 70, 330, 70)
        l.fillStyle = "#FFFFFF";
        l.fillRect(0, 140, 330, 70)
    }
}

function franceLipp() {
    if(lipp.getContext) {
        let l = lipp.getContext("2d");
        l.fillStyle = "#002b4e";
        l.fillRect(0, 0, 110, 210)
        l.fillStyle = "#FFFFFF";
        l.fillRect(110, 0, 220, 210)
        l.fillStyle = "#ec1944";
        l.fillRect(220, 0, 330, 210)
    }
}

function switzerlandLipp() {
    if(lipp.getContext) {
        let l = lipp.getContext("2d");
        l.fillStyle = "#f1201c";
        l.fillRect(0, 0, 330, 210)
        l.fillStyle = "#ffffff";
        l.fillRect(150, 25, 30, 160)
        l.fillStyle = "#ffffff";
        l.fillRect(80, 90, 170, 30)
    }
}

function belgiumLipp() {
    if(lipp.getContext) {
        let l = lipp.getContext("2d");
        l.fillStyle = "black";
        l.fillRect(0, 0, 110, 210)
        l.fillStyle = "#fce759";
        l.fillRect(110, 0, 220, 210)
        l.fillStyle = "#f13d49";
        l.fillRect(220, 0, 330, 210)
    }
}

function egyptLipp() {
    const image = new Image();
    image.src = "img/egypt.png";
    if(lipp.getContext) {
        let l = lipp.getContext("2d");
        l.fillStyle = "#cf0821";
        l.fillRect(0, 0, 330, 70)
        l.fillStyle = "#FFFFFF";
        l.fillRect(0, 70, 330, 70)
        l.fillStyle = "#000000";
        l.fillRect(0, 140, 330, 70)
        l.drawImage(image, 145, 80, 40, 50);
    }
}

function kustutaLipp() {
    if (lipp.getContext) {
        let l = lipp.getContext("2d");
        l.clearRect(0, 0, 330, 210);
    }
}