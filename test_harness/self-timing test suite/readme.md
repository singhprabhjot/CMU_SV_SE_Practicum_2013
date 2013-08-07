CSS Operation Test Suite
________________________

This Test Suite is built using Benchmark.js to measure 
  i) the average time taken(in milliseconds) and 
  ii) 1000 operations per second, 
for applying each css operation test. 

The measured results are stored in a JSON and 

  i) used to display in charts and tables
  ii) uploaded to the test harness server for further comparsion across platforms.
  
The test suite has 18 tests in four Benchmark test 'Suites'. 

Test Suite One
1. Box-Shadow 
2. Border-Radius 
3. Radius and Shadow 
4. Opacity
5. Visibility
6. Image Resize
7. Overflow:Scroll

Test Suite Two
8. Canvas: Object rendering
9. Canvas: Object motion

Test Suite Three
10. CSS Transforms: Translate
11. CSS Transforms: Scale
12. CSS Transforms: Rotate
13. CSS Transforms: Skew
14. Transitions: width and height

Test Suite Four
15. Animation & Relayout: position:fixed
16. Animation & Relayout: position:relative
17. Animation & Relayout: requestAnimationFrame
18. Animation & Relayout: DOM Re-layout

This Test Suite also checks if the current browser/container supports the css operation being tested, 
if not supported the result is set to 0.

Note: The CSS operations are applied in general and for webkit only (i.e. moz not supported).
