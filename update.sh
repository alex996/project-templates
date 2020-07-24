npm i -g npm-check-updates

for dir in */ ; do
  cd $dir

  if [ -f 'package.json' ];
  then
    echo "Updating $dir ..."
    ncu -u
    npm install
  fi

  cd ..
done
