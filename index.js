let name = "Lucas";
let xp = 5001;
let nivel;

console.log("Se XP for menor do que 1.000 = Ferro")
console.log("Se XP for entre 1.001 e 2.000 = Bronze")
console.log("Se XP for entre 2.001 e 5.000 = Prata")
console.log("Se XP for entre 6.001 e 7.000 = Ouro")
console.log("Se XP for entre 7.001 e 8.000 = Platina")
console.log("Se XP for entre 8.001 e 9.000 = Ascendente")
console.log("Se XP for entre 9.001 e 10.000 = Imortal")
console.log("Se XP for maior ou igual a 10.001 = Radiante")


if (xp < 1000) {
    nivel = "ferro"
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze"
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata"
} else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro"
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina"
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente"
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal"
} else if (xp >= 10001) {
    nivel = "Radiante"
}

console.log("")

console.log(`O Herói de nome ${name} está no nível de ${nivel}`)