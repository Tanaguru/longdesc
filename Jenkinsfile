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
            git config git-ftp.url ftp.longdesc.fr/www
            git config git-ftp.user $FTP_USERNAME
            git config git-ftp.password $FTP_PASSWORD
            git ftp catchup
          '''
        }
      }
    }

  }
}