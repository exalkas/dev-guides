### task: push changes to repository

1. git pull (so that you pull any changes before you push)
2. git push branchname
	
### task: create a repository to upload your work from your machine

1. go to your GH
2. add new repo WITHOUT adding any file.
3. git push

### Task: deploy to GH pages

1. npm install gh-pages --save-dev
2. add property to the app's package.json at the top level: "homepage": "http://gitname.github.io/react-gh-pages"
3. add these to the scripts property:
```
"scripts": {

  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
4. npm run deploy

if git is not initialized:
0. create an EMPTY repo online
1. git init at local machine
2. git remote add origin https://github.com/gitname/react-gh-pages.git