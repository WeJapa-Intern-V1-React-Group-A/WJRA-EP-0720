
## Rules on Collaboration

Please follow these steps to collaborate on this project. Adhere strictly to these rules. This is very important so that we don’t break things.

*Fork the repository. 
*Clone the fork to your local machine
*Work, commit and push to your fork. 
*When you are done, submit a pull request (PR) so that your code can be added to the repository

*Please use comments!* 

**Always update your fork before you submit your code (via a PR) to prevent conflicts. **
It is recommended to work on a different branch other than master. 
Name the branch you are working on after your slack username. *e.g. $ git checkout -b salvador*

### How to update your fork ###

From your command line, configure a remote that points to WJRA-EP-0720 as the upstream repository. 

1. First check your current remotes, run

*$ git remote -v*

You should get this result: 

> origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
> origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)

2. Next, specify a new remote upstream repository that will be synced with the fork.

*$ git remote add upstream https://github.com/WeJapa-Intern-V1-React-Group-A/WJRA-EP-0720.git*


3. Then ceck that the repo has been added to your remote

*$ git remote -v*

You should get this output

> origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
> origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)
> upstream  https://github.com/WeJapa-Intern-V1-React-Group-A/WJRA-EP-0720.git (fetch) 
> upstream  https://github.com/WeJapa-Intern-V1-React-Group-A/WJRA-EP-0720.git (push)

After this you can merge WJRA-EP-0720 with your forked repo (local) 

Follow the instructions here to do this- https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork

After merging your repo, push from your local to your fork to update it. e.g. *$ git push origin master*

If you have any questions, don’t hesitate to ask. Thanks. 

## Docs

Tasks tracker: https://docs.google.com/spreadsheets/d/1M018z2wu7U4IQ8zKculYHpvhNN-9NwLpaVvhleoWlyY/edit?usp=sharing

Idea sharing: https://docs.google.com/document/d/1EVp2QnToMPOJ_txocJo0hv5eRErgEN9czhn-wkYXPLs/edit?usp=sharing

## Contributors

 @SalvadorLekan, @Lequte, @Caleb-Omoijuanfo, @Abdulmuqit, @Femi, @Femzykel, @FitzGerald Kachi, @Raji Mustapha, @segun.em, @tumise

## Dependencies installed

#### Bootstrap reactstrap ####
It is used for styling visit https://reactstrap.github.io for usage and documentation.

#### react-icons
Used to add icons to project visit https://react-icons.github.io/react-icons/ for usage and documentation.

#### firebase 
It is used for managing authentication and database

#### react-router-dom
For easy routing 

#### redux react-redux
For state management


