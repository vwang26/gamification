pipeline {
  agent {
    label "jenkins-nodejs14x"
  }
  options {
    disableConcurrentBuilds()
    buildDiscarder logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '', numToKeepStr: '20')
  }
  environment {
    ORG = 'massmutual'
    APP_NAME = 'hello-blueprint'
    CHARTMUSEUM_CREDS = credentials('jenkins-x-chartmuseum')
  }
  stages {
    // stage('Run unit tests') {
    //   when {
    //     anyOf {
    //       branch "build/*"
    //       branch 'develop'
    //     }
    //   }
    //   steps {
    //     container('nodejs') {
    //       script {
    //         // Install your dependencies for unit testing
    //         m10.unitTests(script: 'npm run test:ci', attachToJira: true, pathToFile: 'unit_test_results.log')
    //       }
    //     }
    //   }
    // }
    stage('Feature Branch Build & Deploy') {
      when {
        anyOf {
          branch "build/*"
        }
      }
      environment {
        PREVIEW_VERSION = "0.0.0-SNAPSHOT-$BRANCH_NAME-$BUILD_NUMBER".replaceAll('/','-')
        PREVIEW_NAMESPACE = "$APP_NAME-$BRANCH_NAME".toLowerCase()
        HELM_RELEASE = "$PREVIEW_NAMESPACE".toLowerCase()
        SUB_DOMAIN = m10.generateUrl()
      }
      steps {
        container('nodejs') {
          script {
            m10.previewBuild()
          }
          script {
            m10.previewDeploy()
          }
        }
      }
    }
    stage('Build Release') {
      when {
        anyOf {
          branch 'release'
          branch 'develop'
        }
      }
      steps {
        container('nodejs') {
          script {
            m10.build()
          }
        }
      }
    }
    stage('Promote to Environments') {
      when {
        anyOf {
          branch 'release'
          branch 'develop'
        }
      }
      steps {
        container('nodejs') {
          script {
            m10.deploy()
          }
        }
      }
    }
  }
  post {
    always {
      cleanWs()
    }
  }
}
