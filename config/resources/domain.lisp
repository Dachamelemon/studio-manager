(in-package :mu-cl-resources)

(define-resource device()
  :class (s-prefix "schema:Product")
  :properties  `((:model :string ,(s-prefix "schema:model"))
                (:brand :string ,(s-prefix "schema:brand")))
                ;(:channeltype :string ,(s-prefix "schema:text"))
                ;(:channels :number ,(s-prefix "schema:size")))
  :has-one `((device-type :via ,(s-prefix "schema:category")
                     :as "device-type"))       
  :has-many `((channel :via ,(s-prefix "schema:positiveNotes")
                     :as "channels"))              
  :resource-base (s-url "http://mu.semte.ch/application/device-service/devices/")
:on-path "devices")

(define-resource device-type()
  :class (s-prefix "schema:Thing")
  :properties  `((:type :string ,(s-prefix "schema:name")))
  :has-many `((device :via ,(s-prefix "schema:category")
                    :inverse t
                    :as "devices"))                                 
  :resource-base (s-url "http://mu.semte.ch/application/device-service/devicetypes/")
:on-path "device-types")

(define-resource channel-type()
  :class (s-prefix "schema:ItemList")
  :properties  `((:audioType :string ,(s-prefix "schema:itemListElement"))
                (:channelType :string ,(s-prefix "schema:itemListOrder")) 
                (:channelDirection :string ,(s-prefix "schema:additionalType")))                              
  :resource-base (s-url "http://mu.semte.ch/application/device-service/channelstypes/")
:on-path "channel-types")

(define-resource channel()
  :class (s-prefix "schema:ListItem")
  :properties   `((:channelPosition :number ,(s-prefix "schema:position")))
  :has-one `((device :via ,(s-prefix "schema:positiveNotes")
                     :inverse t
                     :as "device")
             (channel :via ,(s-prefix "schema:previousItem")
                      :as "connected-device")
             (channel-type :via ,(s-prefix "schema:nextItem")
                      :as "channel"))              
  :resource-base (s-url "http://mu.semte.ch/application/device-service/channels/")
:on-path "channels")


; (define-resource brand()
;   :class (s-prefix "schema:Organization")
;   :properties  `((:brand :string ,(s-prefix "schema:name")))
;   :has-many `((device :via ,(s-prefix "schema:owns")
;                      :inverse t
;                      :as "devices"))
;   :has-many `((devicetype :via ,(s-prefix "schema:brand")
;                      :inverse t
;                      :as "devicetypes"))                                 
;   :resource-base (s-url "http://mu.semte.ch/application/device-service/brands/")
; :on-path "brands")




