const calculator = {
    expression: "",

    fill(value) {
        if (this.expression=="Ошибка") {
            this.clear();
        }
        this.expression += value;
        this.updateDisplay();
    },

    clear() {
        this.expression = "";
        this.updateDisplay();
    },

    remove() {
        this.expression = this.expression.slice(0, -1);
        this.updateDisplay();
    },

    copy() {
        navigator.clipboard.writeText(this.expression);
    },

    updateDisplay() {
        document.getElementById("display").innerText = this.expression;
    },

    result() {
        try {
            let result = eval(this.expression);
            this.expression = result;
            this.updateDisplay();
        } catch (error) {
            this.expression = "Ошибка";
            this.updateDisplay();
        }
    }
};