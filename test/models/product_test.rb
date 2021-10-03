require "test_helper"

class ProductTest < ActiveSupport::TestCase
  test "average rating when product has reviews" do
    product = products(:zero_to_one)

    assert product.average_rating == 4.0
  end

  test "average rating should be 0 when product has no reviews" do
    product = products(:how_to_live)

    assert product.average_rating == 0
  end
end
