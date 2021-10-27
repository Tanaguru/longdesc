pipeline {
  agent any
  stages {
    stage('deploy') {
      when {
        anyOf {
          branch 'master'
        }

      }
      steps {
        echo 'deploy...'
        sh 'ls'
        sh '''
cd /www'''
        sh 'git init'
      }
    }

  }
}