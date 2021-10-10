class Review < ApplicationRecord
  belongs_to :product

  validates :rating, presence: true, numericality: {
    greater_than_or_equal_to: 0, less_than_or_equal_to: 5
  }
  validates :comment, length: {minimum: 2}
end
