This application contains a list of 17000+ english words and their synonyms.

The Android appication is developed as a ListView. Initially, on Application start,
500 words are loaded in the list view. The words are loaded as the users scrolls down. 
Every scroll event will add 100 words to the list.

On clicking each item in the list view, the synonyms are displayed. The synonyms are loaded using HashMap
datastructure. The hashMap is built dynamically as and when a word is loaded in the listView.
The synonyms are loaded using the Page Adpapter. PagerAdapter is more general than the adapters used for AdapterViews. Instead of providing a View recycling mechanism directly ViewPager uses callbacks to indicate the steps taken during an update.

The synonyms page is designed as a infinte view page. On scrolling to the end of the synonym list, the page is wrapped around to make it look like infinite scrolling.
