let car1Brand = "Toyota";
let car1Model = "Corolla";
let car1FuelLevel = 100;

let car2Brand = "Honda";
let car2Model = "N-BOX";
let car2FuelLevel = 100;
console.log(car1Brand);
console.log(car2Model);


// 燃料を消費する関数
function consumeFuel(carBrand, carModel, amount) {
    if (carBrand === "Toyota" && carModel === "Corolla") {
        car1FuelLevel -= amount;
        console.log(`${car1Brand} ${car1Model} has now ${car1FuelLevel}% fuel.`);
    } else if (carBrand === "Honda" && carModel === "N-BOX") {
        car2FuelLevel -= amount;
        console.log(`${car2Brand} ${car2Model} has now ${car2FuelLevel}% fuel.`);
    }
    // 他の車についても同様の処理が必要
}
consumeFuel("Toyota", "Corolla", 10); // Toyota Corollaの燃料を10%消費
consumeFuel("Honda", "N-BOX", 20); // Honda Civicの燃料を20%消費