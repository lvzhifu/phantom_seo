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