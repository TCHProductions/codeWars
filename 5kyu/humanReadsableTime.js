/*Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.*/


// Parameters - An interger that is a non-negative indicating a count of seconds, which are the basic unit on our clock. Teh Max number of seconds will be 35999
// Returns - A clock value containing hours, minutes, seconds with the specific format of HH:MM:SS with values 9 having a lead of zero
// Examples - (359999), '99:59:59'
//             (86400), '24:00:00',

// Pseudocode - Take in an intger and divide the 60 the appropriate amount of tmies and assignt he rsult to hours, minutes and seconds. Pad leading zeros where needed and print hours, minutes and seconds with a clon between them.

function humanReadable(seconds) {
    let hours = Math.floor(seconds/3600)
    seconds = seconds - hours*3600
    hours = hours.toString().padStart(2,'0')
    let minutes = Math.floor(seconds/60)
    seconds = (seconds - minutes*60).toString().padStart(2,'0')
    minutes = minutes.toString().padStart(2,'0')
    return hours + ':' + minutes +':'+ seconds
}
