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
        withCredentials([usernamePassword(credentialsId: 'ftp-longdesc', passwordVariable: 'FTP_PASSWORD', usernameVariable: 'FTP_USERNAME')]) {
          sh '''
            git ftp push
          '''
        }
      }
    }

  }
}