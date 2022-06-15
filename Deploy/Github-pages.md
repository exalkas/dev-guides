# Deploy to GitHub pages

1. install `gh-pages` to your project: `npm i gh-pages --save-dev`
2. Add `homepage` property to `package.json`: `"homepage": "https://{yourusername}.github.io"`
3. Add these two scripts to `package.json` to the scripts area: 
   1. `"deploy": "gh-pages -d publish"`
   2. `"publish": "npm run build"`
4. If not created, create a remote GitHub repository
   1. in your current project in root folder, type `git init`
   2. type this to add your github remote repo: `git remote add origin your-github-repository-url.git`
5. Deploy your app to GitHub Pages: `npm run deploy`
6. access the deployed site by going to `Settings` -> `Pages` 
   1. there you should see the `Your site is published at https://yourusername.github.io/yourreponame/`
