npm i -g npm-check-updates

for dir in */ ; do
  cd $dir

  if [ -f 'package.json' ];
  then
    echo "Updating $dir ..."
    ncu -u --semverLevel major
    npm install
    npm outdated
  fi

  cd ..
done
