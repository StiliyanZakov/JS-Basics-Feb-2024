function password(input) {

    let userName = input[0];
    let password = input[1];
    let data = input[2];
    let index = 3;
    while (data !== password) {
        data = input[index];
        index++;
    }
    console.log(`Welcome ${userName}!`);
}
password (["Nakov",

"1234",

"Pass",

"1324",

"1234"]);