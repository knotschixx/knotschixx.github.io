(ns knotschixx.app
  (:require [reagent.core :as reagent :refer [atom]]
             [clojure.data :as d]))

(def cubesize 6)

(def nums (->> cubesize (* 2) (+ 1) (range 2)))

(def heart "\u2764")

(defn nums->fields
  ([nums] (nums->fields nums false))
  ([nums reverse?]
    (conj (vec (if reverse? (reverse nums) nums)) heart)))

(def fields
  {:red (nums->fields nums)
   :yellow (nums->fields nums)
   :green (nums->fields nums true)
   :blue (nums->fields nums true)})

(def colors
  {:red {:reversed false}
   :yellow {:reversed false}
   :green {:reversed true}
   :blue {:reversed true}})

(def init-checked
  {:red #{} :yellow #{} :green #{} :blue #{}})

(defonce app-state (atom {:fields fields
                          :checked init-checked
                          :failures 0}))

(def undo-list (atom nil))

(defn some-component []
  [:div
   [:h3 "I am a component!"]
   [:p.someclass
    "I have " [:strong "bold"]
    [:span {:style {:color "blue"}} " and red"]
    " text."]])

(defn checked? [color number]
  (boolean (contains? (-> @app-state :checked color) number)))

(defn checkable? [color number]
  (let [reversed? (-> colors color :reversed)
        checked-set (->> @app-state :checked color)
        max-checked (or
                     (apply (if reversed? min max) checked-set)
                     (if reversed? 999999 0))
        comperator-fn (if reversed? < >)
        count-checked (count checked-set)
        is-last? (-> @app-state :fields color reverse rest first (= number))]
    (and (comperator-fn number max-checked)
         (not (and is-last? (< count-checked 5)))
         (not= number heart))))


(defn numcell [col n]
  (let [checkable? (checkable? col n)
        checked? (checked? col n)
        classes {"num " true
                 "crossed " checked?
                 "crossable " checkable?}]
    [:span {:class (apply str (keys (filter val classes)))
            :key (str "numcell-" col "-" n)
          :on-click #(when checkable? (swap! app-state update-in [:checked col] conj n))}
   n]))

(defn row [color]
  [(keyword (str "div.row." (name (first color)))) {:key (str "row-" (first color))}
   (doall (map (partial numcell (first color)) (second color)))])

(defn undo []
  (let [undos @undo-list]
    (when-let [old (first undos)]
      (reset! app-state old)
      (reset! undo-list (rest undos)))))

(defn new-game []
  (swap! app-state assoc :checked init-checked)
  (swap! app-state assoc :failures 0)
  )

(defn sum [c]
  (reduce + c))

(defn calc-color-score [numbers]
  (sum (range 1 (inc (count numbers)))))

(defn calc-score [checked-fields failured]
  (- (sum (map #(calc-color-score %) (vals checked-fields)))
     (* failured 5)))

(defn show-score [checked-fields failured]
  [:h1 (calc-score checked-fields failured)])


(defn click-failure [n]
  (.log js/console (str n))
  (swap! app-state assoc :failures n))

(defn failures [failured]
  (.log js/console (str failured))
  [:div.failures
   [(keyword (str "span.failure" (when (> failured 0) ".checked"))) {:on-click (when (<= failured 0) (partial click-failure 1))}]
   [(keyword (str "span.failure" (when (> failured 1) ".checked") )) {:on-click (when (<= failured 1) (partial click-failure 2))}]
   [(keyword (str "span.failure" (when (> failured 2) ".checked") )) {:on-click (when (<= failured 2) (partial click-failure 3))}]
   [(keyword (str "span.failure" (when (> failured 3) ".checked") )) {:on-click (when (<= failured 3) (partial click-failure 4))}]

   ])

(defn calling-component []
  (add-watch app-state ::undo-watcher
             (fn [_ _ old-state _]
               (swap! undo-list conj old-state)))
  (add-watch app-state ::diff-watcher
             (fn [_ _ old-state new-state]
               (if-let [changed (second (d/diff (:checked old-state) (:checked new-state)))]
                 (let [color (-> changed keys first)
                       number (-> changed vals first first)
                       is-last? (-> @app-state :fields color reverse rest first (= number))]
                   (when is-last?
                     (swap! app-state update-in [:checked color] conj heart))))))
  [:div12
   (doall (map row (:fields @app-state)))
   [:button {:on-click undo :disabled (not (count @undo-list))} "rückgängig"]
   [:button {:on-click new-game} "neues spiel"]
   [failures (:failures @app-state)]
   [show-score (:checked @app-state) (:failures @app-state)]
   ])

(defn init []
  (.log js/console (str (:fields @app-state)))
  (reagent/render-component [calling-component]
                            (.getElementById js/document "container")))
