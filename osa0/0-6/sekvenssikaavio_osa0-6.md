sequenceDiagram
participant browser
participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server

    Note right of browser: JS code prevents the page from reloading and sending the form
    Note right of browser: JS code creates a new note adds it to the array
    Note right of browser: JS code draws the array and then sends it to the server

    server-->>browser: JSON file: {message: "note created"}
    deactivate server
