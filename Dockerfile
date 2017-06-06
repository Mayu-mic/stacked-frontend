FROM nginx
MAINTAINER Ryo Koizumi <koizumiryo@gmail.com>

COPY dist/ /var/www
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
