# CPSC 310 D0 Repository

This is the base repository for CPSC310 Deliverable 0. This is an individual deliverable. Please keep your repository private.

The [course webpage](https://github.com/ubccpsc/310/tree/2017jan) is your best resource for additional details about the project, AutoTest, and the specific requirements of each project deliverable. These resources will be frequently updated as the term progresses.

## Configuring your environment

To start using this project, you need to get your computer configured so you can build and execute the code. To do this, follow these steps; the specifics of each step (especially the first two) will vary based on which operating system your computer has:

1. Install git (you should be able to execute ```git -v``` on the command line).

1. Install Node, which will also install NPM (you should be able to execute ```node -v``` and ```npm -v``` the command line).

1. Install Yarn using NPM (```sudo npm install -g yarn``` on OS X / Linux). You should be able to execute ```yarn -V``` afterwards.

1. Clone the project: ```git clone git@github.com:CS310-2017Jan/cpsc310-d0_XXX.git``` (where ```XXX``` is your GitHub id). You can also clone the repo by visiting your project in GitHub and getting the clone target by clicking on the green button on your project repository.

## Project commands

Once your project is configured you need to further prepare the project's tooling and dependencies. In the project folder:

1. ```yarn run clean```

1. ```yarn run configure```

1. ```yarn run build```

If you use Windows; instead try:

1. ```yarn run cleanwin```

1. ```yarn run configurewin```

1. ```yarn run build```

### Executing the unit test suite

The sample project ships with some automated unit tests. These commands will execute the suites:
 
* Test: ```yarn run test``` (or ```yarn test```)
* Test coverage: ```yarn run cover``` (or ```yarn run coverwin``` if you use Windows). HTML reports can be found: ```./coverage/lcov-report/index.html```

You can also run the tests as a Mocha target inside your favourite IDE (WebStorm and VSCode both work well and are free for academic use); some students are also using Atom and Cloud9 (although this will require a bit of fiddling since it runs in the cloud).

### Executing the private test suite

To invoke the private suite, add a ```@CPSC310Bot``` mention to any commit in your main branch in GitHub. Remember: these are rate limited so choose your commits wisely. Additional details can be found in the AutoTest documentation.

## Developing your deliverable

You will have to re-compile the TypeScript code after any edit. This can be done with ```yarn run build``` to build the system and get it ready to execute. New unit tests can be written and added to ```/test```. As long as the tests end in ```Spec.ts``` they will be executed automatically when you run ```yarn run test```.

### Running and testing from an IDE

While these instructions are for WebStorm, other IDEs (e.g., VSCode, Atom, etc.) and editors (e.g., Sublime) should be similar, or will at least be compatible with the command line options described above.

To test the system in WebStorm you will need to configure run targets. Go to the ```Run->Edit Configurations``` and tap on the ```+``` and then ```Mocha```. Point the 'Test Directory' file argument to ```test/```.


