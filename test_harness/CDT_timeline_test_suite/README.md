#Chrome Developer Tools Timeline test suite
This test suite includes 8 HTML files with simple UI operations. All the HTML files are designed to follow the same benchmarking workflow. Moreover they have a similar organization of code.

##Benchmarking workflow
To capture benchmarking data:

1. Open the HTML file in a browser
2. Start the chrome developer tools (CDT) and go to the timeline tab
3. Click the record circle
4. Click the `Start test` button; wwait until the message that the test is finished appears
5. Click the circle of the timeline again to stop the recording
6. Right click in the timeline window, and save the timeline dump file
7. Follow the instructions in the benchmarking [tests harness README](https://github.com/Aristide1o/appception-tahoe/blob/master/README.md) to process the timeline dump file.

##Code organization
Each test uses javascript to apply and unapply a style to a DOM element in a loop 10 times. The test begins when the `Start test` button is clicked, and ends after 10 iterations. The relevant benchmarking data is the speed of the browser events triggered by the instructions to apply a style. At the beginning of each "apply" iteration a call to the `markTimeline` function of the CDT logger marks the exact beginning of the test operations in that iteration in the timeline record. Similarly, at the end of the iteration a call to the `markTimeline` function marks the end of the operations.