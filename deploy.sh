#!/bin/bash

echo "Start"

npm run build

echo "Build done"

cp CNAME /build/CNAME

rm -rf ./cv

git clone git@github.com:VictorTrapenok/cv.git -b gh-pages

mv ./cv/.git ./build
git add .
git commit -m "Deploy"
git push
# mkdir /tmp/viktor-t
# cd /tmp/viktor-t
# cp -r ./build /tmp/viktor-t
# cp CNAME /tmp/viktor-t

# cd /tmp/viktor-t
