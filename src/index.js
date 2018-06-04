class Praise {
    constructor(num) {
        this.num = num;
    }
    like() {
        this.num ++;
    }
}
class Thumb extends Praise {
    constructor(num) {
        super(num);
    }
}


let liking = new Thumb(0);
let thumb = document.getElementById('thumb');
let num = document.getElementById('num');
window.onload = function() {
    num.innerHTML = liking.num;
}

thumb.addEventListener('click', function() {
    liking.like();
    num.innerHTML = liking.num;
})