#!/usr/bin/env python

import cgitb; cgitb.enable()
import cgi, os

# Required header that tells the browser how to render the text.
print "Content-Type: text/html\n"

# This tells us the URL that the user accessed
print "REQUEST_URI: " + os.environ["REQUEST_URI"]

html = open("index.html").read()

print html