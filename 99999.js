const numberToEnglish = n => 
{
  if(n < 0 || (n + "").split('.').length == 2) return '';
  if(n <= 20)
    return token(n); 
  
  // n is 2 digits but greater than 20;
  
  n = n + "";
  
  let de = n.substring(n.length - 2, n.length);
  let d = token(+de[0] * 10);
  let e = token(+de[1] * 1);
  
  if(+de <= 20)
    d = "", e = "", d = token(+de);
  
  if(d == "zero") d = "";
  if(e == "zero") e = "";
  
  if(n.length == 2)
    return (d + (e ? " " + e : "")); // Cases 0-99 (inclusive).
   
  let c = token(+n.substring(n.length - 3, n.length - 2));
  if(c == "zero") c = "";
  if(n.length == 3)
    return [c, "hundred", d, e].join(" ").trim();  // Case 100-999 (inclusive).
  
  let b = token(+(n.substring(n.length - 4, n.length - 3)));
  if(b == "zero") b = "";
  if(n.length == 4)
    return [b, "thousand", (c ? c + " hundred" : ""), d, e].filter(p => p != "").join(" ").trim();
  // Cases 1000-9999 (inclusive).
  
  let a = +n[0] * 10;
  
  if(+(n[0]+n[1]) <= 20) a = token(+(n[0]+n[1])), b = "";
  else a = token(+a);
  return [a, b, "thousand", (c ? c + " hundred" : ""), d, e].filter(p => p != "").join(" ").trim();
}

function token(value) {
    switch (value) {
        case 0:
            return "zero";
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";
        case 7:
            return "seven";
        case 8:
            return "eight";
        case 9:
            return "nine";
        case 10:
            return "ten";
        case 11:
            return "eleven";
        case 12:
            return "twelve";
        case 13:
            return "thirteen";
        case 14:
            return "fourteen";
        case 15:
            return "fifteen";
        case 16:
            return "sixteen";
        case 17:
            return "seventeen";
        case 18:
            return "eighteen";
        case 19:
            return "nineteen";
        case 20:
            return "twenty";
        case 30:
            return "thirty";
        case 40:
            return "forty";
        case 50:
            return "fifty";
        case 60:
            return "sixty";
        case 70:
            return "seventy";
        case 80:
            return "eighty";
        case 90:
            return "ninety";
        case 100:
            return "hundred";
        case 1000:
            return "thousand";
        default:
            return undefined;
    }
}
