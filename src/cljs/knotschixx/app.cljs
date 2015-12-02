(ns knotschixx.app
  (:require [reagent.core :as reagent :refer [atom]]))




#_(def pnums (vec (range 2 13)))

#_(def qnums (range 1 7))

#_(def colors ["red" "yellow" "green" "blue"])

(def cubesize 6)

(def nums (->> cubesize (* 2) (+ 1) (range 2)))

(defn nums->fields
  ([nums] (nums->fields nums false))
  ([nums reverse?]
    (conj (vec (if reverse? (reverse nums) nums)) "\u2764")))

(def fields
  "[[\"red\" [2 3 4 5 6 7 8 9 10 11 12 \"\u2764\"]]
    [\"yellow\" [2 3 4 5 6 7 8 9 10 11 12 \"\u2764\"]]
    [\"green\" [12 11 10 9 8 7 6 5 4 3 2 \"\u2764\"]
    [\"blue\" [12 11 10 9 8 7 6 5 4 3 2 \"\u2764\"]]"
  {:red (nums->fields nums)
   :yellow (nums->fields nums)
   :green (nums->fields nums true)
   :blue (nums->fields nums true)})

(def colors
  {:red {:reversed false}
   :yellow {:reversed false}
   :green {:reversed true}
   :blue {:reversed true}})

(defonce app-state (atom {:fields fields
                          :checked {:red #{}
                                    :yellow #{}
                                    :green #{}
                                    :blue #{}}}))

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
        max-checked (or
                     (->> @app-state
                          :checked
                          color
                          (apply (if reversed? min max)))
                    (if reversed? 999999 0))
        comperator-fn (if reversed? < >)]
    (comperator-fn number max-checked)))

(defn numcell [col n]
  (let [checkable? (checkable? col n)
        checked? (checked? col n)
        classes {"num " true
                 "crossed " checked?
                 "crossable " checkable?}]
    (.info js/console (str (name col)))
    [:span {:class (apply str (keys (filter val classes)))
            :key (str "numcell-" col "-" n)
          :on-click #(when checkable? (swap! app-state update-in [:checked col] conj n))}
   n]))

(defn row [color]
  (.info js/console (str (name (first color))))
  (.info js/console (str (second color)))
  [(keyword (str "div.row." (name (first color)))) {:key (str "row-" (first color))}
   (doall (map (partial numcell (first color)) (second color)))])

(defn undo []
  (let [undos @undo-list]
    (when-let [old (first undos)]
      (reset! app-state old)
      (reset! undo-list (rest undos)))))

(defn sum [c]
  (reduce + c))

(defn calc-color-score [numbers]
  (sum (range 1 (inc (count numbers)))))

(defn calc-score [checked-fields]
  (sum (map #(calc-color-score %) (vals checked-fields))))

(defn show-score [checked-fields]
  [:h1 (calc-score checked-fields)])

(defn calling-component []
  (add-watch app-state ::undo-watcher
             (fn [_ _ old-state _]
               (swap! undo-list conj old-state)))
  [:div "Parent component"
   (doall (map row (:fields @app-state)))
   [show-score (:checked @app-state)]
   [:button {:on-click undo :disabled (not (count @undo-list))} "undo"]])

(defn init []
  (.log js/console (str (:fields @app-state)))
  (reagent/render-component [calling-component]
                            (.getElementById js/document "container")))
