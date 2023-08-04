(in-package :mu-cl-resources)

(define-resource device()
  :class (s-prefix "schema:Product")
  :properties  `((:model :string ,(s-prefix "schema:model"))
                (:brand :string ,(s-prefix "schema:brand"))
                (:channeltype :string ,(s-prefix "schema:text"))
                (:channels :number ,(s-prefix "schema:size")))
  :has-one `((devicetype :via ,(s-prefix "schema:category")
                     :as "devicetypes"))       
  ; :has-one `((brand :via ,(s-prefix "schema:owns")
  ;                    :as "brand"))              
  :resource-base (s-url "http://mu.semte.ch/application/device-service/devices/")
:on-path "devices")

(define-resource devicetype()
  :class (s-prefix "schema:Thing")
  :properties  `((:type :string ,(s-prefix "schema:name")))
  :has-many `((device :via ,(s-prefix "schema:category")
                    :inverse t
                    :as "devices")) 
  ; :has-many `((brand :via ,(s-prefix "schema:brand")
  ;                    :inverse t
  ;                    :as "brands"))                                  
  :resource-base (s-url "http://mu.semte.ch/application/device-service/devicetypes/")
:on-path "devicetypes")


(define-resource brand()
  :class (s-prefix "schema:Organization")
  :properties  `((:brand :string ,(s-prefix "schema:name")))
  :has-many `((device :via ,(s-prefix "schema:owns")
                     :inverse t
                     :as "devices"))
  :has-many `((devicetype :via ,(s-prefix "schema:brand")
                     :inverse t
                     :as "devicetypes"))                                 
  :resource-base (s-url "http://mu.semte.ch/application/device-service/brands/")
:on-path "brands")




