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
        sh '''withCredentials([usernamePassword(credentialsId: \'ftp-longdesc\', passwordVariable: \'FTP_PASSWORD\', usernameVariable: \'FTP_USERNAME\')]) {
  sh(\'git ftp catchup --user $FTP_USERNAME --passwd $FTP_PASSWORD ftp://ftp.longdesc.fr/www\')
}'''
        }
      }

    }
  }