class Product < ApplicationRecord
  has_many :reviews

  def average_rating
    return 0 if reviews.empty?
    reviews.sum(:rating) / reviews.size.to_f
  end
end
