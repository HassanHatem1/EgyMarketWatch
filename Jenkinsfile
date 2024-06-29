pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM', 
                    branches: [[name: '*/main']], 
                    doGenerateSubmoduleConfigurations: false, 
                    extensions: [], 
                    submoduleCfg: [], 
                    userRemoteConfigs: [[url: 'https://github.com/HassanHatem1/EgyMarketWatch', credentialsId: 'hooks']]
                ])
            }
        }
        stage('Build and Push Frontend') { 
            steps {
                sh 'docker build -t hassanhatem/front .'
                // Push the Docker image to a registry
                withCredentials([usernamePassword(credentialsId: 'docker', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
                    sh 'docker push hassanhatem/front'
                }
            }
        }
        stage('Build and Push nginx') {
            steps {
                // Build the Docker image
                dir('nginx') {
                    sh 'docker build -t hassanhatem/nginx .'
                }
                // Push the Docker image to a registry
                withCredentials([usernamePassword(credentialsId: 'docker', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
                    sh 'docker push hassanhatem/nginx'
                }
            }
        }
        stage('Deploy') {
            steps {
                // Deploy the Docker image using Docker Compose
                sh 'docker-compose -f docker-compose.yml down'
                sh 'docker-compose -f docker-compose.yml pull'
                sh 'docker-compose -f docker-compose.yml up -d'
            }
        }
    }
}