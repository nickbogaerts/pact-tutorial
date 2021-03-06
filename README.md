# Pact Tutorial

In this exercise, we have been tasked to bring to market a new Software-as-a-Service (SaaS) offering: is-odd.

This revolutionary appliction consists of a React-Single-Page application, and a backend API all geared to answer a simple question: is a number odd?

## Running the applications

Both the client and the server can be started by running `npm start` in their respective folders. THe server will be started port 3001, and the client from port 3000 by default.

## Your task

In order to accelerate the delivery of the software, the backend has been outsourced to a third-party consultant. Your task is to build the frontend, and validate the functionality of the provided backend. Your tasks are as follows:

1. Write consumer-driven contract tests for the application (see the API specification below). There is a sample already existing, which can be run with `npm run pact-test`.

2. Once these are ready, start the pact mock server, and use this to aid you in implementing the single-page application.

3. As soon as you have completed the frontend, you will take delivery of the backend service. You can launch it via `npm start` from the `server` directory. Please use the pact file generated by your consumer test to validate the behaviour of the service. Does it fulfill the pact? If not, why not?

4. It is also important to understand the limitations of contract testing. Can you identify any other issues with the backend service? Why would the pact not reveal them?

## The API

The API we wish to implement is as follows. All responses are to be in JSON format.

### 200 OK

`GET /is-odd/69`

```json
{
    "status": 200,
    "input": "69",
    "odd": true
}
```

`GET /is-odd/-420`

```json
{
    "status": 200,
    "input": "-420",
    "odd": false
}
```

### 400 Bad Request

`GET /is-odd`

```json
{
    "status": 400,
    "input": null,
    "error": "No input was provided"
}
```

`GET /is-odd/eight`

```json
{
    "status": 400,
    "input": "eight",
    "error": "Input is not a number"
}
```

`GET /is-odd/3.1415`

```json
{
    "status": 400,
    "input": "3.1415",
    "error": "This service only supports integers"
}
```

### 413 Request too large

`GET /is-odd/9007199254740992`

```json
{
    "status": 413,
    "input": "9007199254740992",
    "error": "Input is above MAX_SAFE_INTEGER"
}
```

`GET /is-odd/-9007199254740992`

```json
{
    "status": 413,
    "input": "-9007199254740992",
    "error": "Input is below MIN_SAFE_INTEGER"
}
```
