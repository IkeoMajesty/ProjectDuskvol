import randomiser from "./randomiser"

function Standings(list) {
  
  let factionsMain = list
  let factionsLeft = [...list]
  let standings = [];
  factionsMain.forEach((x) => {
    // console.log("1",factionsLeft);
    factionsLeft.shift()
    // console.log("2",factionsLeft);
      factionsLeft.forEach(y => {
          let standing = randomiser([-3, -2, -2, -1, -1, -1, 0, 0, 0, 0 , 1, 1, 1, 2, 2, 3])
          standings.push({a: x.name, b: y.name, value: standing })
        //   console.log("Standings update:",standings);
      })
    //   console.log("standings:",standings, "do porownania",factionsLeft,"factionsMain", factionsMain);
  })
//   const result = {factionsLeft: factionsLeft,  Standings: standings}
//   console.log(result);

    return standings
}

export default Standings
