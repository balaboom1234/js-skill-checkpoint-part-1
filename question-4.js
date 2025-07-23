// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let minitems = inventory[0];
for (let i = 1; i < inventory.length; i++) 
  {
 if (inventory[i].quantity < minitems.quantity) 
  {
  minitems = inventory[i];
 }
} 
console.log (`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minitems.name} ซึ่งมี ${minitems.quantity} ชิ้น`)