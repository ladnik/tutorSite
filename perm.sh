#!/bin/bash
chmod -R o-rwx stuff
find . -type f \( -name "*.pdf" -o -name "*.tex" -o -name "*.csv" -o -name "*.S" -o -name "*.circ" \) -exec chmod o+rx {} \;
find stuff -type d -exec chmod o+rx {} \;
chmod o-r stuff
