This application contains a list of 17000+ english words and their synonyms.

The master-detail view is implemented with Universal xib for both iPhone and iPad. Automatic reference counting is used for memory management. 

The list of words are loaded in table-view with vertical scroll enabled.

The synonyms are loaded into ScrollView. Every time a word is selected, a new UIScrollView intiated with UILabel representing the synoyms. A circular horizontal view is for showing synonyms. After the last UILabel in UIScrollView, the focus is shifted back to first UILabel. The inverse happens when scrolling in backward direction, therby making a two way circular loop.
