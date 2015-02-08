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

mv linux-x64/ akiee-0.0.2-linux-x64/
mv linux-x32/ akiee-0.0.2-linux-x32/
mv mac-x64/ akiee-0.0.2-mac-x64/
mv windows-x64/ akiee-0.0.2-windows-x64/

tar -zcvf akiee-0.0.2-linux64.tar.gz akiee-0.0.2-linux-x64/
tar -zcvf akiee-0.0.2-linux32.tar.gz akiee-0.0.2-linux-x32/
zip -r akiee-0.0.2-osx.zip akiee-0.0.2-mac-x64/
zip -r akiee-0.0.2-win.zip akiee-0.0.2-windows-x64/
