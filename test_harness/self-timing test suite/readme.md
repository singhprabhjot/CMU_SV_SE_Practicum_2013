<h1>CSS Operation Test Suite</h1>


This Test Suite is built using Benchmark.js to measure <br/>
  i) the average time taken(in milliseconds) and <br/>
  ii) 1000 operations per second, 
for applying each css operation test. 

The measured results are stored in a JSON and <br/>

  i) used to display in charts and tables<br/>
  ii) uploaded to the test harness server for further comparsion across platforms.<br/>
  
The test suite has 18 tests in four Benchmark test 'Suites'. 

<h3>Test Suite One</h3>
1. Box-Shadow <br/>
2. Border-Radius <br/>
3. Radius and Shadow <br/>
4. Opacity<br/>
5. Visibility<br/>
6. Image Resize<br/>
7. Overflow:Scroll<br/>

<h3>Test Suite Two</h3>
8. Canvas: Object rendering<br/>
9. Canvas: Object motion<br/>

<h3>Test Suite Three</h3>
10. CSS Transforms: Translate<br/>
11. CSS Transforms: Scale<br/>
12. CSS Transforms: Rotate<br/>
13. CSS Transforms: Skew<br/>
14. Transitions: width and height<br/>

<h3>Test Suite Four</h3>
15. Animation & Relayout: position:fixed<br/>
16. Animation & Relayout: position:relative<br/>
17. Animation & Relayout: requestAnimationFrame<br/>
18. Animation & Relayout: DOM Re-layout<br/>

This Test Suite also checks if the current browser/container supports the css operation being tested, <br/>
if not supported the result is set to 0.

Note: The CSS operations are applied in general and for webkit only (i.e. moz not supported).
