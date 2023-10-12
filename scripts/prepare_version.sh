#!/usr/bin/env bash

function git_last_message {
  echo $(git log -1 --pretty=format:'%s')
}

main_branch="master"
branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
version_mode="patch"

last_message=$(git_last_message)
if [[ "$last_message" =~ ^([0-9]+\.){2}[0-9]+$ ]]; then
    echo "Last commit was a version generation commit, not generating again."
else
    # Checking if a version mode argument was provided
    if test -z "$1"; then
        echo "No version mode specified, using $version_mode"
    else
        version_mode=$1
        echo "Version mode: $version_mode"
    fi

    # actual version change
    echo "Generating version..." && \
    # ensures that no other commit got pushed
    git push origin ${branch} && yarn run clean:tags && git pull origin ${branch} && \
    npm version ${version_mode} && \
    git push origin ${branch} && git push origin $(git describe --abbrev=0) && \
    echo "Version generated."
fi