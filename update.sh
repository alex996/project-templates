for dir in */ ; do
  cd $dir

  if [ -f 'package.json' ];
  then
    echo "Updating $dir ..."
    npm update
    npm outdated
  fi

  cd ..
done
