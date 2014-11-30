# build with grunt
grunt
# copy libudev.so.0 and akiee-script to linux64 and linux63
cp libudev.so.0-64 ./dist/Akiee/linux64/libudev.so.0
cp libudev.so.0-32 ./dist/Akiee/linux32/libudev.so.0
cp akiee ./dist/Akiee/linux32/
cp akiee ./dist/Akiee/linux64/

# create archives for download
cd ./dist/Akiee/
tar -zcvf akiee-0.0.1-linux64.tar.gz linux64/
tar -zcvf akiee-0.0.1-linux32.tar.gz linux32/
zip -r akiee-0.0.1-osx.zip osx/
zip -r akiee-0.0.1-win.zip win/
