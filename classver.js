class Car {
    constructor(brand, model) {
        this.brand = brand; // プロパティ
        this.model = model; // プロパティ
         this.fuelLevel = 100;//プロパティ
    }

    //メソッド
  consumeFuel(amount) {
        this.fuelLevel -= amount;
        console.log(`${this.brand} ${this.model} has now ${this.fuelLevel}% fuel.`);
    }
}

const car1 = new Car("Toyota", "Corolla"); //インスタンス
const car2 = new Car("Honda", "N-BOX"); //インスタンス
console.log(car1.brand); // 出力: Toyota 
console.log(car2.model); // 出力: N-BOX

//メソッドの呼び出し
car1.consumeFuel(10); //car1のインスタンスの状態を変更するメソッドを呼び出し
car2.consumeFuel(20); //car2のインスタンスの状態を変更するメソッドを呼び出し
