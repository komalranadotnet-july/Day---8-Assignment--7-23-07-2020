let hTeam=[89,120,103]
let zTeam=[116,94,123]
let mTeam=[97,134,105]
let mSum=0
let mAvg=0

let totalSumh = 0;
let totalSumz=0
for(let i in hTeam) {
    totalSumh += hTeam[i];
}

for(let i in zTeam) {
    totalSumz += zTeam[i];
}
 
let numsCnth = hTeam.length;

let numsCntz = zTeam.length;
 
let averageh = totalSumh / numsCnth;
let averagez = totalSumz/ numsCntz;
 
console.log('Average is: ' + averageh);
console.log('Average is: ' + averagez);

if(averageh>averagez){
    console.log(`Team Heath Wins with Avg Score of ${averageh}`)
}else if(averageh<averagez){
    console.log(`Team Zane Wins with Avg Score of ${averagez}`)
}else{
    console.log(`There is a Draw between both the Teams....`)
}



//Changed score to show different winners

let hTeamChange=[100,120,130]
let zTeamChange=[140,150,160]
hSum=0
zSum=0
for(i of hTeamChange){
    hSum=hSum+i
}
for(i of zTeamChange){
    zSum=zSum+i
}
hAvg=hSum/3
zAvg=zSum/3

console.log("Average Score of Both Team:- ")
console.log('Team Heath '+hSum)
console.log('Team Zane '+zSum)

if(hAvg>zAvg){
    console.log(`Team Heath Wins with Avg Score of ${hAvg}`)
}else if(hAvg<zAvg){
    console.log(`Team Zane Wins with Avg Score of ${zAvg}`)
}else{
    console.log(`There is a Draw between both the Teams....`)
}

//---------Changing team Scores to show Draw-------------

let hTeamDraw=[90,120,103]
let zTeamDraw=[90,120,103]
hSum=0
zSum=0
for(i of hTeamDraw){
    hSum=hSum+i
}
for(i of zTeamDraw){
    zSum=zSum+i
}
hAvg=hSum/3
zAvg=zSum/3

console.log("Average Score of Both Team:- ")
console.log('Team Heath '+hSum)
console.log('Team Zane '+zSum)

if(hAvg>zAvg){
    console.log(`Team Heath Wins with Avg Score of ${hAvg}`)
}else if(hAvg<zAvg){
    console.log(`Team Zane Wins with Avg Score of ${zAvg}`)
}else{
    console.log(`There is a Draw between both the Teams....`)
}

for(i of mTeam){
    mSum=mSum+i
}
mAvg=mSum/3

console.log(`Average Score of Team Mariah:- ${mAvg}`)
