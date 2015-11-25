(ns knotschixx.app
  (:require [reagent.core :as reagent :refer [atom]]))


(def pnums (vec (range 2 13)))

(def qnums (range 1 7))

(def colors ["red" "yellow" "green" "blue"])

(defonce app-state (atom {}))

(def undo-list (atom nil))



(defn some-component []
  [:div
   [:h3 "I am a component!"]
   [:p.someclass
    "I have " [:strong "bold"]
    [:span {:style {:color "red"}} " and red"]
    " text."]])

(defn crossable [color number]
  (let [numbers (get-in @app-state [:fields color])
        crossed (keys (filter val numbers))
        max-crossed (or (apply max crossed) 1)]
    (> number max-crossed)))

(defn numcell [col n]
  (let [crossable (crossable col (first n))
        classes {"num " true
                 "crossed " (second n)
                 "crossable " crossable}]
    [:span {:class (apply str (keys (filter val classes)))
          :on-click #(when crossable (swap! app-state assoc-in [:fields col (first n)] true))}
   (first n)]))

(defn row [color]
  (.info js/console (str color))
  [(keyword (str "div.row." (first color)))
   (map (partial numcell (first color)) (second color))])

(defn undo []
  (let [undos @undo-list]
    (when-let [old (first undos)]
      (reset! app-state old)
      (reset! undo-list (rest undos)))))

(defn sum [c]
  (reduce + c))

(defn calc-color-score [numbers]
  (sum (range 1 (inc (count (filter val numbers))))))

(defn calc-score [fields]
  (sum (map #(calc-color-score %) (vals fields))))

(defn show-score [fields]
  [:h1 (calc-score fields)])

(defn calling-component []

  (add-watch app-state ::undo-watcher
             (fn [_ _ old-state _]
               (swap! undo-list conj old-state)))

  [:div "Parent component"
   (map row (:fields @app-state))
   [show-score (:fields @app-state)]
   [:button {:on-click undo :disabled (not (count @undo-list))} "undo"]])

(defn init []
  (swap! app-state assoc :fields (zipmap colors (repeat (count pnums) (zipmap pnums (repeat false)))))
  (.log js/console (str (:fields @app-state)))
  (reagent/render-component [calling-component]
                            (.getElementById js/document "container")))
