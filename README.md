#CMUSV SE Practicum 2013

This repository houses the work produced in the project: ***Mobile App Performance Challenge: Native vs. HTML5 Hybrid Apps***. The contributors are: [Aristide](https://github.com/Aristide1o), [Madhok](https://github.com/madhok), [Prabhjot](https://github.com/singhprabhjot), [Rashmi](https://github.com/RashmiDR), and [Shama](https://github.com/shamahoque).We carried out the project in the context of the [CMU Silicon Valley software engineering](http://www.cmu.edu/silicon-valley/academics/software-engineering/) [practicum course](http://www.cmu.edu/silicon-valley/academics/courses/96710.html); the sponsor is [Appception inc](http://www.appception.com/).


##Goals
The project has two goals:

1. benchmarking performance of HTML5 UI operations and optimizations in mobile user agents.
2. comparison of appearance , behavior, and performance of Hybrid Apps (WebView, UIWebView) versus Native Apps (iOS, Android).

## Project components
The project has five major components, each covering a specific scope within the gols. The componets - and their scope - are:

- Android Native App: This is Synonymous, a thesaurus app built for comparison with a hybrid counterpart. It's documented in its specific [README file](https://github.com/Aristide1o/CMUSV_SE_Practicum_2013/blob/master/Android_App/README.md).
- iOS Native App: This is Synonymous, a thesaurus app built for comparison with a hybrid counterpart. It's documented in its specific [README file](https://github.com/Aristide1o/CMUSV_SE_Practicum_2013/blob/master/iOS_app/README.md).
- Hybrid App (Android & iOS): This is Synonymous, a thesaurus app built for comparison with a hybrid counterpart. It's documented in its specific [README file](https://github.com/Aristide1o/CMUSV_SE_Practicum_2013/blob/master/Hybrid_app/README.md).
- Self-timing tests suite: This is a set of benchmarking tests exectuted in mobile browsers, and hybrid containers. It's documented in its specific [README file](https://github.com/Aristide1o/CMUSV_SE_Practicum_2013/blob/master/test_harness/self-timing%20test%20suite/readme.md).- 
- Chrome developer tools timeline test suite: This is a set of benchmarking tests measuring the speed of basic style elements in Google chrome ccross several Android devices, a mac laptop, and a windows 7 laptop. It's documented in its specific [README file](https://github.com/Aristide1o/CMUSV_SE_Practicum_2013/blob/master/test_harness/CDT_timeline_test_suite/README.md).

	- In addition to the two benchmarking components, we provide the database of the bechmarking testing results that we collected in compressed dump format [here](https://github.com/Aristide1o/CMUSV_SE_Practicum_2013/tree/master/test_harness/database_of_results). The dump file is created using 'pg_dump', to restore to a database use the following 'pg_restore' command: `pg_restore --verbose --clean --no-acl --no-owner -h localhost -U <database username> -d <destination database name> <path of the dump file>`. Replace \<field\> with the appropriate value.

