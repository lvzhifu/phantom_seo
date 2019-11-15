# phantom_seo

## SEO node service based on 


 ``` 
 events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;

    server {
        listen       80;
        server_name  localhost;
        location / {
            root   html;
            index  index.html index.htm;
            if ($http_user_agent ~* "PostmanRuntime|twitterbot|facebookexternalhit|Googlebot") {
	 proxy_pass http://localhost:7777;
            }
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}
 ```

## linux chrom 安装

 ``` 
    1.cd /etc/yum.repos.d/

    2 vi google.repo
    [gogle]

    name=Google-x86_64

    baseurl=http://dl.google.com/linux/rpm/stable/x86_64

    enabled=1

    gpgcheck=0

    gpgkey=https://dl-ssl.google.com/linux/linux_signing_key.pub

    yum install google-chrome-stable
 ```

