# Notes with node.js

Simple notes application using node.js. You can add, remove, get, list and edit notes.

### Prerequisites

You simply need node.js and npm

### Installing

After installing node and npm

Install npm packages

```
npm install
```

## How to use the application

How to add a note 

```
node app.js add -t='new-title' -b='new-body'
```

How to remove a note

```
node app.js remove -t='title-of-note'
```

How to read a note

```
node app.js read -t='title-of-note'
```

How to list all notes

```
node app.js list
```

How to edit notes

```
node app.js edit -t='title-of-note' -b='new-body'
```

## Built With

* [Node.js](nodejs.org) - Node.js version 10.14.1
* [NPM] (npmjs.com) - Node Package Manager
* [Lodash] (lodash.com) - A modern JavaScript utility library delivering modularity, performance & extras.
* [Yargs] (yargs.js.org) - Yargs helps you build interactive command line tools by parsing arguments and generating an elegant user interface

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [The Complete Node.js Developer Course (2nd Edition)] (https://www.udemy.com/the-complete-nodejs-developer-course-2/) - Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!