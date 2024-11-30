#!/usr/bin/env python3

import subprocess
import re

REGEXTYPE = "sed"
WEEK = 7

allowlist = [
    "\.",
    ".*/*.html",            # html files
    ".*/script\.js",        # js script for site
    ".*/css/*",          
    ".*/css/.*",            # css stylesheets
    ".*/assets/*",
    ".*/assets/.*",         # site resources
    ".*/stuff/*",
    
    ".*/stuff/era/*",
    ".*/stuff/era/resources/.*",
    #".*/stuff/era/era_slides_w\(0[1-9]\|1[0-4]\).*"   
    ".*/stuff/era2\?/era2\?_slides_w0[1-"+str(WEEK)+"].*",          # all slides + texs up to week n
    ".*/stuff/era2\?/era2\?_slides_w10.*",                          # additional slides + texs
    ".*/stuff/era2\?/era2\?_tutor0[1-"+str(WEEK-1)+"]_clean\.pdf",  # writeups up to week n-1
    ".*/stuff/era2\?/era2\?_tutor10_clean\.pdf",                    # additional writeups
    ".*/stuff/era2\?/era2\?_quiz_w0[1-"+str(WEEK-1)+"].*",          # all quizzes up to week n-1
    ".*/stuff/era2\?/w0[1-"+str(WEEK-1)+"]_code/*",                   # all code dirs up to week n-1
    ".*/stuff/era2\?/w0[1-"+str(WEEK-1)+"]_code/.*",
    ".*/stuff/era2\?/w0[1-"+str(WEEK-1)+"]_circuits/*",               # all circuit dirs up to week n-1
    ".*/stuff/era2\?/w0[1-"+str(WEEK-1)+"]_circuits/.*" ,       
    
    ".*/stuff/gra/*",  
    ".*/stuff/gra/.*",      # gra files
    
    ".*/bn_.*"              # bonus files
]
denylist = [
    ".*/\.git/*",           # .git parent dirs
    ".*/\.git/.*",          # files in .git dirs
    ".*/\.gitignore",
    ".*/README.md",
    ".*/perm\.sh",
    ".*/perms\.py",
    
    ".*/stuff/era/era_slides_w0"+str(WEEK)+".*",                   # ordering between era and era2 changed
    ".*/stuff/era/era_tutor0"+str(WEEK-1)+"_clean\.pdf",
    ".*/stuff/era/w0"+str(WEEK-1)+"_code/.*",
    ".*/stuff/era/w0"+str(WEEK-1)+"_circuits/.*"
    ]

allowperms = "o+rx"
denyperms = "o-rwx"

def main():   
    print("Adding all permissions for owner")
    cmd =  ["find", ".", "-exec", "chmod", "u+rwx",  "{}", ";"]
    subprocess.run(cmd)
    
    print("Removing other write permissions for all files")
    cmd =  ["find", ".", "-exec", "chmod", "o-w",  "{}", ";"]
    subprocess.run(cmd)

    print(f"Setting permissions for objects in allowlist: {allowperms}")
    for regobj in allowlist:
        cmd =  ["find", ".", "-regextype", REGEXTYPE, "-regex", regobj, "-exec", "chmod", allowperms,  "{}", ";"]
        subprocess.run(cmd)

    print(f"Setting permissions for objects in denylist: {denyperms}")
    for regobj in denylist:
        cmd =  ["find", ".", "-regextype", REGEXTYPE, "-regex", regobj, "-exec", "chmod", denyperms,  "{}", ";"]
        subprocess.run(cmd)

    print("Done!")

if __name__ == "__main__":
    main()

