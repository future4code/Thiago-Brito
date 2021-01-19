const checkAnagram = (s:string, t:string) =>{
const check = (s.split("") .sort() .join("")  === t.split("") .sort() .join(""))
return check
}
console.log(checkAnagram("par", "rap"))
console.log(checkAnagram("bola", "loba"))
console.log(checkAnagram("bad", "dad"))
