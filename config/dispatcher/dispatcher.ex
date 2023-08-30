defmodule Dispatcher do
  use Matcher
  define_accept_types [
    html: [ "text/html", "application/xhtml+html" ],
    json: [ "application/json", "application/vnd.api+json" ]
  ]

  @json %{ accept: %{ json: true } }


  # In order to forward the 'themes' resource to the
  # resource service, use the following forward rule:
  #
  # match "/themes/*path", @json do
  #   Proxy.forward conn, path, "http://resource/themes/"
  # end
  #
  # Run `docker-compose restart dispatcher` after updating
  # this file.

  match "/devices/*path", @json do 
    Proxy.forward conn, path, "http://resource/devices/"
  end  
  match "/device-types/*path", @json do 
    Proxy.forward conn, path, "http://resource/device-types/"
  end  
  match "/channel-types/*path", @json do 
    Proxy.forward conn, path, "http://resource/channel-types/"
  end  
  match "/channels/*path", @json do 
    Proxy.forward conn, path, "http://resource/channels/"
  end  
  match "/device/*path" do 
    Proxy.forward conn, path, "http://device-service/device/"
  end  

  match "/*_", %{ last_call: true } do
    send_resp( conn, 404, "Route not found.  See config/dispatcher.ex" )
  end
end
