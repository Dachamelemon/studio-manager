import device_endpoint
import channel_endpoint
from flask import request


@app.route("/device/<deviceId>/allchannels", methods = ['GET'])
def getAllChannelsForDevice(deviceId):
  return device_endpoint.getAllChannelsForDevice(deviceId)