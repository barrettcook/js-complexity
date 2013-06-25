js-complexity
=============

Recursively iterates over all javascript files and lists code complexity in descending order.

# Installation
```bash
git clone git@github.tagged.com:bcook/js-complexity.git
cd js-complexity
npm install
```

# Usage
```bash
node complexity.js /path/to/files
```

### Sample output
```bash
$ node complexity /var/html/coolstatic/res/js/tagged
Most cyclomatic-complex functions:
   /var/html/coolstatic/res/js/tagged/profile/customize.js openPanel 29
   /var/html/coolstatic/res/js/tagged/apps/tags.js setBrowseTagsPage 25
   /var/html/coolstatic/res/js/tagged/friends/list.js _renderFriends 23
   /var/html/coolstatic/res/js/tagged/apps/meetme.js showUser 22
   /var/html/coolstatic/res/js/tagged/apps/pets3/views/app.js openPage 22
   /var/html/coolstatic/res/js/tagged/newsfeed/item.js insertItems 21
   /var/html/coolstatic/res/js/tagged/apps/gifts/send.js restoreGiftFilters 20
   /var/html/coolstatic/res/js/tagged/mobile/pets/browsedualslider.js refresh 20
   /var/html/coolstatic/res/js/tagged/profile/wink.js _handleSendWink 19
   /var/html/coolstatic/res/js/tagged/account/hi5_migration.js pageAction 19
```
