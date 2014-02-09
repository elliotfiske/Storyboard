#!/usr/bin/env python

import cgitb; cgitb.enable()
import cgi, os, re

# Required header that tells the browser how to render the text.
print "Content-Type: text/html\n"

usermatch = re.search(r'(?<=/)([A-z0-9\.]*?)$', os.environ['REQUEST_URI'])
name = ''
if usermatch is None:
    name = "NOT LOGGED IN"
else:
    name = str(usermatch.group(1))
    
#print 'USERNAME: ' + name

html = open('index.html').read()

html = html.replace('USERNAME', name)

print html