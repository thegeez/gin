# Gin

Gin is a card game implemented with Clojure, ClojureScript and Datomic.

More information at [http://thegeez.net/2014/06/12/gin_datomic.html]

### Development
This uses an in-process/in-memory only database. In the `user` namespace, through `lein repl/cider` etc.:
```
   (go) ;; to start the component system, localhost:3000 will serve the site
   (reset) ;; to reset the whole component system
```

### Running production uberjar:
```
   lein uberjar
   java -jar target/gin-<version>-standalone.jar
```

## Compiling the ClojureScript
```
   lein cljsbuild auto
```

## About

Written by:
Gijs Stuurman / [@thegeez][twt] / [Blog][blog] / [GitHub][github]

[twt]: http://twitter.com/thegeez
[blog]: http://thegeez.net
[github]: https://github.com/thegeez

## License

Copyright © 2014 Gijs Stuurman

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
