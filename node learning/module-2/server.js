const http = require("node:http");
const jData = [
  {
    "id": 1,
    "name": "John Doe",
    "age": 30,
    "married": true,
    "email": "john.doe@example.com",
    "country": "USA",
    "city": "New York",
    "occupation": "Engineer",
    "phone": "+1-555-1234"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "age": 25,
    "married": false,
    "email": "jane.smith@example.com",
    "country": "Canada",
    "city": "Toronto",
    "occupation": "Designer",
    "phone": "+1-416-555-5678"
  },
  {
    "id": 3,
    "name": "Ahmed Khan",
    "age": 40,
    "married": true,
    "email": "ahmed.khan@example.com",
    "country": "Bangladesh",
    "city": "Dhaka",
    "occupation": "Teacher",
    "phone": "+880-171-000000"
  },
  {
    "id": 4,
    "name": "Maria Garcia",
    "age": 35,
    "married": true,
    "email": "maria.garcia@example.com",
    "country": "Spain",
    "city": "Madrid",
    "occupation": "Architect",
    "phone": "+34-91-123-4567"
  },
  {
    "id": 5,
    "name": "Liam Brown",
    "age": 28,
    "married": false,
    "email": "liam.brown@example.com",
    "country": "UK",
    "city": "London",
    "occupation": "Software Developer",
    "phone": "+44-20-7946-0958"
  },
  {
    "id": 6,
    "name": "Aiko Tanaka",
    "age": 32,
    "married": true,
    "email": "aiko.tanaka@example.com",
    "country": "Japan",
    "city": "Tokyo",
    "occupation": "Doctor",
    "phone": "+81-3-1234-5678"
  }
]

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    if (req.url == "/home" && req.method == "GET") {
        res.writeHead(200, {
             "Content-Type": "text/html",
             email: "rY6Oo@example.com",
            });
        res.write("<h1>Home Page</h1>");
        res.end();
    } else if (req.url == "/about" && req.method == "GET") {
        res.writeHead(200, {
            "Content-Type": "application/json",
        });
        res.write(JSON.stringify(jData));
        res.end();
    } else {
        res.write("<h1>404 Page Not Found</h1>");
        res.end();
    }
});
server.listen(8080, "127.0.0.1", () => {
    console.log("Server is running on port 3000");
});

// we can also send some json data in the respose body and then we have to set the content type to application/json