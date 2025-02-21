if npm run build; then
    ssh server@s.maxrimlinger.com "rm -f /home/server/apache/htdocs/index.html; rm -rf /home/server/apache/htdocs/assets"
    scp -r dist/* server@s.maxrimlinger.com:/home/server/apache/htdocs
    scp -r /home/max/sync/work/Resume/resume.pdf server@s.maxrimlinger.com:/home/server/apache/htdocs/resume.pdf
fi
