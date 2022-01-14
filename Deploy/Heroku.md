# Deploy a Client - Server App to Heroku

**MUST**: use heroku login for a client server app

**Make sure your server includes the following lines** at the **END** of your server file: 

```
app.use(express.static('client/build'));

if( process.env.NODE_ENV === 'production' ) {

    const path = require('path');

    app.get('/*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));

}
```

### STEPS:

1. Create a Heroku app from your Heroku Dashboard. 
2. Write down the app name - you will need it at step #5
3. Download Heroku CLI from here:\
 https://devcenter.heroku.com/articles/heroku-command-line \
 and install it
2. FROM A WINDOWS terminal (or Linux) not from a VS Code terminal:  
`heroku login`
3. if there is not git initialized in the project, execute the following 3 commands:   
   
   `git init` \
   `git add .`\
   `git commit -m "first commit"`
4. if you need to use main branch, then type the following: \
`git checkout -b main` \
`git branch -D master` to delete master branch

5. then type the following command:\
 `heroku git:remote -a nameoftheappinheroku`
6. and then the following command:\
`git push heroku main` in case you are using main branch or\
`git push heroku master` in case you are using master branch

---

### When all these steps are completed then ADD to Heroku ANY ENV VARIABLES your project may use
---

After successful deployment, every time you will be applying changes to your project, you will need to update your git and then `git push heroku master` 

