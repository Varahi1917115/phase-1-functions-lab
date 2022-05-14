function distanceFromHqInBlocks(bStart){
    if(bStart > 42)
        return bStart - 42
    if (bStart < 42)
        return 42 - bStart
}

function distanceFromHqInFeet(fStart){
    if (fStart > 42)
        return (fStart-42)*264;
    else (fStart < 42)
        return (42-fStart)*264
}

function distanceTravelledInFeet(fLocation, dLocation){
    if (fLocation > dLocation)
        return (fLocation - dLocation)*264
    else (fLocation < dLocation)
        return (dLocation - fLocation)*264
}

function calculatesFarePrice(start, destination){
    distanceFromHqInFeet(start, destination);

    let distance = Math.abs(start - destination) * 264;

    if(distance <= 400) {
        return 0;
    }

    else if (distance >= 401 && distance <= 2000){
        return (distance - 400) * 0.02;
    }
    
    else if (distance >= 2001 && distance <= 2500){
        return 25;
    }

    else {
        return 'cannot travel that far';
    }
}