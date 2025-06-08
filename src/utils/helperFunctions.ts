export const names = [
    "Aarav",
    "Diya",
    "Kabir",
    "Meera",
    "Rohan",
    "Saanvi",
    "Ishaan",
    "Anaya",
    "Vivaan",
    "Aadhya",
    "Arjun",
    "Priya",
    "Rahul",
    "Sneha",
    "Aditya",
    "Riya",
    "Krishna",
    "Tara",
    "Dev",
    "Pooja"
];

export const messages = [
    "Hello there!",
    "How are you?",
    "Nice to meet you.",
    "What's up?",
    "Good morning!",
    "Good night!",
    "Have a great day!",
    "See you soon.",
    "Take care!",
    "Congratulations!",
    "All the best!",
    "Thank you!",
    "You're welcome.",
    "Sorry!",
    "No worries.",
    "Let's catch up.",
    "Long time no see!",
    "Happy birthday!",
    "Good luck!",
    "Well done!"
];

export function generateRandomMessage(): string {
    const index = Math.floor(Math.random() * messages.length);
    return messages[index];
}

export function generateRandomName(): string {
    const index = Math.floor(Math.random() * names.length);
    return names[index];
}