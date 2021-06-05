function distanceFromHqInBlocks(pickup) {
    if (pickup > 42) {
        return pickup - 42;
    } else {
        return 42 - pickup;
    }
}
function distanceFromHqInFeet(pickup) {
    let feet = distanceFromHqInBlocks(pickup) * 264;
    return feet;
}
function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * 264;
    } else {
        return (destination - start) * 264;
    }
}
function calculatesFarePrice(start, destination) {
    const fare = distanceTravelledInFeet(start, destination)
    if (fare <= 400) {
        return 0;
    } else if (fare > 400 && fare < 2000) {
        return (fare - 400) * 0.02;
    } else if (fare > 2000 && fare < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}