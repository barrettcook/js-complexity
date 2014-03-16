js-complexity
=============

Recursively iterates over all javascript files and lists code complexity in descending order.

# Installation
```bash
git clone https://github.com/barrettcook/js-complexity.git
cd js-complexity
npm install
```

# Usage
```bash
node complexity.js /path/to/files
```

### Sample output
```bash
$ node complexity ~/src/web/coolstatic/res/js/tagged
Most cyclomatic-complex functions:
   ~/src/web/coolstatic/res/js/tagged/profile/customize.js openPanel 29
   ~/src/web/coolstatic/res/js/tagged/apps/tags.js setBrowseTagsPage 25
   ~/src/web/coolstatic/res/js/tagged/friends/list.js _renderFriends 23
   ~/src/web/coolstatic/res/js/tagged/apps/meetme.js showUser 22
   ~/src/web/coolstatic/res/js/tagged/apps/pets3/views/app.js openPage 22
   ~/src/web/coolstatic/res/js/tagged/newsfeed/item.js insertItems 21
   ~/src/web/coolstatic/res/js/tagged/apps/gifts/send.js restoreGiftFilters 20
   ~/src/web/coolstatic/res/js/tagged/mobile/pets/browsedualslider.js refresh 20
   ~/src/web/coolstatic/res/js/tagged/profile/wink.js _handleSendWink 19
   ~/src/web/coolstatic/res/js/tagged/account/hi5_migration.js pageAction 19
```

# Inspiration
* [esprima](https://github.com/ariya/esprima/blob/master/tools/list-complexity.js)
* [JSComplexity](http://jscomplexity.org/)
