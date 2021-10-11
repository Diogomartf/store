class ProductsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "products_channel"
  end
end
