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
      }
    }

  }
}