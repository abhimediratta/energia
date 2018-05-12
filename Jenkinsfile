pipeline {
  agent {
    label 'fedora'
  }

  stages {
    stage ('Build') {
      steps {
        sh 'npm install'
        sh 'npm run build'

        if(env.CHANGE_ID) {
          sh 'echo PR raised'
        }
      }
    }

    stage ('DeployToS3') {
      when {
        expression { env.BRANCH_NAME == 'master' }
      }
      steps {
        sh 'aws s3 sync build s3://energia.in --acl public-read --delete --cache-control "max-age=31104000" --metadata-directive REPLACE'
      }
    }

  }
}
