sequenceDiagram
    participant browser
    participant server

    browser-->server: POST https://studies.cs.helsinki.fi/exampleapp/new_notes
    activate server

    Note right of server: The server asks the browser to do a new HTTP GET request to the address defined in the header's Location

    server-->browser: HTTP status code 302
    deactivate server

    browser-->server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->browser: the HTML file
    deactivate server

    browser-->server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->browser: the CSS file
    deactivate server

    browser-->server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->browser: the Javascript file
    deactivate server

    Note right of browser: The browser starts executing the Javascript code that fetchs the JSON from server

    browser-->server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->browser: [{"content":"test","date":"...",...}]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes

