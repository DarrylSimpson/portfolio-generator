const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

const printProfileData = profileDataArr => {
    //is the same as this
    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);