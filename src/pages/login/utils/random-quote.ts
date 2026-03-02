const QUOTES = [
    {
        text: 'Simplicity is the ultimate sophistication.',
        author: 'Leonardo da Vinci',
    },
    {
        text: 'The only way to do great work is to love what you do.',
        author: 'Steve Jobs',
    },
    {
        text: 'Innovation distinguishes between a leader and a follower.',
        author: 'Steve Jobs',
    },
    {
        text: 'Stay hungry, stay foolish.',
        author: 'Steve Jobs',
    },
    {
        text: "Life is what happens to you while you're busy making other plans.",
        author: 'John Lennon',
    },
    {
        text: 'In the middle of difficulty lies opportunity.',
        author: 'Albert Einstein',
    },
    {
        text: 'The future belongs to those who believe in the beauty of their dreams.',
        author: 'Eleanor Roosevelt',
    },
    {
        text: 'It does not matter how slowly you go as long as you do not stop.',
        author: 'Confucius',
    },
    {
        text: 'Everything you’ve ever wanted is on the other side of fear.',
        author: 'George Addair',
    },
    {
        text: 'Success is not final, failure is not fatal: it is the courage to continue that counts.',
        author: 'Winston Churchill',
    },
    {
        text: 'The best time to plant a tree was 20 years ago. The second best time is now.',
        author: 'Chinese Proverb',
    },
    {
        text: "Your limitation—it's only your imagination.",
        author: 'Unknown',
    },
];

export function getRandomQuote() {
    return QUOTES[Math.floor(Math.random() * QUOTES.length)];
}
