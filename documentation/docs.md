# Documentation

## Main file structure

The main website is stored in `docs` folder. The github repo uses the `docs` folder as the root folder for the web document. 

In `docs` there are 3 main files/folders.

- `index.html`: the main HTML file, holds the website structure, including every paragraph location and image. DOES NOT HOLD TEXT DATA. Text data is in `docs/scripts/languages.js`.

- `media` folder: stores all photos. Inside, they are separated into a folder for each page on the website. The `placeholdercontent` folder in `media` is only for placeholder photos and no photos in final website should refer to any files in `docs/media/placeholdercontent`.

- `scripts` folder: stores all scripts.

- `stylesheets` folder: stores all stylesheets. Inside, `mainStyle.css` is for style data of the main website frame (top bar, navigation buttons, background etc.; the stuff that stays the same between each page on the website.) Text formatting data are also in `mainStyle.css`. There is one stylesheet for every webpage, and classes/ids used for every HTML object are named with convention [page name]\_[specific name of object], so for example, a "heading1" class for "home" page specifically would be called `home_heading1`. Also, in `mainStyle.css`, the format "nav\_[specific name]" is for navigation buttons. This keeps all style references organised.

When changing names of files, remember to update references in `index.html`!

## Scripts

### 1. languages.js

This script controls the language button on the top right, and all text and translations.

When website loads, a function is run which injects text into each html object, based on their id. So, every text box needs a unique id so that text can be correctly assigned. Divs for news articles are also algorithmically generated here. This is so translations are more manageable for people who can't code.

For news texts, instead the data for each news entry is stored in `newsData.js`. For non-news texts, its data is stored in `languages.js`, and each piece of text is assigned data by the dictionary `textContents` with each entry in the format:

```
object_id: [
    "english text",
    "traditional chinese text",
    "simplified chinese text"
],
```

So for an example object `nav_members`, the text is (or was, if it changed):

```
nav_members: [
    "Our team",
    "成員",
    "成员"
],
```

### 2. membersData.js

This is for the data of members of each department. The div that holds the department boxes is a flexbox div with id `departments_frame`. In `index.html`, this div is empty because the department data is algorithmically generated. Otherwise it would be a nightmare to update. The code for generating those objects is in `navigation.js`.

`membersData.js` is just a dictionary that holds the id to be assigned to each department box, and a list of the members. The format for an entry is:

```
{
    id: "id of department",
    departmentMembers: [
        "person 1",
        "person 2",
        "person 3",
        ...
    ],
},
```

The id assigned for each department should match `languages.js` data. 

Note: please can someone rewrite this entire system for the members list, because this code is a nightmare.

### 3. navigation.js

This script controls the top bar's navigation buttons, and the button on the top left to show/hide the top bar.

Each page on the website is shown or hidden by setting the style's display value. For example, the mission page is hidden by:

`missionPage.style.display = "none";`

And shown by:

`membersPage.style.display = "block";`

The top bar showing/hiding system works by vertically shifting the main div which holds all objects underneath the top bar. And showing/hiding the top bar's objects using a similar method.

Top bar's background color gets set to `transparent` when top bar is hidden, and set to the placeholder color scheme color. So when choosing website color scheme, make sure to also update the color data in the code of `navigation.js`.

This script also references `membersData.js` to build boxes that hold the names of each member of each department.

### 4. newsData.js

This is data for `languages.js` for the news page to load each news article. The articles are loaded in order in the `newsData.js` file's array `newsText`, top to bottom. The format for an article is:

```
{
    date: "the date",
    title: {
        english: "english title",
        tradChinese: "traditional chinese title",
        simpChinese: "simplified chinese title"
    },
    text: {
        english: "english main body text",
        tradChinese: "traditional chinese main body text",
        simpChinese: "simplified chinese main body text"
    }
},
```

So, an example is:

```
{
    date: "Aug 18 2026",
    title: {
        english: "Hello world!",
        tradChinese: "你好世界！",
        simpChinese: "你好世界！"
    },
    text: {
        english: "Main body text",
        tradChinese: "新聞條目的正文",
        simpChinese: "新闻条目的正文"
    }
},

```

No id needs to be assigned, and translations DO NOT need to be added into `textContents` in `languages.js`.