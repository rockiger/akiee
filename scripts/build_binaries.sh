# Script for building Akiee binaries
# Usage: run from base dir: ./scripts/build_binaries.sh

# TODO build with Web2Executable

# copy libudev.so.0 and akiee-script to linux64 and linux63
cp libudev.so.0-64 ./dist/Akiee/linux-x64/libudev.so.0
cp libudev.so.0-32 ./dist/Akiee/linux-x32/libudev.so.0
cp akiee ./dist/Akiee/linux-x32/
cp akiee ./dist/Akiee/linux-x64/

# create archives for download
cd ./dist/Akiee/
tar -zcvf akiee-0.0.2-linux64.tar.gz linux-x64/
tar -zcvf akiee-0.0.2-linux32.tar.gz linux-x32/
zip -r akiee-0.0.2-osx.zip mac-x64/
zip -r akiee-0.0.2-win.zip windows-x64/
