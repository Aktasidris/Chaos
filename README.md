# Chaos Engineering Simulation

This project is a Chaos Engineering simulation using Node.js and Toxy library. It allows you to apply different chaos scenarios to a target URL and analyze the impact on response times and error rates.

## Features

- Simulate different chaos types: Latency, Abort, Slow Read, Inject Error.
- Collect and visualize response times and errors.
- Analyze the system's resilience to various failure scenarios.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/chaos-engineering-simulation.git
    cd chaos-engineering-simulation
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the server:

    ```bash
    node server.js
    ```

2. Open your browser and navigate to `http://localhost:3000`.

3. Enter the target URL and select a chaos type to apply.

4. View the results and analysis on the results page.

## Chaos Types

### 1. Latency

**Description**: Introduces artificial delays to simulate network latency.

**Expected Output**:
- Increased response times.
- The response times will vary between the specified min and max delay values.

### 2. Abort

**Description**: Simulates abrupt connection termination.

**Expected Output**:
- All requests will result in an error.
- This simulates scenarios where the connection is unexpectedly closed.

### 3. Slow Read

**Description**: Slows down the data read speed from the server.

**Expected Output**:
- Increased response times.
- The data is read slowly, simulating slow network conditions.

### 4. Inject Error

**Description**: Injects server-side errors into responses.

**Expected Output**:
- All requests will result in a server error (e.g., HTTP 500).
- This simulates scenarios where the server encounters unexpected errors.

## Example Output

### Latency

Request 1: 2305 ms
Request 2: 2381 ms
Request 3: 2269 ms
Request 4: 1451 ms
Request 5: 2063 ms
Request 6: 1582 ms
Request 7: 2794 ms
Request 8: 2810 ms
Request 9: 1351 ms
Request 10: 1142 ms

### Abort
Request 1: error
Request 2: error
Request 3: error
Request 4: error
Request 5: error
Request 6: error
Request 7: error
Request 8: error
Request 9: error
Request 10: error

### Slow Read

Request 1: 150 ms
Request 2: 160 ms
Request 3: 145 ms
Request 4: 155 ms
Request 5: 148 ms
Request 6: 165 ms
Request 7: 158 ms
Request 8: 149 ms
Request 9: 163 ms
Request 10: 152 ms

### Inject Error

Request 1: error
Request 2: error
Request 3: error
Request 4: error
Request 5: error
Request 6: error
Request 7: error
Request 8: error
Request 9: error
Request 10: error
