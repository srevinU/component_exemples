pipeline {
    agent any
    tools {nodejs "22.3.0"}
    stage("Build") {
            steps {
                script {
                    echo "Building application ..."
                    sh "npm install && npm run build"
                }
            }
        }
    stages {
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
