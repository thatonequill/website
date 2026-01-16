branch = "$(git rev-parse --abbrev-ref HEAD)"
git switch main
git merge $branch
git push
git switch $branch