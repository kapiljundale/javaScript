   var evenString = "Rudra is good boy";
   var removeSpace =evenString.split(" ").join("");
    for (let index = 0; index < removeSpace.length; index++) {
        if (index%2!==0) {
            console.log(removeSpace.charAt(index));
        }
    }