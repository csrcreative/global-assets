#!/bin/bash

#Arguments are accessed inside a script using the variables $1, $2, $3, etc., where $1 refers to the first argument, $2 to the second argument, and so on.

if [ $1 ]
then
    echo Starting project $1
    npm run start:$1
else
    echo No project name passed. Please start a project by typing: npm start {project name}
fi