# Docker Commands

### Step 01 
#### Create DockerFIle
 In VS code Press command+Shift+P for mac & control+shift+p for windows
 and then tyoe 
    Docker: Add Docker files to workspace.
    Fill all the inputs. And this will be completed.

### Step 02 
#### Create the Image
    In terminal write this command
    docker build -t expressapp:v1 .

    for check the image is created Run 
    docker images (this will show a list of images)

### Step 03 
#### Create & Run Container
    In terminal write this command
    docker run --rm -d -p 3000:3000/tcp expressapp:v1

    To check the container is running 
    docker ps ( this will show all the list of running containers )

### Step 04 
#### Stop the Container 
    In terminal write this command 
    docker stop containerName 
    ( this will stop the running container )

    to check
    dcoker ps

### Step 05 
#### Wanted to remove the Image ?
    In terminal write this command
    docker rmi expressapp:v1


