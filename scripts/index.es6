class Praise {
    constructor(num, btnElement, numElement) {
        this.num = num;
        this.btnElement = btnElement;
        this.numElement = numElement;
    }
    clickAction() {
        this.btnElement.click(() => {
            if (this.num < 10) {
                this.num = add(this.num);
                this.btnElement.css("color", "#af87ff");
                this.numElement.css("color", "#af87ff");
                this.numElement.html(this.num);
            } else {
                this.num = 0;
                this.btnElement.css("color", "#000");
                this.numElement.css("color", "#000");
                this.numElement.html(0);
            }
            console.log(this.num);
        })
    }
}
class Thumb extends Praise {
    constructor(num, btnElement, numElement) {
        super(num, btnElement, numElement);
    }
}

export default Thumb;
