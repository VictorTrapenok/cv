#!/bin/bash

echo "Start"

rm -rf ./build

# npm run build

metricsStr=$(cat metrics.html)
mainStr=$(cat build/index.html)

echo "${mainStr/<\/head>/"$metricsStr</head>"}" >build/index.html

echo "Build done"

rm -rf ./cv

git clone git@github.com:VictorTrapenok/cv.git -b gh-pages

mv ./cv/.git ./build
rm -rf ./cv
cd build
echo "viktor-t.com" >CNAME
git add .
git commit -m "Deploy"
git push

rm -rf ./build
echo "Deploy done"
