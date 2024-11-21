export default class Password {
  static new(capacity: number = 15): string {
    const numbers = 1234567890;
    const letters = "abcdesfghijklmnopqrstuvxyz";
    const uppercaseLetters = letters.toUpperCase();
    const specialCharacters = "!@#$%&*";

    const characterGroups = [
      numbers,
      letters,
      uppercaseLetters,
      specialCharacters,
    ];
    const password = [];

    for (let i = 0; i < capacity; i++) {
      const group =
        characterGroups[Math.floor(Math.random() * characterGroups.length)];
      password.push(group[Math.floor(Math.random() * group.length)]);
    }
    return password.join("");
  }
}

const generatedPassword = Password.new();
console.log("Generated Password:", generatedPassword);
