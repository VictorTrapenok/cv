#!/bin/bash

echo "Start"

npm run build

echo "Build done"

rm -rf ./cv

git clone git@github.com:VictorTrapenok/cv.git -b gh-pages

mv ./cv/.git ./build
rm -rf ./cv
cd build
echo "viktor-t.com" >/build/CNAME
git add .
git commit -m "Deploy"
git push

cd ..
rm -rf ./build
echo "Deploy done"
