FROM nginx
MAINTAINER Ryo Koizumi <koizumiryo@gmail.com>

ADD dist /usr/share/nginx/html/

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
