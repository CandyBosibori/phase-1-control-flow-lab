function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return 'This one is on me!';
  } else if (distance > 2000 && distance <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (distance > 2500) {
    return 'No can do.';
  } else {
    // Handle other cases if needed
    return 'Some default message for other distances.';
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  return (city === "NYC")? "Ok, sounds good.":"No go.";
}

function switchOnCharmFromTip(tip){
  // Write your code here!
 switch(tip) {
  case "generous":
    return "Thank you so much."
    break;
    case "not as generous":
      return "Thank you."
      break;
      default:
        return "Bye."
        break;
 }
}
// function switchOnCharmFromTip(tip) {
//   switch (tip) {
//     case 'generous':
//       return 'Thank you so much.';
//     case 'not as generous':
//       return 'Thank you.';
//     default:
//       return 'Bye.';
//   }
// }
