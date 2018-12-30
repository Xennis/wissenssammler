# Wissenssammler

### Run the site locally

Run the Hugo server and open the URL that it outputs
```sh
hugo server --buildDrafts
```

### Publish the site to GitHub pages

The script runs Hugo, creates a commit in the `gh-pages` branch and pushes it
```sh
./publish_to_ghpages.sh
```
