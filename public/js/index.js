function showChaosInfo() {
    const chaosType = document.getElementById('chaosType').value;
    const chaosTypeTitle = document.getElementById('chaos-type-title');
    const infoBox = document.getElementById('chaosInfo');
    const description = document.getElementById('chaosDescription');
    const output = document.getElementById('chaosOutput');

    const chaosInfo = {
        latency: {
            title:"About Latecy",
            description: 'Latency: Introduces artificial delays to simulate network latency.',
            output: `Request 1: 2305 ms\nRequest 2: 2381 ms\nRequest 3: 2269 ms\nRequest 4: 1451 ms\nRequest 5: 2063 ms\nRequest 6: 1582 ms\nRequest 7: 2794 ms\nRequest 8: 2810 ms\nRequest 9: 1351 ms\nRequest 10: 1142 ms`
        },
        abort: {
            title:"About Abort",
            description: 'Abort: Simulates abrupt connection termination.',
            output: `Request 1: error\nRequest 2: error\nRequest 3: error\nRequest 4: error\nRequest 5: error\nRequest 6: error\nRequest 7: error\nRequest 8: error\nRequest 9: error\nRequest 10: error`
        },
        slowRead: {
            title:"About Slow Read",
            description: 'Slow Read: Slows down the data read speed from the server.',
            output: `Request 1: error\nRequest 2: error\nRequest 3: error\nRequest 4: error\nRequest 5: error\nRequest 6: error\nRequest 7: error\nRequest 8: error\nRequest 9: error\nRequest 10: error`
        },
        injectError: {
            title:"About İnject Error",
            description: 'Inject Error: Injects server-side errors into responses.',
            output: `Request 1: error\nRequest 2: error\nRequest 3: error\nRequest 4: error\nRequest 5: error\nRequest 6: error\nRequest 7: error\nRequest 8: error\nRequest 9: error\nRequest 10: error`
        }
    };

    if (chaosType) {
        chaosTypeTitle.textContent = chaosInfo[chaosType].title;
        description.textContent = chaosInfo[chaosType].description;
        output.textContent = chaosInfo[chaosType].output;
        infoBox.style.display = 'block';
    } else {
        infoBox.style.display = 'none';
    }
}