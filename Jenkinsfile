pipeline {
  agent {
    label 'fedora'
  }

  options {
    timestamps()
    skipDefaultCheckout()      // Don't checkout automatically
  }

  stages {
    stage ('Build') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }

    stage ('DeployToS3') {
      when {
        expression { env.BRANCH_NAME == 'master' }
      }
      steps {
        sh 'aws s3 sync build s3://energia.in --acl public-read --delete --cache-control 'max-age=31104000' --metadata-directive REPLACE'
      }
    }

  }
}
