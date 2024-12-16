const http = require("http");

// Function to check if a number is an Armstrong number
function isArmstrongNumber(num) {
    const digits = num.toString().split("").map(Number);
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
    return sum === num;
}

// Create a server
const server = http.createServer((req, res) => {
    const urlParams = new URL(req.url, http://${req.headers.host}).searchParams;
    const number = parseInt(urlParams.get("number"), 10);

    if (!isNaN(number)) {
        const result = isArmstrongNumber(number);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            number,
            isArmstrong: result,
            message: result ? ${number} is an Armstrong number. : ${number} is not an Armstrong number.
        }));
    } else {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            error: "Invalid input. Please provide a number in the query parameter like '?number=153'."
        }));
    }
});

// Listen on port 3000
server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});