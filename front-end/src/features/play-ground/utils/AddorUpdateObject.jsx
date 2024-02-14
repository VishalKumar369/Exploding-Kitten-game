export const addOrUpdateObject = (newObject) => {
    let myArray = JSON.parse(localStorage.getItem('leaderBoard')) || [];
    const existingIndex = myArray.findIndex(obj => obj.userName === newObject.userName);

    if (existingIndex !== -1) {
        // If userName already exists, update the existing object
        myArray[existingIndex] = { ...myArray[existingIndex], ...newObject };
    } else {
        // If userName does not exist, add a new object
        myArray = [...myArray, newObject];
    }

    localStorage.setItem('leaderBoard', JSON.stringify(myArray));
};
