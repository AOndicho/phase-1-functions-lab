// Code your solution in this file!

const hqStreet = 42;
const blockInFeet=264

function distanceFromHqInBlocks(distance) {
  if (distance > hqStreet) {
    return distance - hqStreet;
  } else if (distance < hqStreet) {
      return hqStreet - distance;
  }else {
      return 0
  }
}

function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance)*blockInFeet
}


function distanceTravelledInFeet(begin,end){
    if (end>begin){
        return (end-begin)*264
    } else {
        return (begin-end)*264
    }

}

function calculatesFarePrice(begin,end){
    let distance=distanceTravelledInFeet(begin,end)

    if (distance<400){
        return 0
    } else if(distance<2000){
        return (distance-400) * 0.02
    } else if (distance <2500){
        return 25
    } else{
        return 'cannot travel that far'
    }

}