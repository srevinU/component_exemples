pipeline {
    agent any
    tools {nodejs "22.3.0"}
    stages {
        stage("Build") {
            steps {
                script {
                    echo "Building application ..."
                    sh "npm install && npm run build"
                }
            }
        }
         stage("Deploy") {
            steps {
                script {
                    echo "Deploy application ..."
                    sh "chmod +x -R ${env.WORKSPACE}"
                    sh "npm run start:prod"
                }
            }
        }
    }
    
}
