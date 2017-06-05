FROM node:6.9.0
MAINTAINER Ryo Koizumi <koizumiryo@gmail.com>

# set to JST Timezone.
RUN ln -sf /usr/share/zoneinfo/Asia/Tokyo /etc/localtime

# fix npm issue.
# see https://github.com/npm/npm/issues/9863
RUN cd $(npm root -g)/npm &&\
    npm install fs-extra &&\
    sed -i -e s/graceful-fs/fs-extra/ -e s/fs\.rename/fs.move/ ./lib/utils/rename.js

RUN npm install --global npm@4.5.0

# install
COPY package.json /app/
WORKDIR /app
RUN npm install &&\
    npm cache clean

# build
COPY . /app/
RUN npm run build

FROM nginx
COPY --from=build /app/dist /usr/share/nginx/html
