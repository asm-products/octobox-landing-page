Octobox Landing Page
====================

Octobox is a web app that helps people collect images, bookmarks and notes in a simple and visually pleasing way. It requires a Dropbox account and uses it almost exclusively for storage.

The app is live and functional! You can create an account at [http://app.useoctobox.com](http://app.useoctobox.com).

To read about current areas of focus and contributing to the project head over to the [Assembly page](https://assembly.com/octobox).

This repository 

## Prerequisites
* Node.js - Download and Install [Node.js](http://www.nodejs.org/download/). You can also follow [this gist](https://gist.github.com/isaacs/579814) for a quick and easy way to install Node.js and npm.

### Tools Prerequisites
* NPM - Node.js package manager; should be installed when you install node.js.
* Bower - Web package manager. Installing [Bower](http://bower.io/) is simple when you have `npm`:

```
$ npm install -g bower
```
* Grunt - Download and Install [Grunt](http://gruntjs.com).

```
$ npm install -g grunt-cli
```
* SASS - [SASS](http://sass-lang.com) is a CSS extension language used for styling Octobox frontend. You'll need the latest version of the SASS Ruby gem in order to build the stylesheets.

```
$ sudo gem install sass
```

## Running the project
After downloading the repo and installing these dependencies you'll need to run:

```
$ npm install 
$ bower install
```
to download all the necessary project packages. After this step is complete, run `grunt` from the project directory to watch for file changes and recompile the JavaScript and SASS file changes. `grunt` isn't responsible for firing up a local server, so you'll have to do that separately. 

## Contributing

**Note:** contributions to this project will only be accepted if they reference a design task in the respective project on [Assembly](https://assembly.com/octobox) and go through an artworking stage first or fix a bug or an issue. 

Have a look at existing projects and tasks or start a discussion about what you’d like to be working on - you can do that on the [Assembly](http://www.assembly.com/octobox/) project page. 

1. [Create a Task](https://assembly.com/octobox/wips/new) that describes what you want to do. This gives others the opportunity to help and provide feedback.
2. Fork the repo
3. Create your feature branch `git checkout -b my-new-feature`
4. Commit your changes `git commit -am 'Add some feature’`
5. Push to the branch `git push origin my-new-feature`
6. Create new Pull Request which references the Task number.

We will accept patches that:

* Don’t break existing functionality.
* Are well documented and commented.
* Don’t add unnecessary dependencies - on the frontend don't use Bootstrap or jQuery, but use Angular jQlite, Lodash, Bourbon and Neat instead. 
* Are written in strict Javascript only (no Coffeescript, sorry)

## More Information
Visit Octobox project page on [Assembly](http://www.assembly.com/octobox/).

## License
[The AGPL v3 License](http://www.gnu.org/licenses/agpl-3.0.html)

