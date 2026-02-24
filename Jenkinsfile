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

        stage('Start App') {
            steps {
                bat 'start /B node server.js'
            }
        }
    }
}