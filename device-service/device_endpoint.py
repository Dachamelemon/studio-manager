import common_viewmodel_parser
import device_helper
import exceptions
import response_helper
import httpStatusCode

def getAllChannelsForDevice(deviceId):
  channels = common_viewmodel_parser.sparqlResultToJsonFormat(device_helper.getAllChannelsForDevice(deviceId))
  viewmodel = []

  for channel in channels:
    viewmodel.append({
      "position": channel.get("position"),
      "type": channel.get("type"),
      "direction": channel.get("direction"),
    })

  return response_helper.createJsonResponse(
      viewmodel=viewmodel
  ), httpStatusCode.HTTP_OK
