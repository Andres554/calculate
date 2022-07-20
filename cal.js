function calculate(string) {
    let rim =["I","II","III","IV","V","VI","VII","VIII","IX","X"];
       
	let abs = string.split(" ");
    if (abs.length != 3) throw new Error("Неверное число операндов в выражении или отсутсвие пробелов между ними");
    let arab =["1","2","3","4","5","6","7","8","9","10"];
let simvol =['+','-','*','/'];
if (simvol.includes(abs[1])===false)  throw new Error("Ожидался знак математиской операции");
if (arab.includes(abs[0])&&arab.includes(abs[2])) {
    switch(abs[1]) {
        case '+': return (Number(abs[0])+Number(abs[2])).toString()
        break;
            case '-':  return (abs[0]-abs[2]).toString()
                break;
                case '*': return (abs[0]*abs[2]).toString()
                    break;
                    case '/': return (Math.trunc(abs[0]/abs[2])).toString()
    }


} else if (rim.includes(abs[0])&&rim.includes(abs[2])) {
    function translation(x) {
        switch (x) {
            case rim[0]: return 1; 
            case rim[1]: return 2;
            case rim[2]: return 3;
            case rim[3]: return 4;
            case rim[4]: return 5;
            case rim[5]: return 6;
            case rim[6]: return 7;
            case rim[7]: return 8;
            case rim[8]: return 9;
            case rim[9]: return 10;
        }
    }
    let a = translation(abs[0]);
    let b = translation(abs[2]);

    function rims(g) {
        let numb =  ["", "", "XX","XXX","XL","L","LX","LXX","LXXX","XC"]; 
        if (g<=0) {
          return "''"
        } else if (g==10) {
          return "X"
        } else if(g==100) {
          return "C"
        } else {
       let x = Math.trunc(g/10);
       let y = g%10;
       if(y==0) return numb[x];
       else  return numb[x].concat(rim[y-1])
       
        }
       }

    switch(abs[1]) {
        case '+': return rims(a+b);
           case '*': return rims(a*b);
               case '/': return rims(Math.trunc(a/b));
                   case '-': return rims(a-b);
}
 } else  throw new Error("Некорректный ввод числовых данных");
}