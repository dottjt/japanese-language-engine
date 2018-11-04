****## On VPS
- sudo curl -sS https://get.docker.com/ | sh

To test:
- sudo docker run hello-world

- sudo systemctl enable docker <!-- automatically start on reboot -->
- sudo groupadd docker <!-- give non-root access i.e. you don't need sudo to run -->
- sudo usermod -aG docker $USER <!-- give non-root access i.e. you don't need sudo to run -->

To test:
- docker run hello-world

Install docker compose:
- sudo -i
- curl -L https://github.com/docker/compose/releases/download/1.21.2/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
- chmod +x /usr/local/bin/docker-compose

This is where we have to do all the 

- docker run -d --name=apache -p 8080:80 -v

<!-- https://blog.ssdnodes.com/blog/getting-started-docker-vps/ -->

## Run

- docker-compose up　--no-deps　-d
- docker ps

## Client
- docker build -t watashi-client ./watashi-client
- docker run --rm -d -p 80:80 watashi-client
<!-- - docker run -it -p 5000 watashi-client -->

## Nginx
- docker build -f ./infrastructure/docker/DockerfileNginx -t watashi-nginx ./watashi-nginx
- docker run -it -p 80 watashi-nginx

## NOTES:
- Digital Ocean will do docker things 
https://medium.com/@jmarhee/create-a-docker-based-service-on-digitalocean-with-docker-compose-44fa6e8f31a9
- It appears that 

### Docker Swarm (won't be needed because I'm not using multiple hosts)

- docker swarm init
- docker stack deploy --compose-file docker-compose.yml haproxy

Docker Swarm - Docker Machine - Docker Engine 

$ docker build -t dottjt/watashi-client-nginx .

# Good article for load balancing with Nginx
- https://auth0.com/blog/load-balancing-nodejs-applications-with-nginx-and-docker/