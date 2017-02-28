
printPyramid(5);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
    console.log("Uh oh... the pyramid is under construction.");
    console.log("Check back soon, our developers are hard at work as we speak!");

    // TODO
    // print that pyramid!
    for (var floor = 0; floor < height; floor++ ) {
        var spaces = "";
        var hashes = "";
        for (var spaceCounter = 0; spaceCounter < height - floor; spaceCounter++) {
            spaces += " ";
        }
        for (var hashCounter = 0; hashCounter < floor + 2; hashCounter++) {
            hashes += "#";
        }
        var thisFloor = spaces + hashes;
        console.log(thisFloor);
    }

}
