(set-env!
 :source-paths    #{"src/cljs"}
 :resource-paths  #{"resources"}
 :dependencies '[[adzerk/boot-cljs          "1.7.48-6"   :scope "test"]
                 [adzerk/boot-cljs-repl     "0.2.0"      :scope "test"]
                 [adzerk/boot-reload        "0.4.1"      :scope "test"]
                 [pandeiro/boot-http        "0.6.3"      :scope "test"]
                 [org.clojure/clojurescript "1.7.122"]
                 [reagent "0.5.0"]])

(require
 '[adzerk.boot-cljs      :refer [cljs]]
 '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
 '[adzerk.boot-reload    :refer [reload]]
 '[pandeiro.boot-http    :refer [serve]])

(deftask build []
  (comp (cljs)
        ))

(deftask run []
  (comp (serve)
        (watch)
        (cljs-repl)
        (reload)
        (build)))

(deftask production []
  (task-options! cljs {:optimizations :advanced})
  identity)

(deftask development []
  (task-options! cljs {:optimizations :none :source-map true}
                 reload {:on-jsload 'knotschixx.app/init})
  identity)

(deftask dev
  "Simple alias to run application in development mode"
  []
  (comp (development)
        (run)))


