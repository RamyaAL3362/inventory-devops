pipeline {
    agent any

    tools {
        nodejs 'Node18'
    }

    stages {
        stage('Install') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'echo Build successful'
            }
        }

        stage('Test') {
            steps {
                bat 'echo Testing successful'
            }
        }
    }
}