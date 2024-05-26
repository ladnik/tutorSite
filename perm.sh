#!/bin/bash
chmod o-rx stuff
find . -type f \( -name "*.html" -o -name "*.pdf" -o -name "*.tex" -o -name "*.csv" -o -name "*.S" -o -name "*.circ" -o -name "*.c" -o -name "*.asm" \) -exec chmod o+rx {} \;
find stuff -type d -exec chmod o+rx {} \;
