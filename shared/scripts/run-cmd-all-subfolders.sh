#!/bin/bash

FOLDER=$1
CMD=$2

if [ "$FOLDER" == "" ] || [ "$CMD" == "" ]; then
    echo "Usage $0 [base folder] [command to be run on all subfolders from base folder]"
    exit 1
fi

echo "$(cd "$(dirname "$1")"; pwd)/$(basename "$1")"
echo "Running '$CMD' on all subfolders of '$FOLDER':"

function runCommand() {
    for d in ./*/ ; do /bin/sh -c "echo '' && echo '$d' && cd '$d' && $@"; done
}

cd $FOLDER
runCommand "$CMD"

