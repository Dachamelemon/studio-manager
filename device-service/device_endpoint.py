import common_viewmodel_parser
import device_helper
import exceptions
import response_helper
import httpStatusCode
import logging

def getAllChannelsForDevice(deviceId):
  channels = common_viewmodel_parser.sparqlResultToJsonFormat(device_helper.getAllChannelsForDevice(deviceId))
  viewmodel = []

  print(channels)  
  
  for channel in channels:
    viewmodel.append({
      "position": channel.get("position"),
      "type": channel.get("type"),
      "direction": channel.get("direction"),
    })
    
  viewmodel = response_helper.createJsonResponse(
      viewmodel=viewmodel
  ), httpStatusCode.HTTP_OK
  print(viewmodel)
  return viewmodel
