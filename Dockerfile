FROM node

LABEL maintainer="pawlakpiotr@sampleemail.com"

RUN npm update \
	&& npm install -g @angular/cli \
	&& npm install --global lite-server
	
COPY paper-rock-scissors-app /home/paper-rock-scissors-app

WORKDIR "/home/paper-rock-scissors-app"

RUN npm install --save-dev @angular-devkit/build-angular \
	&& npm install @angular/compiler \
	&& npm install @angular/compiler-cli \
	&& npm link \
	&& ng build --prod
	
EXPOSE 3000

CMD lite-server --baseDir="dist/paper-rock-scissors-app"
