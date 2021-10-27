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
        sh 'ftp ls'
        sh '''
ftp cd /www'''
        sh 'git ftp init'
      }
    }

  }
}