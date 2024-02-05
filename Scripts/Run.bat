@echo off
setlocal enabledelayedexpansion

echo Welcome to LC_Feed Viewer!

set /P choice=Select which LC_Feed you would like to see (1 for New, 2 for Old): 

if !choice! equ 1 (
    echo Running New LC_Feed...
    cd ../WebApp/
    call git checkout main
    call git pull
    call yarn install
    call yarn start
) else if !choice! equ 2 (
    echo Running Old LC_Feed...
    cd ../Old_LC_FEED/
    start "" "index.html"
) else (
    echo Invalid choice. Please enter 1 or 2.
)

endlocal
