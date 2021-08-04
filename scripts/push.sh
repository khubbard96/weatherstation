#!/bin/sh

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit_website_files() {
  git checkout -b deploy
  git add build
  git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"
}

upload_files() {
  echo $GH_TOKEN
  git remote set-url origin https://${GH_TOKEN}@github.com/khubbard96/weatherstation.git > /dev/null 2>&1
  git push --quiet -u origin deploy
}

ls
setup_git
commit_website_files
upload_files
