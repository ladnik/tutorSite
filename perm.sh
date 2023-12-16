#!/bin/bash
chmod -R o+rx ../html-data
#chmod o+rx ../html-data
find . -type f ! \( -name "*.pdf" -o -name "*.tex" -o -name "*.csv" -o -name "*.S" -name "*.circ" \) -exec chmod o+rx {} \;
