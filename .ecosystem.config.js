module.exports = {
    apps: [
      {
        name: "rwt-ecommerce",
        script: "npm",
        args: "run dev",
        watch: true // optional: restarts the process if files change
      }
    ],
    //   deploy : {
    //     production : {
    //       user : 'SSH_USERNAME',
    //       host : 'SSH_HOSTMACHINE',
    //       ref  : 'origin/master',
    //       repo : 'GIT_REPOSITORY',
    //       path : 'DESTINATION_PATH',
    //       'pre-deploy-local': '',
    //       'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
    //       'pre-setup': ''
    //     }
    //   }
};
