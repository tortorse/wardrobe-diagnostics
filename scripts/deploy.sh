set -e
if [[ $TRAVIS_BRANCH == "master" && $TRAVIS_PULL_REQUEST == "false" ]]; then

rm -rf dist

git config --global user.email "tortorse@gmail.com"
git config --global user.name "tortorse"

npm run build

echo -e "demo page genarated\n"

cd dist

echo $PWD

ls

echo -e "git init"

git init
echo -e "Starting to git-add \n"

git add -f .
echo -e "Starting to git-commit\n"
git commit -m 'chore: deployed demo page  by Travis CI'

git push --force --quiet "https://${GITHUB_TOKEN}@github.com/tortorse/wardrobe-diagnostics.git" master:gh-pages

echo "demo page done."
else
 echo "Skipped updating demo pages, because build is not triggered from the master branch."
fi;
