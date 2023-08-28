import uuid
import helpers
import logging
from string import Template
import helpers

def getAllChannelsForDevice(deviceId):
  query_template = Template("""
 PREFIX s: <http://schema.org/>
PREFIX mu: <http://mu.semte.ch/vocabularies/core/> 
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

select ?position ?type ?direction
where {
?device mu:uuid '$deviceId' .
?device s:positiveNotes ?channels  .

?channels s:position ?position .

?channels s:nextItem ?channelinfo . 
?channelinfo s:itemListElement ?type .
?channelinfo s:additionalType ?direction .
}order by ?type ?position        
  """)
  query_string = query_template.substitute(deviceId=deviceId)

  return helpers.query(query_string)

