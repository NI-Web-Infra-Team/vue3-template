FROM registry.navinfo.com/library/base/nginx:stable

LABEL wuhaoyuan "wuhaoyuan11101@navinfo.com"


COPY dist/ /app/dev/dist/

COPY nginx.conf /etc/nginx/nginx.conf

